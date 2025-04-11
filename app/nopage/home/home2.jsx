export default function Home() {
    return (
        <div className="min-h-screen bg-white text-gray-900 px-4 py-8 font-sans flex justify-center">
            {/* Hero Section */}
            <section className="flex flex-col md:flex-row container mx-auto text-center md:text-left mt-12 md:mt-24 gap-12">
                {/* Left Content */}
                <div className="flex flex-col md:w-1/2">
                    {/* Pain-Point Headline */}
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                        Tired of <span className="text-red-600">Missed Deadlines</span> 
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                            & Budget Overruns?
                        </span>
                    </h1>

                    {/* Solution Statement */}
                    <p className="text-gray-700 text-xl mb-8 max-w-xl leading-relaxed">
                        Get enterprise-grade web development solutions at startup speed. 
                        Our <span className="font-semibold underline">72-Hour Launch Guarantee</span> 
                        ensures you beat competitors to market.
                    </p>

                    {/* Client-Centric Benefits */}
                    <div className="space-y-6 mb-8">
                        <div className="flex items-start gap-4">
                            <div className="bg-blue-100 p-3 rounded-full">
                                <span className="text-blue-600 text-xl">✓</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Zero Legacy Code</h3>
                                <p className="text-gray-600">Future-proof architecture that scales with your growth</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                            <div className="bg-purple-100 p-3 rounded-full">
                                <span className="text-purple-600 text-xl">⌛</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Daily CEO Updates</h3>
                                <p className="text-gray-600">Real-time progress tracking via dedicated dashboard</p>
                            </div>
                        </div>
                    </div>

                    {/* Trust Signals */}
                    <div className="mt-6 flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <div className="text-2xl font-bold text-blue-600">97%</div>
                            <div className="text-sm text-gray-600">Client Retention</div>
                        </div>
                        <div className="h-8 w-px bg-gray-200"></div>
                        <div className="flex items-center gap-2">
                            <div className="text-2xl font-bold text-purple-600">4.9★</div>
                            <div className="text-sm text-gray-600">Avg. Rating</div>
                        </div>
                    </div>
                </div>

                {/* Right CTA Section */}
                <div className="flex flex-col gap-6 md:w-1/2">
                    {/* Urgency Driver */}
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-center shadow-xl transform hover:scale-102 transition-transform">
                        🚀 Limited Capacity - 3 Slots Left This Month
                    </div>

                    {/* Conversion Card */}
                    <div className="border-2 border-gray-100 rounded-xl p-8 shadow-lg">
                        <h2 className="text-2xl font-bold mb-6">Start Your Digital Dominance</h2>
                        
                        {/* Strategic Form */}
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-700">
                                    What's Your Biggest Tech Challenge?
                                </label>
                                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-blue-500">
                                    <option>Slow website performance</option>
                                    <option>Security vulnerabilities</option>
                                    <option>Poor user experience</option>
                                    <option>Scaling infrastructure</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-700">
                                    Your Work Email
                                </label>
                                <input 
                                    type="email" 
                                    placeholder="cto@yourcompany.com" 
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 placeholder-gray-400"
                                />
                            </div>

                            {/* CTA Hierarchy */}
                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors">
                                Get Free Architecture Audit →
                            </button>
                            
                            <div className="text-center text-sm text-gray-600">
                                or <a href="#portfolio" className="text-blue-600 hover:underline">Explore Client Success Stories</a>
                            </div>
                        </div>
                    </div>

                    {/* Security Assurance */}
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        GDPR & CCPA Compliant Solutions
                    </div>
                </div>
            </section>
        </div>
    );
}