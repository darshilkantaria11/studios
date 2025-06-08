"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { Code, ShoppingCart, TrendingUp, ChevronRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function ServicesPage() {



    const faqs = [
        {
            question: "Why should I hire a web design company instead of building it myself?",
            answer: "A professional web design company builds high-performing, mobile-friendly, and SEO-optimized websites that convert visitors into customers. DIY platforms often miss key features and long-term scalability."
        },
        {
            question: "What makes DK Studios different from other web design companies?",
            answer: "We combine modern design, speed optimization, and SEO in one package. Unlike typical agencies, we offer lifetime support and a personal touch with every project."
        },
        {
            question: "How much does web design cost?",
            answer: "Our web design packages start at just $999 for a basic website. Custom pricing is available based on your needs — whether it's a business site, e-commerce store, or something more advanced. No hidden charges, full transparency."
        },
        {
            question: "Can you redesign my existing website?",
            answer: "Absolutely. We specialize in redesigning outdated or underperforming websites into fast, modern, and sales-focused platforms that align with your brand."
        },
        {
            question: "Will my website work on all devices?",
            answer: "Yes. We build responsive websites that automatically adjust to mobile phones, tablets, and desktops. Your site will look perfect everywhere."
        },
        {
            question: "Do you offer eCommerce website design services?",
            answer: "Yes, we build full-featured online stores with secure payment gateways, product management, and responsive design using platforms like Shopify, WooCommerce, or custom code."
        },
        {
            question: "Do you include SEO services in your web design?",
            answer: "Yes. All our websites are SEO-ready with fast loading speed, proper heading structure, image optimization, and meta tags. We also offer advanced SEO plans if needed."
        },
        {
            question: "How do I choose the best web design company?",
            answer: "Look for proven experience, clear communication, SEO knowledge, and real reviews. DK Studios ticks all those boxes with satisfied clients and a strong design portfolio."
        },
        {
            question: "How long does it take a web design company to build a website?",
            answer: "Most websites take 10–14 business days depending on your content and features. We always deliver on time and keep you updated throughout."
        },
        {
            question: "What is included in your web design packages?",
            answer: "Our packages include custom design, responsive layout, SEO setup, contact forms, fast hosting, and basic on-page content. Add-ons like blogs, ecommerce, or animations are also available."
        },
        {
            question: "What industries do you work with?",
            answer: "We work with businesses in eCommerce, health, coaching, real estate, education, personal branding, and more. Every design is tailored to your industry needs."
        },
        {
            question: "Will I own the website after it's completed?",
            answer: "Yes. Once your project is complete and paid, you have full ownership of your website — domain, files, and content. No strings attached."
        },
        {
            question: "Do you provide custom website design or use templates?",
            answer: "We offer both options. You can choose a pre-designed layout to save time and cost, or we can create a fully custom website from scratch."
        },
        {
            question: "What if I don’t like the first design?",
            answer: "No problem. We include revisions in every package. Your satisfaction is our top priority, so we refine the design until you’re 100% happy."
        },
        {
            question: "Do you help with website content and images?",
            answer: "Yes. We can help write professional copy and provide high-quality stock images that fit your brand. You can also send us your own content."
        },
        {
            question: "Is it important to hire a local web design company?",
            answer: "While local can be helpful, results matter more. DK Studios serves clients globally with seamless online communication and delivery."
        },
        {
            question: "Can I see examples of websites you’ve built?",
            answer: "Of course! We have a full portfolio of past work available upon request, showcasing our range across industries and design styles."
        },
        {
            question: "Do you help with Google ranking and digital marketing?",
            answer: "Yes. Besides building SEO-friendly websites, we offer marketing services like keyword targeting, Google My Business setup, and ad strategy support."
        },
        {
            question: "How do I get started with your web design company?",
            answer: "It’s simple. Click 'Get Free Consultation' on our homepage or message us on WhatsApp. We’ll guide you step-by-step and get your project started right away."
        }
        ,
    ];



    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-4 py-8 ">


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