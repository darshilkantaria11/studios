import Ecommerce1 from "../../nopage/services/ecommerce/ecomm1"
import Ecommerce2 from "../../nopage/services/ecommerce/ecomm2"

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
                url: "https://designuix.com/opengraph-designuix-ecommerce.png", // 🔁 Replace with a relevant OG image
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
        images: ["https://designuix.com/opengraph-designuix-ecommerce.png"], // 🔁 Replace if needed
        creator: "@designuix_team",
    },
    metadataBase: new URL("https://designuix.com"),
};


export default function Page(){
    return(
        <>
        <Ecommerce1/>
        <Ecommerce2/>
        </>
    )
}