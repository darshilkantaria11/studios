import nodemailer from "nodemailer";

// Create reusable transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  pool: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phone, email, business, services, message } = body;

    // Send response immediately
    const response = new Response(JSON.stringify({ success: true }), { 
      status: 200 
    });

    // Process email in background
    processEmailAsync(body);

    return response;
  } catch (error) {
    console.error("Consultation API Error:", error);
    return new Response(JSON.stringify({ error: "Failed to process request" }), { 
      status: 500 
    });
  }
}

// Background email processing
async function processEmailAsync({ name, phone, email, business, services, message }) {
  try {
    const serviceListHTML = Array.isArray(services) && services.length
      ? `<ul>${services.map(service => `<li>${service}</li>`).join("")}</ul>`
      : "None";

    // SIMPLIFIED ADMIN EMAIL
    const adminMailOptions = {
      from: `"DK Studios" <${process.env.EMAIL_USER}>`,
      to: "help.dkstudios@gmail.com",
      subject: "🚀 New Consultation Request",
      text: `New consultation request:
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Business: ${business}
        Services: ${services.join(", ")}
        Message: ${message || "—"}`
    };

    // SIMPLIFIED CLIENT EMAIL
    const clientMailOptions = {
      from: `"DK Studios" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "✅ Consultation Received",
      text: `Hi ${name}, we've received your consultation request. We'll contact you shortly.`
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(clientMailOptions);
  } catch (error) {
    console.error("Background email error:", error);
  }
}