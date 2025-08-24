import Consultation1 from "../nopage/consultation/consultation1"


export const metadata = {
    title: "Request a Quote – Custom Web Development | Designuix",
    description:
        "Request a tailored quote from Designuix for your website or SEO project. Fast response within 24 hours.",
    keywords: [
        "request website quote",
        "get custom website pricing",
        "web development estimate",
        "designuix quote request",
        "seo pricing request",
        "custom web quote",
        "web design pricing",
        "talk to developer",
        "Designuix",
    ],
    alternates: {
        canonical: "/request-a-quote", // <-- Updated path
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
        title: "Request a Quote – Custom Web Development | Designuix",
        description:
            "Need a website or SEO help? Request a quote from Designuix for a tailored solution to grow your business.",
        url: "https://designuix.com/request-a-quote", // <-- Updated URL
        siteName: "Designuix",
        images: [
            {
                url: "https://designuix.com/opengraph-designuix.png",
                alt: "Request a Quote from Designuix",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Request a Quote – Custom Web Development | Designuix",
        description:
            "Get started with Designuix. Request your custom quote for website development or SEO within 24 hours.",
        images: ["https://designuix.com/opengraph-designuix.png"],
        creator: "@designuix_team",
    },
    metadataBase: new URL("https://designuix.com"),
};



export default function Page(){
    return(
        <>
        <Consultation1/>
        </>
    )
}