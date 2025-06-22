"use client";
import { motion } from 'framer-motion';
import { PhoneCall, ClipboardCheck, Handshake, Monitor, RefreshCw, Rocket, Gift } from 'lucide-react';
import Link from 'next/link';

export default function Onboarding() {
  return (
    <section className="py-28 bg-gradient-to-b from-white to-blue-50" aria-label="Stress-Free Website Creation">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header - More Conversational */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Your Website Journey - Made Effortless
            </span>
            <br />
            <span className="text-xl md:text-2xl font-normal text-gray-700">Zero tech skills needed from your side</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl" title="Web design company process">
            As your trusted web design company, we've perfected a stress-free onboarding that makes creating your dream website as easy as:
            <span className="block mt-3 font-medium text-blue-600">Chat → Approve → Relax → Launch</span>
          </p>
        </motion.div>

        {/* Enhanced Process Timeline */}
        <div className="relative">
          {/* Progress line - More Visible */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5 }}
            className="hidden md:block absolute top-1/2 left-0 right-0 h-2 bg-gray-100 -z-10 rounded-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left w-full rounded-full"
              style={{ scaleX: 1 }} />
          </motion.div>

          <div className="grid md:grid-cols-5 gap-10">
            {[
              {
                icon: <PhoneCall className="w-7 h-7" />,
                title: "15-Min Chat",
                text: "We'll have a relaxed conversation about your business goals and website needs - no tech jargon, just clear talk",
                highlight: "No sales pitch, just honest advice"
              },
              {
                icon: <ClipboardCheck className="w-7 h-7" />,
                title: "Tailored Plan",
                text: "Within 24 hours, you'll receive a custom proposal with exact pricing (zero hidden fees) and clear timeline",
                highlight: "Fixed budget locked upfront"
              },
              {
                icon: <Monitor className="w-7 h-7" />,
                title: "Live Progress Hub",
                text: "Access your private dashboard 24/7 to see real-time updates, provide feedback, and track progress",
                highlight: "Never wonder 'what's happening?'"
              },
              {
                icon: <RefreshCw className="w-7 h-7" />,
                title: "Collaborative Refinement",
                text: "We build, you review. Make unlimited tweaks during development until you're 100% satisfied",
                highlight: "Your feedback drives every pixel"
              },
              {
                icon: <Gift className="w-7 h-7" />,
                title: "Full Ownership Delivery",
                text: "Receive complete access to your website, all source files, and 100% ownership rights - no strings attached",
                highlight: "It's yours forever, period"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-blue-50"
              >
                {/* Step Indicator - More Engaging */}
                <div className="relative mx-auto mb-6">
                  <div className="absolute -inset-2 bg-blue-100 rounded-full blur opacity-75"></div>
                  <div 
                    className="relative w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mx-auto shadow-lg"
                    title={`Step ${index + 1}: ${step.title}`}
                  >
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-blue-600">
                      {step.icon}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 bg-white border-2 border-blue-500 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 font-bold text-sm">
                    {index + 1}
                  </div>
                </div>

                {/* Content - More Detailed */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-3">{step.text}</p>
                <div className="bg-blue-50 px-3 py-2 rounded-lg inline-block">
                  <span className="text-blue-700 text-sm font-medium">{step.highlight}</span>
                </div>

                {index < 4 && (
                  <div className="md:hidden h-12 w-px bg-gradient-to-b from-blue-200 to-purple-200 mx-auto my-6" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA - More Compelling */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-24 text-center bg-gradient-to-r from-blue-700 to-purple-700 py-16 px-6 rounded-2xl text-white shadow-xl relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-400 rounded-full opacity-10"></div>
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-purple-400 rounded-full opacity-10"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-4xl font-bold mb-6 max-w-3xl mx-auto leading-tight">
              Start With a <span className="text-yellow-300">Risk-Free 15-Minute Chat</span> - Get Your Custom Website Plan Tomorrow
            </h3>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 max-w-2xl mx-auto mb-8">
              <p className="flex items-center justify-center gap-2 mb-3 text-blue-100">
                <Rocket className="w-5 h-5 text-yellow-300" />
                <span className="font-semibold">What happens next:</span>
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left text-white">
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">✓</span> We listen to your vision
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">✓</span> You get fixed-price proposal
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">✓</span> 100% ownership guarantee
                </li>
              </ul>
            </div>
            
            <Link
              href="/get-free-consultation"
              title="Get started with our web design company"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-5 rounded-full font-bold hover:shadow-2xl transition-all text-lg shadow-lg hover:shadow-yellow-400/30"
              >
                <span className="drop-shadow-md">Start With Free Consultation →</span>
              </motion.button>
            </Link>
            
            <p className="text-blue-100 mt-6 max-w-2xl mx-auto text-md" title="Web design company promise">
              <span className="block mb-2">As your dedicated web design company, we guarantee:</span>
              <span className="inline-block bg-black/20 px-4 py-2 rounded-lg">No upfront payment • No pressure • No confusing tech talk</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}