/**
 * Zoho Bigin CRM Integration for eHack Technology (Corporate Services)
 * 
 * This module handles all interactions with Zoho Bigin CRM API
 * including authentication, token management, and record creation.
 * 
 * Target Pipeline: Corporate Services Pipeline → New Inquiry stage
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

/**
 * Get a fresh access token using the refresh token
 */
async function getAccessToken(): Promise<string> {
    const clientId = process.env.ZOHO_CLIENT_ID;
    const clientSecret = process.env.ZOHO_CLIENT_SECRET;
    const refreshToken = process.env.ZOHO_REFRESH_TOKEN;
    const accountsUrl = process.env.ZOHO_ACCOUNTS_URL || 'https://accounts.zoho.in';

    if (!clientId || !clientSecret || !refreshToken) {
        throw new Error('Zoho credentials are not configured properly');
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
        return data.access_token;
    } catch (error) {
        console.error('Error getting Zoho access token:', error);
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
 * Create a deal/pipeline entry in Zoho Bigin
 * In Zoho Bigin API v2, the Deals module is called "Pipelines"
 */
export async function createZohoDeal(dealData: ZohoDeal): Promise<string> {
    const accessToken = await getAccessToken();
    const apiUrl = process.env.ZOHO_BIGIN_API || 'https://www.zohoapis.in/bigin/v2';

    const moduleName = process.env.ZOHO_PIPELINES_MODULE || 'Pipelines';

    const biginData: any = {};

    if (dealData.Deal_Name) {
        biginData.Deal_Name = dealData.Deal_Name;
    }

    if (dealData.Stage) {
        biginData.Stage = dealData.Stage;
    }

    // Map pipeline names to Layout IDs and Sub_Pipeline values
    // IMPORTANT: Sub_Pipeline must be the exact actual_value from Zoho Bigin settings/pipelines.
    // To find correct values, call: GET /api/zoho/debug-layouts
    //
    // Verified layouts:
    //   - Layout "eHack Academy Leads" (ID: 1182543000000442086)
    //       Sub_Pipeline actual_value: "Leads Pipeline Standard"
    //   - Layout "Global Services Leads" (ID: 1182543000000498517)
    //       Sub_Pipeline actual_value: set via ZOHO_CORPORATE_SUB_PIPELINE env or falls back to "Sales Pipeline Standard1"
    //       Stage "New Inquiry" → actual_value: "New Enquiry"
    //   - Layout "Sales Pipeline" (ID: 1182543000000000173)
    //       Sub_Pipeline actual_value: "Sales Pipeline Standard"
    //
    // If you get MAPPING_MISMATCH on Sub_Pipeline, check /api/zoho/debug-layouts for the correct actual_value
    // and set it in ZOHO_CORPORATE_SUB_PIPELINE environment variable.
    const corporateSubPipeline = process.env.ZOHO_CORPORATE_SUB_PIPELINE || 'Sales Pipeline Standard1';
    const corporateLayoutId = process.env.ZOHO_CORPORATE_LAYOUT_ID || '1182543000000498517';

    if (dealData.Pipeline) {
        const pipelineConfig: { [key: string]: { layoutId: string; subPipeline: string; stageMap?: { [key: string]: string } } } = {
            'Leads Pipeline Standard': {
                layoutId: '1182543000000442086',
                subPipeline: 'Leads Pipeline Standard',
                stageMap: { 'New Inquiry': 'New Enquiry', 'New inquiry': 'New Enquiry' }
            },
            'Leads Pipeline': {
                layoutId: '1182543000000442086',
                subPipeline: 'Leads Pipeline Standard',
                stageMap: { 'New Inquiry': 'New Enquiry', 'New inquiry': 'New Enquiry' }
            },
            'Sales Pipeline Standard': {
                layoutId: '1182543000000000173',
                subPipeline: 'Sales Pipeline Standard'
            },
            'Sales Pipeline': {
                layoutId: '1182543000000000173',
                subPipeline: 'Sales Pipeline Standard'
            },
            // Corporate Services Pipeline — used by eHack Technology website
            // Layout: "Global Services Leads" (corporateLayoutId)
            // Sub_Pipeline actual_value: corporateSubPipeline (configure via env var)
            'Corporate Services Pipeline': {
                layoutId: corporateLayoutId,
                subPipeline: corporateSubPipeline,
                stageMap: { 'New Inquiry': 'New Enquiry', 'New inquiry': 'New Enquiry' }
            },
            'Corporate Services': {
                layoutId: corporateLayoutId,
                subPipeline: corporateSubPipeline,
                stageMap: { 'New Inquiry': 'New Enquiry', 'New inquiry': 'New Enquiry' }
            },
            'corporate services Pipeline': {
                layoutId: corporateLayoutId,
                subPipeline: corporateSubPipeline,
                stageMap: { 'New Inquiry': 'New Enquiry', 'New inquiry': 'New Enquiry' }
            },
        };

        // If pipeline not in static config, try to find it dynamically
        if (!pipelineConfig[dealData.Pipeline]) {
            try {
                const pipelines = await getZohoPipelines();
                const matchedPipeline = pipelines.find((p: any) =>
                    p.display_value === dealData.Pipeline ||
                    p.actual_value === dealData.Pipeline ||
                    (p.maps && p.maps.some((m: any) => m.display_value === dealData.Pipeline))
                );

                if (matchedPipeline) {
                    console.log(`Found dynamic match for pipeline: ${dealData.Pipeline}`, matchedPipeline);
                    pipelineConfig[dealData.Pipeline] = {
                        layoutId: matchedPipeline.maps?.[0]?.layout?.id || matchedPipeline.id,
                        subPipeline: matchedPipeline.actual_value || matchedPipeline.display_value
                    };
                }
            } catch (e) {
                console.warn(`Could not dynamically resolve pipeline: ${dealData.Pipeline}`);
            }
        }

        const config = pipelineConfig[dealData.Pipeline];
        if (config) {
            // NOTE: Do NOT send Layout field — Zoho Bigin v2 resolves the Layout
            // automatically from the Sub_Pipeline actual_value.
            // Sending Layout explicitly causes MAPPING_MISMATCH errors.
            biginData.Sub_Pipeline = config.subPipeline;
            // Map stage display values to actual_values where needed
            if (config.stageMap && biginData.Stage && config.stageMap[biginData.Stage]) {
                console.log(`Mapping stage '${biginData.Stage}' → '${config.stageMap[biginData.Stage]}'`);
                biginData.Stage = config.stageMap[biginData.Stage];
            }
            console.log(`Pipeline resolved: Layout omitted, Sub_Pipeline='${biginData.Sub_Pipeline}', Stage='${biginData.Stage}'`);
        } else {
            console.warn(`Pipeline '${dealData.Pipeline}' not found in static config.`);
        }
    }

    if (dealData.Closing_Date) {
        biginData.Closing_Date = dealData.Closing_Date;
    }

    if (dealData.Description) {
        biginData.Description = dealData.Description;
    }

    if (dealData.Contact_Name) {
        // Contact_Name is a lookup field — must be sent as { id: "..." } object
        biginData.Contact_Name = { id: dealData.Contact_Name };
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

/**
 * Create a note on a Zoho Bigin record
 */
export async function createZohoNote(
    parentId: string,
    noteTitle: string,
    noteContent: string,
    parentModule: string = 'Pipelines'
): Promise<string> {
    const accessToken = await getAccessToken();
    const apiUrl = process.env.ZOHO_BIGIN_API || 'https://www.zohoapis.in/bigin/v2';

    const formattedData = {
        data: [
            {
                Note_Title: noteTitle,
                Note_Content: noteContent,
                Parent_Id: parentId,
                se_module: parentModule,
            }
        ]
    };

    console.log(`Creating Bigin Note on ${parentModule}/${parentId}:`, JSON.stringify(formattedData, null, 2));

    try {
        const response = await fetch(`${apiUrl}/Notes`, {
            method: 'POST',
            headers: {
                'Authorization': `Zoho-oauthtoken ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formattedData),
        });

        const responseText = await response.text();
        console.log('Zoho Note API Response:', response.status, responseText);

        if (!response.ok) {
            throw new Error(`Failed to create note: ${response.status} - ${responseText}`);
        }

        const result: ZohoApiResponse = JSON.parse(responseText);

        if (result.data && result.data[0] && result.data[0].code === 'SUCCESS') {
            console.log('Successfully created note with ID:', result.data[0].details.id);
            return result.data[0].details.id;
        } else {
            throw new Error(`Failed to create note: ${result.data[0]?.message || 'Unknown error'}`);
        }
    } catch (error) {
        console.error('Error creating Zoho note:', error);
        throw error;
    }
}

/**
 * Get available pipelines from Zoho Bigin
 */
export async function getZohoPipelines(): Promise<any[]> {
    const accessToken = await getAccessToken();
    const apiUrl = process.env.ZOHO_BIGIN_API || 'https://www.zohoapis.in/bigin/v2';

    try {
        const response = await fetch(`${apiUrl}/settings/pipelines`, {
            method: 'GET',
            headers: {
                'Authorization': `Zoho-oauthtoken ${accessToken}`,
            },
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Failed to get pipelines: ${response.status} - ${errorText}`);
        }

        const result = await response.json();
        return result.pipelines || [];
    } catch (error) {
        console.error('Error getting Zoho pipelines:', error);
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
 * Update an existing contact
 */
export async function updateZohoContact(contactId: string, contactData: Partial<ZohoContact>): Promise<boolean> {
    const accessToken = await getAccessToken();
    const apiUrl = process.env.ZOHO_BIGIN_API || 'https://www.zohoapis.in/bigin/v2';

    const formattedData = {
        data: [
            {
                id: contactId,
                ...contactData,
            }
        ]
    };

    try {
        const response = await fetch(`${apiUrl}/Contacts`, {
            method: 'PUT',
            headers: {
                'Authorization': `Zoho-oauthtoken ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formattedData),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Failed to update contact: ${response.status} - ${errorText}`);
        }

        const result: ZohoApiResponse = await response.json();
        return result.data && result.data[0] && result.data[0].code === 'SUCCESS';
    } catch (error) {
        console.error('Error updating Zoho contact:', error);
        throw error;
    }
}

/**
 * Helper function to create or update a contact
 */
export async function upsertZohoContact(contactData: ZohoContact): Promise<string> {
    if (contactData.Email) {
        const existingContact = await searchContactByEmail(contactData.Email);

        if (existingContact) {
            await updateZohoContact(existingContact.id, contactData);
            return existingContact.id;
        }
    }

    return await createZohoContact(contactData);
}
