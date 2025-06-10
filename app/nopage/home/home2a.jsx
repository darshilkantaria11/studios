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
        "Responsive on all devices (mobile, tablet, desktop)",
        "Optimized for fast load speed and SEO",
        "Fully custom UI/UX that fits your brand",
        "Built with modern, scalable tech stack",
      ],
      link: "/services/website-development-services",
    },
    {
      title: "E-Commerce Websites",
      color: "bg-blue-600",
      icon: <ShoppingCart className="w-8 h-8" />,
      features: [
        "Manage your products and orders with ease",
        "Integrated Razorpay payments and UPI options",
        "Attractive layout focused on boosting conversions",
        "SEO-friendly and mobile-optimized store design",
      ],
      link: "/services/ecommerce",
    },
    {
      title: "SEO & Growth",
      color: "bg-lime-600",
      icon: <TrendingUp className="w-8 h-8" />,
      features: [
        "Rank higher for 'Web Design Company' & similar terms",
        "Local SEO to target customers in your city",
        "Monthly growth and traffic reports",
        "On-page and off-page SEO handled by experts",
      ],
      link: "/services/seo",
    },
  ];


   



 

    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-4 py-8 ">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-6"
                >
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Web Design Company 
                        </span>{" "}Services Built for Results

                </motion.h2>
                <p className="text-center text-gray-600 text-sm lg:text-md mb-6 max-w-3xl mx-auto">
                    Whether you're starting from scratch or growing online, our expert web
          design services help you turn visitors into real paying customers. We
          specialize in websites that load fast, rank high, and actually sell.

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
            </div>
        </div>
    );
}














