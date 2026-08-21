"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-900 bg-[#0a0a0a]/90 backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
      >
        <Link
          href="/"
          onClick={closeMenu}
          className="text-sm font-semibold tracking-tight text-white"
        >
          Muhammad Talha
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-500 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}

          <a
            href="/Muhammad-Talha-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-neutral-700 px-4 py-2 text-sm text-white transition-colors hover:border-neutral-500"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          className="rounded-md px-2 py-1 text-lg text-neutral-400 transition-colors hover:text-white md:hidden"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-neutral-900 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-5 lg:px-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="border-b border-neutral-900 py-3 text-sm text-neutral-400 transition-colors last:border-0 hover:text-white"
              >
                {link.label}
              </Link>
            ))}

            <a
              href="/Muhammad-Talha-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-fit rounded-full border border-neutral-700 px-4 py-2 text-sm text-white transition-colors hover:border-neutral-500"
            >
              View Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}