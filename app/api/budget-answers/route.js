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
    
    // Send response immediately
    const response = new Response(JSON.stringify({ success: true }), { 
      status: 200 
    });

    // Process in background
    processBudgetAnswersAsync(body);

    return response;
  } catch (error) {
    console.error("Budget Answers API Error:", error);
    return new Response(JSON.stringify({ error: "Failed to process request" }), { 
      status: 500 
    });
  }
}

async function processBudgetAnswersAsync(payload) {
  try {
    const { initialFormData, budgetAnswers } = payload;
    const { name, email } = initialFormData;

    // Format budget answers
    const answersText = Object.entries(budgetAnswers)
      .map(([questionId, answerValue]) => {
        const question = budgetQuestions.find(q => q.id === questionId);
        if (!question) return "";
        
        const selectedOption = question.options.find(opt => opt.value === answerValue);
        return `${question.question}: ${selectedOption?.text || answerValue}`;
      })
      .join("\n");

    // SIMPLIFIED ADMIN EMAIL
    const adminMailOptions = {
      from: `"Designuix" <${process.env.EMAIL_USER}>`,
      to: "contact@designuix.com",
      subject: "📊 Budget Answers Received",
      text: `Budget answers from ${name} (${email}):\n\n${answersText}`
    };

    await transporter.sendMail(adminMailOptions);
  } catch (error) {
    console.error("Background budget answers error:", error);
  }
}