import { NextRequest, NextResponse } from 'next/server';
import { createZohoDeal, createZohoNote, upsertZohoContact } from '@/lib/zoho-bigin';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Honeypot check for bot protection
        if (body.website) {
            console.log('Bot submission blocked (honeypot):', body.email);
            return NextResponse.json(
                { success: true, message: 'Inquiry submitted successfully' },
                { status: 200 }
            );
        }

        const {
            // Contact data
            firstName,
            lastName,
            email,
            phone,
            company,

            // Inquiry data
            inquiryName,
            serviceName,
            serviceCode,
            pageName,
            message,
            leadSource,

            // Pipeline info
            pipeline,
            stage,
        } = body;

        // Clean and sanitize inputs
        const cleanFirstName = firstName?.trim() || '';
        const cleanLastName = lastName?.trim() || '-';
        const cleanEmail = email?.trim().toLowerCase() || '';
        const cleanPhone = phone?.trim().replace(/\s+/g, '') || '';
        const cleanCompany = company?.trim() || '';

        // Validate required fields
        if (!cleanFirstName || !cleanEmail || !cleanPhone) {
            return NextResponse.json(
                { error: 'First name, email, and phone are required' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(cleanEmail)) {
            return NextResponse.json(
                { error: 'Invalid email format', details: 'Please provide a valid email address' },
                { status: 400 }
            );
        }

        // Validate phone format (10-digit Indian mobile starting with 6-9)
        const phoneDigits = cleanPhone.replace(/^\+?91/, '').replace(/\D/g, '');
        if (phoneDigits.length !== 10 || !/^[6-9]/.test(phoneDigits)) {
            return NextResponse.json(
                { error: 'Invalid phone number', details: 'Please provide a valid 10-digit phone number' },
                { status: 400 }
            );
        }
        const phoneWithCountryCode = `+91${phoneDigits}`;

        // Build description with corporate services context
        const description = `
=== CORPORATE SERVICES INQUIRY ===
Submitted: ${new Date().toISOString()}

--- Contact Information ---
Name: ${cleanFirstName} ${cleanLastName}
Email: ${cleanEmail}
Phone: ${phoneWithCountryCode}
Company: ${cleanCompany || 'Not provided'}

--- Service Interest ---
Service: ${serviceName || 'General Inquiry'}
Service Code: ${serviceCode || 'N/A'}
Page: ${pageName || 'Not specified'}

--- Additional Information ---
Message: ${message || 'None'}
Lead Source: ${leadSource || 'Website'}
`.trim();

        // Step 1: Create or update Contact
        const contactData = {
            First_Name: cleanFirstName,
            Last_Name: cleanLastName,
            Email: cleanEmail,
            Phone: phoneWithCountryCode,
            Mobile: phoneWithCountryCode,
            Description: `Corporate services inquiry received on ${new Date().toLocaleDateString()}. Interested in: ${serviceName || 'General Security Services'}`,
            Lead_Source: leadSource || 'Website - Corporate Services',
        };

        const contactId = await upsertZohoContact(contactData);
        console.log('Contact created/updated:', contactId);

        // Step 2: Create Deal in Corporate Services Pipeline
        const closingDate = new Date();
        closingDate.setDate(closingDate.getDate() + 30);

        const dealData = {
            Deal_Name: inquiryName || `Corporate Inquiry - ${cleanFirstName} ${cleanLastName} - ${serviceName || 'General'}`,
            Pipeline: pipeline || 'Corporate Services Pipeline',
            Stage: stage || 'New Inquiry',
            Contact_Name: contactId,
            Closing_Date: closingDate.toISOString().split('T')[0],
            Description: description,
            Lead_Source: leadSource || 'Website - Corporate Services',
        };

        const dealId = await createZohoDeal(dealData);
        console.log('Deal created:', dealId);

        // Step 3: Create a Note on the deal with detailed info
        try {
            const noteTitle = `Lead Details - ${leadSource || 'Corporate Services Website'}`;

            const noteContentParts: string[] = [
                'CORPORATE SERVICES LEAD DETAILS',
                '===========================',
                '',
                `Name: ${cleanFirstName} ${cleanLastName}`,
                `Email: ${cleanEmail}`,
                `Phone: ${phoneWithCountryCode}`,
                `Company: ${cleanCompany || 'Not provided'}`,
                '',
                `Service Interested: ${serviceName || 'General'}`,
                `Service Code: ${serviceCode || 'N/A'}`,
                `Page Source: ${pageName || 'Not specified'}`,
                '',
            ];

            if (message) {
                noteContentParts.push(`Additional Message: ${message}`);
                noteContentParts.push('');
            }

            noteContentParts.push(`Lead Source: ${leadSource || 'Website'}`);
            noteContentParts.push(`Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`);

            const noteContent = noteContentParts.join('\n');
            const noteId = await createZohoNote(dealId, noteTitle, noteContent);
            console.log('Note created on deal:', noteId);
        } catch (noteError) {
            console.error('Failed to create note (non-critical):', noteError);
        }

        return NextResponse.json({
            success: true,
            contactId,
            dealId,
            message: 'Inquiry submitted successfully',
            inquiryName: dealData.Deal_Name,
        });

    } catch (error) {
        console.error('Error in corporate services inquiry API:', error);
        return NextResponse.json(
            {
                error: 'Failed to submit inquiry',
                details: error instanceof Error ? error.message : 'Unknown error',
            },
            { status: 500 }
        );
    }
}
