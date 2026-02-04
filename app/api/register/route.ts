import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import * as MailChecker from 'mailchecker'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { name, phone, description, service, email } = body
        const now = new Date();

        // Format: "DD/MM/YYYY HH:mm"
        const formattedDate = now.toLocaleString('en-IN', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });

        console.log('Received form data:', { name, phone, description, service, email })

        // Get the referring page URL
        const refererUrl = request.headers.get('referer') || 'Unknown page';
        const currentPageUrl = refererUrl;

        // 1️⃣ Enhanced Email Validation
        // Trim and lowercase email
        const cleanEmail = email.toLowerCase().trim();

        // Check for empty email
        if (!cleanEmail) {
            return NextResponse.json(
                { message: 'Email address is required' },
                { status: 400 }
            )
        }

        // Check email format with regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(cleanEmail)) {
            return NextResponse.json(
                { message: 'Please enter a valid email address' },
                { status: 400 }
            )
        }

        // Check if email is disposable/temporary
        if (!MailChecker.isValid(cleanEmail)) {
            console.log('Temporary email detected:', cleanEmail)
            return NextResponse.json(
                {
                    message: 'Temporary or disposable email addresses are not allowed. Please use your personal or business email.',
                    suggestion: 'Use Gmail, Outlook, Yahoo, or your company email'
                },
                { status: 400 }
            )
        }

        // Block common fake/placeholder emails
        const fakeEmailPatterns = [
            'admin@', 'test@', 'info@', 'contact@', 'support@',
            'sales@', 'hello@', 'noreply@', 'user@', 'demo@',
            'example@', 'temp@', 'fake@'
        ];

        const commonFakeDomains = [
            'example.com', 'test.com', 'domain.com',
            'company.com', 'business.com', 'site.com'
        ];

        const emailDomain = cleanEmail.split('@')[1];

        // Check for fake patterns
        const hasFakePattern = fakeEmailPatterns.some(pattern =>
            cleanEmail.startsWith(pattern)
        );

        // Check for fake domains
        const hasFakeDomain = commonFakeDomains.includes(emailDomain);

        if (hasFakePattern || hasFakeDomain) {
            console.log('Suspicious email pattern detected:', cleanEmail)
            return NextResponse.json(
                { message: 'Please use a genuine personal or business email address' },
                { status: 400 }
            )
        }

        // Check for role-based emails (optional but recommended)
        const roleBasedEmails = [
            'admin', 'administrator', 'info', 'contact', 'support',
            'sales', 'help', 'hello', 'noreply', 'postmaster',
            'webmaster', 'hostmaster', 'abuse'
        ];

        const emailUser = cleanEmail.split('@')[0];
        if (roleBasedEmails.includes(emailUser.toLowerCase())) {
            console.log('Role-based email detected:', cleanEmail)
            return NextResponse.json(
                {
                    message: 'Role-based email addresses are not accepted. Please use your personal email.',
                    suggestion: 'Use an email that contains your name (e.g., john.doe@gmail.com)'
                },
                { status: 400 }
            )
        }

        // Rate limiting check (prevent spam)
        // You can implement Redis or database-based rate limiting here

        // 2️⃣ Save to SheetDB
        const SHEET_URL = process.env.SHEETDB_URL;
        console.log('SheetDB URL:', SHEET_URL)

        if (!SHEET_URL) {
            console.error('SheetDB URL not configured')
            return NextResponse.json(
                { message: 'SheetDB URL not configured' },
                { status: 500 }
            )
        }
        console.log('Current page URL:', currentPageUrl)
        const payload = {
            data: {
                Name: name,
                Phone: phone,
                Message: description,
                Requirement: service,
                Email: cleanEmail, // Use cleaned email
                SubmittedAt: formattedDate,
                IP: request.headers.get('x-forwarded-for') || 'unknown',
                UserAgent: request.headers.get('user-agent') || 'unknown',
                URL: currentPageUrl // Add current page URL
            },
        }

        console.log('Sending to SheetDB:', payload)

        const sheetResponse = await fetch(SHEET_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "User-Agent": "Abhiwan-Form-Submitter/1.0"
            },
            body: JSON.stringify(payload),
        });

        const sheetResponseText = await sheetResponse.text();
        console.log('SheetDB response status:', sheetResponse.status)
        console.log('SheetDB response text:', sheetResponseText)

        let sheetData;
        try {
            sheetData = JSON.parse(sheetResponseText);
        } catch (e) {
            console.error('Failed to parse SheetDB response:', sheetResponseText)
            return NextResponse.json(
                { message: 'Invalid response from SheetDB', details: sheetResponseText },
                { status: 500 }
            )
        }

        if (!sheetResponse.ok) {
            console.error('SheetDB error:', sheetData)
            return NextResponse.json(
                { message: 'Failed to submit to SheetDB', error: sheetData },
                { status: 500 }
            )
        }

        // 3️⃣ Send Emails
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Get team email for sending thank you
        const teamEmailForThankYou = process.env.TEAM_EMAIL_3;

        try {
            // Send form submission to team emails (excluding TEAM_EMAIL_3 for thank you)
            const recipients = [
                process.env.TEAM_EMAIL_1,
                process.env.TEAM_EMAIL_2,
                process.env.TEAM_EMAIL_3,
            ].filter(email => email); // Remove empty entries

            for (const recipient of recipients) {
                await transporter.sendMail({
                    from: `"Abhiwan Tech Solutions" <${process.env.SMTP_USER}>`,
                    to: recipient,
                    subject: `✅ New Form Submission: ${name} - ${service}`,
                    html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #2f5bff;">📋 New Form Submission</h2>
              <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; border-left: 4px solid #2f5bff;">
                <p><strong>👤 Name:</strong> ${name}</p>
                <p><strong>📧 Email:</strong> ${cleanEmail}</p>
                <p><strong>📱 Phone:</strong> ${phone}</p>
                <p><strong>🎯 Service:</strong> ${service}</p>
                <p><strong>📝 Description:</strong></p>
                <div style="background: white; padding: 10px; border-radius: 4px; margin: 10px 0;">
                  <p style="white-space: pre-wrap;">${description || 'No description provided'}</p>
                </div>
              </div>
              <div style="margin-top: 20px; padding: 10px; background: #e8f4ff; border-radius: 4px;">
                <p style="font-size: 12px; color: #666; margin: 0;">
                  📅 Submitted: ${new Date().toLocaleString()} | 
                  📍 IP: ${payload.data.IP.substring(0, 15)}... | 
                  🌐 Page: <a href="${currentPageUrl}" style="color: #2f5bff; text-decoration: none;">${currentPageUrl}</a>
                </p>
              </div>
            </div>
          `,
                });
            }

            // Send thank you email to user FROM TEAM_EMAIL_3
            if (teamEmailForThankYou) {
                await transporter.sendMail({
                    from: `"Abhiwan Tech Solutions" <${teamEmailForThankYou}>`,
                    to: cleanEmail,
                    subject: "Thank you for contacting Abhiwan Tech Solutions!",
                    html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2f5bff;">Thank You, ${name}! 👋</h2>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; border-left: 4px solid #2f5bff;">
              <p>Thank you for reaching out to <strong>Abhiwan Tech Solutions</strong>!</p>
              <p>We have received your inquiry about <strong>${service}</strong> and our team will review it shortly.</p>
              
              <div style="background: white; padding: 15px; border-radius: 4px; margin: 15px 0;">
                <h4 style="margin-top: 0;">📋 Your Submission Summary:</h4>
                <ul style="list-style: none; padding-left: 0;">
                  <li style="margin: 8px 0;">✅ <strong>Service:</strong> ${service}</li>
                  <li style="margin: 8px 0;">✅ <strong>Phone:</strong> ${phone}</li>
                  <li style="margin: 8px 0;">✅ <strong>Submitted:</strong> ${new Date().toLocaleString()}</li>
                </ul>
              </div>
              
              <p><strong>⏰ What happens next?</strong></p>
              <ol>
                <li>Our team will review your requirements</li>
                <li>We'll contact you within 24-48 hours</li>
                <li>We'll schedule a free consultation call</li>
              </ol>
            </div>
            
            <p style="margin-top: 30px;">
              Best regards,<br/>
              <strong>The Abhiwan Tech Solutions Team</strong>
            </p>
            
            <div style="margin-top: 30px; padding: 20px; background: linear-gradient(135deg, #2f5bff, #6a11cb); color: white; text-align: center; border-radius: 8px;">
              <h3 style="margin: 0 0 10px 0;">🎮 Abhiwan Tech Solutions</h3>
              <p style="margin: 0; opacity: 0.9;">Your trusted partner for Game Development, App Development & Web Solutions</p>
            </div>
          </div>
        `,
                });
                console.log(`✅ Thank you email sent to user from: ${teamEmailForThankYou}`)
            } else {
                console.warn('⚠️ TEAM_EMAIL_3 is not configured for sending thank you emails')
                // Fallback: Send from SMTP_USER if TEAM_EMAIL_3 is not available
                await transporter.sendMail({
                    from: `"Abhiwan Tech Solutions" <${process.env.SMTP_USER}>`,
                    to: cleanEmail,
                    subject: "Thank you for contacting Abhiwan Tech Solutions!",
                    html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2f5bff;">Thank You, ${name}! 👋</h2>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; border-left: 4px solid #2f5bff;">
              <p>Thank you for reaching out to <strong>Abhiwan Tech Solutions</strong>!</p>
              <p>We have received your inquiry about <strong>${service}</strong> and our team will review it shortly.</p>
              
              <div style="background: white; padding: 15px; border-radius: 4px; margin: 15px 0;">
                <h4 style="margin-top: 0;">📋 Your Submission Summary:</h4>
                <ul style="list-style: none; padding-left: 0;">
                  <li style="margin: 8px 0;">✅ <strong>Service:</strong> ${service}</li>
                  <li style="margin: 8px 0;">✅ <strong>Phone:</strong> ${phone}</li>
                  <li style="margin: 8px 0;">✅ <strong>Submitted:</strong> ${new Date().toLocaleString()}</li>
                </ul>
              </div>
              
              <p><strong>⏰ What happens next?</strong></p>
              <ol>
                <li>Our team will review your requirements</li>
                <li>We'll contact you within 24-48 hours</li>
                <li>We'll schedule a free consultation call</li>
              </ol>
            </div>
            
            <p style="margin-top: 30px;">
              Best regards,<br/>
              <strong>The Abhiwan Tech Solutions Team</strong>
            </p>
            
            <div style="margin-top: 30px; padding: 20px; background: linear-gradient(135deg, #2f5bff, #6a11cb); color: white; text-align: center; border-radius: 8px;">
              <h3 style="margin: 0 0 10px 0;">🎮 Abhiwan Tech Solutions</h3>
              <p style="margin: 0; opacity: 0.9;">Your trusted partner for Game Development, App Development & Web Solutions</p>
            </div>
          </div>
        `,
                });
                console.log('✅ Thank you email sent to user (fallback to SMTP_USER)')
            }

            console.log('✅ All emails sent successfully')
        } catch (emailError) {
            console.error('❌ Email sending failed:', emailError)
            // Continue even if emails fail, but log it
        }

        return NextResponse.json({
            success: true,
            message: "Thank you! Your submission has been received. We'll contact you soon.",
            data: sheetData
        }, { status: 200 });

    } catch (error) {
        console.error('❌ Registration error:', error);
        return NextResponse.json(
            {
                success: false,
                message: "Failed to submit form. Please try again or contact us directly.",
                error: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}