"use client";

import { motion } from 'framer-motion';
import { Rocket, ShieldCheck, Zap, PenTool, BarChart2, Headphones, Award, Layout } from 'lucide-react';
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
              Why Designuix is Your Premier Web Design Company
            </span>
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            As a leading web design company, we specialize in creating custom, high-performance websites that drive conversions and deliver exceptional ROI. Discover why businesses nationwide choose Designuix as their trusted web design partner for comprehensive digital solutions.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              icon: <PenTool className="w-8 h-8" />,
              title: "Custom Website Design Tailored to Your Business",
              description:
                "As a specialized web design company, we create bespoke websites that perfectly reflect your brand identity while optimizing for conversions. Our custom designs aren't just visually stunning—they're engineered to guide visitors through your sales funnel with strategic CTAs and intuitive navigation.",
              features: [
                "100% unique designs crafted for your industry",
                "Conversion-focused layouts with strategic CTAs",
                "Mobile-first responsive design approach",
                "Brand-aligned visual identity development",
                "User journey mapping for optimal engagement",
              ],
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Lightning-Fast Website Performance",
              description:
                "Speed is critical for both user experience and SEO. As a performance-focused web design company, we optimize every element for maximum speed, ensuring your site loads in under 1.5 seconds. Fast-loading sites reduce bounce rates, improve conversions, and rank higher in search results.",
              features: [
                "90+ Google PageSpeed scores guaranteed",
                "Advanced image optimization techniques",
                "Minified code and lazy loading implementation",
                "CDN integration for global speed",
                "Core Web Vitals optimization",
              ],
            },
            {
              icon: <BarChart2 className="w-8 h-8" />,
              title: "SEO-Optimized Web Design Solutions",
              description:
                "Our web design company integrates SEO best practices from day one. We build websites with clean code, semantic structure, and mobile responsiveness—all essential ranking factors. Our designs ensure your site is easily crawlable by search engines while providing exceptional user experiences.",
              features: [
                "SEO-friendly architecture and URL structure",
                "Schema markup implementation",
                "Mobile-first indexing optimization",
                "Technical SEO audits and implementation",
                "Content hierarchy for SEO effectiveness",
              ],
            },
            {
              icon: <ShieldCheck className="w-8 h-8" />,
              title: "Secure & Reliable Web Development",
              description:
                "Security is non-negotiable in today's digital landscape. Our web design company prioritizes robust security measures to protect your business and customer data. From SSL implementation to regular security audits, we build websites with enterprise-grade protection.",
              features: [
                "Free SSL certificates for all websites",
                "Regular security vulnerability scanning",
                "GDPR and CCPA compliance implementation",
                "Malware protection and DDoS mitigation",
                "Secure payment gateway integration",
              ],
            },
            {
              icon: <Headphones className="w-8 h-8" />,
              title: "Comprehensive Post-Launch Support",
              description:
                "Our partnership doesn't end at launch. As a full-service web design company, we provide ongoing maintenance, updates, and support to ensure your website continues performing optimally. From security patches to content updates, we're your long-term digital partner.",
              features: [
                "30-day post-launch support included",
                "Ongoing maintenance packages available",
                "24/7 security monitoring options",
                "Content update and expansion services",
                "Performance optimization consultations",
              ],
            },
            {
              icon: <Award className="w-8 h-8" />,
              title: "Pay After Satisfaction Guarantee",
              description:
                "We stand behind our work with a unique payment model—you only pay when you're completely satisfied with the final product. This risk-free approach demonstrates our confidence in delivering exceptional results as your chosen web design company.",
              features: [
                "No upfront payments required",
                "Multiple review and revision stages",
                "Final payment only upon approval",
                "100% satisfaction guarantee",
                "Transparent pricing with no hidden fees",
              ],
            },
          ].map((benefit, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow group border border-gray-100"
            >
              {/* Icon */}
              <div className="mb-6">
                <div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center text-blue-600 group-hover:from-blue-200 group-hover:to-purple-200 transition-colors"
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

        {/* Additional Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-white p-5 rounded-2xl shadow-md flex items-center justify-center">
                <Layout className="w-12 h-12 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Your Complete Web Design Solution
                </h3>
                <p className="text-gray-700 mb-4">
                  As a full-service web design company, we handle every aspect of your online presence—from initial strategy and custom design to development, SEO optimization, and ongoing maintenance. With Designuix, you get:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0"
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
                    <span className="text-gray-700">End-to-end website solutions</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0"
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
                    <span className="text-gray-700">Integrated SEO strategy</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0"
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
                    <span className="text-gray-700">Conversion rate optimization</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0"
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
                    <span className="text-gray-700">Ongoing performance monitoring</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/get-free-consultation"
            title="Get Free Consultation with Our Web Design Experts"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-medium transition-all shadow-lg hover:shadow-xl"
          >
            Get Your Free Website Consultation Today
          </Link>
          <p className="mt-4 text-gray-600">
            Speak with our web design experts and discover how we can transform your online presence
          </p>
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