import { NextRequest, NextResponse } from 'next/server';
import { createZohoDeal, upsertZohoContact } from '@/lib/zoho-bigin';

/**
 * POST /api/zoho/inquiry
 * 
 * Creates a contact + deal in Zoho Bigin's "Global Technology Sales" pipeline.
 * Called by: SecurityAssessmentModal (Get a Quote), InquiryFormSection, InquiryForm, ServicePageLayout
 */
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // --- Honeypot check ---
        if (body.website) {
            // Bot detected — silently return success
            return NextResponse.json({ success: true, id: 'honeypot' });
        }

        // --- Validate required fields ---
        const { firstName, lastName, email, phone } = body;

        if (!firstName || !email || !phone) {
            return NextResponse.json(
                { error: 'Name, email, and phone are required.' },
                { status: 400 }
            );
        }

        // --- Ensure phone has country code ---
        let formattedPhone = phone.trim();
        const digitsOnly = formattedPhone.replace(/\D/g, '');
        if (!formattedPhone.startsWith('+')) {
            if (digitsOnly.length === 10) {
                formattedPhone = `+91${digitsOnly}`;
            } else if (digitsOnly.length === 12 && digitsOnly.startsWith('91')) {
                formattedPhone = `+${digitsOnly}`;
            }
        }

        // --- 1. Upsert Contact ---
        let contactId: string | null = null;
        try {
            contactId = await upsertZohoContact({
                First_Name: firstName.trim(),
                Last_Name: (lastName || '-').trim(),
                Email: email.trim(),
                Phone: formattedPhone,
                Mobile: formattedPhone,
                Lead_Source: body.leadSource || 'Website - eHack Technology',
            });
            console.log('Contact upserted with ID:', contactId);
        } catch (contactError) {
            console.error('Error upserting contact (continuing to create deal):', contactError);
        }

        // --- 2. Build deal description ---
        const now = new Date().toISOString();
        const description = [
            `=== GLOBAL TECHNOLOGY INQUIRY ===`,
            `Submitted: ${now}`,
            ``,
            `--- Contact Information ---`,
            `Name: ${firstName} ${lastName || ''}`.trim(),
            `Email: ${email}`,
            `Phone: ${formattedPhone}`,
            body.company ? `Company: ${body.company}` : null,
            ``,
            `--- Service Interest ---`,
            body.serviceName ? `Service: ${body.serviceName}` : null,
            body.serviceCode ? `Service Code: ${body.serviceCode}` : null,
            body.pageName ? `Page: ${body.pageName}` : null,
            ``,
            `--- Additional Information ---`,
            body.message ? `Message: ${body.message}` : null,
            body.leadSource ? `Lead Source: ${body.leadSource}` : null,
        ].filter(Boolean).join('\n');

        // --- 3. Closing date: 30 days from now ---
        const closingDate = new Date();
        closingDate.setDate(closingDate.getDate() + 30);
        const closingDateStr = closingDate.toISOString().split('T')[0];

        // --- 4. Create Deal in Global Technology Sales Pipeline ---
        const pipeline = body.pipeline || 'Global Technology Sales';
        const stage = body.stage || 'New Inquiry';

        const dealName = body.inquiryName || 
            `GT Inquiry - ${body.company || firstName} - ${body.serviceName || 'General'}`;

        const dealId = await createZohoDeal({
            Deal_Name: dealName,
            Pipeline: pipeline,
            Stage: stage,
            Contact_Name: contactId || undefined,
            Closing_Date: closingDateStr,
            Description: description,
            Lead_Source: body.leadSource || 'Website - eHack Technology',
        });

        return NextResponse.json({
            success: true,
            id: dealId,
            contactId,
            message: 'Inquiry submitted successfully',
        });

    } catch (error: any) {
        console.error('Error in /api/zoho/inquiry:', error);

        return NextResponse.json(
            {
                error: error.message || 'Failed to submit inquiry',
                details: process.env.NODE_ENV === 'development' ? error.stack : undefined,
            },
            { status: 500 }
        );
    }
}
