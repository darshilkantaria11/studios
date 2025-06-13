import Seo1 from "../../nopage/services/seo/seo1"
import Seo2 from "../../nopage/services/seo/seo2"
import Head from "next/head";

export const metadata = {
    title: "Best SEO Company – Drive Traffic & Grow Your Business",
    description:
        "Looking for the best SEO company to boost your online visibility and rank higher on Google? Designuix offers custom strategies. Book a free consultation today!",
    keywords: [
        "best SEO company",
        "SEO agency",
        "SEO services",
        "affordable SEO company",
        "SEO for small business",
        "search engine optimization",
        "local SEO services",
        "Google ranking services",
        "SEO company",
        "SEO expert",
        "Designuix",
    ],
    alternates: {
        canonical: "/services/seo",
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
        title: "Best SEO Company – Drive Traffic & Grow Your Business",
        description:
            "Looking for the best SEO company to boost your online visibility and rank higher on Google? Designuix offers custom strategies. Book a free consultation today!",
        url: "https://designuix.com/services/seo",
        siteName: "Designuix",
        images: [
            {
                url: "https://designuix.com/opengraph-designuix-seo.png",
                alt: "Designuix - Best SEO Company",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Best SEO Company – Drive Traffic & Grow Your Business",
        description:
            "Looking for the best SEO company to boost your online visibility and rank higher on Google? Designuix offers custom strategies. Book a free consultation today!",
        images: ["https://designuix.com/opengraph-designuix-seo.png"],
        creator: "@designuix_team",
    },
    metadataBase: new URL("https://designuix.com"),
};

export default function Page() {

    
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Best SEO Company – Designuix",
        "url": "https://designuix.com/services/seo",
        "description": "Looking for the best SEO company to boost your online visibility and rank higher on Google? Designuix offers custom strategies. Book a free consultation today!",
        "publisher": {
            "@type": "Organization",
            "name": "Designuix",
            "url": "https://designuix.com",
            "logo": {
                "@type": "ImageObject",
                "url": "https://designuix.com/opengraph-designuix-seo.png"
            }
        },
        "mainEntity": {
            "@type": "Service",
            "name": "SEO Services",
            "description": "Professional SEO services designed to increase your search rankings, drive organic traffic, and grow your business online.",
            "provider": {
                "@type": "Organization",
                "name": "Designuix",
                "url": "https://designuix.com"
            },
            "areaServed": [
                { "@type": "Country", "name": "United States" },
                { "@type": "Country", "name": "United Kingdom" },
                { "@type": "Country", "name": "Canada" },
                { "@type": "Text", "name": "Worldwide" }
            ],
            "serviceType": "Search Engine Optimization (SEO)",
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
            <Seo1 />
            <Seo2 />
        </>
    );
}
