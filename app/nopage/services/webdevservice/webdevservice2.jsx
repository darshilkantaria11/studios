// components/GrowthSection.tsx
"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

import { useState } from 'react';



export default function GrowthSection() {


  const faqs = [
    {
      question: "What types of websites do you build under Website Development?",
      answer: "We build all kinds of custom websites — business websites, landing pages, portfolio sites, service-based websites, and more. Each site is tailored specifically for your industry, goals, and audience."
    },
    {
      question: "Will my website work well on mobile phones and tablets?",
      answer: "Yes. Every website we build is 100% responsive, meaning it works perfectly on all screen sizes — mobiles, tablets, laptops, and desktops. It’s designed for a smooth user experience everywhere."
    },
    {
      question: "How fast can you deliver my website?",
      answer: "Most websites are completed within 10–14 days after we receive your final content. If you’re in a rush, we also offer express delivery. We keep the process fast and smooth without compromising on quality."
    },
    {
      question: "Can I request changes after the site is built?",
      answer: "Absolutely. We offer free revisions even after the website is delivered. Whether it’s a small tweak or a new section, we make sure the final result matches your expectations."
    },
    {
      question: "Is hosting included or do I need to buy it separately?",
      answer: "We include free basic hosting in all our website development packages. It's fast, secure, and perfect for small businesses. If you ever need an upgrade, we’ll guide you through it."
    },
    {
      question: "Do you help me get a domain name?",
      answer: "Yes. If you don’t already have a domain, we help you find and purchase the best one for your brand. We handle the entire process so you don’t have to worry about the technical stuff."
    },
    {
      question: "Will my website be optimized for speed and security?",
      answer: "Yes. Your site will be fast-loading, have HTTPS security with SSL, and include essential protections like anti-spam and firewall tools. It’s built using the latest modern tech."
    },
    {
      question: "What happens after the website is live? Do you provide support?",
      answer: "Yes. We provide free lifetime support for basic updates like changing text or images. You’ll always have us by your side. For bigger changes, we offer affordable upgrade packages."
    },
    {
      question: "What if I don’t have any content or images?",
      answer: "No worries! We can help with professional copywriting and use high-quality stock images if needed. If you already have content, we’ll polish it and make it look great."
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
            From Local Shop to <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Digital Empire
            </span> 🚀
          </h2>
          <p className="text-sm lg:text-xl text-gray-600">
            How Dkstudios help Businesses Scaled Revenue 3X With Professional Websites
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
              Without Website
            </div>
            <h3 className="text-2xl font-bold mb-4 text-red-600">Offline Limitations</h3>
            <ul className="space-y-4">
              {[
                "🚶‍♂️ Limited to walk-ins & local area",
                "📞 Depends on referrals or chance walk-ins",
                "📉 Unpredictable sales, low follow-up rate",
                "🐌 3–5% monthly growth, limited scale"
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
              With Dkstudios Website
            </div>
            <h3 className="text-2xl font-bold mb-4 text-green-600">Digital Transformation</h3>
            <ul className="space-y-4">
              {[
                "🌐 Reach 1000+ potential customers searching online daily",
                "📈 Average 10% conversion from visitors to paying customers",
                "📩 Collect leads 24/7 via contact forms & WhatsApp",
                "🚀 2X–3X faster growth with online visibility & reviews"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <span className="text-green-500 text-xl">✓</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>



        {/* Success Story */}

        <section className="bg-blue-50 py-14 px-6 md:px-20 rounded-3xl mb-16 relative overflow-hidden shadow-xl">

          <p className="text-blue-600 font-semibold uppercase tracking-wide text-xs mb-2">✨ Proven Impact</p>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Image Side */}
            <div className="order-1 lg:order-2 p-2 overflow-hidden shadow-2xl bg-white">
              {/* Video Section */}
              <div className="w-full h-auto shadow-2xl border-4 border-[#a0d8cb]">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/gulfside.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Text Section */}
              <div className="p-6 md:p-10 bg-gray-50">
                <div className="max-w-3xl mx-auto text-center">
                  <p className="text-lg md:text-xl text-gray-800 font-medium leading-relaxed">
                    “Partnering with <span className="font-semibold text-blue-700">DK Studios</span> was the best move we made. Their expertise took us from overlooked to fully booked in record time.”
                  </p>
                  <span className="block mt-4 text-gray-600 font-semibold">– Gulfside Painting, Sarasota, Florida</span>
                  <div className="mt-6">
                    <a
                      href="https://gulfsidepainting.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-800 transition"
                    >
                      Visit gulfsidepainting.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="order-2 lg:order-1 space-y-8">
              {/* <p className="text-blue-600 font-semibold uppercase tracking-wide text-xs">✨ Proven Impact</p> */}
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
                From <span className="text-red-500">Zero Visibility</span> to <span className="text-green-600">Fully Booked</span> in <span className="bg-black text-white p-2 rounded-xl">Just 6 Months</span>
              </h2>

              {/* Timeline Steps */}
              <div className="space-y-6 border-l-2 border-blue-200 pl-6">
                {[
                  {
                    title: "Starting Point: No Online Presence",
                    desc: "Relied solely on word-of-mouth referrals.",
                  },
                  {
                    title: "Our Solution: High-Performance Website",
                    desc: "Mobile-friendly, SEO-optimized, and conversion-focused.",
                  },
                  {
                    title: "Result: 20+ Major Projects Secured",
                    desc: "Successfully booked over 20 large-scale projects along with multiple small renovation jobs within just 6 months.",
                  },
                  {
                    title: "Ongoing: Steady Leads Flow",
                    desc: "Inquiries continue due to high search visibility.",
                  },
                ].map((step, idx) => (
                  <div key={idx} className="relative pl-4">
                    <div className="absolute -left-[14px] top-2 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-md"></div>
                    <p className="font-semibold text-base text-gray-800">{step.title}</p>
                    <p className="text-sm text-gray-600">{step.desc}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-6">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
                >
                  Get a Free Consultation
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </section>


        <section className="bg-blue-50 py-12 px-6 md:px-20 rounded-3xl shadow-lg my-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Ready to Build Your High-Converting Website?
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Transparent pricing. Proven results. No hidden fees.
          </p>
          <a
            href="/pricing/website-development-pricing"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-8 py-4 rounded-full shadow-md transition-transform transform hover:scale-105"
          >
            View Website Development Pricing →
          </a>
        </section>





        {/* Conversion Funnel */}
        {/* Why DK Studios Section */}
        <section className="mb-8 bg-gradient-to-br from-white via-blue-50 to-white py-20 px-6 md:px-12 rounded-3xl shadow-inner border border-blue-100">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Why Top Local Brands Trust <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                DK Studios
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
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{title}</h4>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-16">
              <a
                href="#contact"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold py-3 px-8 rounded-full transition shadow-md"
              >
                Let&apos;s Build Your Website That Sells →
              </a>
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
                Real Results. Real Business Growth.
              </h3>
              <p className="text-gray-600 mb-6 text-base leading-relaxed">
                Businesses working with <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">DK Studio</span> are gaining more traffic, converting more leads, and building lasting customer relationships — all through tailored, high-converting websites.
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

           
            <div className="relative  rounded-2xl overflow-hidden  flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-64 h-64rounded-full blur-3xl opacity-40"
                />
              </div>
              <img
                src="/growth.png"
                alt="Growth Chart"
                className="relative z-10 w-full max-w-md rounded-xl border-2 border-blue-200 "
              />
            </div>
          </div>
        </motion.div>



        <div className="mb-28">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10 ]">Frequently Asked Questions</h2>
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
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-blue-100 mb-8">
              Be part of the success stories we're proud to build. Start Your Project Now !
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 rounded-full font-bold  transition-colors"
            >
              Get Free Consultation →
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}