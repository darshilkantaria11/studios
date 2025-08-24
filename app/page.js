import Home1 from "./nopage/home/home1"
import Home2 from "./nopage/home/home2"
import Home2a from "./nopage/home/home2a"
import Home3 from "./nopage/home/home3"
import Home4 from "./nopage/home/home4"
import Home5 from "./nopage/home/home5"
import Home5a from "./nopage/home/home5a"
import Home6 from "./nopage/home/home6"
import Head from "next/head"

export const metadata = {
    title: "Designuix - Best Web Design Company [Request a Quote]",
    description:
        "As a full-service web design company, we handle all your website needs under one roof. Request a free quote and receive a tailored estimate within 24 hours.",
    keywords: [
        "web design company",
        "web design agency",
        "web development company",
        "web development agency",
        "website design company",
        "website design agency",
        "website development company",
        "website development agency",
        "website development",
        "custome web development",
        "custom web design",
        "designuix",
    ],
    alternates: {
        canonical: "/",
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
        title: "Designuix - Best Web Design Company [Request a Quote]",
        description:
            "As a full-service web design company, we handle all your website needs under one roof. 🚀 Request a free quote and get a custom estimate in 24 hours!",
        url: "https://designuix.com",
        siteName: "Designuix",
        images: [
            {
                url: "https://designuix.com/opengraph-designuix.png", // replace with actual OG image URL
                alt: "Designuix - Web Design Company",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Designuix - Best Web Design Company [Request a Quote]",
        description:
            "As a full-service web design company, we handle all your website needs under one roof. 🚀 Request a free quote and get your custom estimate today!",
        images: ["https://designuix.com/opengraph-designuix.png"], // replace if needed
        creator: "@designuix_team", // optional, if you have a Twitter handle
    },
    metadataBase: new URL("https://designuix.com"),
};



export default function Page() {

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Designuix - Best Web Design Company",
        "url": "https://designuix.com",
        "description": "Designuix is a top-rated web design and development company offering custom websites tailored to drive results.",
        "publisher": {
            "@type": "Organization",
            "name": "Designuix",
            "url": "https://designuix.com",
            "logo": {
                "@type": "ImageObject",
                "url": "https://designuix.com/opengraph-designuix.png"
            }
        },
        "mainEntity": {
            "@type": "Service",
            "name": "Website Design & Development Services",
            "description": "End-to-end web design and development services, including custom designs, responsive layouts, SEO optimization, and scalable solutions for businesses of all sizes.",
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

            "serviceType": "Web Design & Development",
            "availableChannel": {
                "@type": "ServiceChannel",
                "serviceUrl": "https://designuix.com/get-free-consultation",
                "availableLanguage": ["English"]
            }
        },
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "India",
            "addressCountry": "IN"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "email": "support@designuix.com",
            "url": "https://designuix.com/contact-us"
        },
        "sameAs": [
            "https://www.instagram.com/_designuix_",
            "https://x.com/designuix_team"
        ]
    };



    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
                />

            </Head>

            <Home1 />
            <Home2 />
            <Home2a />
            <Home3 />
            <Home4 />
            <Home5 />
            <Home5a />
            <Home6 />
        </>
    )
};