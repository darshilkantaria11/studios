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
