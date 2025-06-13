// components/GrowthSection.tsx
"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Growthgraph from "../../../../public/growth.png"

export default function GrowthSection() {
  const faqs = [
    {
      question: "What makes your custom web development different?",
      answer: "We build 100% custom websites from scratch tailored to your business goals. Unlike template-based solutions, our websites feature unique designs, optimized performance, and conversion-focused UX."
    },
    {
      question: "Do you develop custom web applications?",
      answer: "Yes, we specialize in custom web applications including CRM systems, e-commerce platforms, SaaS products, and complex business tools with custom functionality."
    },
    {
      question: "How long does custom web development take?",
      answer: "Most projects take 4-8 weeks depending on complexity. We follow an agile process with weekly milestones to ensure timely delivery without compromising quality."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Absolutely. We specialize in API integrations with payment gateways, CRMs, ERPs, and other third-party systems to create seamless workflows."
    },
    {
      question: "Do you provide ongoing maintenance?",
      answer: "Yes, we offer comprehensive maintenance plans including security updates, performance optimization, and feature enhancements to keep your custom website running perfectly."
    },
    {
      question: "What technologies do you use?",
      answer: "We use modern stacks: React/Next.js frontends, Node.js/Python backends, headless CMS options, and cloud infrastructure (AWS/Vercel) for optimal performance."
    },
    {
      question: "Will my website be SEO-optimized?",
      answer: "SEO is built into our development process. We implement technical SEO best practices, optimized architecture, and fast-loading experiences to help you rank higher."
    },
    {
      question: "Do you offer redesigns of existing websites?",
      answer: "Yes, we specialize in transforming outdated websites into modern, high-performing custom solutions while preserving SEO value."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 lg:px-0 bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl lg:text-4xl font-bold mb-4">
            Transform Your Business with <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Custom Web Development Company
            </span> 🚀
          </h2>
          <p className="text-sm lg:text-xl text-gray-600">
            How Designuix Helps Companies Scale with Tailored Web Development
          </p>
        </motion.div>

        {/* Reality Check Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 overflow-x-hidden">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="bg-red-50 p-8 rounded-2xl border-2 border-red-200 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 text-sm">
              Template Websites
            </div>
            <h3 className="text-2xl font-bold mb-4 text-red-600">Generic Limitations</h3>
            <ul className="space-y-4">
              {[
                "🚫 Rigid templates with limited customization",
                "⚠️ Security vulnerabilities from common plugins",
                "📉 Poor performance affecting user experience",
                "🐌 Difficult to scale with business growth"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <span className="text-red-500 text-xl">✗</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="bg-green-50 p-8 rounded-2xl border-2 border-green-200 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-green-600 text-white px-4 py-1 text-sm">
              Designuix Custom Development
            </div>
            <h3 className="text-2xl font-bold mb-4 text-green-600">Tailored Advantages</h3>
            <ul className="space-y-4">
              {[
                "✨ Unique solutions built for your specific needs",
                "🔒 Enterprise-grade security architecture",
                "⚡ Blazing fast performance & optimized UX",
                "📈 Scalable architecture for future growth"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <span className="text-green-500 text-xl">✓</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Success Story */}
        <article
          className="bg-blue-100 py-14 px-6 md:px-20 rounded-3xl mb-16 relative overflow-hidden shadow-xl"
          aria-label="Case study of Gulfside Painting website design and SEO results"
        >
          <p className="text-blue-800 font-semibold uppercase tracking-wide text-xs mb-2">
            ✨ Proven Impact of Our Web Design Services
          </p>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Video Side */}
            <div className="order-1 lg:order-2 p-2 overflow-hidden shadow-2xl bg-white rounded-xl">
              <div className="w-full h-auto shadow-2xl border-4 border-[#319e8e] rounded-lg overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  aria-label="Video showcasing Gulfside Painting web design project"
                  title="Gulfside Painting website design project video"
                >
                  <source src="/gulfside.mp4" type="video/mp4" />

                  Your browser does not support the video tag.
                </video>
              </div>

              <section className="p-6 md:p-10 bg-gray-100 rounded-b-xl text-sm lg:text-xl">
                <blockquote className="max-w-4xl mx-auto text-center">
                  <p className="text-gray-900 font-medium leading-relaxed">
                    “Partnering with{" "}
                    <span className="font-semibold text-blue-900">Designuix</span>{" "}
                    was the best move we made. Their expertise took us from
                    overlooked to fully booked in record time.”
                  </p>
                  <footer className="mt-4 text-gray-700 font-semibold">
                    – Gulfside Painting, Sarasota, Florida
                  </footer>
                </blockquote>
                <div className="mt-6 flex justify-center">
                  <button
                    onClick={() => window.open("https://gulfsidepainting.com", "_blank", "noopener,noreferrer")}
                    title="Visit Gulfside Painting official website"
                    className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-900 transition"
                  >
                    Visit gulfsidepainting.com
                  </button>
                </div>
              </section>
            </div>

            {/* Text Side */}
            <div className="order-2 lg:order-1 space-y-8">
              <h3 className="text-2xl lg:text-3xl font-extrabold text-gray-900 leading-snug">
                From{" "}
                <span className="text-red-600">Zero Online Visibility</span> to{" "}
                <span className="text-green-800">Fully Booked</span> in Just{" "}
                <span className="bg-black text-white p-2 rounded-xl inline-block">6 Months</span>
              </h3>

              <dl className="space-y-6 border-l-2 border-blue-300 pl-6">
                {[
                  {
                    title: "Starting Point: No Online Presence",
                    desc: "Relied solely on word-of-mouth referrals without a professional website.",
                  },
                  {
                    title: "Our Solution: High-Performance Website",
                    desc: "Developed a mobile-friendly, SEO-optimized, and conversion-focused website tailored to Gulfside Painting's needs.",
                  },
                  {
                    title: "Result: 20+ Major Projects Secured",
                    desc: "Successfully booked over 20 large-scale projects and multiple small renovation jobs within 6 months of launching the new website.",
                  },
                  {
                    title: "Ongoing: Steady Leads Flow",
                    desc: "Consistent high search visibility and organic traffic continue to generate quality leads daily.",
                  },
                ].map((step, idx) => (
                  <div key={idx} className="relative pl-4">
                    <dt>
                      <span className="absolute -left-[14px] top-2 w-3 h-3 bg-blue-700 rounded-full border-2 border-white shadow-md"></span>
                      <h3 className="font-semibold text-base text-gray-900">{step.title}</h3>
                    </dt>
                    <dd className="text-sm text-gray-700">{step.desc}</dd>
                  </div>
                ))}
              </dl>

              <div className="pt-6">
                <Link
                  href="/get-free-consultation"
                  title="Get a free consultation from Designuix web design company"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-700 to-purple-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
                >
                  Get Free Consultation
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </article>


        <section className="bg-blue-50 py-12 px-6 md:px-20 rounded-3xl shadow-lg my-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Ready for Your Custom Web Development?
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Transparent process. Enterprise-grade results.
          </p>
          <Link
            href="/get-free-consultation"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-8 py-4 rounded-full shadow-md transition-transform transform hover:scale-105"
            aria-label="View custom web development pricing"
          >
            Get Free Consultation →
          </Link>
        </section>

        {/* Why Designuix Section */}
        <section className="mb-8 bg-gradient-to-br from-white via-blue-50 to-white py-20 px-6 md:px-12 rounded-3xl shadow-inner border border-blue-100">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-6">
              Why Businesses Choose Us as Their{" "}
              <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Custom Web Development Company
              </span>
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-16">
              We're not just building websites — we're building <span className="font-semibold text-gray-800">growth engines</span>. Every page, pixel, and CTA is optimized to convert clicks into customers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
              {[
                ["⚡", "Built on Latest Tech Stack", "Fast-loading, SEO-ready websites using Next.js, Tailwind & more."],
                ["🎨", "100% Custom Design", "No cookie-cutter templates — every layout is handcrafted for your brand."],
                ["🚀", "Conversion-Focused Layouts", "Smart funnels, powerful CTAs, and mobile-first UX to drive sales."],
                ["🔒", "Secure & Scalable", "Deployed on modern infrastructure for speed, uptime, and reliability."],
                ["📈", "Results You Can Measure", "Track leads, orders, and engagement with built-in analytics."],
                ["🤝", "Built for Business", "We understand local business — and we build to grow it."]
              ].map(([icon, title, desc], i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-gray-200 shadow hover:shadow-md transition-all"
                >
                  <div className="text-3xl mb-3">{icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-16">
              <Link
                href="/get-free-consultation"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold py-3 px-8 rounded-full transition shadow-md"
              >
                Let&apos;s Build Your Website That Sells →
              </Link>
            </div>
          </div>
        </section>

        {/* Visual Proof Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-white rounded-3xl p-10 mb-20 border border-blue-100 shadow-md"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl font-extrabold mb-4 text-gray-900">
                Custom Website Development Impact
              </h3>
              <p className="text-gray-600 mb-6 text-base leading-relaxed">
                Companies using <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Designuix custom solutions</span> report significant improvements in operational efficiency, customer engagement, and revenue growth.
              </p>

              <div className="space-y-5">
                {[
                  ["📈", "Website Traffic", "1,200+ visitors/month", "Boosted by local SEO & Google visibility"],
                  ["💰", "Leads Generated", "4–10 new inquiries/week", "Via WhatsApp CTAs and smart funnels"],
                  ["📱", "Mobile Orders", "60% on mobile", "Frictionless experience on all devices"],
                  ["⭐", "Customer Loyalty", "More repeat buyers", "Thanks to remarketing & WhatsApp engagement"]
                ].map(([icon, label, value, desc], i) => (
                  <div key={i} className="flex items-start bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition">
                    <span className="text-2xl mr-5">{icon}</span>
                    <div className="flex-1">
                      <p className="text-gray-800 font-medium">{label}</p>
                      <p className="text-xl font-bold text-black">{value}</p>
                      <p className="text-sm text-gray-500 mt-1">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-64 h-64 rounded-full blur-3xl opacity-40"
                />
              </div>
              <Image
                src={Growthgraph}
                width={720}
                height={776}
                alt="Custom web development performance metrics"
                title="Designuix custom development results"
                className="w-full max-w-md rounded-xl border-2 border-blue-200"
              />


            </div>
          </div>
        </motion.div>

        <div className="mb-28">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Custom Development FAQs
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border-b border-gray-200 pb-4 cursor-pointer"
                onClick={() => toggle(i)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-black" />
                  </motion.div>
                </div>
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Build Your Custom Solution?
            </h3>
            <p className="text-blue-100 mb-8">
              Let's create a web application that transforms your business
            </p>
            <Link href="/get-free-consultation" >
              <motion.div

                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-black px-8 py-4 rounded-full font-bold transition-colors"
                aria-label="Contact for custom web development consultation"
              >
                Start Your Project Now →
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}