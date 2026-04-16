import { NextResponse } from 'next/server';
import { discoverPipelines } from '@/lib/zoho-bigin';

/**
 * GET /api/zoho/discover-pipelines
 * 
 * Discovery endpoint to find pipeline Layout IDs and Sub_Pipeline values.
 * Use this once to get the correct values, then set them in .env:
 *   ZOHO_GT_LAYOUT_ID=<layout_id>
 *   ZOHO_GT_SUB_PIPELINE=<sub_pipeline_actual_value>
 * 
 * Only accessible in development mode.
 */
export async function GET() {
    // Safety: Only allow in development
    if (process.env.NODE_ENV === 'production') {
        return NextResponse.json(
            { error: 'This endpoint is only available in development mode.' },
            { status: 403 }
        );
    }

    try {
        const result = await discoverPipelines();

        // Format a human-readable summary
        const summary: any[] = [];
        const layouts = result.layouts?.layouts || [];
        
        for (const layout of layouts) {
            const layoutInfo: any = {
                layout_name: layout.name,
                layout_id: layout.id,
                status: layout.status,
                pipelines: [],
            };

            const layoutPipelines = layout.pipelines || [];
            for (const pipeline of layoutPipelines) {
                const pipelineInfo: any = {
                    display_value: pipeline.display_value,
                    actual_value: pipeline.actual_value,
                    id: pipeline.id,
                    stages: [],
                };

                const stages = pipeline.maps || [];
                for (const stage of stages) {
                    pipelineInfo.stages.push({
                        display_value: stage.display_value,
                        actual_value: stage.actual_value,
                        id: stage.id,
                    });
                }

                layoutInfo.pipelines.push(pipelineInfo);
            }

            summary.push(layoutInfo);
        }

        return NextResponse.json({
            summary,
            raw: result,
            instructions: {
                step1: 'Find your "Global Technology Sales" pipeline in the summary above.',
                step2: 'Copy its layout_id and actual_value.',
                step3: 'Add to your .env file:',
                example: {
                    ZOHO_GT_LAYOUT_ID: '<layout_id from above>',
                    ZOHO_GT_SUB_PIPELINE: '<actual_value from above>',
                },
            },
        });
    } catch (error: any) {
        console.error('Error discovering pipelines:', error);
        return NextResponse.json(
            { error: error.message, stack: error.stack },
            { status: 500 }
        );
    }
}
