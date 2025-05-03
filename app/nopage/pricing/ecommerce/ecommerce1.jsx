"use client";

import { CheckCircle, ChevronRight, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EcommercePricingTiers = () => {
    const router = useRouter();

    const tiers = [
        {
            name: "Starter",
            price: "$1799",
            features: [
                "Up to 5 Product Categories ",
                "Unlimited Products per Category",
                "5GB Image Storage",
                "On-Page SEO for Product Visibility",
                "Payment Gateway Integration (e.g., Stripe, Razorpay)",
                "User-Friendly Shopping Cart & Checkout",
                "Email Order Notifications to Customer & Store Owner",
                "Responsive Design for Mobile & Desktop",
                "Admin Panel Setup to Add, Update, Delete Products",
                "Login with Google for Customers",
                "My Orders Page with Order History & Cancel Option",
                "1 Year Free Hosting",
                "Unlimited Revisions Until Launch"
            ],
            color: "from-blue-100 to-blue-50",
            popular: false
        },
        {
            name: "Growth",
            price: "$2199",
            features: [
                "Everything in Starter Plan",
                "7–10 Product Categories",
                "10GB Image Storage",
                "Admin Dashboard with Daily Metrics (Orders, Revenue, etc.)",
                "Invoice Generator for Customer Orders",
                "Advanced SEO with Structured Data Markup",
                "Add to Favourite Functionality for Customers",
                "Product Ratings with Customer Reviews",
                "Coupon & Discount Code System",
                "Order Management Dashboard",
                "1-Month Post-Launch Technical Support",
                "30 Days Unlimited Revisions"
            ],
            color: "from-purple-100 to-purple-50",
            popular: true
        },
        {
            name: "Enterprise",
            price: "$2699+",
            features: [
                "Everything in Growth Plan",
                "Unlimited Product Categories & Listings",
                "Advanced Admin Dashboard (Real-Time Sales, Traffic, Inventory)",
                "Custom CRM Integration & API Support",
                "Role-Based Admin Access (e.g., Product Manager, Order Handler)",
                "Advanced Invoice & Tax Rules Generator",
                "Custom Landing Pages for Campaigns or Products",
                "3 Months Free Technical Support Post-Launch",
                "Priority Support with Dedicated Account Manager",
                "Performance Optimization & Speed Enhancements",
                "Tailored Features as per your Specific Business Needs"
            ],
            color: "from-orange-100 to-orange-50",
            popular: false
        }

    ];

    const faqs = [
        {
            question: "Will my e-commerce website accept online payments?",
            answer: "Yes. All plans include secure payment gateway integration such as Stripe, PayPal, or Razorpay."
        },
        {
            question: "Can I manage orders and inventory myself?",
            answer: "Absolutely. You'll receive a simple dashboard to add, remove, or update products and manage orders."
        },
        {
            question: "Do I need to buy hosting separately?",
            answer: "No. All packages include 1 year of fast, secure hosting — handled by us."
        },
        {
            question: "Can I request custom features?",
            answer: "Yes. Especially in the Enterprise plan, we tailor functionality to fit your unique business needs."
        },
        {
            question: "Will my site be mobile-friendly?",
            answer: "Definitely. Every e-commerce website we build is optimized for both mobile and desktop."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);
    const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

    return (
        <div className="min-h-screen ">
            <div className="container mx-auto px-4 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20 max-w-4xl mx-auto"
                >
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Sell Smarter, Not Harder
                        </span>
                        <br />
                        Launch Your Online Store with Confidence
                    </h1>
                    <p className="text-lg text-gray-600 mt-2 mb-8">
                        Beautifully built, conversion-focused, and optimized for growth — your e-commerce success starts here.
                    </p>
                    <div className="mb-2 text-white text-center">
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
                                            ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-xl'
                                            : 'bg-gray-900 hover:bg-gray-800'}
                  `}
                                    onClick={() => router.push(`/get-started?plan=${tier.name.toLowerCase()}`)}
                                >
                                    Get Started with {tier.name}
                                    <ChevronRight className="w-4 h-4 inline-block ml-2" />
                                </motion.button>
                            </div>

                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-2xl pointer-events-none transition-all duration-300 ease-in-out" />
                        </motion.div>
                    ))}
                </div>

                <h2 className="text-3xl mt-8 font-bold text-center text-gray-900 mb-10">E-commerce Website FAQs</h2>
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

export default EcommercePricingTiers;