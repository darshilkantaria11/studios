"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { SparklesIcon, ChatBubbleLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { CheckBadgeIcon } from '@heroicons/react/24/solid'
import { FaWhatsapp } from 'react-icons/fa'

export default function GrowthSection() {


    const features = [
        {
            title: "Product Management",
            desc: "Easily add, update, or remove products with unlimited listings and up to 10 categories.",
        },
        {
            title: "Admin Dashboard",
            desc: "Get daily order and revenue insights with built-in analytics and reporting.",
        },
        {
            title: "SEO & Visibility",
            desc: "On-page SEO with structured data markup helps boost your search engine rankings.",
        },
        {
            title: "Mobile-First Design",
            desc: "Responsive store design ensures smooth shopping across all devices.",
        },
        {
            title: "Payments & Checkout",
            desc: "Seamless integration with Razorpay, Stripe and user-friendly cart experience.",
        },
        {
            title: "User Experience",
            desc: "Includes login with Google, wishlist, customer reviews, and order history.",
        },
        {
            title: "Sales Tools",
            desc: "Run promotions with coupon codes and notify customers with email alerts.",
        },
        {
            title: "Post-Launch Support",
            desc: "1 year of free hosting, 1-month support, and unlimited revisions until launch.",
        },
        {
            title: "CRM & API Ready",
            desc: "Optional integration with CRM tools, email, and WhatsApp for full automation.",
        },
    ];




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
                        How DK Studios helped sellers 4X their sales with smart e-commerce stores
                    </p>
                </motion.div>

                {/* Comparison Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
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
                            With DK Studios Store
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
                <section className="bg-gray-100 py-14 px-6 md:px-20 rounded-3xl mb-16 relative overflow-hidden shadow-xl">
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Text Side */}
                        <div className="space-y-8">
                            <p className="text-blue-600 font-semibold uppercase tracking-wide text-xs">✨ Real Client Success</p>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
                                From <span className="text-red-500">Offline Bookings</span> to <span className="text-green-600">Fully Managed E-Store</span> in Just <span className="bg-black text-white inline-block px-2 rounded-xl">19 Days</span>
                            </h2>

                            <div className="space-y-6 border-l-2 border-blue-300 pl-6">
                                {[
                                    {
                                        title: "Before: Selling via DMs & WhatsApp",
                                        desc: "Scattered orders, no tracking, limited reach.",
                                    },
                                    {
                                        title: "After: Launched with DK E-Store",
                                        desc: "Mobile-optimized store for crystals, bracelets, and healing sessions.",
                                    },
                                    {
                                        title: "Result: Increased Bookings & Product Sales",
                                        desc: "More traffic, smoother checkout, and improved conversion.",
                                    },
                                    {
                                        title: "Ongoing: Everything Managed in One Dashboard",
                                        desc: "Clients book tarot & reiki sessions directly via custom forms.",
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
                                    href="/contact"
                                    className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
                                >
                                    Get Free Consultation to Start Your Store
                                </Link>
                            </div>
                        </div>

                        {/* Video/Image Side */}
                        <div className="p-2 overflow-hidden shadow-2xl bg-white">
                            <div className="w-full h-auto border-4 border-red-800">
                                <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                                    <source src="/cosmos.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="p-6 md:p-10 bg-gray-50">
                                <div className="text-center">
                                    <p className="text-lg text-gray-800 font-medium">
                                        “Our store now handles everything — product sales, tarot bookings, reiki appointments. <span className="font-semibold text-blue-700">DK Studios</span> made it all seamless.”
                                    </p>
                                    <span className="block mt-4 text-gray-600 font-semibold">– Chitrangdaa shany , Owner </span>
                                    <div className="mt-6">
                                        <a
                                            href="https://cosmostarothealing.com"
                                            target="_blank"
                                            className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition"
                                        >
                                            Visit cosmostarothealing.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* CTA Section */}
                <section className="bg-blue-50 py-12 px-6 md:px-20 rounded-3xl shadow-lg my-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                        Ready to Launch Your E-Commerce Store?
                    </h2>
                    <p className="text-gray-700 text-lg mb-8">
                        Transparent pricing. Scalable tech. Full ownership.
                    </p>
                    <Link
                        href="/pricing/e-commerce-website-pricing"
                        className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-8 py-4 rounded-full shadow-md transition-transform transform hover:scale-105"
                    >
                        View E-Commerce Pricing →
                    </Link>
                </section>


                <section className=" py-10 px-6 md:px-20 rounded-3xl   transition-shadow duration-300">
                    <div className="max-w-6xl mx-auto space-y-16">

                        {/* Header Section */}
                        <div className="text-center space-y-5 animate-fade-in-up">
                            <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm">
                                🚀 All-in-One Solution
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                Your Complete <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Ecommerce Toolkit</span>
                            </h2>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                                We build sales-focused ecommerce stores with seamless automation, powerful integrations, and stunning design — ready to scale.
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
                                    <FaWhatsapp className="w-8 h-8 text-green-600" />
                                </div>

                                {/* Text Content */}
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 ">
                                        <h3 className="text-2xl font-bold">Get Verified on WhatsApp </h3>
                                        <CheckBadgeIcon className="w-6 h-6 text-[#147ffe]" title="Official WhatsApp Verified" />

                                    </div>
                                    <p className="text-sm opacity-90 leading-relaxed ">
                                        We help you set up your <span className="font-semibold underline underline-offset-2">official WhatsApp Business account with the verified blue tick</span>.
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
                                        <FaWhatsapp className="w-8 h-8 text-green-600" />
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
                                        We help you set up your <span className="font-semibold underline underline-offset-2">official WhatsApp Business account with the verified blue tick</span>.
                                        Boost your brand's credibility, automate order updates and abandoned cart reminders, and give customers real-time support — all through a trusted, official channel that drives more conversions.
                                    </p>
                                </div>
                            </div>
                        </div>


                        {/* CTA Section */}

                    </div>


                </section>
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
                            Join dozens of thriving online stores we&apos;ve helped grow with smart tools and seamless automation. Let&apos;s build your success story today!
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-black px-8 py-4 rounded-full font-bold transition-colors"
                        >
                            Get Your Free Ecommerce Consultation →
                        </motion.button>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
