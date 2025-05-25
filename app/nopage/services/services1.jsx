"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { Code, ShoppingCart, TrendingUp, ChevronRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function ServicesPage() {
    const services = [
        {
            title: "Website Development",
            color: "bg-orange-500",
            icon: <Code className="w-8 h-8" />,
            features: [
                "Works perfectly on all devices (mobile, tablet, desktop)",
                "Built to show up higher on Google",
                "Custom design that matches your brand and style",
                "Fast, secure, and built using the latest technology"
            ],
            link: "/services/website-development-services"
        },
        {
            title: "E-Commerce Websites",
            color: "bg-blue-600",
            icon: <ShoppingCart className="w-8 h-8" />,
            features: [
                "Easily add, edit, or remove products anytime",
                "Built-in secure payment options (like UPI, cards, etc.)",
                "Modern, attractive store design to match your business",
                "Designed to help turn visitors into buyers"
            ],
            link: "/services/ecommerce"
        },
        {
            title: "SEO & Growth",
            color: "bg-lime-600",
            icon: <TrendingUp className="w-8 h-8" />,
            features: [
                "Helps your business show up on Google search",
                "Brings more traffic from your city or target market",
                "Simple reports that show your growth and results",
                "We handle writing, keywords, and promotion for you"
            ],
            link: "/services/seo"
        }
    ];


    const faqs = [
        {
            question: "What types of websites can you build?",
            answer: "We can build all kinds of websites — business sites, online stores, blogs, portfolios, and more. Whatever your need, we’ll design and build a custom site that fits your goals and looks great."
        },
        {
            question: "Do you offer a free consultation and design templates?",
            answer: "Yes! We offer a free consultation to understand your needs. We’ll also show you free design templates that match your style or industry. You pick what you like, and we customize it for you."
        },
        {
            question: "Is hosting included in your web development packages?",
            answer: "Yes, we include free basic hosting to get your site online with no extra cost. This is perfect for small businesses. Later, if you need more power, we can help upgrade."
        },
        {
            question: "How long will it take to complete my website?",
            answer: "Once we receive your final content and changes, we deliver the complete website within 2 weeks. We work fast so you can launch quickly."
        },
        {
            question: "What maintenance and support do you provide after the site is live?",
            answer: "We give free lifetime support for small edits like text or image changes. For bigger updates, we charge a small fee. You’ll always have help when you need it."
        },
        {
            question: "Will my website be search-engine friendly?",
            answer: "Yes. We build your site with SEO best practices so it shows up better on Google. That means more visitors and better results for your business."
        },
        {
            question: "How will we communicate during the project?",
            answer: "We keep in touch regularly through email, WhatsApp, or video calls — whatever works best for you. We give updates, ask for feedback, and make sure you always know what's happening."
        },
        {
            question: "How do you handle pricing and costs? Are there any hidden fees?",
            answer: "We’re 100% transparent. You get a clear price before we start. No hidden charges. If anything extra comes up, we’ll let you know in advance."
        },
        {
            question: "How do you ensure my website is secure?",
            answer: "Your website comes with a free SSL certificate (so it uses HTTPS). Our hosting includes security features like firewalls and backups to keep your site safe."
        }
    ];



    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-4 py-8 ">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-6"
                >
                    Services That Drive Real Results

                </motion.h1>
                <p className="text-center text-gray-600 text-md lg:text-lg mb-6 max-w-3xl mx-auto">
                    We don&apos;t just build websites — we build businesses. Our services are tailored to help you convert visitors into customers and grow fast.

                </p>

                <div className=" mb-12 text-white text-center ">
                    <Link href="/">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl transition cursor-pointer"
                        >
                            Get Free Consultation →
                        </motion.div>
                    </Link>
                </div>




                {/* Services Section */}
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05 }}
                            // transition={{ delay: index * 0.1 }}
                            className={`group relative ${service.color}  rounded-2xl p-6 text-white shadow-xl`}
                        >
                            <Link href={service.link}>
                                <div className="flex flex-col h-full justify-between">
                                    <div>
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="p-3 rounded-xl bg-white/20">
                                                {service.icon}
                                            </div>
                                            <h2 className="text-2xl font-bold">{service.title}</h2>
                                        </div>
                                        <ul className="space-y-3">
                                            {service.features.map((feature, i) => (
                                                <li key={i} className="flex items-center gap-3 text-white/90">
                                                    <ChevronRight className="w-4 h-4" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mt-6 font-semibold flex items-center gap-2">
                                        Explore More <ChevronRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* FAQ Section */}
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

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-20 px-6 rounded-2xl shadow-2xl mb-10">
                    <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold mb-6"
                    >
                        Let's Build Something Incredible
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="mb-8 max-w-xl mx-auto text-lg"
                    >
                        Whether you need a powerful new website, an online store that sells, or Google rankings that matter — we’re your tech team on demand.
                    </motion.p>

                    <Link href="/">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block bg-white text-black font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl transition cursor-pointer"
                        >
                            Get Free Consultation →
                        </motion.div>
                    </Link>
                </div>
            </div>
        </div>
    );
}