// app/api/contact/route.js
import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, phone, message } = await req.json();

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // your email app password
      },
    });

    // Email to you (admin)
    const adminMail = {
      from: `"Contact Form" <${email}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Form Submission`,
      html: `
  <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
    <h2 style="color: #0a0a0a;">New Message from Contact Form</h2>
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 8px; font-weight: bold;">Name:</td>
        <td style="padding: 8px;">${name}</td>
      </tr>
      <tr>
        <td style="padding: 8px; font-weight: bold;">Email:</td>
        <td style="padding: 8px;">${email}</td>
      </tr>
      <tr>
        <td style="padding: 8px; font-weight: bold;">Phone:</td>
        <td style="padding: 8px;">${phone || 'Not provided'}</td>
      </tr>
      <tr>
        <td style="padding: 8px; font-weight: bold;">Message:</td>
        <td style="padding: 8px;">${message}</td>
      </tr>
    </table>
    <p style="margin-top: 20px; font-size: 14px; color: #777;">This message was sent via your contact form on DK Studios.</p>
  </div>
`,

    };

    // Email to client
    const clientMail = {
      from: `"DK Studios" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thanks for contacting DK Studios`,
    html: `
  <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
    <h3 style="color: #0a0a0a;">Hi ${name},</h3>
    <p style="font-size: 16px;">Thanks for reaching out to <strong>DK Studios</strong>! We've received your message and will get back to you as soon as possible.</p>
    
    <div style="margin-top: 20px; background-color: #f9f9f9; padding: 15px; border-left: 4px solid #6366f1;">
      <p style="margin: 0; font-style: italic;">"${message}"</p>
    </div>

    <p style="margin-top: 20px;">If your message is urgent, feel free to contact us directly on WhatsApp at <a href="https://wa.me/917567393494?text=Hello%2C%20I'm%20interested%20in%20your%20services" style="color: #6366f1; text-decoration: none;">+91 75673 93494</a>.</p>

    <p style="margin-top: 30px;">Best regards,<br><strong>DK Studios Team</strong></p>
    <p style="font-size: 12px; color: #999;">This is an automated response confirming receipt of your inquiry.</p>
  </div>
`,

    };

    await transporter.sendMail(adminMail);
    await transporter.sendMail(clientMail);

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (err) {
    console.error("Email error:", err);
    return new Response(JSON.stringify({ error: "Email failed" }), { status: 500 });
  }
}
