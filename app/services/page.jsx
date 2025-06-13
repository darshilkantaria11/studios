import Services1 from "../nopage/services/services1"

export const metadata = {
  title: "Website, SEO & E-commerce Services – Designuix",
  description:
    "Get professional Website Development, SEO, and E-commerce services at Designuix. Everything you need to grow your business online — all under one roof.",
  keywords: [
    "website development services",
    "custom website development",
    "seo services",
    "seo agency",
    "ecommerce development",
    "ecommerce development company",
    "web development services",
    "web design services",
    "designuix services",
    "designuix",
  ],
  alternates: {
    canonical: "/services",
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
    title: "Website, SEO & E-commerce Services – Designuix",
    description:
      "Explore high-converting services by Designuix: from custom websites to SEO and scalable e-commerce platforms. Book a free consultation today.",
    url: "https://designuix.com/services",
    siteName: "Designuix",
    images: [
      {
        url: "https://designuix.com/web-design-company-logo.png", // ✅ Replace with real image URL
        alt: "Designuix Services - Web, SEO, Ecommerce",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website, SEO & E-commerce Services – Designuix",
    description:
      "Get a powerful online presence with Designuix's professional Website, SEO & E-commerce services. Let's grow your business online.",
    images: ["https://designuix.com/web-design-company-logo.png"], // ✅ Replace with real image URL
    creator: "@designuix_team",
  },
  metadataBase: new URL("https://designuix.com"),
};




export default function Page(){
    return(
        <>
        <Services1/>
        </>
    )
};