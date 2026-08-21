import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const siteUrl = "https://imiantalha.vercel.app";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Muhammad Talha | Software Engineer",
    template: "%s | Muhammad Talha",
  },
  description:
    "Muhammad Talha is a Software Engineer specializing in PHP, Laravel, React, and Next.js, building production e-commerce, B2B, HR, and enterprise applications.",
  keywords: [
    "Muhammad Talha",
    "Software Engineer",
    "PHP Developer",
    "Laravel Developer",
    "React Developer",
    "Next.js Developer",
    "Full Stack Developer",
  ],
  authors: [{ name: "Muhammad Talha" }],
  creator: "Muhammad Talha",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Muhammad Talha | Software Engineer",
    description:
      "Software Engineer specializing in PHP, Laravel, React, and Next.js.",
    url: siteUrl,
    type: "website",
    siteName: "Muhammad Talha",
    locale: "en_US",
    images: [
      {
        url: "/images/profile/me.jpg",
        width: 1200,
        height: 1200,
        alt: "Muhammad Talha — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Talha | Software Engineer",
    description:
      "Software Engineer specializing in PHP, Laravel, React, and Next.js.",
    images: ["/images/profile/me.jpg"],
  },
  icons: { icon: "/favicon.ico" },
  robots: { index: true, follow: true },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Talha",
  jobTitle: "Software Engineer",
  url: siteUrl,
  email: "mailto:muhammadtalha.codes@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/imiantalha",
    "https://github.com/imiantalha",
  ],
  knowsAbout: [
    "PHP",
    "Laravel",
    "React",
    "Next.js",
    "REST APIs",
    "MySQL",
    "PostgreSQL",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
