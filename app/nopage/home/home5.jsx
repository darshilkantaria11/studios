"use client";
import { motion } from 'framer-motion';
import { MessageCircle, FileText, Settings, Rocket, CheckCircle } from 'lucide-react';

export default function Onboarding() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Seamless Onboarding
            </span>
            <br />
            Made Simple & Stress-Free
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We follow a smooth and structured process that keeps you in the loop and makes your website go live faster.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Progress Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -z-10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 origin-left w-full"
              style={{ scaleX: 1 }} />
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                icon: <MessageCircle className="w-6 h-6" />,
                title: "Let’s Talk",
                text: "We understand your business, goals, and what you really need."
              },
              {
                icon: <FileText className="w-6 h-6" />,
                title: "We Plan It Right",
                text: "We create a simple plan so you know exactly what’s coming."
              },
              {
                icon: <Settings className="w-6 h-6" />,
                title: "We Set It Up",
                text: "We prepare everything in the backend to ensure a smooth launch."
              },
              {
                icon: <Rocket className="w-6 h-6" />,
                title: "Work Begins",
                text: "We start building your site and keep you updated along the way."
              },
              {
                icon: <CheckCircle className="w-6 h-6" />,
                title: "Final Checks",
                text: "We test everything and make sure your site is fast, secure & ready."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                {/* Step Indicator */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-blue-600">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.text}</p>

                {/* Mobile Progress Line */}
                {index < 4 && (
                  <div className="md:hidden h-12 w-px bg-gray-200 mx-auto my-4" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center bg-gradient-to-r from-blue-600 to-purple-600 py-16 px-4 rounded-xl text-white"
        >
          <h3 className="text-2xl font-bold mb-6">
            Get a Free Consultation — Your Website Will Be Live in Just 2 Weeks.
          </h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all"
          >
            Book Your Free Consultation →
          </motion.button>
          <p className="text-white text-sm mt-4">
            We kick off your project within 48 hours of signup. Fast. Simple. Professional.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
