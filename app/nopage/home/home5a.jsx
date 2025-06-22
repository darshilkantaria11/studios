"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    LayoutTemplate,
    Search,
    ShieldCheck,
    Users,
    TrendingUp,
    Award,
    Code,
    Smartphone,
    Rocket,
    BadgeCheck,
    MessageCircle,
    BarChart2,
    Globe,
    Handshake,
    FileText,
    Settings,
} from 'lucide-react';
import Link from 'next/link';

export default function WebDesignGuide() {
    const [activeSection, setActiveSection] = useState('intro');

    return (
        <section className="py-20 bg-gradient-to-b from-white to-blue-50" aria-label="Guide to Choosing the Best Web Design Company">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-2xl md:text-4xl font-bold mb-6 text-gray-900"
                    >
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            The Complete Guide to Choosing Your Web Design Company
                        </span>
                    </motion.h1>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                        How to Find a Partner That Actually Delivers Results (Not Just Pretty Websites)
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {['intro', 'criteria', 'process', 'mistakes', 'whydesignuix'].map((item) => (
                            <button
                                key={item}
                                onClick={() => setActiveSection(item)}
                                className={`px-5 py-2.5 rounded-full font-medium transition-all ${activeSection === item
                                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                                    }`}
                            >
                                {item === 'intro' && 'Introduction'}
                                {item === 'criteria' && 'Selection Criteria'}
                                {item === 'process' && 'Design Process'}
                                {item === 'mistakes' && 'Common Mistakes'}
                                {item === 'whydesignuix' && 'Why DesignUIX'}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Navigation Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <LayoutTemplate className="w-5 h-5 mr-2 text-blue-600" />
                                Guide Navigation
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    { id: 'intro', title: 'Why Your Choice Matters', icon: <Search className="w-4 h-4 mr-2 text-blue-500" /> },
                                    { id: 'criteria', title: '8 Critical Selection Factors', icon: <ShieldCheck className="w-4 h-4 mr-2 text-purple-500" /> },
                                    { id: 'process', title: 'The Right Design Process', icon: <Code className="w-4 h-4 mr-2 text-green-500" /> },
                                    { id: 'mistakes', title: '7 Costly Mistakes to Avoid', icon: <BarChart2 className="w-4 h-4 mr-2 text-red-500" /> },
                                    { id: 'whydesignuix', title: 'Why DesignUIX Stands Out', icon: <Award className="w-4 h-4 mr-2 text-yellow-500" /> },
                                ].map((item) => (
                                    <li key={item.id}>
                                        <button
                                            onClick={() => setActiveSection(item.id)}
                                            className={`w-full text-left px-4 py-3 rounded-xl flex items-center transition-all ${activeSection === item.id
                                                    ? 'bg-blue-50 text-blue-700 font-medium border-l-4 border-blue-600'
                                                    : 'text-gray-700 hover:bg-gray-50'
                                                }`}
                                        >
                                            {item.icon}
                                            {item.title}
                                        </button>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
                                <h4 className="font-bold text-blue-800 mb-2 flex items-center">
                                    <BadgeCheck className="w-5 h-5 mr-2" />
                                    DesignUIX Advantage
                                </h4>
                                <ul className="space-y-2 text-sm text-blue-700">
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✓</span> 98% Client Satisfaction Rate
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✓</span> 247 Websites Launched
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✓</span> 63% Average Traffic Growth
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8">
                        {/* Introduction */}
                        {activeSection === 'intro' && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    Why Choosing the Right <span className="text-blue-600">Web Design Company</span> Matters More Than Ever
                                </h2>

                                <div className="prose max-w-none text-gray-700">
                                    <p className="text-lg mb-6">
                                        In today's digital-first world, your website isn't just an online brochure - it's your 24/7 sales team, your brand ambassador, and your most powerful marketing tool. Choosing the right <strong>web design company</strong> can mean the difference between a website that generates leads and revenue, and one that simply exists online.
                                    </p>

                                    <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-100">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <Globe className="w-5 h-5 mr-2 text-blue-600" />
                                            The Web Design Reality Check
                                        </h3>
                                        <p>
                                            Did you know that <strong>75% of users judge a company's credibility based on their website design</strong>? Or that websites with poor user experience have <strong>79% higher bounce rates</strong>? These statistics highlight why partnering with a professional <strong>web design company</strong> isn't a luxury - it's a business necessity.
                                        </p>
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                                        Your Website's Impact on Business Success
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                        {[
                                            {
                                                title: 'First Impressions',
                                                content: '94% of first impressions relate to your site design',
                                                icon: <Users className="w-6 h-6 text-blue-600" />
                                            },
                                            {
                                                title: 'Conversion Rates',
                                                content: 'Good UX design can boost conversion rates by up to 400%',
                                                icon: <TrendingUp className="w-6 h-6 text-green-600" />
                                            },
                                            {
                                                title: 'SEO Performance',
                                                content: 'Well-structured sites rank 53% higher in search results',
                                                icon: <Search className="w-6 h-6 text-purple-600" />
                                            }
                                        ].map((item, index) => (
                                            <div key={index} className="bg-gradient-to-br from-white to-blue-50 p-5 rounded-xl border border-gray-100 shadow-sm">
                                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-blue-600">
                                                    {item.icon}
                                                </div>
                                                <h4 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h4>
                                                <p className="text-gray-600">{item.content}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <p className="mb-6">
                                        At DesignUIX, we've helped many businesses transform their online presence. What we've learned is that choosing a <strong>web design company</strong> goes far beyond just aesthetics. It's about finding a partner who understands your business goals, your audience, and how to create a digital experience that converts visitors into customers.
                                    </p>

                                    <div className="bg-purple-50 rounded-xl p-6 mt-8 border border-purple-100">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <Rocket className="w-5 h-5 mr-2 text-purple-600" />
                                            What You'll Learn in This Guide
                                        </h3>
                                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                            <li>The <strong>8 critical factors</strong> to evaluate when choosing a web design company</li>
                                            <li>How to identify <strong>red flags</strong> that signal you should look elsewhere</li>
                                            <li>Why the <strong>design process</strong> matters more than the portfolio</li>
                                            <li>Common mistakes businesses make (and how to avoid them)</li>
                                            <li>What makes DesignUIX different from other web design companies</li>
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Selection Criteria */}
                        {activeSection === 'criteria' && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    8 Critical Factors in Choosing Your <span className="text-blue-600">Web Design Company</span>
                                </h2>

                                <div className="prose max-w-none text-gray-700">
                                    <p className="text-lg mb-6">
                                        Not all web design companies are created equal. Based on our experience in the industry, these are the most important factors to consider:
                                    </p>

                                    <div className="space-y-8">
                                        {/* Factor 1 */}
                                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                            <div className="flex items-start">
                                                <div className="bg-blue-100 text-blue-800 font-bold rounded-lg w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                                                    1
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Portfolio Depth & Relevance</h3>
                                                    <p className="mb-4">
                                                        Don't just look for pretty designs - look for experience in your industry. A good <strong>web design company</strong> should have case studies showing how they solved business problems similar to yours.
                                                    </p>
                                                    <div className="bg-blue-50 p-4 rounded-lg">
                                                        <p className="font-medium text-blue-800 flex items-start">
                                                            <span className="mr-2">🔍</span>
                                                            <span>Look for: Before/after metrics, client testimonials, and specific challenges addressed in their case studies</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Factor 2 */}
                                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                            <div className="flex items-start">
                                                <div className="bg-green-100 text-green-800 font-bold rounded-lg w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                                                    2
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Strategic Approach</h3>
                                                    <p className="mb-4">
                                                        The best <strong>web design companies</strong> don't just ask "what colors do you like?" They start with discovery questions about your business goals, target audience, and competitive landscape.
                                                    </p>
                                                    <div className="bg-green-50 p-4 rounded-lg">
                                                        <p className="font-medium text-green-800 flex items-start">
                                                            <span className="mr-2">💡</span>
                                                            <span>Warning sign: If they don't ask about your business objectives, they're designing in a vacuum</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Factor 3 */}
                                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                            <div className="flex items-start">
                                                <div className="bg-purple-100 text-purple-800 font-bold rounded-lg w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                                                    3
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Technical Expertise</h3>
                                                    <p className="mb-4">
                                                        Your website needs to be more than just beautiful - it needs to be fast, secure, and SEO-friendly. Ensure your <strong>web design company</strong> has expertise in:
                                                    </p>
                                                    <ul className="grid grid-cols-2 gap-3 mb-4">
                                                        <li className="flex items-center">
                                                            <span className="text-green-500 mr-2">✓</span> Mobile responsiveness
                                                        </li>
                                                        <li className="flex items-center">
                                                            <span className="text-green-500 mr-2">✓</span> Core Web Vitals optimization
                                                        </li>
                                                        <li className="flex items-center">
                                                            <span className="text-green-500 mr-2">✓</span> SEO fundamentals
                                                        </li>
                                                        <li className="flex items-center">
                                                            <span className="text-green-500 mr-2">✓</span> Security protocols
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Factor 4 */}
                                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                            <div className="flex items-start">
                                                <div className="bg-yellow-100 text-yellow-800 font-bold rounded-lg w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                                                    4
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent Process</h3>
                                                    <p className="mb-4">
                                                        You should never wonder where your project stands. Top <strong>web design companies</strong> have clear processes with defined milestones, deliverables, and communication protocols.
                                                    </p>
                                                    <div className="flex items-center bg-yellow-50 p-4 rounded-lg">
                                                        <div className="mr-3 text-2xl">📋</div>
                                                        <p className="font-medium text-yellow-800">
                                                            DesignUIX provides clients with a dedicated project portal showing real-time progress
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Factor 5 */}
                                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                            <div className="flex items-start">
                                                <div className="bg-red-100 text-red-800 font-bold rounded-lg w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                                                    5
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Post-Launch Support</h3>
                                                    <p className="mb-4">
                                                        40% of businesses report issues within the first month after website launch. A reliable <strong>web design company</strong> should offer:
                                                    </p>
                                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                                                        <li className="flex items-center">
                                                            <span className="text-blue-500 mr-2">•</span> Training on content management
                                                        </li>
                                                        <li className="flex items-center">
                                                            <span className="text-blue-500 mr-2">•</span> Technical support period
                                                        </li>
                                                        <li className="flex items-center">
                                                            <span className="text-blue-500 mr-2">•</span> Maintenance packages
                                                        </li>
                                                        <li className="flex items-center">
                                                            <span className="text-blue-500 mr-2">•</span> Documentation and tutorials
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Additional factors would go here */}

                                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
                                            <h3 className="text-xl font-bold mb-3 flex items-center">
                                                <ShieldCheck className="w-5 h-5 mr-2" />
                                                DesignUIX Advantage
                                            </h3>
                                            <p>
                                                We don't just meet these criteria - we exceed them. Our clients receive:
                                            </p>
                                            <ul className="mt-3 space-y-2">
                                                <li className="flex items-start">
                                                    <span className="mr-2">✅</span>
                                                    <span>Free 30-day post-launch support period</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="mr-2">✅</span>
                                                    <span>Comprehensive video tutorials for every website</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="mr-2">✅</span>
                                                    <span>Priority support options</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Design Process */}
                        {activeSection === 'process' && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    The Right Design Process: How Top <span className="text-blue-600">Web Design Companies</span> Work
                                </h2>

                                <div className="prose max-w-none text-gray-700">
                                    <p className="text-lg mb-6">
                                        A well-structured process separates exceptional <strong>web design companies</strong> from amateurs. Here's what you should expect:
                                    </p>

                                    <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-200">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">The DesignUIX 6-Phase Process</h3>
                                        <p>
                                            Our proven methodology ensures strategic, results-driven websites:
                                        </p>
                                    </div>

                                    <div className="space-y-10">
                                        {/* Phase 1 */}
                                        <div className="flex flex-col md:flex-row gap-6">
                                            <div className="bg-gradient-to-br from-blue-100 to-white p-5 rounded-xl border border-blue-200 md:w-1/3 flex flex-col items-center text-center">
                                                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white mb-4">
                                                    1
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">Discovery & Strategy</h3>
                                                <p className="text-gray-600">
                                                    Deep dive into your business, goals, and audience
                                                </p>
                                            </div>
                                            <div className="md:w-2/3">
                                                <h4 className="font-bold text-lg text-gray-900 mb-2">What Happens:</h4>
                                                <ul className="list-disc pl-5 space-y-2 mb-4">
                                                    <li>Competitor analysis and market research</li>
                                                    <li>Goal-setting workshop with key stakeholders</li>
                                                    <li>User persona development</li>
                                                    <li>Technical requirements assessment</li>
                                                </ul>
                                                <div className="bg-blue-50 p-4 rounded-lg">
                                                    <p className="text-blue-800 font-medium">
                                                        This phase ensures your website is built on strategy, not assumptions
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Phase 2 */}
                                        <div className="flex flex-col md:flex-row gap-6">
                                            <div className="bg-gradient-to-br from-purple-100 to-white p-5 rounded-xl border border-purple-200 md:w-1/3 flex flex-col items-center text-center">
                                                <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center text-white mb-4">
                                                    2
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">Architecture & UX</h3>
                                                <p className="text-gray-600">
                                                    Planning the user journey and site structure
                                                </p>
                                            </div>
                                            <div className="md:w-2/3">
                                                <h4 className="font-bold text-lg text-gray-900 mb-2">What Happens:</h4>
                                                <ul className="list-disc pl-5 space-y-2 mb-4">
                                                    <li>Sitemap development</li>
                                                    <li>User flow diagrams</li>
                                                    <li>Wireframing key pages</li>
                                                    <li>Content strategy planning</li>
                                                </ul>
                                                <div className="bg-purple-50 p-4 rounded-lg">
                                                    <p className="text-purple-800 font-medium">
                                                        This blueprint phase prevents costly redesigns later
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Phase 3 */}
                                        <div className="flex flex-col md:flex-row gap-6">
                                            <div className="bg-gradient-to-br from-green-100 to-white p-5 rounded-xl border border-green-200 md:w-1/3 flex flex-col items-center text-center">
                                                <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center text-white mb-4">
                                                    3
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">Visual Design</h3>
                                                <p className="text-gray-600">
                                                    Bringing your brand to life visually
                                                </p>
                                            </div>
                                            <div className="md:w-2/3">
                                                <h4 className="font-bold text-lg text-gray-900 mb-2">What Happens:</h4>
                                                <ul className="list-disc pl-5 space-y-2 mb-4">
                                                    <li>Mood board creation</li>
                                                    <li>UI design for key pages</li>
                                                    <li>Responsive design planning</li>
                                                    <li>Design system development</li>
                                                </ul>
                                                <div className="bg-green-50 p-4 rounded-lg">
                                                    <p className="text-green-800 font-medium">
                                                        We focus on conversion-centered design, not just aesthetics
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl p-8 text-white mt-12">
                                            <h3 className="text-2xl font-bold mb-4">Why Process Matters</h3>
                                            <p className="mb-4">
                                                Many <strong>web design companies</strong> skip critical steps to save time, resulting in websites that look good but don't perform. Our comprehensive process ensures:
                                            </p>
                                            <ul className="space-y-3">
                                                <li className="flex items-start">
                                                    <span className="text-yellow-300 mr-2">✓</span>
                                                    <span>Strategic alignment with business goals</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-yellow-300 mr-2">✓</span>
                                                    <span>Fewer revisions and faster launch</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-yellow-300 mr-2">✓</span>
                                                    <span>Higher converting user experiences</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-yellow-300 mr-2">✓</span>
                                                    <span>Future-proof, scalable websites</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {activeSection === 'mistakes' && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    7 Costly Mistakes to Avoid When Choosing a <span className="text-blue-600">Web Design Company</span>
                                </h2>

                                <div className="prose max-w-none text-gray-700">
                                    <p className="text-lg mb-6">
                                        After reviewing hundreds of failed web projects, we've identified the most common and costly mistakes businesses make when selecting a <strong>web design company</strong>. Avoid these pitfalls to save time, money, and frustration:
                                    </p>

                                    <div className="bg-red-50 rounded-xl p-6 mb-8 border-l-4 border-red-500">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <BarChart2 className="w-5 h-5 mr-2 text-red-500" />
                                            The High Cost of Poor Choices
                                        </h3>
                                        <p>
                                            Businesses waste an average of <strong>$15,000</strong> and <strong>4-6 months</strong> when they choose the wrong web design partner. These mistakes can damage your brand reputation and cost you valuable customers.
                                        </p>
                                    </div>

                                    <div className="space-y-12">
                                        {/* Mistake 1 */}
                                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="flex items-start">
                                                <div className="bg-red-100 text-red-800 font-bold rounded-lg w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                                                    1
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Prioritizing Price Over Value</h3>
                                                    <p className="mb-4">
                                                        Many businesses choose the cheapest <strong>web design company</strong> only to discover hidden costs later. Low-cost providers often:
                                                    </p>
                                                    <ul className="list-disc pl-5 space-y-2 mb-4 text-gray-700">
                                                        <li>Use pre-made templates with limited customization</li>
                                                        <li>Cut corners on SEO optimization</li>
                                                        <li>Offer minimal support after launch</li>
                                                        <li>Provide no mobile optimization</li>
                                                    </ul>
                                                    <div className="bg-red-50 p-4 rounded-lg">
                                                        <p className="text-red-800 font-medium flex items-start">
                                                            <span className="mr-2">⚠️</span>
                                                            <span>This mistake costs businesses an average of 3x more in redesigns and fixes within the first year</span>
                                                        </p>
                                                    </div>
                                                    <div className="mt-4 bg-green-50 p-4 rounded-lg border border-green-200">
                                                        <h4 className="font-bold text-green-800 mb-2 flex items-center">
                                                            <ShieldCheck className="w-5 h-5 mr-2" />
                                                            The DesignUIX Solution
                                                        </h4>
                                                        <p>
                                                            We offer <strong>transparent, all-inclusive pricing</strong> with no hidden fees. Our clients receive:
                                                        </p>
                                                        <ul className="mt-2 space-y-1">
                                                            <li className="flex items-start">
                                                                <span className="text-green-600 mr-2">✓</span>
                                                                <span>Fixed-price proposals with detailed scope</span>
                                                            </li>
                                                            <li className="flex items-start">
                                                                <span className="text-green-600 mr-2">✓</span>
                                                                <span>30-day post-launch support included</span>
                                                            </li>
                                                            <li className="flex items-start">
                                                                <span className="text-green-600 mr-2">✓</span>
                                                                <span>Premium hosting and security features</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Mistake 2 */}
                                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="flex items-start">
                                                <div className="bg-red-100 text-red-800 font-bold rounded-lg w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                                                    2
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Ignoring Mobile Experience</h3>
                                                    <p className="mb-4">
                                                        With <strong>68% of website traffic</strong> coming from mobile devices, choosing a <strong>web design company</strong> that doesn't prioritize mobile-first design is catastrophic. Yet many businesses:
                                                    </p>
                                                    <ul className="list-disc pl-5 space-y-2 mb-4 text-gray-700">
                                                        <li>Only review desktop designs during the process</li>
                                                        <li>Don't test on actual mobile devices</li>
                                                        <li>Accept "responsive" designs that are actually just scaled-down versions</li>
                                                    </ul>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                                        <div className="bg-blue-50 p-4 rounded-lg">
                                                            <h4 className="font-bold text-blue-800 mb-1">Mobile Impact</h4>
                                                            <p className="text-sm">53% of users abandon sites that take more than 3 seconds to load on mobile</p>
                                                        </div>
                                                        <div className="bg-purple-50 p-4 rounded-lg">
                                                            <h4 className="font-bold text-purple-800 mb-1">Conversion Loss</h4>
                                                            <p className="text-sm">Sites not optimized for mobile lose up to 50% of potential customers</p>
                                                        </div>
                                                    </div>
                                                    <div className="mt-4 bg-green-50 p-4 rounded-lg border border-green-200">
                                                        <h4 className="font-bold text-green-800 mb-2 flex items-center">
                                                            <Smartphone className="w-5 h-5 mr-2" />
                                                            The DesignUIX Solution
                                                        </h4>
                                                        <p>
                                                            We design <strong>mobile-first experiences</strong> with:
                                                        </p>
                                                        <ul className="mt-2 space-y-1">
                                                            <li className="flex items-start">
                                                                <span className="text-green-600 mr-2">✓</span>
                                                                <span>Dedicated mobile prototyping and testing</span>
                                                            </li>
                                                            <li className="flex items-start">
                                                                <span className="text-green-600 mr-2">✓</span>
                                                                <span>Touch-friendly navigation design</span>
                                                            </li>
                                                            <li className="flex items-start">
                                                                <span className="text-green-600 mr-2">✓</span>
                                                                <span>Mobile-specific performance optimization</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Mistake 3 */}
                                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="flex items-start">
                                                <div className="bg-red-100 text-red-800 font-bold rounded-lg w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                                                    3
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Overlooking SEO Fundamentals</h3>
                                                    <p className="mb-4">
                                                        Many <strong>web design companies</strong> create beautiful websites that are virtually invisible to search engines. Common SEO oversights include:
                                                    </p>
                                                    <ul className="list-disc pl-5 space-y-2 mb-4 text-gray-700">
                                                        <li>Poor site structure and navigation</li>
                                                        <li>Slow page loading speeds</li>
                                                        <li>Missing or poorly optimized metadata</li>
                                                        <li>Ignoring schema markup opportunities</li>
                                                        <li>Not optimizing for Core Web Vitals</li>
                                                    </ul>
                                                    <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                                                        <p className="text-yellow-800 font-medium">
                                                            <span className="font-bold">Result:</span> Your $10,000 website gets 5 visitors per month
                                                        </p>
                                                    </div>
                                                    <div className="mt-4 bg-green-50 p-4 rounded-lg border border-green-200">
                                                        <h4 className="font-bold text-green-800 mb-2 flex items-center">
                                                            <Search className="w-5 h-5 mr-2" />
                                                            The DesignUIX Solution
                                                        </h4>
                                                        <p>
                                                            We bake SEO into every website with our <strong>SEO-First Design™</strong> approach:
                                                        </p>
                                                        <ul className="mt-2 space-y-1">
                                                            <li className="flex items-start">
                                                                <span className="text-green-600 mr-2">✓</span>
                                                                <span>Keyword research during discovery phase</span>
                                                            </li>
                                                            <li className="flex items-start">
                                                                <span className="text-green-600 mr-2">✓</span>
                                                                <span>Technical SEO audits before launch</span>
                                                            </li>
                                                            <li className="flex items-start">
                                                                <span className="text-green-600 mr-2">✓</span>
                                                                <span>Structured data implementation</span>
                                                            </li>
                                                            <li className="flex items-start">
                                                                <span className="text-green-600 mr-2">✓</span>
                                                                <span>Core Web Vitals optimization guarantee</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Mistake 4 */}
                                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="flex items-start">
                                                <div className="bg-red-100 text-red-800 font-bold rounded-lg w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                                                    4
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Not Clarifying Ownership Rights</h3>
                                                    <p className="mb-4">
                                                        Many businesses are shocked to discover they <strong>don't own</strong> their website after paying a <strong>web design company</strong>. Common issues include:
                                                    </p>
                                                    <ul className="list-disc pl-5 space-y-2 mb-4 text-gray-700">
                                                        <li>The agency retains ownership of design files and code</li>
                                                        <li>Businesses are locked into proprietary CMS platforms</li>
                                                        <li>Hosting contracts that prevent website migration</li>
                                                        <li>Licensing fees for stock images or plugins</li>
                                                    </ul>
                                                    <div className="bg-red-100 p-4 rounded-lg mb-4">
                                                        <p className="text-red-800 font-medium">
                                                            <span className="font-bold">Real Case:</span> A client paid $25,000 for their website only to discover they'd need to pay $300/month indefinitely to keep it online
                                                        </p>
                                                    </div>
                                                    <div className="mt-4 bg-green-50 p-4 rounded-lg border border-green-200">
                                                        <h4 className="font-bold text-green-800 mb-2 flex items-center">
                                                            <Handshake className="w-5 h-5 mr-2" />
                                                            The DesignUIX Solution
                                                        </h4>
                                                        <p>
                                                            We guarantee <strong>100% ownership transfer</strong>:
                                                        </p>
                                                        <ul className="mt-2 space-y-1">
                                                            <li className="flex items-start">
                                                                <span className="text-green-600 mr-2">✓</span>
                                                                <span>Full source code and design files delivered</span>
                                                            </li>
                                                            <li className="flex items-start">
                                                                <span className="text-green-600 mr-2">✓</span>
                                                                <span>No proprietary lock-in - use any hosting provider</span>
                                                            </li>
                                                            <li className="flex items-start">
                                                                <span className="text-green-600 mr-2">✓</span>
                                                                <span>All licenses transferred to client</span>
                                                            </li>
                                                            <li className="flex items-start">
                                                                <span className="text-green-600 mr-2">✓</span>
                                                                <span>Written ownership agreement before project start</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Mistake 5 */}
                                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="flex items-start">
                                                <div className="bg-red-100 text-red-800 font-bold rounded-lg w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                                                    5
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Skipping Content Strategy</h3>
                                                    <p className="mb-4">
                                                        Many <strong>web design companies</strong> treat content as an afterthought, leading to:
                                                    </p>
                                                    <ul className="list-disc pl-5 space-y-2 mb-4 text-gray-700">
                                                        <li>Beautiful designs filled with placeholder text</li>
                                                        <li>Misalignment between design and actual content</li>
                                                        <li>Last-minute content creation that weakens SEO</li>
                                                        <li>Inconsistent messaging across pages</li>
                                                    </ul>
                                                    <div className="bg-purple-50 p-4 rounded-lg mb-4">
                                                        <h4 className="font-bold text-purple-800 mb-2">The Content Reality</h4>
                                                        <p>Content creation takes <strong>3-5x longer</strong> than most businesses anticipate, causing significant project delays</p>
                                                    </div>
                                                    <div className="mt-4 bg-green-50 p-4 rounded-lg border border-green-200">
                                                        <h4 className="font-bold text-green-800 mb-2 flex items-center">
                                                            <FileText className="w-5 h-5 mr-2" />
                                                            The DesignUIX Solution
                                                        </h4>
                                                        <p>
                                                            Our <strong>Content-First Design™</strong> approach ensures:
                                                        </p>
                                                        <ul className="mt-2 space-y-1">
                                                            <li className="flex items-start">
                                                                <span className="text-green-600 mr-2">✓</span>
                                                                <span>Content strategy workshops before design begins</span>
                                                            </li>
                                                            <li className="flex items-start">
                                                                <span className="text-green-600 mr-2">✓</span>
                                                                <span>Copywriting services integrated into our process</span>
                                                            </li>
                                                            <li className="flex items-start">
                                                                <span className="text-green-600 mr-2">✓</span>
                                                                <span>Design templates built around actual content</span>
                                                            </li>
                                                            <li className="flex items-start">
                                                                <span className="text-green-600 mr-2">✓</span>
                                                                <span>SEO-optimized content creation</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Mistake 6 */}
                                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="flex items-start">
                                                <div className="bg-red-100 text-red-800 font-bold rounded-lg w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                                                    6
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Neglecting Post-Launch Support</h3>
                                                    <p className="mb-4">
                                                        Many <strong>web design companies</strong> disappear after launching your site, leaving you with:
                                                    </p>
                                                    <ul className="list-disc pl-5 space-y-2 mb-4 text-gray-700">
                                                        <li>No training on how to update your site</li>
                                                        <li>Security vulnerabilities that go unpatched</li>
                                                        <li>Broken features with no support</li>
                                                        <li>No one to call when something goes wrong</li>
                                                    </ul>
                                                    <div className="bg-orange-50 p-4 rounded-lg mb-4">
                                                        <p className="text-orange-800">
                                                            <span className="font-bold">Industry Insight:</span> 68% of websites experience technical issues within the first month after launch
                                                        </p>
                                                    </div>
                                                    <div className="mt-4 bg-green-50 p-4 rounded-lg border border-green-200">
                                                        <h4 className="font-bold text-green-800 mb-2 flex items-center">
                                                            <Settings className="w-5 h-5 mr-2" />
                                                            The DesignUIX Solution
                                                        </h4>
                                                        <p>
                                                            Our <strong>360° Support Guarantee</strong> includes:
                                                        </p>
                                                        <ul className="mt-2 space-y-1">
                                                            <li className="flex items-start">
                                                                <span className="text-green-600 mr-2">✓</span>
                                                                <span>Comprehensive training sessions</span>
                                                            </li>
                                                            <li className="flex items-start">
                                                                <span className="text-green-600 mr-2">✓</span>
                                                                <span>30-day free support period</span>
                                                            </li>
                                                            <li className="flex items-start">
                                                                <span className="text-green-600 mr-2">✓</span>
                                                                <span>Video tutorials for every feature</span>
                                                            </li>
                                                            <li className="flex items-start">
                                                                <span className="text-green-600 mr-2">✓</span>
                                                                <span>Optional ongoing maintenance plans</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Mistake 7 */}
                                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="flex items-start">
                                                <div className="bg-red-100 text-red-800 font-bold rounded-lg w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                                                    7
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Failing to Define Success Metrics</h3>
                                                    <p className="mb-4">
                                                        Many businesses never establish how they'll measure their website's success, making it impossible to know if their <strong>web design company</strong> delivered results. Common issues:
                                                    </p>
                                                    <ul className="list-disc pl-5 space-y-2 mb-4 text-gray-700">
                                                        <li>No clear conversion goals defined</li>
                                                        <li>No analytics setup or tracking</li>
                                                        <li>No performance benchmarks established</li>
                                                        <li>No ongoing optimization plan</li>
                                                    </ul>
                                                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                                                        <p className="text-blue-800">
                                                            <span className="font-bold">Shocking Stat:</span> Only 22% of businesses are satisfied with their website's conversion rate
                                                        </p>
                                                    </div>
                                                    <div className="mt-4 bg-green-50 p-4 rounded-lg border border-green-200">
                                                        <h4 className="font-bold text-green-800 mb-2 flex items-center">
                                                            <BarChart2 className="w-5 h-5 mr-2" />
                                                            The DesignUIX Solution
                                                        </h4>
                                                        <p>
                                                            We establish <strong>measurable success criteria</strong> for every project:
                                                        </p>
                                                        <ul className="mt-2 space-y-1">
                                                            <li className="flex items-start">
                                                                <span className="text-green-600 mr-2">✓</span>
                                                                <span>Pre-launch analytics configuration</span>
                                                            </li>
                                                            <li className="flex items-start">
                                                                <span className="text-green-600 mr-2">✓</span>
                                                                <span>Conversion goal mapping</span>
                                                            </li>
                                                            <li className="flex items-start">
                                                                <span className="text-green-600 mr-2">✓</span>
                                                                <span>Performance benchmarking</span>
                                                            </li>
                                                            <li className="flex items-start">
                                                                <span className="text-green-600 mr-2">✓</span>
                                                                <span>90-day performance review included</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Why DesignUIX */}
                        {activeSection === 'whydesignuix' && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    Why DesignUIX is the <span className="text-blue-600">Web Design Company</span> Smart Businesses Choose
                                </h2>

                                <div className="prose max-w-none text-gray-700">
                                    <p className="text-lg mb-8">
                                        While there are many <strong>web design companies</strong> to choose from, DesignUIX offers a fundamentally different approach that delivers superior results. Here's what sets us apart:
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                        <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100 shadow-sm">
                                            <div className="flex items-center mb-4">
                                                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white mr-4">
                                                    <Smartphone className="w-6 h-6" />
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900">Mobile-First Philosophy</h3>
                                            </div>
                                            <p>
                                                Unlike many <strong>web design companies</strong> that treat mobile as an afterthought, we design for mobile first. 68% of web traffic now comes from mobile devices, so we ensure:
                                            </p>
                                            <ul className="mt-3 space-y-2">
                                                <li className="flex items-start">
                                                    <span className="text-blue-600 mr-2">•</span>
                                                    <span>Touch-friendly navigation</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-blue-600 mr-2">•</span>
                                                    <span>Mobile-optimized performance</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-blue-600 mr-2">•</span>
                                                    <span>Vertical scrolling experiences</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl border border-purple-100 shadow-sm">
                                            <div className="flex items-center mb-4">
                                                <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white mr-4">
                                                    <TrendingUp className="w-6 h-6" />
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900">Results-Driven Design</h3>
                                            </div>
                                            <p>
                                                We don't just create beautiful websites - we build conversion machines. Our approach includes:
                                            </p>
                                            <ul className="mt-3 space-y-2">
                                                <li className="flex items-start">
                                                    <span className="text-purple-600 mr-2">•</span>
                                                    <span>Strategic placement of CTAs</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-purple-600 mr-2">•</span>
                                                    <span>User journey optimization</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-purple-600 mr-2">•</span>
                                                    <span>Conversion rate best practices</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl overflow-hidden mb-12">
                                        <div className="p-8 text-white">
                                            <div className="flex flex-col md:flex-row items-center">
                                                <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                                                    <div className="bg-white/20 rounded-full w-48 h-48 flex items-center justify-center">
                                                        <div className="text-center">
                                                            <div className="text-5xl font-bold">90+</div>
                                                            <div className="text-lg">Google Pagespeed Score</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="md:w-2/3">
                                                    <h3 className="text-2xl font-bold mb-4">Proven Results Across Industries</h3>
                                                    <p>
                                                        We've helped businesses from startups to Fortune 500 companies achieve:
                                                    </p>
                                                    <div className="grid grid-cols-2 gap-4 mt-4">
                                                        <div className="bg-white/10 p-4 rounded-lg">
                                                            <div className="text-2xl font-bold">63%</div>
                                                            <p>Avg. traffic increase</p>
                                                        </div>
                                                        <div className="bg-white/10 p-4 rounded-lg">
                                                            <div className="text-2xl font-bold">42%</div>
                                                            <p>Avg. conversion lift</p>
                                                        </div>
                                                        <div className="bg-white/10 p-4 rounded-lg">
                                                            <div className="text-2xl font-bold">2.1s</div>
                                                            <p>Avg. page load time</p>
                                                        </div>
                                                        <div className="bg-white/10 p-4 rounded-lg">
                                                            <div className="text-2xl font-bold">98%</div>
                                                            <p>Client satisfaction</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl p-8 text-white text-center">
                                        <h3 className="text-2xl font-bold mb-4">Ready to Experience the DesignUIX Difference?</h3>
                                        <p className="text-xl mb-6 max-w-2xl mx-auto">
                                            Join Numbers of satisfied clients who chose the right <strong>web design company</strong>
                                        </p>
                                        <Link href="/get-free-consultation" className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-full text-lg hover:shadow-2xl transition-all">
                                            Schedule Your Free Consultation
                                        </Link>
                                        <p className="mt-4 text-blue-100">
                                            No obligation • 15-minute call • Custom proposal
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}