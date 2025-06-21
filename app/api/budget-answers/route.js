// app/api/budget-answers/route.js

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  pool: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

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

    // Process and send email immediately
    const { initialFormData, budgetAnswers } = body;
    const { name, email } = initialFormData;

    // Format budget answers
    const answersText = Object.entries(budgetAnswers)
      .map(([questionId, answerValue]) => {
        const question = budgetQuestions.find(q => q.id === questionId);
        if (!question) return "";

        const selectedOption = question.options.find(opt => opt.value === answerValue);
        return `${question.question}: ${selectedOption?.text || answerValue}`;
      })
      .join("\n\n");

    // Send email
    await transporter.sendMail({
      from: `"Designuix Contact Form" <${process.env.EMAIL_USER}>`,
      to: "designuixteam@gmail.com",
      subject: "📊 New Budget Answers Submission",
      text: `
        New Budget Answers Submission:
        
        Contact Details:
        Name: ${name}
        Email: ${email}
        
        Budget Answers:
        ${answersText}
        
        ---
        Sent from Designuix Contact Form
      `
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error("Budget Answers API Error:", error);
    return new Response(JSON.stringify({
      error: "Failed to process request",
      details: error.message
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}