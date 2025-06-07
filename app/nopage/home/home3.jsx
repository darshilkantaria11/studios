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
                 <section className="bg-blue-50 py-14 px-6 md:px-20 rounded-3xl mb-16 relative overflow-hidden shadow-xl">

          <p className="text-blue-600 font-semibold uppercase tracking-wide text-xs mb-2">✨ Proven Impact</p>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Image Side */}
            <div className="order-1 lg:order-2 p-2 overflow-hidden shadow-2xl bg-white">
              {/* Video Section */}
              <div className="w-full h-auto shadow-2xl border-4 border-[#a0d8cb]">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/gulfside.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Text Section */}
              <div className="p-6 md:p-10 bg-gray-50">
                <div className="max-w-3xl mx-auto text-center">
                  <p className="text-lg md:text-xl text-gray-800 font-medium leading-relaxed">
                    “Partnering with <span className="font-semibold text-blue-700">DK Studios</span> was the best move we made. Their expertise took us from overlooked to fully booked in record time.”
                  </p>
                  <span className="block mt-4 text-gray-600 font-semibold">– Gulfside Painting, Sarasota, Florida</span>
                  <div className="mt-6">
                    <a
                      href="https://gulfsidepainting.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-800 transition"
                    >
                      Visit gulfsidepainting.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="order-2 lg:order-1 space-y-8">
              {/* <p className="text-blue-600 font-semibold uppercase tracking-wide text-xs">✨ Proven Impact</p> */}
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
                From <span className="text-red-500">Zero Visibility</span> to <span className="text-green-600">Fully Booked</span> in <span className="bg-black text-white p-2 rounded-xl">Just 6 Months</span>
              </h2>

              {/* Timeline Steps */}
              <div className="space-y-6 border-l-2 border-blue-200 pl-6">
                {[
                  {
                    title: "Starting Point: No Online Presence",
                    desc: "Relied solely on word-of-mouth referrals.",
                  },
                  {
                    title: "Our Solution: High-Performance Website",
                    desc: "Mobile-friendly, SEO-optimized, and conversion-focused.",
                  },
                  {
                    title: "Result: 20+ Major Projects Secured",
                    desc: "Successfully booked over 20 large-scale projects along with multiple small renovation jobs within just 6 months.",
                  },
                  {
                    title: "Ongoing: Steady Leads Flow",
                    desc: "Inquiries continue due to high search visibility.",
                  },
                ].map((step, idx) => (
                  <div key={idx} className="relative pl-4">
                    <div className="absolute -left-[14px] top-2 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-md"></div>
                    <p className="font-semibold text-base text-gray-800">{step.title}</p>
                    <p className="text-sm text-gray-600">{step.desc}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-6">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
                >
                  Get a Free Consultation
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </section>


        

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
