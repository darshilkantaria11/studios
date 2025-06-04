"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        title: "Knottin Daycare Centre",
        description: "We helped Knottin Day Care Centre boost trust and visibility online — resulting in a noticeable increase in student admissions.",
        image: "/project1.png",
        date: "12-2024 / 4-2025",
        link: "https://www.knottindaycarecentre.com",
    },
    {
        title: "Gulfside Painting",
        description: "We built a high-converting website for Gulfside Painting that brought in a surge of qualified service inquiries and boosted local visibility.",
        image: "/project2.png",
        date: "12-2024 / 4-2025",
        link: "https://www.gulfsidepainting.com",
    },
    {
        title: "Cosmostarot & Healing",
        description: "For Cosmostarot & Healing, we crafted a conversion-focused website that led to more bookings and significantly increased sales of healing stones and bracelets.",
        image: "/project3.png",
        date: "12-2024 / 4-2025",
        link: "https://www.cosmostarothealing.com",
    },
    {
        title: "Rotec Techno Cast",
        description: "We developed a professional website for Rotec Technocast that showcases their custom metal casting services, helping them attract more B2B clients and project inquiries.",
        image: "/project4.png",
        date: "12-2024 / 4-2025",
        link: "https://rotectechnocast.com",
    },
    {
        title: "Sri Ambica Laminates",
        description: "We created a clean, industry-ready website for Sri Ambica Laminates, helping them generate more B2B leads and build trust with distributors and interior firms.",
        image: "/project5.png",
        date: "12-2024 / 4-2025",
        link: "https://www.sriambicalaminates.com",
    },
    {
        title: "Shanker Woodlam",
        description: "We built a sleek website for Shanker Woodlam to showcase their advanced eco-friendly boards and attract more B2B leads.",
        image: "/project6.png",
        date: "12-2024 / 4-2025",
        link: "https://shankerwoodlam.com",
    },
];

export default function CompletedProjects() {
    return (
        <section className="px-6 md:px-12 lg:px-20 py-16 bg-gray-100">
            <h2 className="text-4xl font-bold mb-4">Discover Our Completed Projects</h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
                Every project we deliver reflects our dedication to quality, smart design, and client-first execution.
                At Dk Studios, we turn ideas into powerful digital experiences — from sleek business websites to full-scale custom solutions that drive real results.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                    <div key={idx} className="rounded-2xl overflow-hidden shadow-2xl bg-white">
                        <div className="aspect-video relative">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-coverrounded-2xl"
                            />
                        </div>

                        <div className="p-5 bg-gray-50">
                            <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                            <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                            <div className="flex items-center text-xs text-gray-500 ">
                                <i className="fa-regular fa-calendar"></i> {project.date}
                            </div>
                            <Link
                                href={project.link}
                                target="_blank"
                                className="mt-4 inline-flex text-orange-500 font-medium items-center gap-1"
                            >
                                View Project <span>&rarr;</span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
