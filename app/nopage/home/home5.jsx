"use client";
import { motion } from 'framer-motion';
import { MessageCircle, FileText, Settings, Rocket, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function Onboarding() {
  return (
    <section className="py-20 bg-white" aria-label="Web Design Company Onboarding Process">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900" title="Web Design Company Onboarding Process">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Seamless Website Design Onboarding
            </span>
            <br />
            Simple, Transparent & Stress-Free Setup
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-md" title="Website development onboarding steps">
            Our web design company follows a streamlined onboarding process to help businesses launch SEO-optimized, mobile-friendly websites faster — with no hassle.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
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
                text: "We dive deep into your business goals, target audience, and preferred design style to understand your vision."
              },
              {
                icon: <FileText className="w-6 h-6" />,
                title: "Strategic Planning",
                text: "We craft a custom web design plan tailored to your brand and SEO goals for better search engine visibility."
              },
              {
                icon: <Settings className="w-6 h-6" />,
                title: "Backend Setup",
                text: "We configure hosting, CMS, and SEO tools to ensure your website performs fast and ranks well."
              },
              {
                icon: <Rocket className="w-6 h-6" />,
                title: "Design & Development",
                text: "Our expert team starts building your site with responsive design, performance optimization, and clean code."
              },
              {
                icon: <CheckCircle className="w-6 h-6" />,
                title: "Quality Assurance",
                text: "We test for speed, SEO readiness, mobile responsiveness, and launch your site only when it’s perfect."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                {/* Step Indicator */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mx-auto mb-4 shadow-lg" title={`Step ${index + 1}: ${step.title}`}>
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-blue-600">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.text}</p>

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
          <h3 className="text-2xl font-bold mb-6" title="Free website consultation">
            Book Your Free Website Consultation — Go Live in Just 2 Weeks 🚀
          </h3>
          <Link
            href="/get-free-consultation"
            title="Get a free consultation from a top web design company"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all"
            >
              Book Free Consultation →
            </motion.button>
          </Link>
          <p className="text-white text-sm mt-4 max-w-xl mx-auto" title="Fast web design and launch service">
            Our team of expert designers and developers starts your project within 48 hours. Your custom website will be live in just 14 days — optimized for performance, SEO, and conversions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
