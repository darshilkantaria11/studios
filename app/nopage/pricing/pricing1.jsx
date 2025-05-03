"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { Code, ShoppingCart, TrendingUp, ChevronRight, ChevronDown, Star } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function PricingPage() {
    const pricingOptions = [
        {
            title: "Website Development",
            color: "bg-orange-500",
            icon: <Code className="w-8 h-8" />,
            startingPrice: "$999",
            link: "/pricing/website-development-pricing",
            popular: false
        },
        {
            title: "E-Commerce Websites",
            color: "bg-blue-600",
            icon: <ShoppingCart className="w-8 h-8" />,
            startingPrice: "$1,799",
            link: "/pricing/e-commerce-website-pricing",
            popular: true
        },
        {
            title: "SEO & Growth",
            color: "bg-lime-600",
            icon: <TrendingUp className="w-8 h-8" />,
            startingPrice: "$299/month",
            link: "/pricing/seo-pricing",
            popular: false
        }
    ];

    const faqs = [
        {
            question: "When do I need to make a payment?",
            answer: "We request full payment only after the project is completed and you're fully satisfied with the results. This approach ensures you have complete confidence in our work before any payment is made."
        },
        {
            question: "How do you handle hosting and domain services?",
            answer: "We take care of purchasing and setting up your hosting and domain services on your behalf. Once the project is completed, we provide you with full access and ownership details."
        },
        {
            question: "Are there any hidden or additional costs?",
            answer: "No. All costs are transparently outlined in the initial proposal. Any additional features or services will be discussed and agreed upon before implementation."
        },
        {
            question: "Can you accommodate a one-page website or landing page?",
            answer: "Absolutely. We offer customized solutions for one-page websites or landing pages at a reduced rate. Contact us to discuss your specific needs."
        },
        {
            question: "How do you ensure website security and performance?",
            answer: "We implement best practices for website security, including SSL certificates and regular updates. Our hosting solutions are optimized for performance, ensuring fast load times and reliability."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);
    const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-4 py-10">
                <motion.h1 className="text-4xl font-bold text-center mb-6">
                    Clear, Simple Pricing — No Surprises
                </motion.h1>
                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-6">
                    We offer flexible pricing to match your business needs and budget. Whether you're just starting out or scaling fast, we've got a plan that works.
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

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {pricingOptions.map((option) => (
                        <motion.div
                            key={option.title}
                            whileHover={{ scale: 1.05 }}
                            className={`relative group ${option.color} rounded-2xl p-6 text-white shadow-xl transform transition-all`}
                        >
                            {/* Most Popular Badge */}
                            {/* {option.popular && (
                                <div className="absolute -top-3 right-3 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                    <Star className="inline w-3 h-3 mr-1" /> Most Popular
                                </div>
                            )} */}
                            <Link href={option.link}>
                                <div className="flex flex-col h-full justify-between">
                                    <div>
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="p-3 rounded-xl bg-white/20">
                                                {option.icon}
                                            </div>
                                            <h2 className="text-2xl font-bold">{option.title}</h2>
                                        </div>
                                        <p className="text-3xl font-semibold mb-4">Starts at <span className="font-bold text-white">{option.startingPrice}</span></p>
                                    </div>
                                    <div className="mt-6 font-semibold flex items-center gap-2 text-white">
                                        <span>Explore All Packages</span>
                                        <ChevronRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>


                <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Pricing FAQs</h2>
                <div className="max-w-4xl mx-auto space-y-6">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="border-b border-gray-200 pb-4 cursor-pointer"
                            onClick={() => toggle(i)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                                <motion.div animate={{ rotate: openIndex === i ? 180 : 0 }}>
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
                <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-20 px-6 rounded-2xl shadow-2xl mb-10">
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