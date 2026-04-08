import { NextRequest, NextResponse } from 'next/server';
import { getZohoPipelines } from '@/lib/zoho-bigin';

/**
 * Debug endpoint to fetch and display all available pipelines from Zoho Bigin.
 * Use this to verify the correct layout IDs and sub-pipeline names.
 * 
 * GET /api/zoho/debug-pipelines
 */
export async function GET(request: NextRequest) {
    try {
        const pipelines = await getZohoPipelines();

        return NextResponse.json({
            success: true,
            count: pipelines.length,
            pipelines: pipelines.map((p: any) => ({
                display_value: p.display_value,
                actual_value: p.actual_value,
                id: p.id,
                maps: p.maps?.map((m: any) => ({
                    display_value: m.display_value,
                    actual_value: m.actual_value,
                    id: m.id,
                    layout: m.layout,
                })),
            })),
        });
    } catch (error) {
        return NextResponse.json(
            {
                error: 'Failed to fetch pipelines',
                details: error instanceof Error ? error.message : 'Unknown error',
            },
            { status: 500 }
        );
    }
}
