import nodemailer from 'nodemailer';

export async function POST(req) {
    const { website, email } = await req.json();

    if (!website || !email) {
        return new Response(JSON.stringify({ error: "Website URL and email are required" }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    try {
        // Create transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email to admin (you)
        const adminMail = {
            from: `"SEO Report Request" <${process.env.EMAIL_USER}>`,
            to: "contact@designuix.com",
            subject: `New SEO Report Request: ${website}`,
            html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #0a0a0a;">New SEO Report Request</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold;">Website:</td>
              <td style="padding: 8px;"><a href="${website}" target="_blank">${website}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Email:</td>
              <td style="padding: 8px;">${email}</td>
            </tr>
          </table>
        </div>
      `,
        };

        // Email to client
        // Email to client (short and clear)
        const clientMail = {
            from: `"Designuix SEO Team" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: `Your SEO Report Request for ${website}`,
            html: `
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
      <h3 style="color: #0a0a0a;">Hi there,</h3>
      <p>
        Thank you for submitting your website <a href="${website}" style="color: #6366f1;">${website}</a> 
        for a <strong>free technical SEO report</strong>.
      </p>
      <p>
        You will receive your detailed report within <strong>24 hours</strong>.
      </p>
      <p style="margin-top: 30px;">
        Best regards,<br>
        <strong>Designuix SEO Team</strong>
      </p>
      <p style="font-size: 12px; color: #999; margin-top: 20px;">
        This is an automated confirmation of your SEO report request.
      </p>
    </div>
  `,
        };


        // Send both emails
        await transporter.sendMail(adminMail);
        await transporter.sendMail(clientMail);

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });

    } catch (err) {
        console.error("Email error:", err);
        return new Response(JSON.stringify({ error: "Failed to process your request. Please try again later." }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}