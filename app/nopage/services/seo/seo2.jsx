
"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';




export default function GrowthSection() {
    return (
        <section className="py-16 px-4 lg:px-0 bg-white">
            <div className="container mx-auto">
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="py-16 px-4 bg-gradient-to-r from-blue-600 to-green-500 text-white"
                >
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                            How Our SEO Services Grow Your Business 🚀
                        </h2>
                        <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mb-12">
                            We go beyond rankings — our SEO solutions are engineered to bring you qualified traffic, convert visitors, and increase your bottom line.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                            {[
                                {
                                    title: "🔑 Strategic Keyword Targeting",
                                    desc: "We focus on revenue-driving keywords that attract ready-to-buy users — not just vanity rankings."
                                },
                                {
                                    title: "🛠️ Technical SEO Fixes",
                                    desc: "We eliminate crawl issues, boost speed, and ensure mobile optimization to help Google love your site."
                                },
                                {
                                    title: "📈 Content that Converts",
                                    desc: "We optimize your existing pages and create blog content that ranks and sells."
                                },
                                {
                                    title: "📍 Local SEO & Maps Setup",
                                    desc: "Dominate local search with optimized Google Business Profiles, citations, and localized content."
                                },
                                {
                                    title: "🔗 High-Quality Backlinks",
                                    desc: "We build authority through strategic outreach and backlink acquisition from reputable sites."
                                },
                                {
                                    title: "📊 Transparent Monthly Reports",
                                    desc: "Know exactly what’s happening — keyword rankings, traffic, leads, and our next move."
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.03 }}
                                    className="bg-white rounded-xl p-6 backdrop-blur-sm shadow-lg transition-transform"
                                >
                                    <h3 className="text-xl text-black font-semibold mb-2">{item.title}</h3>
                                    <p className="text-black text-sm">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>


                <section className="mt-8 bg-yellow-50 py-14 px-6 md:px-20 rounded-3xl mb-16 relative overflow-hidden shadow-xl">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')] bg-repeat opacity-5" aria-hidden="true"></div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Text Side */}
                        <div className="space-y-8">
                            <p className="text-green-600 font-semibold uppercase tracking-wide text-xs">📊 SEO That Delivers</p>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
                                From <span className="text-red-500">Invisible on Google</span> to <span className="text-green-600">Top Rankings & Daily Leads</span> in Under <span className="bg-black text-white px-2 py-1 rounded-xl">6 Months</span>
                            </h2>

                            {/* Timeline Steps */}
                            <div className="space-y-6 border-l-2 border-green-300 pl-6">
                                {[
                                    {
                                        title: "Before: No Online Visibility",
                                        desc: "The website wasn’t ranking for any major keywords, leading to zero organic traffic.",
                                    },
                                    {
                                        title: "Step 1: In-Depth SEO Audit & Keyword Plan",
                                        desc: "Identified high-value, low-competition keywords to target for fast results.",
                                    },
                                    {
                                        title: "Step 2: On-Page + Technical SEO Fixes",
                                        desc: "Fixed over 100+ issues, optimized meta tags, improved page speed, and mobile experience.",
                                    },
                                    {
                                        title: "Step 3: SEO Blog Content & Backlinks",
                                        desc: "Published SEO-optimized content and earned quality backlinks from trusted sites.",
                                    },
                                    {
                                        title: "After: 20+ SEO Keywords on Page 1",
                                        desc: "Website now generates daily organic leads, with consistent traffic and top rankings.",
                                    },
                                ].map((step, idx) => (
                                    <div key={idx} className="relative pl-4">
                                        <div className="absolute -left-[14px] top-2 w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-md"></div>
                                        <p className="font-semibold text-base text-gray-800">{step.title}</p>
                                        <p className="text-sm text-gray-600">{step.desc}</p>
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            <div className="pt-6">
                                <a
                                    href="/contact"
                                    className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
                                >
                                    Want Results Like This? Claim Your Free SEO Audit
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Image Side */}
                        <div className="p-2 overflow-hidden shadow-2xl bg-white">
                            {/* Video Section */}
                            <div className="w-full h-auto shadow-2xl border-4 border-[#a0d8cb] ">
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover"
                                >
                                    <source src="/gulfsideseo.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="mt-6 bg-green-50 border-l-4 border-green-400 p-4 rounded-xl shadow-sm">
                                <p className="text-sm md:text-base text-gray-800 font-medium">
                                    <span className="text-green-700 font-semibold">Proof of Ranking:</span> This video shows Gulfside Painting ranking <span className="font-bold text-blue-600">#1 on Google</span> for the search term <span className="italic">“affordable painting contractors Sarasota Florida”</span>. A direct result of our targeted SEO strategy.
                                </p>
                            </div>


                            {/* Text Section */}
                            <div className="p-2 bg-gray-50">
                                <div className="max-w-3xl mx-auto text-center">
                                    <p className="text-md md:text-lg text-gray-800 font-medium leading-relaxed">
                                        “Working with <span className="font-semibold text-green-700">DK Studios</span> completely transformed our online presence. We're now getting daily leads — all thanks to their SEO strategy.”
                                    </p>

                                    <span className="block mt-4 text-gray-600 font-semibold test-md">– Gulfside Painting, Sarasota, Florida</span>

                                    <div className="mt-6">
                                        <a
                                            href="https://gulfsidepainting.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition"
                                        >
                                            Visit gulfsidepainting.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="bg-green-50 py-12 px-6 md:px-20 rounded-3xl shadow-lg my-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                        Ready to Boost Your Website&apos;s Google Rankings?
                    </h2>
                    <p className="text-gray-700 text-lg mb-8">
                        Proven SEO strategies. Transparent pricing. Real, measurable results.
                    </p>
                    <Link
                        href="/pricing/seo-pricing"
                        className="inline-block bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold px-8 py-4 rounded-full shadow-md transition-transform transform hover:scale-105"
                    >
                        View SEO Pricing →
                    </Link>
                </section>



            </div>
        </section>
    );
}