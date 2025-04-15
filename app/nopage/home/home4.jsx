"use client";
import { motion } from 'framer-motion';
import { Rocket, ShieldCheck, Zap } from 'lucide-react';

export default function Benefits() {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Engineering Excellence
            </span>
            <br />
            That Delivers Results
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Modern websites that are fast, secure, and built to grow your business
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Lightning Performance",
              description: "Your site loads instantly — faster websites bring more visitors and sales.",
              features: [
                "Loads in under 1 second",
                "Google Speed Score: 90+",
                "Instant image loading",
                "Built to convert visitors"
              ]
            },
            {
              icon: <ShieldCheck className="w-8 h-8" />,
              title: "Ironclad Security",
              description: "Your business stays safe, 24/7 — no hacks, no stress.",
              features: [
                "Protected from cyber attacks",
                "Weekly security checks",
                "Free SSL certificate",
                "GDPR-compliant protection"
              ]
            },
            {
              icon: <Rocket className="w-8 h-8" />,
              title: "Future-Ready Foundation",
              description: "Stay ahead with modern tech that’s fast, reliable, and easy to grow.",
              features: [
                "Built with the latest tools",
                "Ready to scale with your business",
                "Real-time performance tracking",
                "Easy to update anytime"
              ]
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group"
            >
              {/* Icon Container */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center text-blue-600">
                  {benefit.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {benefit.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3">
                {benefit.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Gradient Accent */}
        <div className="mt-20 flex justify-center">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 w-1/2 rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
