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
    
    // Wait for email sending to complete
    await processEmailAsync(body);
    
    return new Response(JSON.stringify({ success: true }), { 
      status: 200 
    });
  } catch (error) {
    console.error("API Error:", error);
    return new Response(JSON.stringify({ error: "Failed to process request" }), { 
      status: 500 
    });
  }
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Background email processing
async function processEmailAsync({ name, phone, email, business, services, message }) {
  if (!validateEmail(email)) {
  console.error("Invalid email:", email);
  return;
}
  try {
  

    // SIMPLIFIED ADMIN EMAIL
    const adminMailOptions = {
      from: `"Designuix" <${process.env.EMAIL_USER}>`,
      to: "designuixteam@gmail.com",
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
      from: `"Designuix" <${process.env.EMAIL_USER}>`,
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