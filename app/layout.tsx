import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Talha | Software Engineer",
  description:
    "Portfolio of Muhammad Talha, a Software Engineer specializing in PHP, Laravel, React, and Next.js. Experienced in building production e-commerce, B2B, HR, and enterprise applications.",
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
  openGraph: {
    title: "Muhammad Talha | Software Engineer",
    description:
      "Software Engineer specializing in PHP, Laravel, React, and Next.js.",
    type: "website",
    url: "https://github.com/imiantalha",
    siteName: "Muhammad Talha",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Talha | Software Engineer",
    description:
      "Software Engineer specializing in PHP, Laravel, React, and Next.js.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}