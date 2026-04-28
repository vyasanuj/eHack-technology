/**
 * Zoho Bigin CRM Integration for eHack Global Technology
 * 
 * This module handles all interactions with Zoho Bigin CRM API
 * including authentication, token management, and record creation.
 * 
 * Pipeline: Global Technology Sales
 */

interface ZohoTokenResponse {
    access_token: string;
    expires_in: number;
    api_domain: string;
    token_type: string;
}

interface ZohoContact {
    First_Name?: string;
    Last_Name?: string;
    Full_Name?: string;
    Email?: string;
    Phone?: string;
    Mobile?: string;
    City?: string;
    Description?: string;
    Lead_Source?: string;
    [key: string]: any;
}

interface ZohoDeal {
    Deal_Name: string;
    Amount?: number;
    Stage: string;
    Pipeline: string;
    Contact_Name?: string;
    Description?: string;
    Closing_Date?: string;
    [key: string]: any;
}

interface ZohoApiResponse {
    data: Array<{
        code: string;
        details: {
            id: string;
        };
        message: string;
        status: string;
    }>;
}

// --- Cache for access token ---
let cachedToken: { token: string; expiresAt: number } | null = null;

/**
 * Get a fresh access token using the refresh token (with caching)
 */
async function getAccessToken(): Promise<string> {
    // Return cached token if still valid (with 60s buffer)
    if (cachedToken && Date.now() < cachedToken.expiresAt - 60000) {
        return cachedToken.token;
    }

    const clientId = process.env.ZOHO_CLIENT_ID;
    const clientSecret = process.env.ZOHO_CLIENT_SECRET;
    const refreshToken = process.env.ZOHO_REFRESH_TOKEN;
    const accountsUrl = process.env.ZOHO_ACCOUNTS_URL || 'https://accounts.zoho.in';

    if (!clientId || !clientSecret || !refreshToken) {
        throw new Error('Zoho credentials are not configured. Check ZOHO_CLIENT_ID, ZOHO_CLIENT_SECRET, ZOHO_REFRESH_TOKEN in .env');
    }

    const tokenUrl = `${accountsUrl}/oauth/v2/token?refresh_token=${refreshToken}&client_id=${clientId}&client_secret=${clientSecret}&grant_type=refresh_token`;

    try {
        const response = await fetch(tokenUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Failed to get access token: ${response.status} - ${errorText}`);
        }

        const data: ZohoTokenResponse = await response.json();

        // Cache the token
        cachedToken = {
            token: data.access_token,
            expiresAt: Date.now() + (data.expires_in * 1000),
        };

        return data.access_token;
    } catch (error) {
        console.error('Error getting Zoho access token:', error);
        throw error;
    }
}

/**
 * Discover all available pipelines, their layouts, and stages
 * Use this to find the correct Layout ID and Sub_Pipeline for your target pipeline
 */
export async function discoverPipelines(): Promise<any> {
    const accessToken = await getAccessToken();
    const apiUrl = process.env.ZOHO_BIGIN_API || 'https://www.zohoapis.in/bigin/v2';

    try {
        // 1. Get pipeline settings
        const pipelineRes = await fetch(`${apiUrl}/settings/pipelines`, {
            headers: { 'Authorization': `Zoho-oauthtoken ${accessToken}` },
        });
        const pipelines = pipelineRes.ok ? await pipelineRes.json() : { error: await pipelineRes.text() };

        // 2. Get layouts
        const layoutRes = await fetch(`${apiUrl}/settings/layouts?module=Pipelines`, {
            headers: { 'Authorization': `Zoho-oauthtoken ${accessToken}` },
        });
        const layouts = layoutRes.ok ? await layoutRes.json() : { error: await layoutRes.text() };

        return {
            pipelines,
            layouts,
            hint: 'Use the layout "id" as Layout.id and pipeline "actual_value" as Sub_Pipeline when creating deals.',
        };
    } catch (error) {
        console.error('Error discovering pipelines:', error);
        throw error;
    }
}

/**
 * Create a contact in Zoho Bigin
 */
export async function createZohoContact(contactData: ZohoContact): Promise<string> {
    const accessToken = await getAccessToken();
    const apiUrl = process.env.ZOHO_BIGIN_API || 'https://www.zohoapis.in/bigin/v2';

    const formattedData = {
        data: [
            {
                ...contactData,
                Last_Name: contactData.Last_Name || contactData.Full_Name || 'Unknown',
            }
        ]
    };

    try {
        const response = await fetch(`${apiUrl}/Contacts`, {
            method: 'POST',
            headers: {
                'Authorization': `Zoho-oauthtoken ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formattedData),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Failed to create contact: ${response.status} - ${errorText}`);
        }

        const result: ZohoApiResponse = await response.json();

        if (result.data && result.data[0] && result.data[0].code === 'SUCCESS') {
            return result.data[0].details.id;
        } else {
            throw new Error(`Failed to create contact: ${result.data[0]?.message || 'Unknown error'}`);
        }
    } catch (error) {
        console.error('Error creating Zoho contact:', error);
        throw error;
    }
}

/**
 * Search for existing contact by email
 */
export async function searchContactByEmail(email: string): Promise<any | null> {
    const accessToken = await getAccessToken();
    const apiUrl = process.env.ZOHO_BIGIN_API || 'https://www.zohoapis.in/bigin/v2';

    try {
        const response = await fetch(
            `${apiUrl}/Contacts/search?email=${encodeURIComponent(email)}`,
            {
                method: 'GET',
                headers: {
                    'Authorization': `Zoho-oauthtoken ${accessToken}`,
                },
            }
        );

        if (!response.ok) {
            if (response.status === 204) {
                return null;
            }
            const errorText = await response.text();
            throw new Error(`Failed to search contact: ${response.status} - ${errorText}`);
        }

        const result = await response.json();
        return result.data && result.data.length > 0 ? result.data[0] : null;
    } catch (error) {
        console.error('Error searching Zoho contact:', error);
        return null;
    }
}

/**
 * Create or update a contact (upsert)
 */
export async function upsertZohoContact(contactData: ZohoContact): Promise<string> {
    if (contactData.Email) {
        const existingContact = await searchContactByEmail(contactData.Email);
        if (existingContact) {
            return existingContact.id;
        }
    }
    return await createZohoContact(contactData);
}

/**
 * Create a deal/pipeline entry in Zoho Bigin
 * 
 * For the "Global Technology Sales" pipeline, this uses:
 * - Layout ID from ZOHO_GT_LAYOUT_ID env var (or auto-discovered)
 * - Sub_Pipeline from ZOHO_GT_SUB_PIPELINE env var (or auto-discovered)
 */
export async function createZohoDeal(dealData: ZohoDeal): Promise<string> {
    const accessToken = await getAccessToken();
    const apiUrl = process.env.ZOHO_BIGIN_API || 'https://www.zohoapis.in/bigin/v2';
    const moduleName = process.env.ZOHO_PIPELINES_MODULE || 'Pipelines';

    // Build the deal payload
    const biginData: any = {};

    // Required: Deal_Name
    if (dealData.Deal_Name) {
        biginData.Deal_Name = dealData.Deal_Name;
    }

    // -------------------------------------------------------------------------
    // Verified live Zoho org data (tested 2026-04-28):
    //
    //   Pipeline name           | Layout ID           | Sub_Pipeline (display)      | Stage
    //   ------------------------|---------------------|-----------------------------|-----------
    //   "Global Technology Sales"| 1182543000000498517 | corporate services Pipeline | New Inquiry
    //   "Global Services Leads" | 1182543000000498517 | corporate services Pipeline | New Inquiry
    //   "Leads Pipeline Standard"| 1182543000000442086 | Leads Pipeline Standard    | New Inquiry
    //   "eHack Academy Leads"   | 1182543000000442086 | Leads Pipeline Standard    | New Inquiry
    //
    // KEY RULES (verified via live API tests):
    //   - Use `Layout: { id, name }` — NOT `Pipeline: { id }`
    //   - Sub_Pipeline: use the DISPLAY VALUE (e.g. "corporate services Pipeline")
    //     NOT the actual_value (e.g. "Sales Pipeline Standard1")
    //   - Stage: use the DISPLAY VALUE (e.g. "New Inquiry") NOT actual_value ("New Enquiry")
    // -------------------------------------------------------------------------
    const pipelineConfig: { [key: string]: { layoutId: string; layoutName: string; subPipeline: string; defaultStage: string } } = {
        'Global Technology Sales': {
            layoutId:     process.env.ZOHO_GT_LAYOUT_ID || '1182543000000498517',
            layoutName:   'Global Services Leads',
            subPipeline:  process.env.ZOHO_GT_SUB_PIPELINE || 'corporate services Pipeline',
            defaultStage: 'New Inquiry',
        },
        'Global Services Leads': {
            layoutId: '1182543000000498517', layoutName: 'Global Services Leads',
            subPipeline: 'corporate services Pipeline', defaultStage: 'New Inquiry',
        },
        'Global services Leads': {
            layoutId: '1182543000000498517', layoutName: 'Global Services Leads',
            subPipeline: 'corporate services Pipeline', defaultStage: 'New Inquiry',
        },
        'Leads Pipeline Standard': {
            layoutId: '1182543000000442086', layoutName: 'eHack Academy Leads',
            subPipeline: 'Leads Pipeline Standard', defaultStage: 'New Inquiry',
        },
        'Leads Pipeline': {
            layoutId: '1182543000000442086', layoutName: 'eHack Academy Leads',
            subPipeline: 'Leads Pipeline Standard', defaultStage: 'New Inquiry',
        },
        'eHack Academy Leads': {
            layoutId: '1182543000000442086', layoutName: 'eHack Academy Leads',
            subPipeline: 'Leads Pipeline Standard', defaultStage: 'New Inquiry',
        },
        'Sales Pipeline': {
            layoutId: '1182543000000000173', layoutName: 'Sales Pipeline',
            subPipeline: 'Admission Pipeline', defaultStage: 'New Inquiry',
        },
    };

    const config = pipelineConfig[dealData.Pipeline] || pipelineConfig['Global Technology Sales'];
    // Verified: use Layout field (not Pipeline field) with id + name
    biginData.Layout      = { id: config.layoutId, name: config.layoutName };
    biginData.Sub_Pipeline = config.subPipeline;
    biginData.Stage        = dealData.Stage || config.defaultStage;

    // Closing Date
    if (dealData.Closing_Date) {
        biginData.Closing_Date = dealData.Closing_Date;
    }

    // Description
    if (dealData.Description) {
        biginData.Description = dealData.Description;
    }

    // Contact link (pass as string ID — Bigin accepts this)
    if (dealData.Contact_Name) {
        biginData.Contact_Name = dealData.Contact_Name;
    }

    // Lead Source
    if (dealData.Lead_Source) {
        biginData.Lead_Source = dealData.Lead_Source;
    }

    const formattedData = {
        data: [biginData]
    };

    console.log(`Creating Bigin record in ${moduleName}:`, JSON.stringify(formattedData, null, 2));

    try {
        const response = await fetch(`${apiUrl}/${moduleName}`, {
            method: 'POST',
            headers: {
                'Authorization': `Zoho-oauthtoken ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formattedData),
        });

        const responseText = await response.text();
        console.log('Zoho API Response:', response.status, responseText);

        if (!response.ok) {
            throw new Error(`Failed to create deal: ${response.status} - ${responseText}`);
        }

        const result: ZohoApiResponse = JSON.parse(responseText);

        if (result.data && result.data[0] && result.data[0].code === 'SUCCESS') {
            console.log('Successfully created record with ID:', result.data[0].details.id);
            return result.data[0].details.id;
        } else {
            throw new Error(`Failed to create deal: ${result.data[0]?.message || 'Unknown error'}`);
        }
    } catch (error) {
        console.error('Error creating Zoho deal:', error);
        throw error;
    }
}

