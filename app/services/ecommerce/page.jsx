import Ecommerce1 from "../../nopage/services/ecommerce/ecomm1";
import Ecommerce2 from "../../nopage/services/ecommerce/ecomm2";
import Head from "next/head";

export const metadata = {
    title: "E-commerce Development Company [Get a Custom Online Store]",
    description:
        "As a full-service e-commerce development company, we handle all your website needs under one roof. Book a free consultation and receive a quote within 24 hours.",
    keywords: [
        "e-commerce development company",
        "ecommerce website development",
        "online store development",
        "e-commerce development services",
        "ecommerce web development company",
        "custom ecommerce solutions",
        "shopify development",
        "woocommerce development",
        "scalable ecommerce platforms",
        "ecommerce design agency",
        "designuix",
    ],
    alternates: {
        canonical: "/services/ecommerce",
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
        title: "E-commerce Development Company [Get a Custom Online Store]",
        description:
            "As a full-service e-commerce development company, we handle all your website needs under one roof. Book a free consultation and receive a quote within 24 hours.",
        url: "https://designuix.com/services/ecommerce",
        siteName: "Designuix",
        images: [
            {
                url: "https://designuix.com/opengraph-designuix-ecommerce.png", // ✅ Ensure this image exists
                alt: "E-commerce Development by Designuix",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "E-commerce Development Company [Get a Custom Online Store]",
        description:
            "As a full-service e-commerce development company, we handle all your website needs under one roof. Book a free consultation and receive a quote within 24 hours.",
        images: ["https://designuix.com/opengraph-designuix-ecommerce.png"],
        creator: "@designuix_team",
    },
    metadataBase: new URL("https://designuix.com"),
};

export default function Page() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "E-commerce Development Company",
        "url": "https://designuix.com/services/ecommerce",
        "description": "As a full-service e-commerce development company, we handle all your website needs under one roof. Book a free consultation and receive a quote within 24 hours.",
        "publisher": {
            "@type": "Organization",
            "name": "Designuix",
            "url": "https://designuix.com",
            "logo": {
                "@type": "ImageObject",
                "url": "https://designuix.com/opengraph-designuix-ecommerce.png"
            }
        },
        "mainEntity": {
            "@type": "Service",
            "name": "E-commerce Development Services",
            "description": "Custom e-commerce website development tailored to your business using scalable platforms like Shopify, WooCommerce, and more.",
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
            "serviceType": "E-commerce Website Development",
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
            <Ecommerce1 />
            <Ecommerce2 />
        </>
    );
}
