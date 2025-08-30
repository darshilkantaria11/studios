import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./nopage/component/navbar"
import Footer from "./nopage/component/footer";
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://designuix.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Google Analytics (GA4) */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-C0T3395KGL"></Script>

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          
          gtag('config', 'G-C0T3395KGL');

          
          gtag('config', 'AW-17274749876');
        `}
      </Script>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
