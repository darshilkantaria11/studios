"use client";
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    const whatsappNumber = '7567393494';
    const whatsappText = encodeURIComponent("Hi, I'm interested in a free website consultation!");

    return (
        <footer className="bg-white border-t border-gray-100 relative px-4" aria-label="Footer section">
            <div className="container mx-auto px-4 py-16">
                {/* Main Footer Content */}
                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                    {/* Logo Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        aria-label="Company logo and tagline"
                    >
                        <Link href="/" title="Designuix Home - Web Design Company">
                            <p className="flex items-center gap-2 mb-6">
                                <Image 
                                    src="/Logo1.png" 
                                    alt="Designuix Company Logo - Web Design Company" 
                                    width={120} 
                                    height={40} 
                                    priority
                                    title="Designuix Logo"
                                />
                            </p>
                        </Link>
                        <motion.p
                            whileHover={{ x: 5 }}
                            className="text-gray-600 text-sm mb-4"
                        >
                            Transforming ideas into digital excellence since 2020
                        </motion.p>
                    </motion.div>

                    <nav className="flex justify-between" aria-label="Footer navigation">
                        {/* Services Column */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            aria-labelledby="footer-services-heading"
                        >
                            <h2 id="footer-services-heading" className="text-gray-900 font-semibold mb-4 text-lg">
                                Our Services
                            </h2>
                            <ul className="space-y-3">
                                <motion.li whileHover={{ x: 5 }}>
                                    <Link href="/services/website-development-services" title="Website Development Services by Designuix">
                                        <p className="text-gray-600 hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-clip-text hover:text-transparent transition-all">
                                            Web Development
                                        </p>
                                    </Link>
                                </motion.li>
                                <motion.li whileHover={{ x: 5 }}>
                                    <Link href="/services/ecommerce" title="E-commerce Solutions by Designuix">
                                        <p className="text-gray-600 hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-clip-text hover:text-transparent transition-all">
                                            E-commerce
                                        </p>
                                    </Link>
                                </motion.li>
                                <motion.li whileHover={{ x: 5 }}>
                                    <Link href="/services/seo" title="SEO Optimization Services by Designuix">
                                        <p className="text-gray-600 hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-clip-text hover:text-transparent transition-all">
                                            SEO Optimization
                                        </p>
                                    </Link>
                                </motion.li>
                            </ul>
                        </motion.div>

                        {/* Company Column */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            aria-labelledby="footer-company-heading"
                        >
                            <h2 id="footer-company-heading" className="text-gray-900 font-semibold mb-4 text-lg">
                                Company
                            </h2>
                            <ul className="space-y-3">
                                <motion.li whileHover={{ x: 5 }}>
                                    <Link href="/projects" title="Our Projects - Designuix">
                                        <p className="text-gray-600 hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-clip-text hover:text-transparent transition-all">
                                            Projects
                                        </p>
                                    </Link>
                                </motion.li>
                                <motion.li whileHover={{ x: 5 }}>
                                    <Link href="/blogs" title="Blogs and Articles by Designuix">
                                        <p className="text-gray-600 hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-clip-text hover:text-transparent transition-all">
                                            Blogs
                                        </p>
                                    </Link>
                                </motion.li>
                                <motion.li whileHover={{ x: 5 }}>
                                    <Link href="/contact-us" title="Contact Designuix for Web Design Services">
                                        <p className="text-gray-600 hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-clip-text hover:text-transparent transition-all">
                                            Contact Us
                                        </p>
                                    </Link>
                                </motion.li>
                            </ul>
                        </motion.div>
                    </nav>

                    {/* Contact Column */}
                    <section aria-labelledby="footer-contact-heading" className="flex flex-col lg:items-center ">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <h2 id="footer-contact-heading" className="text-gray-900 font-semibold mb-4 text-lg">Contact</h2>
                            <ul className="space-y-4">
                                <motion.li whileHover={{ x: 5 }} className="flex items-center gap-2">
                                    <Mail className="w-5 h-5 text-blue-600" aria-hidden="true" />
                                    <p 
                                        href="mailto:contact@designuix.com" 
                                        className="text-gray-600" 
                                        title="Email Designuix for inquiries"
                                    >
                                        contact@designuix.com
                                    </p>
                                </motion.li>
                                <motion.li whileHover={{ x: 5 }} className="flex items-center gap-2">
                                    <Phone className="w-5 h-5 text-purple-600" aria-hidden="true" />
                                    <p
                                        href={`https://wa.me/91${whatsappNumber}?text=${whatsappText}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600"
                                        title="Chat with Designuix on WhatsApp for free consultation"
                                    >
                                        +91 {whatsappNumber}
                                    </p>
                                </motion.li>
                            </ul>
                        </motion.div>
                    </section>
                </div>

                {/* Social Icons */}
                <motion.nav
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex justify-center gap-6 mb-8"
                    aria-label="Follow Designuix on social media"
                >
                    {[
                        { icon: <Instagram aria-hidden="true" />, link: "https://www.instagram.com/yourpage", name: "Instagram" },
                        { icon: <Facebook aria-hidden="true" />, link: "https://www.facebook.com/yourpage", name: "Facebook" },
                        { icon: <Linkedin aria-hidden="true" />, link: "https://www.linkedin.com/in/yourprofile", name: "LinkedIn" },
                        { icon: <Twitter aria-hidden="true" />, link: "https://twitter.com/yourprofile", name: "Twitter" },
                    ].map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5, scale: 1.1 }}
                            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gradient-to-r from-blue-600 to-purple-600 text-gray-600 hover:text-white"
                            aria-label={`Visit Designuix ${social.name} page`}
                            title={`Follow Designuix on ${social.name}`}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </motion.nav>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center text-gray-600 text-sm uppercase"
                >
                    © {new Date().getFullYear()} Designuix. All rights reserved.
                </motion.div>
            </div>
        </footer>
    );
}
