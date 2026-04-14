import { NextRequest, NextResponse } from 'next/server';

/**
 * Debug endpoint: Fetch ALL layouts for the Pipelines module from Zoho Bigin,
 * then fetch pipeline details per layout.
 *
 * GET /api/zoho/debug-layouts
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

    const response = await fetch(tokenUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Token error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    return data.access_token;
}

export async function GET(request: NextRequest) {
    try {
        const accessToken = await getAccessToken();
        const apiUrl = process.env.ZOHO_BIGIN_API || 'https://www.zohoapis.in/bigin/v2';
        const moduleName = process.env.ZOHO_PIPELINES_MODULE || 'Pipelines';

        // Step 1: Fetch all layouts for the Pipelines module
        const layoutsResponse = await fetch(
            `${apiUrl}/settings/layouts?module=${moduleName}`,
            {
                method: 'GET',
                headers: { 'Authorization': `Zoho-oauthtoken ${accessToken}` },
            }
        );

        const layoutsText = await layoutsResponse.text();
        let layoutsData: any;
        try {
            layoutsData = JSON.parse(layoutsText);
        } catch {
            layoutsData = { raw: layoutsText };
        }

        // Step 2: For each layout, fetch pipeline details
        const layoutDetails: any[] = [];
        if (layoutsData.layouts) {
            for (const layout of layoutsData.layouts) {
                const pipelineResp = await fetch(
                    `${apiUrl}/settings/pipelines?layout_id=${layout.id}`,
                    {
                        method: 'GET',
                        headers: { 'Authorization': `Zoho-oauthtoken ${accessToken}` },
                    }
                );

                const pipelineText = await pipelineResp.text();
                let pipelineData: any;
                try {
                    pipelineData = JSON.parse(pipelineText);
                } catch {
                    pipelineData = { raw: pipelineText };
                }

                layoutDetails.push({
                    layout_id: layout.id,
                    layout_name: layout.name,
                    layout_status: layout.status,
                    pipelines: pipelineData.pipelines || pipelineData,
                });
            }
        }

        return NextResponse.json({
            success: true,
            layouts_raw: layoutsData,
            layout_pipeline_details: layoutDetails,
        });
    } catch (error) {
        return NextResponse.json(
            {
                error: 'Failed to fetch layouts',
                details: error instanceof Error ? error.message : 'Unknown error',
            },
            { status: 500 }
        );
    }
}
