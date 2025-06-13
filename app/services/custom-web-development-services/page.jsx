import Webdevservice1 from "../../nopage/services/webdevservice/webdevservice1"
import Webdevservice2 from "../../nopage/services/webdevservice/webdevservice2"
import Head from "next/head";

export const metadata = {
    title: "Custom Web Development Company [Get Free Consultation]",
    description:
        "As a full-service custom web development company, we handle all your website needs under one roof. Book a free consultation and receive a quote within 24 hours.",
    keywords: [
        "custom web development company",
        "custom website development",
        "custom web development services",
        "web development company",
        "custom web design company",
        "responsive web development",
        "seo ready website",
        "web development for startups",
        "scalable web applications",
        "business website development",
        "designuix",
    ],
    alternates: {
        canonical: "/services/custom-web-development-services",
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    authors: [{ name: "Designuix", url: "https://designuix.com" }],
    creator: "Designuix",
    publisher: "Designuix",
    openGraph: {
        title: "Custom Web Development Company [Get Free Consultation]",
        description:
            "As a full-service custom web development company, we handle all your website needs under one roof. Book a free consultation and receive a quote within 24 hours.",
        url: "https://designuix.com/services/custom-web-development-services",
        siteName: "Designuix",
        images: [
            {
                url: "https://designuix.com/opengraph-designuix-custom-web-development-company.png", // ✅ Replace with actual OG image
                alt: "Custom Web Development by Designuix",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Custom Web Development Company [Get Free Consultation]",
        description:
            "As a full-service custom web development company, we handle all your website needs under one roof. Book a free consultation and receive a quote within 24 hours.",
        images: ["https://designuix.com/opengraph-designuix-custom-web-development-company.png"], // ✅ Replace with actual image
        creator: "@designuix_team",
    },
    metadataBase: new URL("https://designuix.com"),
};



export default function Page() {


    const schemaData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Custom Web Development Company",
        "url": "https://designuix.com/services/custom-web-development-services",
        "description": "As a full-service custom web development company, we handle all your website needs under one roof. Book a free consultation and receive a quote within 24 hours.",
        "publisher": {
            "@type": "Organization",
            "name": "Designuix",
            "url": "https://designuix.com",
            "logo": {
                "@type": "ImageObject",
                "url": "https://designuix.com/opengraph-designuix-custom-web-development-company.png"
            }
        },
        "mainEntity": {
            "@type": "Service",
            "name": "Custom Web Development Services",
            "description": "Professional custom website development tailored for your business, including responsive design, SEO-ready code, and scalable web applications.",
            "provider": {
                "@type": "Organization",
                "name": "Designuix",
                "url": "https://designuix.com"
            },
            "areaServed": [
                { "@type": "Country", "name": "United States" },
                { "@type": "Country", "name": "United Kingdom" },
                { "@type": "Country", "name": "Canada" },
                { "@type": "Country", "name": "Australia" },
                { "@type": "Country", "name": "Germany" },
                { "@type": "Country", "name": "United Arab Emirates" },
                { "@type": "Country", "name": "Singapore" },
                { "@type": "Country", "name": "Switzerland" },
                { "@type": "Country", "name": "Netherlands" },
                { "@type": "Country", "name": "Sweden" },
                { "@type": "Text", "name": "Worldwide" }
            ],
            

            "serviceType": "Custom Web Development",
            "availableChannel": {
                "@type": "ServiceChannel",
                "serviceUrl": "https://designuix.com/get-free-consultation",
                "availableLanguage": ["English"]
            }
        }
    };
    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
                />
            </Head>
            <Webdevservice1 />
            <Webdevservice2 />
        </>
    )
};




