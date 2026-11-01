import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cozy Studio — Premium Interior & Spatial Design",
  description:
    "Thoughtfully designed spaces that feel as beautiful as they look. Contemporary interior architecture, spatial design, and curated environments.",
  keywords: [
    "interior design",
    "spatial design",
    "contemporary minimalism",
    "architectural interior",
    "luxury furniture",
    "Cozy Studio",
  ],
  authors: [{ name: "Cozy Studio" }],
  openGraph: {
    title: "Cozy Studio — Premium Interior & Spatial Design",
    description:
      "Thoughtfully designed spaces that feel as beautiful as they look. Make room for better living.",
    type: "website",
    locale: "en_US",
    siteName: "Cozy Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cozy Studio — Premium Interior & Spatial Design",
    description: "Thoughtfully designed spaces that feel as beautiful as they look.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#F5F2EB] text-[#242520] font-sans antialiased selection:bg-[#737B5B] selection:text-[#F5F2EB]">
        {children}
      </body>
    </html>
  );
}
