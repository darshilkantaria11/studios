import Seo1 from "../../nopage/services/seo/seo1"
import Seo2 from "../../nopage/services/seo/seo2"



export const metadata = {
    title: "Best SEO Company – Drive Traffic & Grow Your Business",
    description:
        "Looking for the best SEO company to boost your online visibility and rank higher on Google? Designuix offers custom strategies book a free consultation today!",
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
            "Looking for the best SEO company to boost your online visibility and rank higher on Google? Designuix offers custom strategies book a free consultation today!",
        url: "https://designuix.com/services/seo",
        siteName: "Designuix",
        images: [
            {
                url: "https://designuix.com/web-design-company-logo.png", // ✅ Replace if needed
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
            "Looking for the best SEO company to boost your online visibility and rank higher on Google? Designuix offers custom strategies book a free consultation today!",
        images: ["https://designuix.com/web-design-company-logo.png"], // ✅ Replace if needed
        creator: "@designuix_team",
    },
    metadataBase: new URL("https://designuix.com"),
};






export default function Page(){
    return(
        <>
        <Seo1/>
        <Seo2/>
        </>
    )
}