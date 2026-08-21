import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import { otherProjects } from "../data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected production projects by Muhammad Talha across HR, enterprise workflows, and e-commerce.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | Muhammad Talha",
    description:
      "Selected production projects across HR, enterprise workflows, and e-commerce.",
    url: "/projects",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main id="main-content" className="min-h-screen bg-[#0a0a0a] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <Link
            href="/"
            className="text-sm text-neutral-500 transition-colors hover:text-white"
          >
            ← Back to Home
          </Link>

          <div className="mt-14 max-w-4xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
              More Work
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              Other production systems I&apos;ve contributed to.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-neutral-400">
              Beyond the two featured case studies, these projects show
              experience across HR applications, enterprise workflows, and
              single-vendor e-commerce.
            </p>
          </div>

          <div className="mt-16 space-y-10">
            {otherProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>

          <div className="mt-20 border-t border-neutral-800 pt-10">
            <p className="text-sm text-neutral-500">
              Want to see the strongest engineering case studies first?
            </p>
            <Link
              href="/#projects"
              className="mt-3 inline-block text-sm font-medium text-white transition-colors hover:text-blue-400"
            >
              Back to Featured Work →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
