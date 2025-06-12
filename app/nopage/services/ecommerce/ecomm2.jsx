"use client";

import Link from 'next/link';
import Image from 'next/image';
import { SparklesIcon, ChatBubbleLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { CheckBadgeIcon } from '@heroicons/react/24/solid'
import { FaWhatsapp } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

import { useState } from 'react';

export default function GrowthSection() {

    const features = [
        {
            title: "E-commerce Product Management",
            desc: "Easily add, update, or remove products with unlimited listings and up to 10 categories in your e-commerce store.",
        },
        {
            title: "Admin Dashboard",
            desc: "Get daily order and revenue insights with built-in analytics and reporting for your e-commerce business.",
        },
        {
            title: "SEO & Visibility",
            desc: "Our e-commerce development company implements on-page SEO with structured data markup to boost your search rankings.",
        },
        {
            title: "Mobile-First Design",
            desc: "Responsive e-commerce store design ensures smooth shopping across all devices.",
        },
        {
            title: "Payments & Checkout",
            desc: "Seamless integration with Razorpay, Stripe and user-friendly cart experience for your online store.",
        },
        {
            title: "User Experience",
            desc: "Includes login with Google, wishlist, customer reviews, and order history in your e-commerce platform.",
        },
        {
            title: "Sales Tools",
            desc: "Run promotions with coupon codes and notify customers with email alerts through your e-commerce website.",
        },
        {
            title: "Post-Launch Support",
            desc: "1 year of free hosting, 1-month support, and unlimited revisions until launch from our e-commerce development team.",
        },
        {
            title: "CRM & API Ready",
            desc: "Optional integration with CRM tools, email, and WhatsApp for full automation of your e-commerce operations.",
        },
    ];


    const faqs = [
        {
            question: "Can I request changes after my e-commerce site is delivered?",
            answer: "Yes, we provide free revisions after delivery. Whether it's product changes, layout tweaks, or new sections — our e-commerce development company makes sure everything looks and works exactly how you want it."
        },
        {
            question: "Is hosting included for my e-commerce store or do I need to buy it separately?",
            answer: "Free basic hosting is included in all e-commerce packages from our development company. It's fast and secure. If you need advanced features like high traffic support or custom email, we'll guide you accordingly."
        },
        {
            question: "Does your e-commerce development company help with buying a domain?",
            answer: "Yes, if you don't already own one, we help you choose and purchase the best domain for your e-commerce brand. We handle all the technical work so you stay stress-free."
        },
        {
            question: "Will I be able to manage products and orders myself in my e-commerce store?",
            answer: "Yes. You'll get a clean, easy-to-use dashboard where you can add products, manage orders, apply discounts, and track everything — no coding or tech skills needed for your online store."
        },
        {
            question: "Will my e-commerce website work on mobile and load fast?",
            answer: "Absolutely. Your store will be fully responsive and optimized for speed by our e-commerce development experts — ensuring fast loading times and a smooth shopping experience on all devices."
        },
        {
            question: "Can I accept online payments like UPI, cards, or COD in my e-commerce store?",
            answer: "Yes. Our e-commerce development company integrates Razorpay, Paytm, Cashfree or any payment gateway you prefer. Your customers can pay using UPI, cards, wallets, or even opt for cash on delivery."
        },
        {
            question: "Can I connect WhatsApp for order updates or support in my e-commerce platform?",
            answer: "Yes. We integrate WhatsApp for order confirmation, customer chat, and even abandoned cart recovery in your online store. It helps increase sales and builds trust with your buyers."
        },
        {
            question: "Is my e-commerce website secure?",
            answer: "Yes. Every store built by our e-commerce development company comes with SSL encryption, protection against spam/bots, and daily backups. Your customer data and payments are always safe."
        },
        {
            question: "Does your e-commerce development company offer support after launch?",
            answer: "Of course. We provide lifetime support for basic fixes, updates, or help. Whether you need to upload a new product or fix a layout issue in your online store — we're just a message away."
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
                        From Neighborhood Shop to  <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Online Sales Machine
                        </span> 🛒
                    </h2>
                    <p className="text-sm lg:text-xl text-gray-600">
                        How Designuix, a leading e-commerce development company, helped sellers 4X their sales with smart online stores
                    </p>
                </motion.div>

                {/* Comparison Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 overflow-x-hidden">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className="bg-red-50 p-8 rounded-2xl border-2 border-red-200 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 text-sm">
                            Without E-commerce Store
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-red-600">Growth Bottlenecks</h3>
                        <ul className="space-y-4">
                            {[
                                "📦 Limited to local customers & footfall",
                                "📞 Manual order taking on WhatsApp/Instagram",
                                "🚫 No cart, no product filters, no tracking",
                                "💸 Missed out on national/international sales"
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
                            With Designuix Store
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-green-600">Sales Amplified</h3>
                        <ul className="space-y-4">
                            {[
                                "🛍️ Sell 24/7 to anyone, anywhere",
                                "📱 Mobile-first design with secure payment gateway",
                                "🚚 Live pincode check, order tracking, auto-updates",
                                "📊 Boosted conversions with upsells, reviews & fast checkout"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700">
                                    <span className="text-green-500 text-xl">✓</span> {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Success Story */}
               <section className="bg-green-50 py-14 px-6 md:px-20 rounded-3xl mb-16 relative overflow-hidden shadow-xl">
  <p className="text-blue-600 font-semibold uppercase tracking-wide text-xs mb-2">✨ Real Client Success</p>
  
  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

    {/* Video Section */}
    <div className="order-1 lg:order-2 p-2 overflow-hidden shadow-2xl bg-white rounded-xl">
      <div className="w-full h-auto border-4 border-red-800 rounded-xl overflow-hidden">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/cosmos.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="p-6 md:p-10 bg-gray-50 text-center">
        <p className="text-lg text-gray-800 font-medium">
          "We went from scattered orders to a streamlined online store handling crystals, tarot, and healing sessions — all thanks to <span className="font-semibold text-blue-700">Designuix</span>. Their e-commerce expertise brought everything together seamlessly."
        </p>
        <span className="block mt-4 text-gray-600 font-semibold">– Chitrangdaa Shany, Founder</span>
        <div className="mt-6">
          <Link
            href="https://cosmostarothealing.com"
            target="_blank"
            title="Visit Cosmos Tarot Healing E-commerce Website"
            className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition"
          >
            Visit cosmostarothealing.com
          </Link>
        </div>
      </div>
    </div>

    {/* Text Section */}
    <div className="order-2 lg:order-1 space-y-8">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
        From <span className="text-red-500">Offline DMs</span> to <span className="text-green-600">Fully Automated E-Store</span> in Just <span className="bg-black text-white inline-block px-2 rounded-xl">19 Days</span>
      </h2>

      <div className="space-y-6 border-l-2 border-blue-300 pl-6">
        {[
          {
            title: "Before: Manual Orders via DMs & WhatsApp",
            desc: "Unorganized, hard to scale, and no payment tracking.",
          },
          {
            title: "After: Custom Store Launched by Designuix",
            desc: "Responsive store for selling crystals, bracelets, and services like tarot & reiki.",
          },
          {
            title: "Results: More Traffic, More Orders",
            desc: "Visitors can explore products & book sessions easily with secure checkout.",
          },
          {
            title: "Now: Everything Managed in One Dashboard",
            desc: "From product orders to bookings — all handled in one place.",
          },
        ].map((step, idx) => (
          <div key={idx} className="relative pl-4">
            <div className="absolute -left-[14px] top-2 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-md"></div>
            <p className="font-semibold text-base text-gray-800">{step.title}</p>
            <p className="text-sm text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="pt-6">
        <Link
          href="/get-free-consultation"
          title="Get Free E-commerce Development Consultation"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
        >
          Get Your Free Store Consultation →
        </Link>
      </div>
    </div>

  </div>
</section>


                {/* CTA Section */}
                {/* <section className="bg-blue-50 py-12 px-6 md:px-20 rounded-3xl shadow-lg my-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                        Ready to Launch Your E-Commerce Store?
                    </h2>
                    <p className="text-gray-700 text-lg mb-8">
                        Transparent pricing. Scalable tech. Full ownership from our e-commerce development company.
                    </p>
                    <Link
                        href="/pricing/e-commerce-website-pricing"
                        title="View E-commerce Development Pricing"
                        className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-8 py-4 rounded-full shadow-md transition-transform transform hover:scale-105"
                    >
                        View E-Commerce Pricing →
                    </Link>
                </section> */}


                <section className=" py-10 px-6 md:px-20 rounded-3xl   transition-shadow duration-300">
                    <div className="max-w-6xl mx-auto space-y-16">

                        {/* Header Section */}
                        <div className="text-center space-y-5 animate-fade-in-up">
                            <span className="inline-block bg-blue-100 text-blue-900 px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm">
                                🚀 All-in-One Solution
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                Your Complete <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Ecommerce Toolkit</span>
                            </h2>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                                Our e-commerce development company builds sales-focused online stores with seamless automation, powerful integrations, and stunning design — ready to scale.
                            </p>
                        </div>

                        {/* Feature Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-blue-100"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="bg-blue-50 p-2.5 rounded-lg shadow-inner">
                                            <SparklesIcon className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* WhatsApp Integration */}
                        <div className="hidden md:block bg-black p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                            {/* Decorative Background Blurs */}
                            <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full -m-8" />
                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full -m-10" />

                            <div className="relative z-10 flex flex-col md:flex-row items-start gap-6 text-white">
                                {/* Icon Block */}
                                <div className="bg-white p-4 rounded-full shadow-xl">
                                    <FaWhatsapp className="w-8 h-8 text-green-600" title="WhatsApp Integration" />
                                </div>

                                {/* Text Content */}
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 ">
                                        <h3 className="text-2xl font-bold">Get Verified on WhatsApp </h3>
                                        <CheckBadgeIcon className="w-6 h-6 text-[#147ffe]" title="Official WhatsApp Verified" />
                                    </div>
                                    <p className="text-sm opacity-90 leading-relaxed ">
                                        Our e-commerce development company helps you set up your <span className="font-semibold underline underline-offset-2">official WhatsApp Business account with the verified blue tick</span>.
                                        Boost your brand's credibility, automate order updates and abandoned cart reminders, and give customers real-time support — all through a trusted, official channel that drives more conversions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="md:hidden block bg-black p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                            {/* Decorative Background Blurs */}
                            <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full -m-8" />
                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full -m-10" />

                            <div className="relative z-10 flex flex-col md:flex-row items-start gap-6 text-white">
                                {/* Icon Block */}
                                <div className="flex justify-around">
                                    <div className="bg-white p-4 rounded-full shadow-xl mr-4">
                                        <FaWhatsapp className="w-8 h-8 text-green-600" title="WhatsApp Integration" />
                                    </div>
                                    <h3 className="text-2xl font-bold">
                                        Get Verified on{' '}
                                        <span className="inline-flex items-center gap-1">
                                            WhatsApp
                                            <CheckBadgeIcon className="w-6 h-6 text-[#147ffe]" title="Official WhatsApp Verified" />
                                        </span>
                                    </h3>
                                </div>

                                {/* Text Content */}
                                <div className="space-y-2">
                                    <p className="text-sm opacity-90 leading-relaxed ">
                                        Our e-commerce development company helps you set up your <span className="font-semibold underline underline-offset-2">official WhatsApp Business account with the verified blue tick</span>.
                                        Boost your brand's credibility, automate order updates and abandoned cart reminders, and give customers real-time support — all through a trusted, official channel that drives more conversions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

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

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl"
                >
                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-3xl font-bold text-white mb-4">
                            Ready to Skyrocket Your Ecommerce Sales?
                        </h3>
                        <p className="text-blue-100 mb-8">
                            Join dozens of thriving online stores our e-commerce development company has helped grow with smart tools and seamless automation. Let's build your success story today!
                        </p>
                        <Link href="/get-free-consultation" title="Get Free E-commerce Development Consultation">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-black px-8 py-4 rounded-full font-bold transition-colors"
                            >
                                Get Your Free Ecommerce Consultation →
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}