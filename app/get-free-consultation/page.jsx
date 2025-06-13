import Consultation1 from "../nopage/consultation/consultation1"


export const metadata = {
    title: "Book a Free Consultation – Custom Web Development | Designuix",
    description:
        "Schedule your free 1-on-1 consultation with Designuix. Get expert advice and a tailored quote for your project within 24 hours.",
    keywords: [
        "free website consultation",
        "book web development call",
        "get quote for website",
        "web development consultation",
        "designuix free consultation",
        "website audit",
        "seo consultation",
        "free custom website quote",
        "talk to web developer",
        "Designuix",
    ],
    alternates: {
        canonical: "/get-free-consultation",
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
        title: "Book a Free Consultation – Custom Web Development | Designuix",
        description:
            "Let’s talk! Book your free consultation with Designuix and receive a customized proposal for your website or SEO needs.",
        url: "https://designuix.com/get-free-consultation",
        siteName: "Designuix",
        images: [
            {
                url: "https://designuix.com/web-design-company-logo.png",
                alt: "Free Consultation with Designuix",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Book a Free Consultation – Custom Web Development | Designuix",
        description:
            "Ready to grow online? Schedule a free consultation with Designuix for expert guidance and a no-obligation quote.",
        images: ["https://designuix.com/web-design-company-logo.png"],
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