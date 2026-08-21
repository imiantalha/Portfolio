"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = links.map((link) => link.href.replace("#", ""));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-900 bg-[#0a0a0a]/90 backdrop-blur">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-white"
        >
          Muhammad Talha
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "location" : undefined}
                className={`relative py-1 text-sm transition-colors duration-200 ${
                  isActive
                    ? "text-white"
                    : "text-neutral-500 hover:text-white"
                }`}
              >
                {link.label}

                <span
                  className={`absolute -bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-blue-500 transition-all duration-200 ${
                    isActive ? "w-4 opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </Link>
            );
          })}

          <a
            href="/Muhammad-Talha-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-neutral-700 px-4 py-2 text-sm text-white transition-colors hover:border-neutral-500"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
          className="text-neutral-400 transition-colors hover:text-white md:hidden"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <div className="border-t border-neutral-900 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "location" : undefined}
                  className={`border-l-2 pl-3 text-sm transition-colors ${
                    isActive
                      ? "border-blue-500 text-white"
                      : "border-transparent text-neutral-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <a
              href="/Muhammad-Talha-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-fit rounded-full border border-neutral-700 px-4 py-2 text-sm text-white"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}