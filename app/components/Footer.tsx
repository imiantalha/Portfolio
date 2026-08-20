import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-900">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <p className="text-sm font-medium text-white">
            Muhammad Talha
          </p>

          <p className="mt-1 text-xs text-neutral-600">
            Software Engineer · PHP / Laravel & Full-Stack Developer
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/imiantalha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 transition-colors hover:text-white"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/imiantalha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 transition-colors hover:text-white"
          >
            GitHub
          </a>

          <Link
            href="/#contact"
            className="text-sm text-neutral-500 transition-colors hover:text-white"
          >
            Contact
          </Link>
        </div>
      </div>

      <div className="border-t border-neutral-900 py-5 text-center">
        <p className="text-xs text-neutral-700">
          © {new Date().getFullYear()} Muhammad Talha. All rights reserved.
        </p>
      </div>
    </footer>
  );
}