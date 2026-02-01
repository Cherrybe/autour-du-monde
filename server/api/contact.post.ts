import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { fullName, email, phone, service, message } = body;

  // Validate required fields
  if (!fullName || !email || !service || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields',
    });
  }

  // Create email transporter
  // Note: You'll need to configure these environment variables
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Format email content
  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
        New Contact Form Submission
      </h2>
      
      <div style="margin: 20px 0;">
        <h3 style="color: #334155; margin-bottom: 5px;">Contact Information</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569; width: 150px;">Full Name:</td>
            <td style="padding: 8px 0; color: #1e293b;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email:</td>
            <td style="padding: 8px 0; color: #1e293b;">
              <a href="mailto:${email}" style="color: #2563eb;">${email}</a>
            </td>
          </tr>
          ${phone ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Phone:</td>
            <td style="padding: 8px 0; color: #1e293b;">
              <a href="tel:${phone}" style="color: #2563eb;">${phone}</a>
            </td>
          </tr>
          ` : ''}
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Service:</td>
            <td style="padding: 8px 0; color: #1e293b;">${service}</td>
          </tr>
        </table>
      </div>

      <div style="margin: 20px 0;">
        <h3 style="color: #334155; margin-bottom: 10px;">Message</h3>
        <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #1e40af;">
          <p style="margin: 0; color: #1e293b; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
      </div>

      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 12px;">
        <p>This email was sent from the Autour du Monde contact form.</p>
        <p>Submitted on: ${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}</p>
      </div>
    </div>
  `;

  const emailText = `
New Contact Form Submission

Contact Information:
- Full Name: ${fullName}
- Email: ${email}
${phone ? `- Phone: ${phone}` : ''}
- Service: ${service}

Message:
${message}

---
This email was sent from the Autour du Monde contact form.
Submitted on: ${new Date().toLocaleString()}
  `;

  try {
    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: 'autourdumondeconsult@gmail.com',
      replyTo: email,
      subject: `New Contact Form Submission from ${fullName}`,
      text: emailText,
      html: emailHtml,
    });

    return {
      success: true,
      message: 'Email sent successfully',
    };
  } catch (error) {
    console.error('Email sending error:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send email. Please try again later.',
    });
  }
});
