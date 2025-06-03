
"use client";
import { motion } from 'framer-motion';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';


export default function Home() {
    return (
        <div className="relative overflow-hidden">


            <div className="relative z-10 mb-10 bg-white text-black px-4 lg:px-0 py-6 lg:pt-8 flex justify-center">
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
                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="text-2xl lg:text-5xl font-bold mb-4 lg:mb-6 leading-tight uppercase"
                        >
                            <span className='mr-1'>🚀 Get Your Professional</span>
                            <br className="hidden lg:block" />
                            <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>Website</span> In Just ⏱️
                            <motion.span
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                className="text-white bg-black rounded-xl ml-2 px-2 lg:px-2 whitespace-nowrap inline-block"
                            >
                                2 Weeks
                            </motion.span>
                        </motion.h1>


                        {/* Subheadline */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-xs lg:text-xl text-gray-800 mb-6 lg:mb-8 px-2 lg:px-0"
                        >
                            Stop losing clients to slow websites. Our rapid development process delivers
                            mobile-optimized sites that convert visitors - guaranteed.
                        </motion.p>

                        {/* Benefits Grid */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.1 }
                                }
                            }}
                            initial="hidden"
                            animate="visible"
                            className="grid grid-cols-2 gap-1 lg:mb-8 lg:space-y-4 lg:grid-cols-1"
                        >
                            {[
                                ["✓", "2x Faster Loading", "Google PageSpeed Score 95+"],
                                ["✓", "Lifetime Free Support", "Ongoing assistance at no extra cost"],
                                ["✓", "SEO-Ready", "Rank #1 Technical Audit"],
                                ["✓", "Pay After Project Completion", "No upfront payment required"]
                            ].map(([icon, title, text], index) => (
                                <motion.div
                                    key={title}
                                    variants={{
                                        hidden: { opacity: 0, x: -20 },
                                        visible: { opacity: 1, x: 0 }
                                    }}
                                    className="flex lg:items-start gap-2 justify-center items-center lg:justify-start bg-blue-50 rounded-md lg:bg-white"
                                >
                                    <motion.span
                                        whileHover={{ scale: 1.1 }}
                                        className="text-green-600 text-2xl hidden lg:block"
                                    >
                                        {icon}
                                    </motion.span>
                                    <div>
                                        <h3 className="font-semibold text-sm lg:text-lg ">{title}</h3>
                                        <p className="text-gray-600 text-xs lg:text-base">{text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Testimonial */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="border-l-0 lg:border-l-4 border-blue-600 bg-[linear-gradient(to_right,_#dbeafe_10%,_#ffffff_90%)] pl-0 lg:pl-4 py-2 text-center lg:text-left hidden lg:block"
                        >
                            <p className="italic text-sm lg:text-base">"From concept to launch in 12 days - our sales increased 140%"</p>
                            <p className="font-medium mt-1 lg:mt-2 text-sm">- Sarah K., E-commerce Founder</p>
                        </motion.div>
                    </motion.div>

                    <div className="flex flex-col gap-4 lg:gap-6 w-full lg:w-1/3">
                        {/* Animated Urgency Badge */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                            className="bg-blue-600 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-full text-center text-sm cursor-pointer hover:bg-blue-700 transition-colors relative overflow-hidden"
                        >
                            <span className="relative z-10 font-semibold ">🎁 Fill the form and receive free  design Templates → </span>
                            <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity">
                                <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine" />
                            </div>
                        </motion.div>

                        {/* Interactive Conversion Card */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white border-2 border-gray-200 p-6 lg:p-8 rounded-xl shadow-xl relative overflow-hidden group"
                        >


                            <h2 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-center">
                                Start Risk-Free Today <span className="text-blue-600">✨</span>
                                <p className="text-sm text-gray-600 mt-2">100% Client Satisfaction Rate</p>
                            </h2>
                            <div className="mb-4 mx-auto w-full max-w-[400px]">
                                <Swiper
                                    modules={[Autoplay]}
                                    spaceBetween={10}
                                    slidesPerView={1}
                                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                                    loop={true}
                                    className="rounded-lg overflow-hidden"
                                >
                                    {[1, 2, 3, 4].map((item) => (
                                        <SwiperSlide key={item}>
                                            <div className="relative aspect-video h-[200px] lg:h-[250px]">
                                                <img
                                                    src={`https://picsum.photos/600/400?random=${item}`}
                                                    alt={`Project ${item}`}
                                                    className="w-full h-full object-cover absolute inset-0"
                                                />
                                                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4">
                                                    <span className="text-white font-medium text-sm">
                                                        Project {item} Launch
                                                    </span>
                                                </div> */}
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>

                            <div className="space-y-3">
                                {/* CTA with Social Proof */}
                                <motion.a
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    href="/form-page"
                                    className="w-full bg-gradient-to-r from-blue-700 to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex justify-center items-center gap-2 relative overflow-hidden"
                                >
                                    <span className="relative z-10">
                                        ✏️ Get Free Consultation →
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                                </motion.a>

                                {/* Trust Elements */}
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-200"></div>
                                    </div>
                                    <div className="relative flex justify-center">
                                        <span className="bg-white px-2 text-sm text-gray-500">
                                            or
                                        </span>
                                    </div>
                                </div>

                                {/* Project Showcase */}
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="text-center"
                                >
                                    <a
                                        href="#portfolio"
                                        className="text-blue-600 hover:text-blue-700 font-medium text-sm lg:text-base flex items-center justify-center gap-1"
                                    >
                                        <span className="inline-flex">
                                            Explore Recent Projects
                                            <div className="ml-2 flex space-x-1">
                                                <div className="w-6 h-6 rounded-full overflow-hidden border-2 border-white shadow-md">
                                                    <img src="/client1.jpg" alt="Client" />
                                                </div>
                                                <div className="w-6 h-6 rounded-full overflow-hidden border-2 border-white shadow-md">
                                                    <img src="/client2.jpg" alt="Client" />
                                                </div>
                                            </div>
                                        </span>
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>


                    </div>

                </motion.section>
            </div>
        </div>
    );
}