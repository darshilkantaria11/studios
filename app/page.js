import Home1 from "./nopage/home/home1"
import Home2 from "./nopage/home/home2"
import Home2a from "./nopage/home/home2a"
import Home3 from "./nopage/home/home3"
import Home4 from "./nopage/home/home4"
import Home5 from "./nopage/home/home5"
import Home6 from "./nopage/home/home6"

export const metadata = {
    title: "Designuix - Best Web Design Company [Get Free Consultation]",
    description:
        "As a full-service web design company, we handle all your website needs under one roof. Book a free consultation and receive a tailored quote within 24 hours.",
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
        title: "Designuix - Best Web Design Company [Get Free Consultation]",
        description:
            "As a full-service web design company, we handle all your website needs under one roof. 🚀 Book a free consultation and get a custom quote in 24 hours!",
        url: "https://designuix.com",
        siteName: "Designuix",
        images: [
            {
                url: "https://designuix.com/web-design-company-logo.png", // replace with actual OG image URL
                alt: "Designuix - Web Design Company",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Designuix - Best Web Design Company [Get Free Consultation]",
        description:
            "As a full-service web design company, we handle all your website needs under one roof. 🚀 Book a free consultation and get a custom quote today!",
        images: ["https://designuix.com/web-design-company-logo.png"], // replace if needed
        creator: "@designuix_team", // optional, if you have a Twitter handle
    },
    metadataBase: new URL("https://designuix.com"),
};


export default function Page() {
    return (
        <>
            <Home1 />
            <Home2 />
            <Home2a />
            <Home3 />
            <Home4 />
            <Home5 />
            <Home6 />
        </>
    )
};