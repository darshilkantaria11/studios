"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Updated import
import Image from 'next/image';
import Logo from "../../../public/Logo1.png"



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Our Services', href: '/services' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'About Us', href: '/about' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact Us', href: '/contact' },
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
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="sticky top-0 z-50 bg-white "
        >
            <div className="container mx-auto ">
                <div className="flex justify-between items-center h-20 px-2 lg:px-0">
                    {/* Logo with hover effect */}
                    <Link href="/">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="w-[120px] lg:w-[150px] cursor-pointer" // adjust width to match text logo size
                        >
                            <Image
                                src={Logo} // replace with your logo path
                                alt="Company Logo"
                                width={150}
                                height={50}
                                className="w-full h-auto"
                                priority
                            />
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center ">
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
                                href="/free-consultation"
                                className="bg-black text-white hover:bg-white hover:text-black border border-black px-4 font-medium py-3 rounded-full hover:scale-105 transition-all text-md  shadow-lg"
                            >
                                Get Free Consultation →
                            </Link>
                        </motion.div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-black focus:outline-none p-2"
                        >
                            {isOpen ? (
                                <XMarkIcon className="h-8 w-8 z-60" aria-hidden="true" /> // Changed to XMarkIcon
                            ) : (
                                <Bars3Icon className="h-8 w-8" aria-hidden="true" /> // Changed to Bars3Icon
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-lg"
                    >
                        <div className="pt-2 pb-4 space-y-4 px-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="border-b block text-black hover:text-blue-600 px-4 py-3 font-2xl hover:bg-gray-50  transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="/free-consultation"
                                className="bg-black text-white hover:bg-white hover:text-black border border-black  block text-center px-6 py-3 rounded-lg  transition-colors font-semibold shadow-md"
                            >
                                Get Free Consultation →
                            </Link>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
};

export default Navbar;