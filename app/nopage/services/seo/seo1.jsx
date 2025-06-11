"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
    const [website, setWebsite] = useState('');
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('/api/seo-report', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ website, email }),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus({ type: 'success', message: 'Thank you! Your SEO report will be emailed to you shortly.' });
                setWebsite('');
                setEmail('');
            } else {
                setSubmitStatus({ type: 'error', message: data.error || 'Failed to submit. Please try again.' });
            }
        } catch (error) {
            setSubmitStatus({ type: 'error', message: 'Network error. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="relative overflow-hidden">
            <div className="relative z-10 mb-10 bg-white text-black px-4 lg:px-0 py-6 lg:pt-8 flex justify-center">
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col lg:flex-row container mx-auto items-center gap-8 lg:gap-12"
                >
                    {/* Left Content (unchanged) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col lg:w-2/3 text-center lg:text-left"
                    >
                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="border-r-4 lg:border-r-0 border-l-4 border-blue-600 lg:bg-[linear-gradient(to_right,_#dbeafe_10%,_#ffffff_90%)] bg-blue-50 lg:pl-4 py-2 text-center lg:text-left text-md lg:text-xl font-semibold mb-2"
                        >
                            Best SEO Company
                        </motion.h1>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="text-2xl lg:text-5xl font-bold mb-4 lg:mb-6 leading-tight uppercase"
                        >
                            <span className='mr-1'>📈 Boost Your Rankings <br className="hidden lg:block" /> with </span>

                            <span className='bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent'>SEO</span> In Just
                            <motion.span
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                className="text-white bg-black rounded-xl ml-2 px-2 lg:px-2 whitespace-nowrap inline-block"
                            >
                                30 Days
                            </motion.span>
                        </motion.h2>

                        {/* Subheadline */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-xs lg:text-xl text-gray-800 mb-6 lg:mb-8 px-2 lg:px-0"
                        >
                            Get more traffic, more leads, and more sales. Our proven SEO strategies push your business to the top of Google — faster and safer than ever.
                        </motion.p>

                        {/* Benefits Grid */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.1 }
                                }
                            }}
                            initial="hidden"
                            animate="visible"
                            className="grid grid-cols-2 gap-1 lg:mb-8 lg:space-y-4 lg:grid-cols-1"
                        >
                            {[
                                ["✓", "Top Google Rankings", "Target keywords that drive real revenue"],
                                ["✓", "SEO Audit & Fixes", "Resolve 100+ technical issues holding you back"],
                                ["✓", "Content Optimization", "Turn your website into a traffic magnet"],
                                ["✓", "Monthly Reporting & Growth Tracking", "Transparent SEO progress, every single month"]
                            ].map(([icon, title, text], index) => (
                                <motion.div
                                    key={title}
                                    variants={{
                                        hidden: { opacity: 0, x: -20 },
                                        visible: { opacity: 1, x: 0 }
                                    }}
                                    className="flex lg:items-start gap-2 justify-center items-center lg:justify-start bg-blue-50 rounded-md lg:bg-white"
                                >
                                    <motion.span
                                        whileHover={{ scale: 1.1 }}
                                        className="text-green-600 text-2xl hidden lg:block"
                                    >
                                        {icon}
                                    </motion.span>
                                    <div>
                                        <h3 className="font-semibold text-sm lg:text-lg ">{title}</h3>
                                        <p className="text-gray-600 text-xs lg:text-base">{text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Testimonial */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="border-l-0 lg:border-l-4 border-blue-600 bg-[linear-gradient(to_right,_#dbeafe_10%,_#ffffff_90%)] pl-0 lg:pl-4 py-2 text-center lg:text-left hidden lg:block"
                        >
                            <p className="italic text-sm lg:text-base">"We jumped from page 5 to the top 3 results in 21 days — our traffic exploded!"</p>
                            <p className="font-medium mt-1 lg:mt-2 text-sm">- Gulfside Painting, Company Owner</p>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Replaced Swiper with SEO Report Form */}
                    <div className="flex flex-col gap-4 lg:gap-6 w-full lg:w-1/3">
                        {/* Animated Urgency Badge */}
                       

                        {/* SEO Report Form Card */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white border-2 border-gray-200 p-6 lg:p-8 rounded-xl shadow-xl relative overflow-hidden group"
                        >
                            <div className="absolute -inset-1 bg-white opacity-20 blur-sm group-hover:opacity-30 transition-opacity"></div>

                            <div className="relative">
                                <h2 className="text-xl lg:text-2xl font-bold mb-2 text-center">
                                    <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                                        FREE Technical SEO Audit
                                    </span>
                                </h2>
                                <p className="text-sm text-gray-600 text-center mb-6">
                                    Discover exactly what's holding your website back from ranking higher
                                </p>

                                {submitStatus?.type === 'success' ? (
                                    <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6">
                                        {submitStatus.message}
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        {submitStatus?.type === 'error' && (
                                            <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg">
                                                {submitStatus.message}
                                            </div>
                                        )}

                                        <div>
                                            <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                                                Your Website URL
                                            </label>
                                            <input
                                                type="url"
                                                id="website"
                                                name="website"
                                                value={website}
                                                onChange={(e) => setWebsite(e.target.value)}
                                                placeholder="https://yourwebsite.com"
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                                Your Business Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="you@yourbusiness.com"
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                            />
                                        </div>

                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex justify-center items-center gap-2 relative overflow-hidden mt-6 disabled:opacity-70"
                                        >
                                            <span className="relative z-10">
                                                {isSubmitting ? 'Processing...' : '🔍 Get My Free SEO Report'}
                                            </span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                                        </motion.button>

                                        <div className="text-center text-xs text-gray-500 mt-4">
                                            We'll analyze your site and email you a detailed report within 24 hours
                                        </div>
                                    </form>
                                )}

                                <div className="mt-1 pt-1 border-t border-gray-200">
                                    <h3 className="text-sm font-semibold text-gray-700 text-center mb-3">
                                        Want personalized SEO recommendations?
                                    </h3>
                                    <Link
                                        href="/get-free-consultation"
                                        title="Schedule Free SEO Consultation"
                                        className="block w-full bg-black text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:bg-gray-800 text-center"
                                    >
                                        Get Free SEO Consultation →
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
}
