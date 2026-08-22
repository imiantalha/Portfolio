"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = links.map(({ href }) => href.slice(1));
const NAV_OFFSET = 120;

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    if (!isHome) return;

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) return;

    let frame = 0;

    const updateActiveSection = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const marker = window.scrollY + NAV_OFFSET;
        const documentBottom = window.scrollY + window.innerHeight;
        const pageBottom = document.documentElement.scrollHeight;

        // Always mark Contact active when the user reaches the bottom of the page.
        if (documentBottom >= pageBottom - 8) {
          setActiveSection("contact");
          return;
        }

        // Pick the last section whose top has crossed the navbar marker.
        // Unlike IntersectionObserver, this remains stable for very tall sections.
        let current = sections[0]?.id ?? null;

        for (const section of sections) {
          const top = section.offsetTop;
          if (top <= marker) {
            current = section.id;
          } else {
            break;
          }
        }

        setActiveSection(current);
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, [isHome]);

  const closeMenu = () => setOpen(false);
  const getHref = (href: string) => (isHome ? href : `/${href}`);

  const handleSectionClick = (sectionId: string) => {
    if (isHome) setActiveSection(sectionId);
    closeMenu();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-900 bg-[#0a0a0a]/90 backdrop-blur">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Main navigation"
      >
        <Link href="/" className="text-sm font-semibold tracking-tight text-white" onClick={closeMenu}>
          Muhammad Talha
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = isHome && activeSection === sectionId;

            return (
              <Link
                key={link.href}
                href={getHref(link.href)}
                onClick={() => handleSectionClick(sectionId)}
                aria-current={isActive ? "location" : undefined}
                className={`relative py-1 text-sm transition-colors duration-200 ${isActive ? "text-white" : "text-neutral-500 hover:text-white"}`}
              >
                {link.label}
                <span aria-hidden="true" className={`absolute -bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-blue-500 transition-all duration-200 ${isActive ? "w-4 opacity-100" : "w-0 opacity-0"}`} />
              </Link>
            );
          })}

          <a href="/Muhammad-Talha-CV.pdf" target="_blank" rel="noopener noreferrer" className="rounded-full border border-neutral-700 px-4 py-2 text-sm text-white transition-colors hover:border-neutral-500" aria-label="Open Muhammad Talha resume PDF in a new tab">
            Resume
          </a>
        </div>

        <button type="button" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={open} aria-controls="mobile-navigation" className="rounded-md px-2 py-1 text-xl leading-none text-neutral-400 transition-colors hover:text-white md:hidden">
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
      </nav>

      <div id="mobile-navigation" hidden={!open} className="border-t border-neutral-900 px-6 py-5 md:hidden">
        <div className="flex flex-col gap-4">
          {links.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = isHome && activeSection === sectionId;

            return (
              <Link
                key={link.href}
                href={getHref(link.href)}
                onClick={() => handleSectionClick(sectionId)}
                aria-current={isActive ? "location" : undefined}
                className={`border-l-2 pl-3 text-sm transition-colors ${isActive ? "border-blue-500 text-white" : "border-transparent text-neutral-400 hover:text-white"}`}
              >
                {link.label}
              </Link>
            );
          })}

          <a href="/Muhammad-Talha-CV.pdf" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="mt-2 inline-flex w-fit rounded-full border border-neutral-700 px-4 py-2 text-sm text-white" aria-label="Open Muhammad Talha resume PDF in a new tab">
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
