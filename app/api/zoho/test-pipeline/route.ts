import { NextResponse } from 'next/server';

/**
 * GET /api/zoho/test-pipeline
 * 
 * Tests ALL possible Layout + Sub_Pipeline combinations to find which one
 * the Zoho Bigin API actually accepts. Dev-only.
 */
export async function GET() {
    if (process.env.NODE_ENV === 'production') {
        return NextResponse.json({ error: 'Dev only' }, { status: 403 });
    }

    const clientId = process.env.ZOHO_CLIENT_ID;
    const clientSecret = process.env.ZOHO_CLIENT_SECRET;
    const refreshToken = process.env.ZOHO_REFRESH_TOKEN;
    const accountsUrl = process.env.ZOHO_ACCOUNTS_URL || 'https://accounts.zoho.in';
    const apiUrl = process.env.ZOHO_BIGIN_API || 'https://www.zohoapis.in/bigin/v2';

    // Get access token
    const tokenRes = await fetch(
        `${accountsUrl}/oauth/v2/token?refresh_token=${refreshToken}&client_id=${clientId}&client_secret=${clientSecret}&grant_type=refresh_token`,
        { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );
    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;

    const closingDate = new Date();
    closingDate.setDate(closingDate.getDate() + 30);
    const closingDateStr = closingDate.toISOString().split('T')[0];

    // All possible combinations to try for "Global Services Leads" layout
    const combinations = [
        // Combination 1: Layout ID + Sub_Pipeline actual_value (what we tried)
        {
            label: 'Layout 498517 + Sub_Pipeline "Sales Pipeline Standard1"',
            payload: {
                Deal_Name: 'API Test - Combo 1',
                Stage: 'New Enquiry',
                Layout: { id: '1182543000000498517' },
                Sub_Pipeline: 'Sales Pipeline Standard1',
                Closing_Date: closingDateStr,
            }
        },
        // Combination 2: Layout ID + Sub_Pipeline display_value
        {
            label: 'Layout 498517 + Sub_Pipeline "corporate services Pipeline"',
            payload: {
                Deal_Name: 'API Test - Combo 2',
                Stage: 'New Enquiry',
                Layout: { id: '1182543000000498517' },
                Sub_Pipeline: 'corporate services Pipeline',
                Closing_Date: closingDateStr,
            }
        },
        // Combination 3: Layout ID + Pipeline field with sub-pipeline ID
        {
            label: 'Layout 498517 + Pipeline {id: 498997}',
            payload: {
                Deal_Name: 'API Test - Combo 3',
                Stage: 'New Enquiry',
                Layout: { id: '1182543000000498517' },
                Pipeline: { id: '1182543000000498997' },
                Closing_Date: closingDateStr,
            }
        },
        // Combination 4: No Layout, just Sub_Pipeline actual_value
        {
            label: 'No Layout + Sub_Pipeline "Sales Pipeline Standard1"',
            payload: {
                Deal_Name: 'API Test - Combo 4',
                Stage: 'New Enquiry',
                Sub_Pipeline: 'Sales Pipeline Standard1',
                Closing_Date: closingDateStr,
            }
        },
        // Combination 5: No Layout, just Sub_Pipeline display_value
        {
            label: 'No Layout + Sub_Pipeline "corporate services Pipeline"',
            payload: {
                Deal_Name: 'API Test - Combo 5',
                Stage: 'New Enquiry',
                Sub_Pipeline: 'corporate services Pipeline',
                Closing_Date: closingDateStr,
            }
        },
        // Combination 6: Layout ID + Pipeline string (not object)
        {
            label: 'Layout 498517 + Pipeline "Sales Pipeline Standard1"',
            payload: {
                Deal_Name: 'API Test - Combo 6',
                Stage: 'New Enquiry',
                Layout: { id: '1182543000000498517' },
                Pipeline: 'Sales Pipeline Standard1',
                Closing_Date: closingDateStr,
            }
        },
        // Combination 7: Layout name instead of ID
        {
            label: 'Layout name "Global Services Leads" + Sub_Pipeline',
            payload: {
                Deal_Name: 'API Test - Combo 7',
                Stage: 'New Enquiry',
                Layout: { name: 'Global Services Leads' },
                Sub_Pipeline: 'Sales Pipeline Standard1',
                Closing_Date: closingDateStr,
            }
        },
        // Combination 8: Layout name + display_value Sub_Pipeline
        {
            label: 'Layout name "Global Services Leads" + Sub_Pipeline display_value',
            payload: {
                Deal_Name: 'API Test - Combo 8',
                Stage: 'New Enquiry',
                Layout: { name: 'Global Services Leads' },
                Sub_Pipeline: 'corporate services Pipeline',
                Closing_Date: closingDateStr,
            }
        },
    ];

    const results: any[] = [];

    for (const combo of combinations) {
        try {
            const res = await fetch(`${apiUrl}/Pipelines`, {
                method: 'POST',
                headers: {
                    'Authorization': `Zoho-oauthtoken ${accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data: [combo.payload] }),
            });

            const text = await res.text();
            let parsed;
            try { parsed = JSON.parse(text); } catch { parsed = text; }

            results.push({
                label: combo.label,
                status: res.status,
                success: res.ok && parsed?.data?.[0]?.code === 'SUCCESS',
                dealId: parsed?.data?.[0]?.details?.id || null,
                response: parsed,
            });

            // If success, we found the right combo! Log it clearly.
            if (res.ok && parsed?.data?.[0]?.code === 'SUCCESS') {
                console.log(`✅ WORKING COMBINATION: ${combo.label}`);
                console.log(`   Payload: ${JSON.stringify(combo.payload, null, 2)}`);
            }
        } catch (err: any) {
            results.push({
                label: combo.label,
                status: 'error',
                success: false,
                error: err.message,
            });
        }
    }

    const working = results.filter(r => r.success);

    return NextResponse.json({
        summary: {
            total: results.length,
            successful: working.length,
            workingCombinations: working.map(w => w.label),
        },
        results,
    });
}
