"use client";

import Link from "next/link";

const blogs = [
    {
        title: "7 Reasons Why a Website Is Important for Your Business",
        excerpt: "Picking the right web design agency can make or break your online presence. Learn key factors to consider for a successful partnership.",
        date: "June 5, 2025",
        link: "/blogs/7-reasons-why-website-important-for-business",
        image: "/blogs/7-reasons-why-website-important-for-business.webp",
    },
    {
        title: "Top 5 Web Design Trends to Watch in 2025",
        excerpt: "Stay ahead with the latest design trends shaping websites this year—from minimalism to interactive elements that engage users.",
        date: "June 1, 2025",
        link: "/blogs/web-design-trends-2025",
        image: "/blogs/design-trends-2025.jpg",
    },
    {
        title: "Why Mobile-First Design is Essential in 2025",
        excerpt: "Explore why designing for mobile first boosts user experience and search rankings in today’s mobile-dominant world.",
        date: "June 10, 2025",
        link: "/blogs/mobile-first-design",
        image: "/blogs/mobile-first.jpg",
    },
    {
        title: "SEO Best Practices for Web Designers",
        excerpt: "Integrate SEO seamlessly into your design process to help your clients rank higher and attract more visitors.",
        date: "June 20, 2025",
        link: "/blogs/seo-for-web-designers",
        image: "/blogs/seo-best-practices.jpg",
    },
    {
        title: "Case Study: Boosting Conversions with UX Improvements",
        excerpt: "Learn how smart UX changes transformed a client’s website traffic into valuable leads and sales.",
        date: "June 25, 2025",
        link: "/blogs/ux-case-study",
        image: "/blogs/ux-case-study.jpg",
    },
];

export default function BlogPage() {
    return (
        <section className="px-6 md:px-12 lg:px-20 py-16 bg-white">
            <h2 className="text-4xl font-bold mb-4 text-center">Insights & Tips from Our Web Design Experts</h2>
            <p className="text-gray-700 mb-12 max-w-3xl mx-auto text-center">
                Dive into our latest articles where we share actionable strategies, industry trends, and practical tips to help you grow your online presence with expert web design and digital marketing.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {blogs.map((blog, idx) => (
                    <article
                        key={idx}
                        className="border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
                    >
                        <div>
                            <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mt-4 mb-3 px-6 text-gray-900">{blog.title}</h3>
                            {/* <p className="text-gray-600 mb-5 px-6">{blog.excerpt}</p> */}
                        </div>
                        <div className="flex justify-between items-center text-sm text-gray-500 px-6 pb-6">
                            <time>{blog.date}</time>
                            <Link
                                href={blog.link}
                                className="text-blue-600 font-medium hover:underline"
                            >
                                Read More &rarr;
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
