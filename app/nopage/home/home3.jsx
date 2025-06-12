"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const testimonials = [
    {
        name: "Meet Santoki",
        position: "CEO at Sri Ambica Laminates",
        projectLink: "https://www.sriambicalaminates.com/",
        quote:
            "Designuix delivered a tailored B2B web solution that enhanced our client engagement and streamlined our product showcase, significantly boosting our lead generation pipeline.",
        linkText: "View Sri Ambica Laminates Project",
        image: "/sriowner.png",
    },
    {
        name: "Owner",
        position: "Founder & Director at Knottin Daycare Centre",
        projectLink: "https://www.knottindaycarecentre.com/",
        quote:
            "The website redesign greatly improved our online visibility and parent engagement. The user-friendly interface made enrollment easier, helping us grow our community by 35%.",
        linkText: "View Knottin Daycare Centre Project",
        image: "/knottinowner.webp",
    }

];

export default function Testimonials() {

    const router = useRouter();
    return (
        <section
            aria-label="Client testimonials and case studies of Designuix web design company"
            className="py-10"
        >
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-gray-900">
                        Trusted Web Design Company Loved by Innovators
                    </h2>
                    <p className="text-md text-gray-600 max-w-3xl mx-auto">
                        Helping countless businesses boost their online presence and achieve
                        growth with expert web design and SEO services.
                    </p>
                </motion.header>

                <article
                    className="bg-blue-100 py-14 px-6 md:px-20 rounded-3xl mb-16 relative overflow-hidden shadow-xl"
                    aria-label="Case study of Gulfside Painting website design and SEO results"
                >
                    <p className="text-blue-800 font-semibold uppercase tracking-wide text-xs mb-2">
                        ✨ Proven Impact of Our Web Design Services
                    </p>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Video Side */}
                        <div className="order-1 lg:order-2 p-2 overflow-hidden shadow-2xl bg-white rounded-xl">
                            <div className="w-full h-auto shadow-2xl border-4 border-[#319e8e] rounded-lg overflow-hidden">
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover"
                                    aria-label="Video showcasing Gulfside Painting web design project"
                                    title="Gulfside Painting website design project video"
                                >
                                    <source src="/gulfside.mp4" type="video/mp4" />
                                    
                                    Your browser does not support the video tag.
                                </video>
                            </div>

                            <section className="p-6 md:p-10 bg-gray-100 rounded-b-xl text-sm lg:text-xl">
                                <blockquote className="max-w-4xl mx-auto text-center">
                                    <p className="text-gray-900 font-medium leading-relaxed">
                                        “Partnering with{" "}
                                        <span className="font-semibold text-blue-900">Designuix</span>{" "}
                                        was the best move we made. Their expertise took us from
                                        overlooked to fully booked in record time.”
                                    </p>
                                    <footer className="mt-4 text-gray-700 font-semibold">
                                        – Gulfside Painting, Sarasota, Florida
                                    </footer>
                                </blockquote>
                                <div className="mt-6 flex justify-center">
                                    <button
                                        onClick={() => window.open("https://gulfsidepainting.com", "_blank", "noopener,noreferrer")}
                                        title="Visit Gulfside Painting official website"
                                        className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-900 transition"
                                    >
                                        Visit gulfsidepainting.com
                                    </button>
                                </div>
                            </section>
                        </div>

                        {/* Text Side */}
                        <div className="order-2 lg:order-1 space-y-8">
                            <h3 className="text-2xl lg:text-3xl font-extrabold text-gray-900 leading-snug">
                                From{" "}
                                <span className="text-red-600">Zero Online Visibility</span> to{" "}
                                <span className="text-green-800">Fully Booked</span> in Just{" "}
                                <span className="bg-black text-white p-2 rounded-xl inline-block">6 Months</span>
                            </h3>

                            <dl className="space-y-6 border-l-2 border-blue-300 pl-6">
                                {[
                                    {
                                        title: "Starting Point: No Online Presence",
                                        desc: "Relied solely on word-of-mouth referrals without a professional website.",
                                    },
                                    {
                                        title: "Our Solution: High-Performance Website",
                                        desc: "Developed a mobile-friendly, SEO-optimized, and conversion-focused website tailored to Gulfside Painting's needs.",
                                    },
                                    {
                                        title: "Result: 20+ Major Projects Secured",
                                        desc: "Successfully booked over 20 large-scale projects and multiple small renovation jobs within 6 months of launching the new website.",
                                    },
                                    {
                                        title: "Ongoing: Steady Leads Flow",
                                        desc: "Consistent high search visibility and organic traffic continue to generate quality leads daily.",
                                    },
                                ].map((step, idx) => (
                                    <div key={idx} className="relative pl-4">
                                        <dt>
                                            <span className="absolute -left-[14px] top-2 w-3 h-3 bg-blue-700 rounded-full border-2 border-white shadow-md"></span>
                                            <h3 className="font-semibold text-base text-gray-900">{step.title}</h3>
                                        </dt>
                                        <dd className="text-sm text-gray-700">{step.desc}</dd>
                                    </div>
                                ))}
                            </dl>

                            <div className="pt-6">
                                <Link
                                    href="/get-free-consultation"
                                    title="Get a free consultation from Designuix web design company"
                                    className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-700 to-purple-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
                                >
                                    Get Free Consultation
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </article>


                {/* Testimonials Grid */}
                <section
                    aria-label="Client testimonials for Designuix web design company"
                    className="grid md:grid-cols-2 gap-8 mb-10"
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.blockquote
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                            tabIndex={0}
                            aria-label={`Testimonial by ${testimonial.name}, ${testimonial.position}`}
                        >
                            <article>
                                {/* Profile Image and Info */}
                                <div className="flex items-start gap-4 mb-6">
                                    {/* Profile Image */}
                                    <div
                                        className="w-16 h-16 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-0.5 shadow-md aspect-square"
                                        aria-hidden="true"
                                    >
                                        <div className="w-full h-full rounded-full overflow-hidden">
                                            <Image
                                                src={testimonial.image}
                                                alt={`Photo of ${testimonial.name}, ${testimonial.position}`}
                                                width={64}
                                                height={64}
                                                className="w-full h-full object-cover rounded-full"
                                                title={`Profile image of ${testimonial.name}, ${testimonial.position} at Designuix Web Design Company`}
                                                priority
                                            />
                                        </div>
                                    </div>

                                    {/* Name + Position + Stars */}
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                                        <p className="text-gray-600">{testimonial.position}</p>
                                        <div className="flex gap-1 mt-2 text-yellow-400" role="img" aria-label="5 out of 5 stars">
                                            ⭐⭐⭐⭐⭐
                                        </div>

                                    </div>
                                </div>

                                {/* Testimonial Quote */}
                                <p className="text-gray-700 mb-6 italic leading-relaxed">
                                    “{testimonial.quote}”
                                </p>

                                {/* Footer Link */}
                                <footer className="border-t pt-6">
                                    <Link
                                        href={testimonial.projectLink}
                                        title={`Read project case study for ${testimonial.name}`}
                                        className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 group"
                                    >
                                        {testimonial.linkText}
                                        <span
                                            className="group-hover:translate-x-1 transition-transform"
                                            aria-hidden="true"
                                        >
                                            →
                                        </span>
                                    </Link>
                                </footer>
                            </article>
                        </motion.blockquote>
                    ))}
                </section>


                <div className="text-center mb-10">
                    <Link
                        href="/projects"
                        title="See more success stories from Designuix clients"
                        className="inline-block px-6 py-3 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-xs lg:text-lg transition-all"
                    >
                        See more success stories from our clients →
                    </Link>
                </div>

                {/* Final CTA Section */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    aria-label="Call to action to start web design project with Designuix"
                    className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl"
                >
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Ready to Transform Your Digital Presence with a Leading Web Design Company?
                        </h2>
                        <p className="text-blue-100 mb-8">
                            Join the growing list of successful businesses powered by our expert
                            web design and digital marketing solutions.
                        </p>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-black px-8 py-4 rounded-full font-bold transition-colors"
                            aria-label="Get a free web design consultation from Designuix"
                        >
                            <Link href="/get-free-consultation" title="Get a free consultation from Designuix web design company">
                                Get Free Consultation →
                            </Link>
                        </motion.div>
                    </div>
                </motion.section>
            </div>
        </section>
    );
}
