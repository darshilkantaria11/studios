"use client";

import { motion } from 'framer-motion';
import { Rocket, ShieldCheck, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Benefits() {
  return (
    <section
      className="py-16 bg-white"
      aria-labelledby="section-benefits"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2
            id="section-benefits"
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Why Choose Our Web Design Company
            </span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            We craft SEO-optimized, high-converting websites that boost your online visibility and drive business growth. As a modern web design company, we focus on performance, security, and scalability.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Blazing Fast Performance",
              description:
                "Our websites are optimized for speed. A faster site means better user experience, lower bounce rates, and higher rankings on search engines like Google.",
              features: [
                "Loads under 1 second",
                "Google Speed Score: 90+",
                "Optimized image delivery",
                "SEO-friendly structure",
              ],
            },
            {
              icon: <ShieldCheck className="w-8 h-8" />,
              title: "Rock-Solid Security",
              description:
                "Our web design solutions are fortified with advanced security layers. Whether you're running a business site or an e-commerce store, your data and customer information stay protected.",
              features: [
                "Free SSL & HTTPS encryption",
                "Firewall & malware protection",
                "Routine vulnerability scans",
                "GDPR & privacy compliance",
              ],
            },
            {
              icon: <Rocket className="w-8 h-8" />,
              title: "Scalable & Future-Proof Design",
              description:
                "We build websites using the latest technology stacks, ready to grow with your business and adapt to the changing digital landscape.",
              features: [
                "Built with React & Next.js",
                "Fully responsive across devices",
                "Easily manageable content",
                "Analytics & performance tracking",
              ],
            },
          ].map((benefit, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow group"
            >
              {/* Icon */}
              <div className="mb-6">
                <div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center text-blue-600"
                  aria-hidden="true"
                >
                  {benefit.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mb-5">
                {benefit.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {benefit.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/get-free-consultation"
            title="Get Free Consultation with Our Web Design Experts"
            className="inline-block bg-black text-white hover:bg-white hover:text-black border border-black px-6 py-3 rounded-full text-md font-medium transition-all shadow-lg"
          >
            Get Free Website Consultation →
          </Link>
        </div>

        {/* Decorative Accent */}
        <div className="mt-20 flex justify-center">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 w-1/2 rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
