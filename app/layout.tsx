import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SITE_URL } from "./lib/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Rose Xi",
  description:
    "Rose Xi — software engineer, builder, and creative thinker. Explore my work and connect with me online.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Rose Xi",
    description:
      "Software engineer, builder, and creative thinker.",
    url: SITE_URL,
    siteName: "Rose Xi",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Rose Xi",
    description:
      "Software engineer, builder, and creative thinker.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rose Xi",
  url: SITE_URL,
  sameAs: [
    "https://github.com/rosexi",
    "https://linkedin.com/in/rosexi",
    "https://x.com/rosexi",
    "https://instagram.com/rosexi",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
