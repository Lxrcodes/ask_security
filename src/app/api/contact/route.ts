import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const { name, email, phone, service, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Send email to ASK Security
    await resend.emails.send({
      from: 'ASK Security Website <noreply@asksecurity.co.uk>',
      to: (process.env.CONTACT_EMAILS ?? '').split(',').map(e => e.trim()).filter(Boolean),
      replyTo: email,
      subject: `New Contact Form Submission${service ? ` - ${service}` : ''}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service Interested In:</strong> ${service || 'Not specified'}</p>
        <hr />
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    });

    // Send confirmation email to the user
    await resend.emails.send({
      from: 'ASK Security <noreply@asksecurity.co.uk>',
      to: [email],
      subject: 'Thank you for contacting ASK Security',
      html: `
        <h2>Thank you for your enquiry</h2>
        <p>Dear ${name},</p>
        <p>Thank you for contacting ASK Security. We have received your message and will respond within 2 hours during business hours.</p>
        <p>If you need immediate assistance, please call us at <strong>+44 7476 058050</strong> (24/7).</p>
        <hr />
        <p><strong>Your message:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
        <hr />
        <p>Best regards,<br />ASK Security Team</p>
        <p>169 Watling Street, Radlett, England, WD7 7NQ</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
