"use client"
import { motion } from 'framer-motion';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
    const projectImages = [
        {
            src: '/interior-designer-web-design.webp',
            alt: 'Interior designer custom website design',
            title: 'Interior designer custom website design'
        },
        {
            src: '/yoga-instructor-web-design.webp',
            alt: 'Yoga Instructor custom website design',
            title: 'Yoga Instructor custom website design'
        },
        {
            src: '/car-detailing-service-web-design.webp',
            alt: 'Car detailing custom website design',
            title: 'Car detailing custom website design'
        },
        {
            src: '/real-estate-web-design.webp',
            alt: 'Real Estate custom website design',
            title: 'Real Estate custom website design'
        },
        {
            src: '/photographer-web-design.webp',
            alt: 'Photographer custom website design',
            title: 'Photographer custom website design'
        },
        {
            src: '/plumbing-web-design.webp',
            alt: 'Plumber custom website design',
            title: 'Plumber custom website design'
        },
        {
            src: '/interior-web-design1.webp',
            alt: 'Interior designer custom website design',
            title: 'Interior designer custom website design'
        },
        {
            src: '/electrician-web-design.webp',
            alt: 'Electrician custom website design',
            title: 'Electrician custom website design'
        },
        {
            src: '/roofing-contractors-web-design.webp',
            alt: 'Roofing contractors custom website design',
            title: 'Roofing contractors custom website design'
        },
        {
            src: '/home-renovation-service-web-design.webp',
            alt: 'Home renovation contractors custom website design',
            title: 'Home renovation contractors custom website design'
        },
        {
            src: '/dentist-web-design.webp',
            alt: 'Dentist custom website design',
            title: 'Dentist custom website design'
        },
    ];

    return (
        <main className="relative overflow-hidden" role="main">
            <header className="relative z-10 mb-10 bg-white text-black px-4 lg:px-0 py-2 lg:py-6 lg:pt-8 flex justify-center">
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col lg:flex-row container mx-auto items-center gap-8 lg:gap-12"
                >
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col lg:w-2/3 text-center lg:text-left"
                    >
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="border-r-4 lg:border-r-0 border-l-4 border-blue-600 lg:bg-[linear-gradient(to_right,_#dbeafe_10%,_#ffffff_90%)] bg-blue-50 lg:pl-4 py-2 text-center lg:text-left text-md lg:text-xl font-semibold mb-2"
                        >
                            Custom Web Development Company
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="text-2xl lg:text-5xl font-bold mb-4 leading-tight uppercase"
                        >
                            🚀 Launch Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Custom Website</span> in Just
                            <motion.span
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                className="text-white bg-black rounded-xl ml-2 px-2 inline-block"
                            >
                                2 Weeks
                            </motion.span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-xs lg:text-xl text-gray-800 mb-4 px-2 lg:px-0"
                        >
                            Searching for a trusted <strong>custom web development company</strong>? We specialize in building high-performance websites tailored for your business success.
                        </motion.p>

                        <ul className="grid grid-cols-2 gap-1 lg:mb-4 lg:space-y-4 lg:grid-cols-1" aria-label="Website Benefits">
                            {[
                                ["2x Faster Loading", "Google PageSpeed Score 95+"],
                                ["Pay After Completion", "No upfront payment required"],
                                ["Lifetime Free Support", "Ongoing assistance at no extra cost"],
                                ["SEO-Ready", "Rank #1 Technical Audit"],
                            ].map(([title, text]) => (
                                <li key={title} className="flex items-center gap-2 bg-blue-50 lg:bg-white rounded-md px-2 py-1">
                                    <span className="text-green-600 text-lg hidden lg:block">✓</span>
                                    <div>
                                        <h3 className="font-semibold text-sm lg:text-lg">{title}</h3>
                                        <p className="text-gray-600 text-xs lg:text-base">{text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <blockquote className="border-l-0 lg:border-l-4 border-blue-600 bg-[linear-gradient(to_right,_#dbeafe_10%,_#ffffff_90%)] pl-0 lg:pl-4 py-2 hidden lg:block">
                            <p className="italic text-sm lg:text-base">"We got our custom website live in 12 days – sales up by 140%!"</p>
                            <footer className="font-medium mt-1 text-sm">– Sarah K., E-commerce Founder</footer>
                        </blockquote>
                    </motion.div>

                    {/* Right Side – CTA + Showcase */}
                    <aside className="flex flex-col gap-4 lg:gap-6 w-full lg:w-1/3" aria-label="Free Consultation and Showcase">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                            className="hidden lg:block"
                        >
                            <Link href="/get-free-consultation" passHref title="Get free custom web templates">
                                <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-center text-sm cursor-pointer hover:bg-blue-700">
                                    🎁 Get free web development templates →
                                </div>
                            </Link>
                        </motion.div>

                        <Link href="/get-free-consultation" passHref title="Claim your free consultation now" className='lg:hidden'>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="lg:hidden w-full bg-gradient-to-r from-blue-700 to-purple-700 text-white font-semibold py-3 rounded-lg text-center"
                            >
                                Get Free Consultation →
                            </motion.div>
                        </Link>

                        <motion.div whileHover={{ y: -5 }} className="bg-blue-100 border-2 border-gray-200 p-6 rounded-xl shadow-xl">
                            <h2 className="text-xl font-bold text-center mb-2">Start Risk-Free Today ✨</h2>
                            <p className="text-sm text-gray-600 text-center mb-4">100% Client Satisfaction Rate</p>

                            <Swiper
                                modules={[Autoplay]}
                                spaceBetween={10}
                                slidesPerView={1}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                loop={true}
                                className="rounded-lg overflow-hidden mb-4"
                            >
                                {projectImages.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            title={item.title}
                                            width={600}
                                            height={400}
                                            className="w-full h-[200px] lg:h-[250px] object-fit rounded-lg"
                                        />
                                        <h3 className="mt-2 text-sm lg:text-base font-semibold text-gray-800 text-center">
                                            {item.title}
                                        </h3>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <Link href="/get-free-consultation" passHref title="Claim your free consultation now">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className=" w-full bg-gradient-to-r from-blue-700 to-purple-700 text-white font-semibold py-3 rounded-lg text-center"
                                >
                                    Get Free Consultation →
                                </motion.div>
                            </Link>

                            <div className="text-center mt-2">
                                <p className="text-black text-sm font-medium flex justify-center items-center gap-2">
                                    or
                                </p>
                            </div>
                            <div className="text-center">
                                <Link href="/projects" title="Browse our latest custom web development projects" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex justify-center items-center gap-2">
                                    Explore Recent Projects →
                                </Link>
                            </div>
                        </motion.div>
                    </aside>
                </motion.section>
            </header>
        </main>
    );
}
