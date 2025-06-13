import Contact1 from "../nopage/contact/contact1"



export const metadata = {
    title: "Contact Designuix – Let's Talk About Your Project",
    description:
        "Have questions or need a quote? Contact Designuix today. We're here to help with custom web development, SEO, and design services. Fast responses guaranteed.",
    keywords: [
        "contact web development company",
        "talk to web expert",
        "web design company contact",
        "get in touch with Designuix",
        "hire web developers",
        "Designuix contact page",
        "custom website consultation",
        "web development support",
        "seo service inquiry",
        "Designuix",
    ],
    alternates: {
        canonical: "/contact-us",
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
        title: "Contact Designuix – Let's Talk About Your Project",
        description:
            "Reach out to the Designuix team for any queries, project discussions, or support. We respond within 24 hours.",
        url: "https://designuix.com/contact-us",
        siteName: "Designuix",
        images: [
            {
                url: "https://designuix.com/opengraph-designuix.png",
                alt: "Contact Designuix Team",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Designuix – Let's Talk About Your Project",
        description:
            "Start the conversation with Designuix. We offer quick support and expert guidance on web development, SEO, and more.",
        images: ["https://designuix.com/opengraph-designuix.png"],
        creator: "@designuix_team",
    },
    metadataBase: new URL("https://designuix.com"),
};




export default function Page(){
    return(
        <>
        <Contact1/>
        </>
    )
};