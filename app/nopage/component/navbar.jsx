"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Logo from "../../../public/web-design-company-logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Our Services', href: '/services', title: 'View Our Web Design & Development Services' },
        // { name: 'Pricing', href: '/pricing', title: 'Check Our Affordable Web Design Pricing' },
        { name: 'Our Projects', href: '/projects', title: 'See Our Past Web Design Projects' },
        { name: 'Blogs', href: '/blogs', title: 'Read Blogs About Website Design & SEO' },
        { name: 'Contact Us', href: '/contact-us', title: 'Contact Our Web Design Company' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm" role="banner">
            <div className="container mx-auto">
                <div className="flex justify-between items-center h-14 lg:h-20 px-2 lg:px-0">
                    {/* Logo with semantic h1 for homepage SEO */}
                    <div className="m-0 p-0 text-lg font-semibold">
                        <Link href="/" title="Web Design Company - Home">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="w-[120px] lg:w-[150px] cursor-pointer"
                            >
                                <Image
                                    src={Logo}
                                    alt="Designuix - Web Design Company Logo"
                                    width={150}
                                    height={50}
                                    className="w-full h-auto"
                                    priority
                                    title="Designuix - Best Web Design Company"
                                />
                            </motion.div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav aria-label="Primary Navigation" className="hidden lg:flex items-center">
                        <motion.ul
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex space-x-10"
                        >
                            {navItems.map((item) => (
                                <motion.li key={item.name} variants={itemVariants}>
                                    <motion.div whileHover={{ scale: 1.1 }} className="inline-block">
                                        <Link
                                            href={item.href}
                                            title={item.title}
                                            className="text-black text-md transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                </motion.li>
                            ))}
                        </motion.ul>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ x: 20 }}
                            animate={{ x: 0 }}
                            className="ml-8 flex items-center"
                        >
                            <Link
                                href="/get-free-consultation"
                                title="Book Your Free Web Design Consultation"
                                className="shine-button bg-black text-white hover:bg-white hover:text-black border border-black px-4 font-medium py-3 rounded-full hover:scale-105 transition-all text-md shadow-lg"
                            >
                                Get Free Consultation →
                            </Link>
                        </motion.div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-black focus:outline-none p-2"
                            aria-label={isOpen ? "Close Menu" : "Open Menu"}
                        >
                            {isOpen ? (
                                <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                            ) : (
                                <Bars3Icon className="h-8 w-8" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <motion.nav
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-lg"
                        aria-label="Mobile Navigation"
                    >
                        <div className="pt-2 pb-4 space-y-4 px-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    title={item.title}
                                    onClick={() => setIsOpen(false)}
                                    className="border-b block text-black hover:text-blue-600 px-4 py-3 font-2xl hover:bg-gray-50 transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="/get-free-consultation"
                                title="Book a Free Website Consultation"
                                className="bg-black text-white hover:bg-white hover:text-black border border-black block text-center px-6 py-3 rounded-lg transition-colors font-semibold shadow-md"
                            >
                                Get Free Consultation →
                            </Link>
                        </div>
                    </motion.nav>
                )}
            </div>
        </header>
    );
};

export default Navbar;
