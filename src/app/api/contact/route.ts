import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
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
      to: ['contact@asksecurity.co.uk'],
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
        <p>3rd Floor, 86-90 Paul Street, London, EC2A 4NE</p>
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
