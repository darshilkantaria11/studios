"use client";
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Link from 'next/link';

const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO at TechStart Inc",
      projectLink: "/projects/techstart",
      quote:
        "Our website traffic tripled within 3 months of launch. The team delivered exceptional performance while maintaining our strict security requirements.",
      linkText: "View TechStart Project",
      image: "/images/sarah.jpg", // ← replace with actual image path
    },
    {
      name: "David Lee",
      position: "Founder of DevFlow",
      projectLink: "/projects/devflow",
      quote:
        "The turnaround time was amazing, and the UX design nailed our brand. We've seen a 40% increase in engagement.",
      linkText: "View DevFlow Project",
      image: "/images/david.jpg", // ← replace with actual image path
    },
  ];
  

export default function Testimonials() {
    return (
        <section className="py-10 ">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
                        Loved by Innovators
                        <span className="block text-xl text-gray-600 mt-2">
                            Helping countless businesses bring their ideas to life
                        </span>
                    </h2>
                </motion.div>

                {/* Testimonial Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-10">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
                        >
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-0.5">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                                    <p className="text-gray-600">{testimonial.position}</p>
                                    <div className="flex gap-1 mt-2 text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-current" />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-700 mb-6">"{testimonial.quote}"</p>

                            <div className="border-t pt-6">
                                <a
                                    href={testimonial.projectLink}
                                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 group"
                                >
                                    {testimonial.linkText}
                                    <span className="group-hover:translate-x-1 transition-transform">
                                        →
                                    </span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="text-center mb-10">
                    <Link
                        href="/clients" // <-- update this path as needed
                        className="inline-block px-6 py-3 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-xs lg:text-lg transition-all"
                    >
                        See more success stories from our clients →
                    </Link>
                </div>


                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl"
                >
                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-3xl font-bold text-white mb-4">
                            Ready to Transform Your Digital Presence?
                        </h3>
                        <p className="text-blue-100 mb-8">
                            Be part of the success stories we're proud to build. Start Your Project Now !
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-black px-8 py-4 rounded-full font-bold  transition-colors"
                        >
                            Get Free Consultation →
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
