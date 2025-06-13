import Project1 from "../nopage/project/project1"

export const metadata = {
    title: "Client Projects – Web Design & Development Portfolio | Designuix",
    description:
        "Explore our portfolio of client projects showcasing custom web design, SEO, and ecommerce development. See how Designuix helps businesses grow with powerful digital solutions.",
    keywords: [
        "web design portfolio",
        "client projects",
        "design portfolio",
        "website development portfolio",
        "custom website examples",
        "web development company projects",
        "SEO case studies",
        "Designuix projects",
        "freelance portfolio",
        "business website designs",
        "Designuix",
    ],
    alternates: {
        canonical: "/projects",
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
        title: "Client Projects – Web Design & Development Portfolio | Designuix",
        description:
            "Browse our portfolio of real client projects in web design, development, SEO, and ecommerce. Discover how Designuix delivers impactful digital experiences.",
        url: "https://designuix.com/projects",
        siteName: "Designuix",
        images: [
            {
                url: "https://designuix.com/opengraph-designuix.png", // ✅ Replace with actual OG image if available
                alt: "Designuix Client Projects",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Client Projects – Web Design & Development Portfolio | Designuix",
        description:
            "Explore our client work to see how Designuix builds high-converting, scalable websites. Book a consultation to get started on your project.",
        images: ["https://designuix.com/opengraph-designuix.png"], // ✅ Replace with actual image
        creator: "@designuix_team",
    },
    metadataBase: new URL("https://designuix.com"),
};



export default function Page(){
    return(
        <>
        <Project1/>
        </>
    )
};