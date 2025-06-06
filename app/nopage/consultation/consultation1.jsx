"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        business: '',
        services: [], // multiple checkboxes
        message: ''
    });
    const [step, setStep] = useState(1);
    const [budgetAnswers, setBudgetAnswers] = useState({});
    const [currentBudgetQuestion, setCurrentBudgetQuestion] = useState(0);

    const budgetQuestions = [
        {
            id: "goal",
            question: "What’s the main thing you want this project to achieve? 🎯",
            options: [
                { text: "Make my brand look more professional ✨", value: "awareness" },
                { text: "Get more inquiries and leads 📈", value: "leads" },
                { text: "Sell my products or services online 🛒", value: "ecommerce" },
                { text: "Keep visitors engaged & coming back 🔁", value: "engagement" },
            ],
        },
        {
            id: "businessSize",
            question: "Where does your business stand right now? 📊",
            options: [
                { text: "Just getting started (1-5 people) 🌱", value: "startup" },
                { text: "Small but growing (6-20 people) 👥", value: "small" },
                { text: "Established team (21-100 people) 🏢", value: "medium" },
                { text: "Large or scaling company (100+ people) 🌐", value: "large" },
            ],
        },
        {
            id: "complexity",
            question: "What kind of website or app are you imagining? 💡",
            options: [
                { text: "Basic site with a few pages 📄", value: "simple" },
                { text: "Custom design with more features 🎨", value: "moderate" },
                { text: "Online store or advanced features ⚙️", value: "complex" },
                { text: "Full custom platform or web app 💻", value: "very_complex" },
            ],
        },
        {
            id: "budget",
            question:
                "What budget range have you set aside for this project? 💰 (No worries if you're unsure!)",
            options: [
                {
                    text: "$1,000 – $3,000 (Great for small sites or MVPs) 🌱",
                    value: "1000-3000",
                },
                {
                    text: "$3,000 – $6,000 (Ideal for growing businesses) 📈",
                    value: "3000-6000",
                },
                {
                    text: "$6,000+ (For custom builds or high-scale work) 🚀",
                    value: "6000+",
                },
                {
                    text: "Not sure yet – Need guidance 🤝",
                    value: "not_sure",
                },
            ],
        },
    ];


    const handleBudgetAnswer = (questionId, answer) => {
        const updatedAnswers = {
            ...budgetAnswers,
            [questionId]: answer
        };
        setBudgetAnswers(updatedAnswers);

        // Move to next question or complete
        if (currentBudgetQuestion < budgetQuestions.length - 1) {
            setCurrentBudgetQuestion(prev => prev + 1);
        } else {
            // Submit budget answers
            setStep(3);
            submitBudgetAnswers(updatedAnswers);
        }
    };

    // Submit budget answers
    const submitBudgetAnswers = async (answers) => {
        try {
            const payload = {
                initialFormData: formData, // Preserved from step 1
                budgetAnswers: answers
            };

            fetch('/api/budget-answers', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            })
                .then(response => {
                    if (!response.ok) {
                        console.log('Failed to submit budget answers');
                    }
                })
                .catch(err => {
                    console.log('Background submission error:', err);
                });
        } catch (err) {
            console.log('Error submitting budget answers:', err);
        }
    };

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const [copied, setCopied] = useState(false);
    const email = "help.dkstudios@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        // Handle checkboxes for services
        if (name === "services") {
            if (checked) {
                setFormData(prev => ({
                    ...prev,
                    services: [...prev.services, value]
                }));
            } else {
                setFormData(prev => ({
                    ...prev,
                    services: prev.services.filter(service => service !== value)
                }));
            }
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const savedContacts = JSON.parse(localStorage.getItem('contactFormData') || '[]');
        const newContacts = [...savedContacts, formData];
        localStorage.setItem('contactFormData', JSON.stringify(newContacts));
        setStep(2);
        fetch('/api/get-consultation', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
            .then(response => {
                if (!response.ok) {
                    console.error('Background submission failed');
                }
            })
            .catch(err => {
                console.error('Background submission error:', err);
            })
            .finally(() => {
                setIsSubmitting(false);
            });

        setIsSubmitting(false);
    };
    const resetBudgetForm = () => {
        setBudgetAnswers({});
        setCurrentBudgetQuestion(0);
    };

    // Animation variants
    const formVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
    };

    return (
        <div className="min-h-screen bg-white py-4 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto ">
                {/* Header */}
                <div className="bg-[#007AFF] rounded-xl text-white py-16 px-6 relative overflow-hidden mb-8">
                    {/* Left circular decoration */}
                    <div className="absolute left-[-60px] top-[-60px] w-60 h-60 border-4 border-[#339DFF] rounded-full opacity-40" />
                    <div className="absolute left-[-30px] top-[-30px] w-40 h-40 border-4 border-[#339DFF] rounded-full opacity-40" />

                    {/* Right circular decoration */}
                    <div className="absolute right-[-60px] bottom-[-60px] w-60 h-60 border-4 border-[#339DFF] rounded-full opacity-40" />
                    <div className="absolute right-[-30px] bottom-[-30px] w-40 h-40 border-4 border-[#339DFF] rounded-full opacity-40" />

                    <div className="relative z-10 text-center">
                        <button className="bg-white text-[#007AFF]  px-6 py-2 rounded-full mb-4 shadow-lg hover:bg-blue-100 transition">
                            WRITE TO US
                        </button>
                        <h2 className="text-3xl md:text-4xl">
                            {step === 1
                                ? "Get In Touch"
                                : step === 2
                                    ? "Help Us Understand Your Needs"
                                    : "Thank You!"}
                        </h2>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {/* STEP 1: Initial Consultation Form */}
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={formVariants}
                            className="flex flex-col-reverse lg:flex-row gap-10"
                        >
                            {/* Contact Information */}
                            <div className="flex flex-col  rounded-2xl overflow-hidden lg:w-2/5 h-auto">
                                {/* Contact Methods */}
                                <div className="p-8 bg-white border border-gray-200 rounded-t-3xl">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>

                                    <div className="space-y-4">
                                        {/* WhatsApp */}
                                        <a
                                            href="https://wa.me/917567393494?text=Hello%2C%20I%20have%20visited%20your%20company%27s%20website%20Dkstudios%20and%20I%20really%20like%20it.%20I%27m%20interested%20in%20your%20services.."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition"
                                        >
                                            <div className="flex items-center space-x-4">
                                                <div className="bg-blue-200 p-2 rounded-full">
                                                    <svg className="h-6 w-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-semibold text-gray-800">Chat on WhatsApp</h3>
                                                    <p className="text-gray-600">+91 75673 93494</p>
                                                </div>
                                            </div>
                                        </a>

                                        {/* Email */}
                                        <div className="flex items-center justify-between p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition">
                                            <a href={`mailto:${email}`} className="flex items-center space-x-4">
                                                <div className="bg-blue-200 p-2 rounded-full">
                                                    <svg className="h-6 w-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-semibold text-gray-800">Email Us</h3>
                                                    <p className="text-gray-600">{email}</p>
                                                </div>
                                            </a>

                                            {/* Copy Button */}
                                            <button
                                                onClick={handleCopy}
                                                className="text-sm text-blue-600 hover:text-blue-800 px-3 py-1 bg-white border border-blue-200 rounded-lg"
                                            >
                                                {copied ? "Copied!" : "Copy"}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side Text */}
                                <div className="p-8 bg-blue-600 text-white flex flex-col justify-center space-y-4 rounded-b-3xl">
                                    <h2 className="text-3xl font-bold">Let&apos;s Build Something Great Together</h2>
                                    <p className="text-lg opacity-90">
                                        Whether you&apos;re launching a new product or enhancing your online presence, we&apos;re here to bring your vision to life. Let&apos;s make it happen.
                                    </p>
                                </div>
                            </div>


                            {/* Contact Form */}
                            <div className="lg:w-3/5">
                                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 ">
                                    <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                                        Book Your Free Consultation
                                    </h2>
                                    <p className="text-gray-600 mb-8 text-sm">
                                        Tell us a bit about your business and goals — we&apos;ll review your needs and get back to you with a personalized strategy to grow your online presence. No hard selling, just real solutions.
                                    </p>


                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* Name Field */}
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="John Doe"
                                                required
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Phone Field */}
                                            <div>
                                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Phone Number (WhatsApp)
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                    placeholder="+1 (555) 123-4567"
                                                    required
                                                />
                                            </div>

                                            {/* Email Field */}
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                    placeholder="you@example.com"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Business Type Field */}
                                        <div>
                                            <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-1">
                                                What&apos;s Your Business?
                                            </label>
                                            <input
                                                type="text"
                                                id="business"
                                                name="business"
                                                value={formData.business}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="e.g. Dentist, Photographer, Interior Designer"
                                                required
                                            />
                                        </div>

                                        {/* Services Checkboxes */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                What Services Are You Looking For?
                                            </label>
                                            <div className="flex flex-col sm:flex-row gap-4">
                                                <label className="flex items-center space-x-2">
                                                    <input
                                                        type="checkbox"
                                                        name="services"
                                                        value="Website Development"
                                                        onChange={handleChange}
                                                    />
                                                    <span>Website Development</span>
                                                </label>
                                                <label className="flex items-center space-x-2">
                                                    <input
                                                        type="checkbox"
                                                        name="services"
                                                        value="Ecommerce Website"
                                                        onChange={handleChange}
                                                    />
                                                    <span>Ecommerce Website</span>
                                                </label>
                                                <label className="flex items-center space-x-2">
                                                    <input
                                                        type="checkbox"
                                                        name="services"
                                                        value="SEO Services"
                                                        onChange={handleChange}
                                                    />
                                                    <span>SEO Services</span>
                                                </label>
                                            </div>
                                        </div>

                                        {/* Optional Message */}
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                                Additional Notes (Optional)
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={2}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="Tell us anything specific you&apos;re looking for..."
                                            ></textarea>
                                        </div>

                                        {/* Submit Button */}
                                        <div>
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className={`w-full py-3 px-6 rounded-lg text-white font-medium transition-all ${isSubmitting
                                                    ? 'bg-gray-400 cursor-not-allowed'
                                                    : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg'
                                                    }`}
                                            >
                                                {isSubmitting ? (
                                                    <span className="flex items-center justify-center">
                                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                        Submitting...
                                                    </span>
                                                ) : (
                                                    'Submit'
                                                )}
                                            </button>

                                            {submitMessage && (
                                                <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg">
                                                    {submitMessage}
                                                </div>
                                            )}
                                        </div>
                                    </form>

                                </div>

                                {/* Additional Info */}
                                <div className="mt-8 text-center">
                                    <p className="text-gray-600">
                                        We typically respond within 24 hours.
                                    </p>
                                    <p className="text-gray-600 mt-2">
                                        Looking for quick answers? Check out our <a href="#" className="text-blue-600 hover:underline">FAQs</a>.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )}{step === 2 && (
                        <motion.div
                            key="step2"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={formVariants}
                            className="flex justify-center"
                        >
                            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-4 border border-gray-200">
                                <div className="text-center mb-2 bg-gray-100 p-2 rounded-xl">
                                    <div className="">
                                        <p className="text-green-600  text-sm">
                                            ✅ Thank you! We&apos;ve received your details.
                                        </p>
                                        <h2 className="text-sm font-medium text-gray-800">
                                            Help us understand your business with 4 quick questions 🤝
                                        </h2>

                                    </div>

                                </div>

                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentBudgetQuestion}
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -30 }}
                                        transition={{ duration: 0.3 }}
                                        className="space-y-4 "
                                    >
                                        <h3 className="text-xl font-semibold text-left text-gray-800 ">
                                            {budgetQuestions[currentBudgetQuestion].question}
                                        </h3>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                                            {budgetQuestions[currentBudgetQuestion].options.map((option, idx) => (
                                                <motion.button
                                                    key={option.value}
                                                    whileHover={{ scale: 1.03 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    className={`p-2 rounded-xl border text-left transition-all ${budgetAnswers[budgetQuestions[currentBudgetQuestion].id] === option.value
                                                        ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200'
                                                        : 'border-gray-300 hover:border-blue-300 hover:bg-blue-50'
                                                        }`}
                                                    onClick={() => handleBudgetAnswer(
                                                        budgetQuestions[currentBudgetQuestion].id,
                                                        option.value
                                                    )}
                                                >
                                                    <span className="flex items-center">
                                                        <span className="text-lg ">{option.text.split(' ')[0]}{option.text.substring(option.text.indexOf(' '))}</span>
                                                        <span></span>
                                                    </span>
                                                </motion.button>
                                            ))}
                                        </div>

                                        <div className="flex justify-between mt-8">
                                            <button
                                                type="button"
                                                className=" py-2 text-gray-600 hover:text-gray-800"
                                                onClick={() => {
                                                    if (currentBudgetQuestion > 0) {
                                                        setCurrentBudgetQuestion(prev => prev - 1);
                                                    } else {
                                                        resetBudgetForm();
                                                        setStep(1);
                                                    }
                                                }}
                                            >
                                                ← Back
                                            </button>
                                            <div className="mt-4 flex justify-center">
                                                {budgetQuestions.map((_, idx) => (
                                                    <div
                                                        key={idx}
                                                        className={`mx-1 w-3 h-3 rounded-full ${idx === currentBudgetQuestion
                                                            ? 'bg-blue-600 scale-125'
                                                            : idx < currentBudgetQuestion
                                                                ? 'bg-green-500'
                                                                : 'bg-gray-300'
                                                            }`}
                                                    />
                                                ))}
                                            </div>

                                            <span className="text-gray-500 mt-2">
                                                {currentBudgetQuestion + 1} of {budgetQuestions.length}
                                            </span>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 3: Final Thank You */}
                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={formVariants}
                            className="flex justify-center"
                        >
                            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-12 border border-gray-200 text-center">
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="mb-6"
                                >
                                    <div className="text-6xl mb-4">🎉</div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                        Thank You!
                                    </h2>
                                </motion.div>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-gray-600 mb-8 text-lg"
                                >
                                    We've received your information and will get back to you within 24 hours with a personalized strategy and budget estimate.
                                </motion.p>

                                {/* <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <p className="text-gray-700 mb-4">
                                        In the meantime, check out our portfolio:
                                    </p>
                                    <a
                                        href="/projects"
                                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                                    >
                                        View Our Work
                                    </a>
                                </motion.div> */}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ContactUs;