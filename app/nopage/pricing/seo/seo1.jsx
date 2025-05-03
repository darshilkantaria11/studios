// app/seo-pricing/page.tsx

"use client";

import { CheckCircle, ChevronRight, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SEOPricingTiers = () => {
    const router = useRouter();

    const tiers = [
        {
            name: "Starter SEO",
            price: "$333/month",
            features: [
                "Keyword Research for Up to 5 Pages",
                "On-Page Optimization (Titles, Meta, Headers)",
                "Basic Technical SEO (Speed, Mobile)",
                "Google Search Console Setup",
                "SEO-Optimized Sitemap Submission",
                "Monthly SEO Report",
                "1 Round of Revisions per Month"
            ],
            color: "from-green-100 to-green-50",
            popular: false
        },
        {
            name: "Growth SEO",
            price: "$666/month",
            features: [
                "Everything in Starter Plan",
                "Keyword Strategy for 10+ Pages",
                "Internal Linking Strategy",
                "Google Analytics Setup & Goals",
                "Local SEO Optimization (Google Business Profile)",
                "2 Blog Posts per Month (SEO Optimized)",
                "Technical SEO Audit & Fixes",
                "2 Rounds of Revisions per Month"
            ],
            color: "from-indigo-100 to-indigo-50",
            popular: true
        },
        {
            name: "Enterprise SEO",
            price: "$999/month",
            features: [
                "Everything in Growth Plan",
                "Advanced Keyword Cluster Mapping",
                "Content Strategy with 4 SEO Blogs per Month",
                "High-Quality Backlink Outreach",
                "Conversion Rate Optimization (CRO) Suggestions",
                "Competitor SEO Analysis",
                "Dedicated SEO Manager",
                "Priority Reporting & Strategy Calls",
                "Custom Technical Implementations as Needed"
            ],
            color: "from-yellow-100 to-yellow-50",
            popular: false
        }
    ];

    const faqs = [
        {
            question: "How long does it take to see SEO results?",
            answer: "SEO is a long-term strategy. You can start seeing measurable improvements in 3-6 months, depending on your industry and competition."
        },
        {
            question: "Is content included in the plans?",
            answer: "Yes. The Growth and Enterprise plans include monthly SEO-optimized blog posts to improve rankings and traffic."
        },
        {
            question: "Do I get reports and updates?",
            answer: "Absolutely. All plans come with monthly reports showing traffic, rankings, and action items completed."
        },
        {
            question: "Is this a one-time service or monthly?",
            answer: "The pricing shown is per month. SEO is most effective when implemented consistently over time."
        },
        {
            question: "Do you handle technical SEO fixes?",
            answer: "Yes. All plans include basic technical SEO, while Growth and Enterprise plans come with detailed audits and fixes."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);
    const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20 max-w-4xl mx-auto"
                >
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        <span className="bg-gradient-to-r from-green-600 to-indigo-600 bg-clip-text text-transparent">
                            Climb the Rankings
                        </span>
                        <br />
                        Grow Your Traffic with SEO That Works
                    </h1>
                    <p className="text-lg text-gray-600 mt-2 mb-8">
                        Transparent SEO pricing plans tailored to drive results, attract leads, and grow your business sustainably.
                    </p>
                    <div className="mb-2 text-white text-center">
                        <Link href="/">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-block bg-gradient-to-r from-green-600 to-indigo-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl transition cursor-pointer"
                            >
                                Get Free SEO Audit →
                            </motion.div>
                        </Link>
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8 mb-20">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`relative bg-gradient-to-b ${tier.color} rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out group overflow-hidden`}
                        >
                            {tier.popular && (
                                <div className="absolute top-0 right-0 bg-gradient-to-r from-indigo-600 to-green-600 text-white px-6 py-1 rounded-bl-xl">
                                    Most Popular
                                </div>
                            )}

                            <div className="p-8 h-full flex flex-col">
                                <div className="mb-8">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{tier.name}</h2>
                                    <div className="flex items-end gap-2">
                                        <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                                    </div>
                                </div>

                                <ul className="space-y-4 flex-1 mb-8">
                                    {tier.features.map((feature, fIndex) => (
                                        <motion.li
                                            key={fIndex}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.05 * fIndex }}
                                            className="flex items-start gap-3"
                                        >
                                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                            <span className="text-gray-700">{feature}</span>
                                        </motion.li>
                                    ))}
                                </ul>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-300 ease-in-out
                                        ${tier.popular
                                            ? 'bg-gradient-to-r from-indigo-600 to-green-600 hover:shadow-xl'
                                            : 'bg-gray-900 hover:bg-gray-800'}
                                    `}
                                    onClick={() => router.push(`/get-started?plan=${tier.name.toLowerCase().replace(" ", "-")}`)}
                                >
                                    Get Started with {tier.name}
                                    <ChevronRight className="w-4 h-4 inline-block ml-2" />
                                </motion.button>
                            </div>

                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-200 rounded-2xl pointer-events-none transition-all duration-300 ease-in-out" />
                        </motion.div>
                    ))}
                </div>

                <h2 className="text-3xl mt-8 font-bold text-center text-gray-900 mb-10">SEO Service FAQs</h2>
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
            </div>
        </div>
    );
};

export default SEOPricingTiers;
