"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { Code, ShoppingCart, TrendingUp, ChevronRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function ServicesPage() {
  const services = [
    {
      title: "Website Development Services",
      color: "bg-orange-500",
      icon: <Code className="w-8 h-8" title="Web Development Icon" />,
      features: [
        "Responsive web development that works on all devices",
        "On-page SEO baked into every website build",
        "Custom designs aligned with your brand identity",
        "Fast, secure, and built with modern tech"
      ],
      link: "/services/custom-web-development-services"
    },
    {
      title: "E-Commerce Website Development",
      color: "bg-blue-600",
      icon: <ShoppingCart className="w-8 h-8" title="Ecommerce Icon" />,
      features: [
        "Manage products + SEO rich descriptions",
        "Secure payment integrations + SEO best practices",
        "Visually compelling store layouts",
        "Built to convert traffic into sales"
      ],
      link: "/services/ecommerce"
    },
    {
      title: "SEO & Growth Services",
      color: "bg-lime-600",
      icon: <TrendingUp className="w-8 h-8" title="SEO Icon" />,
      features: [
        "Local & global SEO services to boost rankings",
        "Data-driven growth with clear reporting",
        "Targeted keyword strategy + content support",
        "Full SEO campaigns to reach more customers"
      ],
      link: "/services/seo"
    }
  ];

  const faqs = [
    {
      question: "What is included in your web development and SEO services?",
      answer: "Our web development and SEO services include responsive site builds, on-page SEO, keyword research, performance optimization, and content readiness to help you rank and convert."
    },
    {
      question: "Will your web development and SEO services improve my Google rankings?",
      answer: "Yes. By integrating SEO into the website build—proper tags, speed, structure—we help your site rank higher on Google and attract real, targeted traffic."
    },
    {
      question: "Do you offer a free consultation for web development and SEO services?",
      answer: "Absolutely. We start with a free discussion to understand your goals, assess your needs, and explain how our web development and SEO services will support your growth."
    },
    {
      question: "How long does it take for web development and SEO services to deliver results?",
      answer: "Your website launches in 2–3 weeks. SEO results begin within 1–3 months depending on competition, but you’ll see measurable growth and traffic early on."
    },
    {
      question: "Are there any hidden costs in your web development and SEO services?",
      answer: "No hidden fees ever. You'll receive a full quote for our web development and SEO services before we start, and any additional requests are discussed upfront."
    },
    {
      question: "Can I upgrade my current website with your web development and SEO services?",
      answer: "Yes. Our web development and SEO services include website redesigns and SEO audits to refresh your existing site and improve its search visibility."
    },
    {
      question: "How do you support my business after providing web development and SEO services?",
      answer: "We offer ongoing support for updates, content, and SEO maintenance as part of our web development and SEO services—even after launch."
    },
    // New FAQs
    {
      question: "Do you offer content creation with your web development and SEO services?",
      answer: "Yes — we can produce SEO-optimized copy for pages, blogs, and product listings as part of our web development and SEO services."
    },
    {
      question: "Are your web development and SEO services suited for small businesses?",
      answer: "Definitely. Our web development and SEO services are tailored for startups and small businesses looking to establish or grow their online presence."
    },
    {
      question: "Will your web development and SEO services integrate with Google Analytics or Search Console?",
      answer: "Yes. We set up and configure Google Analytics and Search Console when delivering web development and SEO services so you can track traffic and performance."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">

        <motion.h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
          Web Development and SEO Services That Grow Your Business
        </motion.h1>

        <p className="text-center text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
          Our web development and SEO services create fast, secure sites optimized for both users and search engines—designed to drive long-term results.
        </p>

        <div className="text-center mb-12">
          <Link href="/get-free-consultation" title="Get Web Development and SEO Services">
            <motion.div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl transition scale-100 hover:scale-105">
              Get Free Consultation →
            </motion.div>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {services.map((s, idx) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.05 }} className={`${s.color} rounded-2xl p-6 text-white shadow-lg`}>
              <Link href={s.link} title={s.title}>
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="p-3 rounded-xl bg-white/20">{s.icon}</div>
                      <h2 className="text-2xl font-bold">{s.title}</h2>
                    </div>
                    <ul className="space-y-2 text-white/90">
                      {s.features.map((f,i)=><li key={i} className="flex items-center gap-2"><ChevronRight className="w-4 h-4" />{f}</li>)}
                    </ul>
                  </div>
                  <div className="mt-6 font-semibold flex items-center gap-2">
                    Explore → <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mb-32">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            FAQs About Our Web Development and SEO Services
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq,i)=>(
              <div key={i} className="border-b border-gray-200 pb-4 cursor-pointer" onClick={()=>toggle(i)}>
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                  <motion.div animate={{ rotate: openIndex===i?180:0 }} transition={{ duration:0.3 }}>
                    <ChevronDown className="w-5 h-5 text-black" />
                  </motion.div>
                </div>
                <AnimatePresence initial={false}>
                  {openIndex===i && (
                    <motion.div initial={{ height:0, opacity:0 }} animate={{ height:'auto', opacity:1 }} exit={{ height:0, opacity:0 }} transition={{ duration:0.3 }} className="overflow-hidden">
                      <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-16 px-6 rounded-2xl shadow-xl mb-10">
          <motion.h3 className="text-4xl font-bold mb-4">
            Ready to Start Our Web Development and SEO Services?
          </motion.h3>
          <motion.p className="mb-6 max-w-xl mx-auto text-lg">
            Whether you're launching a new site, building an online store, or boosting your rankings—we offer full web development and SEO services to meet your goals.
          </motion.p>
          <Link href="/get-free-consultation" title="Start Web Development and SEO Services">
            <motion.div className="inline-block bg-white text-black font-bold px-8 py-4 rounded-full shadow-lg transition hover:shadow-2xl">
              Get Free Consultation →
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
}
