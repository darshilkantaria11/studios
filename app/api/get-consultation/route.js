import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, phone, email, business, services, message } = body;

        if (!name || !phone || !email || !business) {
            return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
        }

        const serviceListHTML = Array.isArray(services) && services.length
            ? `<ul>${services.map(service => `<li>${service}</li>`).join("")}</ul>`
            : "None";

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const adminMailOptions = {
            from: `"DK Studios" <${process.env.EMAIL_USER}>`,
            to: "help.dkstudios@gmail.com",
            subject: "🚀 New Consultation Request",
            html: `
                <div style="font-family: Arial, sans-serif; padding: 24px; color: #333;">
                    <h2 style="color: #0a0a0a;">🚀 New Service Inquiry</h2>
                    <p style="margin-bottom: 20px;">You've received a new message via the <strong>DK Studios</strong> consultation form.</p>

                    <table style="width: 100%; border-collapse: collapse; background-color: #f9f9f9; border: 1px solid #ddd;">
                        <tr><td style="padding: 10px; font-weight: bold; width: 35%;">Full Name:</td><td style="padding: 10px;">${name}</td></tr>
                        <tr><td style="padding: 10px; font-weight: bold;">Email:</td><td style="padding: 10px;">${email}</td></tr>
                        <tr><td style="padding: 10px; font-weight: bold;">Phone Number:</td><td style="padding: 10px;">${phone}</td></tr>
                        <tr><td style="padding: 10px; font-weight: bold;">Business Name:</td><td style="padding: 10px;">${business}</td></tr>
                        <tr><td style="padding: 10px; font-weight: bold;">Services Required:</td><td style="padding: 10px;">${serviceListHTML}</td></tr>
                        <tr><td style="padding: 10px; font-weight: bold;">Message:</td><td style="padding: 10px;">${message || "—"}</td></tr>
                    </table>

                    <p style="margin-top: 20px; font-size: 14px; color: #777;">Sent automatically via the DK Studios website.</p>
                </div>
            `,
        };

        const clientMailOptions = {
            from: `"DK Studios" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "✅ We've received your consultation request!",
            html: `
                <div style="font-family: Arial, sans-serif; padding: 24px; color: #333;">
                    <h3 style="color: #0a0a0a;">Hello ${name},</h3>
                    <p>Thank you for contacting <strong>DK Studios</strong>! We’re excited to hear from you and will get back shortly.</p>
                    <p><strong>Services you've selected:</strong></p>
                    ${serviceListHTML}
                    <p style="margin-top: 24px;">Need a quicker reply? Chat with us on WhatsApp:</p>
                    <p><a href="https://wa.me/917567393494?text=Hello%2C%20I'm%20interested%20in%20your%20services" style="color: #6366f1; text-decoration: none;">+91 75673 93494</a></p>
                    <p style="margin-top: 32px;">Best regards,<br><strong>DK Studios Team</strong></p>
                    <p style="font-size: 12px; color: #999; margin-top: 16px;">This is an automated confirmation of your inquiry. No action is required.</p>
                </div>
            `,
        };

        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(clientMailOptions);

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error("Consultation API Error:", error);
        return new Response(JSON.stringify({ error: "Failed to send emails" }), { status: 500 });
    }
}
