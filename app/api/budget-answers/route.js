// app/api/budget-answers/route.js

import nodemailer from "nodemailer";

// Define the budget questions for reference in the email template
const budgetQuestions = [
  {
    id: "goal",
    question: "What’s the main thing you want this project to achieve? 🎯",
    options: [
      { text: "Make my brand look more professional ✨", value: "awareness" },
      { text: "Get more inquiries and leads 📈", value: "leads" },
      { text: "Sell my products or services online 🛒", value: "ecommerce" },
      { text: "Keep visitors engaged & coming back 🔁", value: "engagement" },
    ],
  },
  {
    id: "businessSize",
    question: "Where does your business stand right now? 📊",
    options: [
      { text: "Just getting started (1-5 people) 🌱", value: "startup" },
      { text: "Small but growing (6-20 people) 👥", value: "small" },
      { text: "Established team (21-100 people) 🏢", value: "medium" },
      { text: "Large or scaling company (100+ people) 🌐", value: "large" },
    ],
  },
  {
    id: "complexity",
    question: "What kind of website or app are you imagining? 💡",
    options: [
      { text: "Basic site with a few pages 📄", value: "simple" },
      { text: "Custom design with more features 🎨", value: "moderate" },
      { text: "Online store or advanced features ⚙️", value: "complex" },
      { text: "Full custom platform or web app 💻", value: "very_complex" },
    ],
  },
  {
    id: "budget",
    question:
      "What budget range have you set aside for this project? 💰 (No worries if you're unsure!)",
    options: [
      {
        text: "$1,000 – $3,000 (Great for small sites or MVPs) 🌱",
        value: "1000-3000",
      },
      {
        text: "$3,000 – $6,000 (Ideal for growing businesses) 📈",
        value: "3000-6000",
      },
      {
        text: "$6,000+ (For custom builds or high-scale work) 🚀",
        value: "6000+",
      },
      {
        text: "Not sure yet – Need guidance 🤝",
        value: "not_sure",
      },
    ],
  },
];

export async function POST(req) {
  try {
    const body = await req.json();
    const { initialFormData, budgetAnswers } = body;

    // Extract data from initial form
    const { name, phone, email, business, services, message } = initialFormData;

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Format budget answers for email
    const budgetAnswersHTML = Object.entries(budgetAnswers)
      .map(([questionId, answerValue]) => {
        // Find question text
        const question = budgetQuestions.find(q => q.id === questionId);
        if (!question) return "";
        
        // Find selected option text
        const selectedOption = question.options.find(opt => opt.value === answerValue);
        if (!selectedOption) return "";
        
        return `
          <tr>
            <td style="padding: 10px; font-weight: bold; width: 35%;">${question.question}</td>
            <td style="padding: 10px;">${selectedOption.text}</td>
          </tr>
        `;
      })
      .join("");

    // Format services as HTML list
    const serviceListHTML = Array.isArray(services) && services.length
      ? `<ul>${services.map(service => `<li>${service}</li>`).join("")}</ul>`
      : "None";

    // Admin email options
    const adminMailOptions = {
      from: `"DK Studios" <${process.env.EMAIL_USER}>`,
      to: "help.dkstudios@gmail.com",
      subject: "🚀 New Consultation Request + Budget Answers",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px; color: #333;">
          <h2 style="color: #0a0a0a;">🚀 New Service Inquiry with Budget Details</h2>
          <p style="margin-bottom: 20px;">You've received a new message via the <strong>DK Studios</strong> consultation form, including budget estimation answers.</p>

          <h3 style="color: #0a0a0a; margin-top: 24px; margin-bottom: 12px;">Client Information</h3>
          <table style="width: 100%; border-collapse: collapse; background-color: #f9f9f9; border: 1px solid #ddd; margin-bottom: 24px;">
            <tr><td style="padding: 10px; font-weight: bold; width: 35%;">Full Name:</td><td style="padding: 10px;">${name}</td></tr>
            <tr><td style="padding: 10px; font-weight: bold;">Email:</td><td style="padding: 10px;">${email}</td></tr>
            <tr><td style="padding: 10px; font-weight: bold;">Phone Number:</td><td style="padding: 10px;">${phone}</td></tr>
            <tr><td style="padding: 10px; font-weight: bold;">Business Name:</td><td style="padding: 10px;">${business}</td></tr>
            <tr><td style="padding: 10px; font-weight: bold;">Services Required:</td><td style="padding: 10px;">${serviceListHTML}</td></tr>
            <tr><td style="padding: 10px; font-weight: bold;">Message:</td><td style="padding: 10px;">${message || "—"}</td></tr>
          </table>

          <h3 style="color: #0a0a0a; margin-top: 24px; margin-bottom: 12px;">Budget Estimation Answers</h3>
          <table style="width: 100%; border-collapse: collapse; background-color: #f9f9f9; border: 1px solid #ddd;">
            ${budgetAnswersHTML}
          </table>

          <p style="margin-top: 20px; font-size: 14px; color: #777;">Sent automatically via the DK Studios website.</p>
        </div>
      `,
    };

    // Client email options (same as initial form)
    // const clientMailOptions = {
    //   from: `"DK Studios" <${process.env.EMAIL_USER}>`,
    //   to: email,
    //   subject: "✅ We've received your consultation request!",
    //   html: `
    //     <div style="font-family: Arial, sans-serif; padding: 24px; color: #333;">
    //       <h3 style="color: #0a0a0a;">Hello ${name},</h3>
    //       <p>Thank you for contacting <strong>DK Studios</strong>! We're excited to hear from you and will get back shortly.</p>
    //       <p><strong>Services you've selected:</strong></p>
    //       ${serviceListHTML}
    //       <p style="margin-top: 24px;">Need a quicker reply? Chat with us on WhatsApp:</p>
    //       <p><a href="https://wa.me/917567393494?text=Hello%2C%20I'm%20interested%20in%20your%20services" style="color: #6366f1; text-decoration: none;">+91 75673 93494</a></p>
    //       <p style="margin-top: 32px;">Best regards,<br><strong>DK Studios Team</strong></p>
    //       <p style="font-size: 12px; color: #999; margin-top: 16px;">This is an automated confirmation of your inquiry. No action is required.</p>
    //     </div>
    //   `,
    // };

    // Send emails
    await transporter.sendMail(adminMailOptions);
    // await transporter.sendMail(clientMailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Budget Answers API Error:", error);
    return new Response(JSON.stringify({ error: "Failed to send emails" }), { status: 500 });
  }
}