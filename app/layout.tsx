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
    "Muhammad Talha is a Software Engineer specializing in PHP and Laravel, with full-stack experience in React and Next.js, REST APIs, integrations, and production business systems.",
  keywords: [
    "Muhammad Talha",
    "Software Engineer",
    "PHP Developer",
    "Laravel Developer",
    "Laravel API Developer",
    "React Developer",
    "Next.js Developer",
    "Full Stack Developer",
  ],
  authors: [{ name: "Muhammad Talha" }],
  creator: "Muhammad Talha",
  alternates: { canonical: "/" },
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Muhammad Talha | Software Engineer",
    description:
      "Software Engineer specializing in PHP, Laravel, REST APIs, integrations, and full-stack application development.",
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
      "Software Engineer specializing in PHP, Laravel, REST APIs, and full-stack application development.",
    images: ["/images/profile/me.jpg"],
  },
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
    "MS SQL Server",
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
