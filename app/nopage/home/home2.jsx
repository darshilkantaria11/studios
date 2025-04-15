"use client";
import { motion } from "framer-motion";

export default function Home() {
    const logos = [
        "/nextjs-logo.svg",
        "/google-search-console1.png",
        "/vercel-logo.svg",
        "/google-analytics-logo.png",
        "/shopify-logo.png",
        "/googlemybusiness1.jpeg",
        "/tailwind.png",
    ];

    return (
        <section className=" py-10 overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Industry-Standard
                        </span>{" "}
                        Technologies
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Leveraging the same trusted technologies used by Fortune 500
                        companies and Silicon Valley startups
                    </p>
                </motion.div>

                {/* Scrolling Logo Marquee */}
                <div className="relative w-full overflow-hidden">
                    <div className="flex w-max animate-marquee space-x-12">
                        {[...logos, ...logos].map((logo, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.1 }}
                                className="flex-shrink-0 h-16 w-32  transition-transform"
                            >
                                <img
                                    src={logo}
                                    alt={`Tech logo ${index}`}
                                    className="h-full w-full object-contain"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                <p className="text-center text-sm text-gray-500 mt-10">
                    Certified solutions partner for all shown technologies
                </p>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .animate-marquee {
                    animation: marquee 25s linear infinite;
                }

                @media (max-width: 768px) {
                    .animate-marquee {
                        animation-duration: 18s;
                    }
                }
            `}</style>
        </section>
    );
}
