"use client";
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    const whatsappNumber = '7567393494';
    const whatsappText = encodeURIComponent("Hi, I'm interested in a free website consultation!");

    return (
        <footer className="bg-white border-t border-gray-100 relative px-4">
            <div className="container mx-auto px-4 py-16">
                {/* Main Footer Content */}
                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                    {/* Logo Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <Image src="/Logo1.png" alt="dkstudio Logo" width={120} height={40} />
                        </Link>
                        <motion.p
                            whileHover={{ x: 5 }}
                            className="text-gray-600 text-sm mb-4"
                        >
                            Transforming ideas into digital excellence since 2020
                        </motion.p>
                    </motion.div>

                    <div className="flex justify-between">
                        {/* Services Column */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className="text-gray-900 font-semibold mb-4">Services</h3>
                            <ul className="space-y-3">
                                <motion.li whileHover={{ x: 5 }}>
                                    <Link href="/services/web-development" className="text-gray-600 hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-clip-text hover:text-transparent transition-all">
                                        Web Development
                                    </Link>
                                </motion.li>
                                <motion.li whileHover={{ x: 5 }}>
                                    <Link href="/services/ui-ux-design" className="text-gray-600 hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-clip-text hover:text-transparent transition-all">
                                        UI/UX Design
                                    </Link>
                                </motion.li>
                                <motion.li whileHover={{ x: 5 }}>
                                    <Link href="/services/ecommerce" className="text-gray-600 hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-clip-text hover:text-transparent transition-all">
                                        E-commerce
                                    </Link>
                                </motion.li>
                                <motion.li whileHover={{ x: 5 }}>
                                    <Link href="/services/seo" className="text-gray-600 hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-clip-text hover:text-transparent transition-all">
                                        SEO Optimization
                                    </Link>
                                </motion.li>
                            </ul>
                        </motion.div>

                        {/* Company Column */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <h3 className="text-gray-900 font-semibold mb-4">Company</h3>
                            <ul className="space-y-3">
                                <motion.li whileHover={{ x: 5 }}>
                                    <Link href="/about" className="text-gray-600 hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-clip-text hover:text-transparent transition-all">
                                        About
                                    </Link>
                                </motion.li>
                                <motion.li whileHover={{ x: 5 }}>
                                    <Link href="/careers" className="text-gray-600 hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-clip-text hover:text-transparent transition-all">
                                        Careers
                                    </Link>
                                </motion.li>
                                <motion.li whileHover={{ x: 5 }}>
                                    <Link href="/blog" className="text-gray-600 hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-clip-text hover:text-transparent transition-all">
                                        Blog
                                    </Link>
                                </motion.li>
                                <motion.li whileHover={{ x: 5 }}>
                                    <Link href="/contact" className="text-gray-600 hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-clip-text hover:text-transparent transition-all">
                                        Contact
                                    </Link>
                                </motion.li>
                            </ul>
                        </motion.div>
                    </div>

                    {/* Contact Column */}
                    <div className="flex flex-col lg:items-center ">

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}

                        >
                            <h3 className="text-gray-900 font-semibold mb-4">Contact</h3>
                            <ul className="space-y-4">
                                <motion.li whileHover={{ x: 5 }} className="flex items-center gap-2">
                                    <Mail className="w-5 h-5 text-blue-600" />
                                    <a href="mailto:contact@devstudio.com" className="text-gray-600">
                                        contact@devstudio.com
                                    </a>
                                </motion.li>
                                <motion.li whileHover={{ x: 5 }} className="flex items-center gap-2">
                                    <Phone className="w-5 h-5 text-purple-600" />
                                    <a
                                        href={`https://wa.me/91${whatsappNumber}?text=${whatsappText}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600"
                                    >
                                        +91 {whatsappNumber}
                                    </a>
                                </motion.li>
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* Social Icons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex justify-center gap-6 mb-8"
                >
                    {[
                        { icon: <Instagram />, link: "https://www.instagram.com/yourpage" },
                        { icon: <Facebook />, link: "https://www.facebook.com/yourpage" },
                        { icon: <Linkedin />, link: "https://www.linkedin.com/in/yourprofile" },
                        { icon: <Twitter />, link: "https://twitter.com/yourprofile" },
                    ].map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5, scale: 1.1 }}
                            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gradient-to-r from-blue-600 to-purple-600 text-gray-600 hover:text-white"
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </motion.div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center text-gray-600 text-sm uppercase"
                >
                    © {new Date().getFullYear()} DKSTUDIOS. All rights reserved.
                </motion.div>
            </div>

            {/* Floating WhatsApp CTA */}
            {/* <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="fixed bottom-6 right-6 z-50"
            >
                <a
                    href={`https://wa.me/91${whatsappNumber}?text=${whatsappText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 bg-green-500 text-white rounded-full shadow-lg hover:scale-105 transition-all"
                >
                    <Phone className="w-5 h-5" />
                    <span className="text-sm font-semibold">Chat on WhatsApp for a Free Consultation</span>
                </a>
            </motion.div> */}
        </footer>
    );
}
