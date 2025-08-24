"use client"
import { motion } from 'framer-motion';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import Link from 'next/link'
import Image from 'next/image';

export default function Home() {


    const projectImages = [
        {
            src: '/interior-designer-web-design.webp',
            alt: 'Interior designer website design',
            title: 'Interior designer website design'
        },
        {
            src: '/yoga-instructor-web-design.webp',
            alt: 'Yoga Instructor website design',
            title: 'Yoga Instructor website design'
        },
        {
            src: '/car-detailing-service-web-design.webp',
            alt: 'Car detailing website design',
            title: 'Car detailing website design'
        },
        {
            src: '/real-estate-web-design.webp',
            alt: 'Real Estate website design',
            title: 'Real Estate website design'
        },
        {
            src: '/photographer-web-design.webp',
            alt: 'Photographer website design',
            title: 'Photographer website design'
        },
        {
            src: '/plumbing-web-design.webp',
            alt: 'Plumber website design',
            title: 'Plumber website design'
        },
        {
            src: '/interior-web-design1.webp',
            alt: 'Interior designer website design',
            title: 'Interior designer website design'
        },
        {
            src: '/electrician-web-design.webp',
            alt: 'Electrician website design',
            title: 'Electrician website design'
        },
        {
            src: '/roofing-contractors-web-design.webp',
            alt: 'Roofing contractors website design',
            title: 'Roofing contractors website design'
        },
        {
            src: '/home-renovation-service-web-design.webp',
            alt: 'Home renovation contractors website design',
            title: 'Home renovation contractors website design'
        },
        {
            src: '/dentist-web-design.webp',
            alt: 'Dentist website design',
            title: 'Dentist website design'
        },
    ]

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
                            className="border-r-4 lg:border-r-0 border-l-4 border-blue-600 lg:bg-[linear-gradient(to_right,_#dbeafe_10%,_#ffffff_90%)] bg-blue-50 lg:pl-4 py-2 text-center lg:text-left  text-md lg:text-xl font-semibold mb-2"
                        >
                            Best Web Design Company You Can Trust
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="text-xl lg:text-5xl font-bold mb-4 leading-tight uppercase pt-4 lg:pt-0"
                        >
                            Get Your Professional <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Website</span> in Just
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
                            Looking for a trusted <strong>web design company</strong>? We build websites that drive sales and boost conversions.
                        </motion.p>

                        {/* Benefits List */}
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

                        {/* Testimonial */}
                        <blockquote className="border-l-0 lg:border-l-4 border-blue-600 bg-[linear-gradient(to_right,_#dbeafe_10%,_#ffffff_90%)] pl-0 lg:pl-4 py-2 hidden lg:block">
                            <p className="italic text-sm lg:text-base">"From concept to launch in 12 days – our sales increased 140%!"</p>
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
                            <Link href="/request-a-quote" passHref title="Get free website templates by filling the form">
                                <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-center text-sm cursor-pointer hover:bg-blue-700">
                                    🎁 Get free web design templates (fill the form) →
                                </div>
                            </Link>

                        </motion.div>

                        {/* Mobile CTA */}
                        <Link href="/request-a-quote" passHref title="Request a Quote" className='lg:hidden'>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="lg:hidden shine-button w-full bg-gradient-to-r from-blue-700 to-purple-700 text-white font-semibold py-3 rounded-lg text-center"
                            >
                                Request a Quote →
                            </motion.div>
                        </Link>

                        {/* Carousel */}
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
                                        <div className="aspect-[3/2] w-full rounded-lg overflow-hidden">
                                            <Image
                                                src={item.src}
                                                alt={item.alt}
                                                title={item.title}
                                                width={600}
                                                height={400}
                                                sizes="(min-width: 1024px) 250px, 200px"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>


                                        <h3 className="mt-2 text-sm lg:text-base font-semibold text-gray-800 text-center">
                                            {item.title}
                                        </h3>

                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <Link href="/request-a-quote" passHref title="Request a Quote">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="shine-button w-full bg-gradient-to-r from-blue-700 to-purple-700 text-white font-semibold py-3 rounded-lg text-center"
                                >
                                    Request a Quote →
                                </motion.div>
                            </Link>
                            <div className="text-center mt-2">
                                <p className="text-black text-sm font-medium flex justify-center items-center gap-2">
                                    or
                                </p>
                            </div>
                            <div className="text-center">
                                <Link href="/projects" title="Browse our latest website design projects" className="text-balck text-sm font-medium flex justify-center items-center gap-2">
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
