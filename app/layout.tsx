import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Talha | Software Engineer",
  description: 
    "Portfolio of Muhammad Talha, Software Engineer specializing in PHP, Laravel, React, and Next.js.",
};

export default function RootLayout({ 
  children, }: Readonly<{
    children:React.ReactNode;
  }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
