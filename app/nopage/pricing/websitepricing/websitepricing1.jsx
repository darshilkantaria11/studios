"use client";

import { CheckCircle, ChevronRight, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PricingTiers = () => {
    const router = useRouter();

    const tiers = [
        {
            name: "Starter",
            price: "$999",
            features: [
                "5–7 Custom Pages Designed to Match Your Brand",
                "On-Page SEO for Higher Google Rankings",
                "Social Media Integration",
                "Interactive Contact Form",
                "Fast Loading Speeds",
                "Google Indexing & Analytics Setup",
                "1 Year Free Hosting Included",
                "WhatsApp Chat Integration",
                "Unlimited Revisions Until Launch"
            ],
            color: "from-blue-100 to-blue-50",
            popular: false
        },
        {
            name: "Growth",
            price: "$1299",
            features: [
                "Everything in Starter Plan",
                "12–15 Pages for More Content and Expansion",
                "Advanced SEO for Better Visibility",
                "Integrated Blog System",
                "Custom Booking Forms",
                "Priority Development Timeline",
                "Dedicated Project Manager",
                "1-Month Post-Launch Support",
                "Unlimited Revisions for 30 Days After Launch"
            ],
            color: "from-purple-100 to-purple-50",
            popular: true
        },
        {
            name: "Enterprise",
            price: "$1699+",
            features: [
                "Everything in Growth Plan",
                "Unlimited Pages for Large-Scale Projects",
                "Tailored Solutions Based on Your Unique Business Requirements",
                "3rd Party API Integrations (e.g. CRMs, Payment Systems)",
                "Ongoing Performance & Analytics Dashboard",
                "24/7 Premium Support"
            ],
            color: "from-orange-100 to-orange-50",
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
        <div className="min-h-screen">
            <div className="container mx-auto px-4 py-12">
                {/* Hero Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20 max-w-4xl mx-auto"
                >
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Get Your Website Done Right
                        </span>
                        <br />
                        Without the Headache
                    </h1>
                    <p className="text-lg text-gray-600 mt-2 mb-8">
                        Professionally built, mobile-friendly, and ready to grow your business — all for a predictable price.
                    </p>
                    <div className=" mb-2  text-white text-center ">
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
                </motion.div>

                {/* Pricing Grid */}
                <div className="grid lg:grid-cols-3 gap-8 mb-20">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`relative bg-gradient-to-b ${tier.color} rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out group overflow-hidden`}
                        >
                            {tier.popular && (
                                <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-1 rounded-bl-xl">
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

                                {/* Features List */}
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

                                {/* CTA Button */}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-300 ease-in-out
                    ${tier.popular
                                            ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-xl'
                                            : 'bg-gray-900 hover:bg-gray-800'}
                  `}
                                    onClick={() => router.push(`/get-started?plan=${tier.name.toLowerCase()}`)}
                                >
                                    Get Started with {tier.name}
                                    <ChevronRight className="w-4 h-4 inline-block ml-2" />
                                </motion.button>
                            </div>

                            {/* Smooth Hover Border */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-2xl pointer-events-none transition-all duration-300 ease-in-out" />
                        </motion.div>
                    ))}
                </div>

                <h2 className="text-3xl mt-8 font-bold text-center text-gray-900 mb-10">Website Development Pricing FAQs</h2>
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
                {/* Final CTA Section */}
                <div className="mt-20 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl py-16 px-6 shadow-lg">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                    >
                        Still Have Questions?
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600 mb-8 max-w-xl mx-auto"
                    >
                        Let's hop on a quick call to discuss your goals and how we can help — no strings attached.
                    </motion.p>
                    <Link href="/contact">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition"
                        >
                            Get Free Consultation →
                        </motion.div>
                    </Link>
                </div>


            </div>
        </div>
    );
};

export default PricingTiers;
