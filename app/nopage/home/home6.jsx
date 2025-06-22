"use client";

import { motion, AnimatePresence } from 'framer-motion';
import {
    Layout,
    Star,
    CreditCard,
    RefreshCw,
    Smartphone,
    ShoppingCart,
    Search,
    BarChart,
    Calendar,
    Package,
    Globe,
    File,
    Palette,
    Repeat,
    FileText,
    MapPin,
    Camera,
    TrendingUp,
    ChevronDown
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function ServicesPage() {
    const faqs = [
        {
            question: "Why should I hire a web design company instead of building it myself?",
            answer: (
                <div className="text-gray-700">
                    <p className="mb-3">
                        Hiring a professional web design company ensures your website isn't just visually appealing but also high-performing, mobile-friendly, and SEO-optimized. While DIY platforms like Wix or Squarespace might seem cost-effective initially, they often lack the technical sophistication needed to convert visitors into customers and rank well on search engines.
                    </p>
                    <p className="mb-3">
                        Professional designers bring expertise in user experience (UX) design, conversion rate optimization, and technical implementation that most business owners simply don't have. We understand how to structure websites for maximum engagement, implement proper security measures, and optimize every element for search engines.
                    </p>
                    <p>
                        Perhaps most importantly, a professional web design company saves you time and frustration. What might take you 40+ hours of struggle, we can accomplish efficiently while you focus on running your business. The investment pays for itself through better lead generation, higher conversion rates, and a website that grows with your business rather than needing constant fixes.
                    </p>
                </div>
            )
        },
        {
            question: "What makes Designuix different from other web design companies?",
            answer: (
                <div className="text-gray-700">
                    <p className="mb-3">
                        Designuix stands out through our holistic approach that combines modern design aesthetics with technical excellence. While many agencies focus solely on visual appeal, we integrate performance optimization and SEO fundamentals directly into our design process from day one. This ensures your website not only looks beautiful but actually performs in the real world.
                    </p>
                    <p className="mb-3">
                        Our "lifetime support" policy is truly unique in the industry. Unlike companies that disappear after launch, we remain your long-term digital partner. This includes ongoing advice, minor updates at no extra cost, and being available when technical issues arise. We also pride ourselves on our personal approach - you'll work directly with senior designers rather than junior staff, ensuring your vision is understood and executed perfectly.
                    </p>
                    <p>
                        Perhaps most importantly, we focus on delivering measurable business results. Every design decision we make considers how it will impact your conversions, lead generation, and customer engagement. Our clients typically see a 40-60% increase in qualified leads within 3 months of launching their new website.
                    </p>
                </div>
            )
        },
        
        {
            question: "Can you redesign my existing website?",
            answer: (
                <div className="text-gray-700">
                    <p className="mb-3">
                        Absolutely! Website redesigns make up about 60% of our projects. We specialize in transforming outdated, underperforming websites into modern, conversion-focused platforms that align with your current brand identity and business goals. Our redesign process carefully preserves your existing SEO value while modernizing both the user experience and technical foundation.
                    </p>
                    <p className="mb-3">
                        Our 5-phase redesign approach includes: 1) Comprehensive audit of your current site, 2) Strategic planning for improved conversions, 3) Modern responsive design, 4) Careful content migration, and 5) Technical optimization. We pay special attention to maintaining or improving your search rankings during the transition.
                    </p>
                    <p>
                        Recent clients have seen impressive results from our redesigns: a financial services company increased leads by 140%, an e-commerce store reduced bounce rate by 75%, and a healthcare provider tripled their appointment bookings. Whether your site is 2 years old or 10, we can breathe new life into your digital presence.
                    </p>
                </div>
            )
        },
        {
            question: "Will my website work on all devices?",
            answer: (
                <div className="text-gray-700">
                    <p className="mb-3">
                        Yes, absolutely. We build fully responsive websites that automatically adapt to desktops, tablets, and mobile phones. With mobile devices now accounting for over 68% of web traffic, this isn't just a feature - it's a necessity for business success.
                    </p>
                    <p className="mb-3">
                        Our mobile-first approach means we design for the smallest screens first, then expand to larger devices. This ensures your mobile experience isn't an afterthought but the foundation of our design process. We test on 20+ actual devices (not just simulators) to guarantee perfect functionality.
                    </p>
                    <p>
                        Beyond just looking good, we optimize for mobile performance: compressing images, simplifying navigation for touchscreens, and ensuring fast loading even on slower mobile networks. Google now prioritizes mobile-friendly sites in search rankings, so this technical excellence directly impacts your visibility and traffic.
                    </p>
                </div>
            )
        },
        {
            question: "Do you offer eCommerce website design services?",
            answer: (
                <div className="text-gray-700">
                    <p className="mb-3">
                        Yes, we specialize in creating high-converting e-commerce stores using platforms like Shopify, WooCommerce, and custom solutions. Our e-commerce packages include everything needed to launch and grow your online business: product management, secure payment gateways, inventory systems, tax/shipping calculators, and mobile-optimized checkout flows.
                    </p>
                    <p className="mb-3">
                        We focus on creating shopping experiences that convert visitors into customers. This includes strategic product page layouts, abandoned cart recovery systems, personalized recommendations, and streamlined checkout processes. Our clients typically see conversion rates increase by 40-60% compared to their previous stores.
                    </p>
                    <p>
                        Beyond the initial build, we offer ongoing e-commerce optimization services. This includes conversion rate testing, seasonal design updates, performance monitoring, and integration with marketing tools. We've helped clients scale from their first sale to 7-figure annual revenues through thoughtful e-commerce design and strategy.
                    </p>
                </div>
            )
        },
        {
            question: "Do you include SEO services in your web design?",
            answer: (
                <div className="text-gray-700">
                    <p className="mb-3">
                        Yes, SEO is built into every website we create, not added as an afterthought. Our "SEO-first" design approach ensures your site has the technical foundation needed to rank well from day one. This includes proper site structure, semantic HTML, optimized images, fast loading speeds, mobile responsiveness, and clean code architecture.
                    </p>
                    <p className="mb-3">
                        Every website includes basic on-page SEO implementation: keyword-optimized content, proper heading structure (H1-H6 tags), meta title/description optimization, XML sitemap, and schema markup. We also set up Google Analytics and Search Console during launch to track your performance.
                    </p>
                    <p>
                        For clients needing more comprehensive SEO, we offer specialized packages that include ongoing content creation, backlink building, and technical optimization. Our clients typically see organic traffic increase by 50-150% within 6 months of launching their new site. We provide detailed monthly reports showing exactly how your visibility is improving.
                    </p>
                </div>
            )
        },
        {
            question: "How do I choose the best web design company?",
            answer: (
                <div className="text-gray-700">
                    <p className="mb-3">
                        Choosing the right web design partner is crucial for your business success. Look beyond flashy portfolios and consider these key factors: proven experience in your industry, transparent communication processes, SEO technical knowledge, and authentic client testimonials.
                    </p>
                    <p className="mb-3">
                        Ask potential partners specific questions: What's your design process? How many revisions do you include? What SEO fundamentals do you implement? What happens after launch? Red flags include vague pricing, lack of clear process, or promises that sound too good to be true.
                    </p>
                    <p>
                        At Designuix, we encourage you to speak with our existing clients and review our case studies. We're transparent about what we can deliver and how we'll help achieve your business goals. Our 98% client retention rate speaks to our commitment to long-term partnerships rather than one-off projects.
                    </p>
                </div>
            )
        },
        {
            question: "How long does it take a web design company to build a website?",
            answer: (
                <div className="text-gray-700">
                    <p className="mb-3">
                        Most standard business websites take 10-14 business days from project kickoff to launch. E-commerce sites typically require 3-4 weeks depending on the number of products and complexity of functionality. Larger custom web applications can take 6-8 weeks.
                    </p>
                    <p className="mb-3">
                        The timeline depends on several factors: how quickly you provide content, the complexity of design requirements, and the number of revisions needed. We break projects into clear milestones with deadlines to keep everything on track.
                    </p>
                    <p>
                        Our 4-phase process ensures efficient delivery: 1) Discovery & planning (2-3 days), 2) Design & revision (5-7 days), 3) Development (5-10 days), 4) Testing & launch (2-3 days). You'll receive regular updates throughout the process, never left wondering about progress.
                    </p>
                </div>
            )
        },
        {
            question: "What is included in your web design packages?",
            answer: (
                <div className="text-gray-700">
                    <p className="mb-3">
                        Our comprehensive packages include everything needed for a successful website launch: custom design tailored to your brand, mobile-responsive development, SEO foundation setup, contact forms, basic on-page content, and 1 month of free support.
                    </p>
                    <p className="mb-3">
                        Standard features across all packages include: fast hosting setup, SSL security certificate, Google Analytics integration, basic on-page SEO, contact forms, social media integration, and training on content management.
                    </p>
                    
                </div>
            )
        },
        {
            question: "What industries do you work with?",
            answer: (
                <div className="text-gray-700">
                    <p className="mb-3">
                        We've worked with businesses across numerous sectors including e-commerce, healthcare, professional services, real estate, education, non-profits, restaurants, and personal branding. Our diverse portfolio demonstrates our ability to adapt to different industry requirements and audience expectations.
                    </p>
                    <p className="mb-3">
                        Some of our specialty areas include: medical practices needing HIPAA-compliant solutions, e-commerce stores requiring conversion optimization, service businesses needing lead generation focus, and SaaS companies requiring complex web applications.
                    </p>
                    <p>
                        Rather than applying a one-size-fits-all approach, we immerse ourselves in your industry. For healthcare clients, we focus on patient experience and trust signals. For e-commerce, we optimize the purchasing journey. For B2B services, we streamline complex service explanations. This industry-specific approach leads to websites that truly resonate with your target audience.
                    </p>
                </div>
            )
        },
        {
            question: "Will I own the website after it's completed?",
            answer: (
                <div className="text-gray-700">
                    <p className="mb-3">
                        Yes, absolutely. Once your project is complete and the final payment is made, you have 100% ownership of your website - including all design files, code, and content. There are no ongoing licensing fees or restrictions.
                    </p>
                    <p className="mb-3">
                        We provide full source files including layered design documents (PSD/AI), all website code (HTML/CSS/JS), database exports, and a comprehensive handover package. You're free to host with any provider, make changes yourself, or hire another developer in the future.
                    </p>
                    <p>
                        This complete ownership model differs from some agencies that retain control through proprietary platforms or hosting restrictions. We believe you should have full control over your digital assets. Our transfer process includes documentation and training to ensure a smooth transition.
                    </p>
                </div>
            )
        },
        {
            question: "Do you provide custom website design or use templates?",
            answer: (
                <div className="text-gray-700">
                    <p className="mb-3">
                        We offer both options depending on your needs and budget. Our custom design service creates a completely unique website tailored to your brand identity and business goals. This is ideal for businesses wanting a distinctive online presence.
                    </p>
                    <p className="mb-3">
                        For clients with tighter budgets or timelines, we offer template-based solutions using premium themes that we extensively customize to match your branding. While starting from a template framework, we modify every element until it looks and functions like a custom design.
                    </p>
                    <p>
                        Both approaches include our signature attention to detail: mobile optimization, performance tuning, and SEO best practices. We'll advise which approach makes the most sense for your business during our consultation. About 70% of our clients choose custom design for its unique advantages in branding and conversion optimization.
                    </p>
                </div>
            )
        },
        {
            question: "What if I don’t like the first design?",
            answer: (
                <div className="text-gray-700">
                    <p className="mb-3">
                        It's completely normal to request revisions - that's why we include 3 rounds of revisions in every package. Your satisfaction is our top priority, so we'll refine the design until you're 100% happy with it.
                    </p>
                    <p className="mb-3">
                        Our design process begins with a comprehensive discovery phase to understand your vision, brand identity, and preferences. This significantly reduces the chance of misalignment. When we present the initial concept, we walk you through the design rationale and how each element supports your business goals.
                    </p>
                    <p>
                        If changes are needed, we have an efficient revision process: you provide specific feedback, we implement it within 1-2 business days, then review the updates together. This collaborative approach has resulted in a 98% client satisfaction rate with our designs. For complete peace of mind, we offer a money-back guarantee if you're not satisfied with the initial concepts.
                    </p>
                </div>
            )
        },
        {
            question: "Do you help with website content and images?",
            answer: (
                <div className="text-gray-700">
                    <p className="mb-3">
                        Yes, we offer comprehensive content services. Our team includes professional copywriters who can craft compelling, SEO-optimized content that speaks to your target audience and drives conversions. We also provide access to premium stock photography and can create custom graphics if needed.
                    </p>
                    <p className="mb-3">
                        Our content creation process begins with understanding your brand voice, target audience, and key messages. We then develop content that not only informs but persuades - turning visitors into leads or customers. For e-commerce sites, we specialize in product descriptions that sell.
                    </p>
                    <p>
                        If you prefer to provide your own content, we'll optimize it for the web: improving readability, adding proper headings for SEO, and integrating it seamlessly with the design. We also offer professional photography services through partners for businesses needing custom images that truly represent their brand.
                    </p>
                </div>
            )
        },
        {
            question: "Is it important to hire a local web design company?",
            answer: (
                <div className="text-gray-700">
                    <p className="mb-3">
                        While local agencies offer the advantage of in-person meetings, what truly matters is the quality of results and communication. With modern collaboration tools, geography is no longer a barrier to exceptional web design.
                    </p>
                    <p className="mb-3">
                        Designuix serves clients globally with seamless online communication through video calls, screen sharing, and project management platforms. We've found that digital communication often leads to more efficient collaboration with clear documentation of all decisions.
                    </p>
                    <p>
                        What matters most is finding a partner who understands your business, communicates clearly, and delivers outstanding results - regardless of location. Our distributed team model allows us to bring together specialists from around the world while maintaining consistent communication standards. Client results, not physical proximity, determine success in the digital space.
                    </p>
                </div>
            )
        },
        {
            question: "Can I see examples of websites you’ve built?",
            answer: (
                <div className="text-gray-700">
                    <p className="mb-3">
                        Absolutely! We maintain an extensive portfolio showcasing our work across various industries and design styles. You can see live examples at designuix.com/portfolio or request specific case studies during our consultation.
                    </p>
                    <p className="mb-3">
                        Our portfolio includes before/after comparisons showing how we've transformed client websites, along with performance metrics like increased traffic, reduced bounce rates, and improved conversion percentages. For each project, we explain the business challenge and how our solution addressed it.
                    </p>
                    <p>
                        We can also provide client references upon request. Many of our clients are happy to discuss their experience working with us. Seeing is believing - our portfolio demonstrates our range from sleek corporate sites to vibrant e-commerce stores to complex web applications.
                    </p>
                </div>
            )
        },
        {
            question: "Do you help with Google ranking and digital marketing?",
            answer: (
                <div className="text-gray-700">
                    <p className="mb-3">
                        Yes, beyond building SEO-optimized websites, we offer comprehensive digital marketing services. This includes ongoing SEO campaigns, Google Ads management, social media advertising, email marketing automation, and conversion rate optimization.
                    </p>
                    <p className="mb-3">
                        Our marketing approach begins with understanding your business goals and target audience. We then develop a customized strategy that may include: keyword research and targeting, content marketing, local SEO (including Google My Business optimization), paid advertising campaigns, and performance analytics.
                    </p>
                    <p>
                        Many clients start with website design then expand to our marketing services. This integrated approach ensures your marketing efforts leverage your website's full potential. We provide detailed monthly reports showing traffic growth, lead generation, and ROI on marketing investments.
                    </p>
                </div>
            )
        },
        {
            question: "How do I get started with your web design company?",
            answer: (
                <div className="text-gray-700">
                    <p className="mb-3">
                        Getting started is simple: click "Get Free Consultation" on our homepage or contact us via WhatsApp/email. We'll schedule a 15-20 minute discovery call at your convenience to discuss your project goals and requirements.
                    </p>
                    <p className="mb-3">
                        During this no-obligation consultation, we'll: 1) Understand your business and goals, 2) Discuss your vision for the website, 3) Review your timeline and budget, and 4) Explain our process in detail. If we're a good fit, we'll provide a customized proposal within 24 hours.
                    </p>
                    <p>
                        Once you approve the proposal, we'll collect a deposit and begin with our comprehensive discovery phase. Our onboarding process makes starting simple - we handle all technical aspects and guide you through each step. Many clients are surprised how effortless the process feels compared to their expectations of working with a web agency.
                    </p>
                </div>
            )
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-4 py-8">
                {/* FAQ Section */}
                <div className="mb-28">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10"
                    >
                        Frequently Asked Questions
                    </motion.h2>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                className="border border-gray-200 rounded-lg shadow-sm"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                            >
                                <div
                                    className="flex justify-between items-center p-5 bg-white cursor-pointer hover:bg-gray-50 transition-colors rounded-lg"
                                    onClick={() => toggle(i)}
                                >
                                    <h3 className="text-lg font-medium text-gray-900 pr-4">{faq.question}</h3>
                                    <motion.div
                                        animate={{ rotate: openIndex === i ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDown className="w-5 h-5 text-gray-600" />
                                    </motion.div>
                                </div>
                                <AnimatePresence initial={false}>
                                    {openIndex === i && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-5 bg-gray-50 border-t border-gray-200 text-gray-700">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
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
        </div>
    );
}