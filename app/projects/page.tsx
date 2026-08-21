import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <Link
          href="/"
          className="text-sm text-neutral-500 transition-colors hover:text-white"
        >
          ← Back to Home
        </Link>

        <div className="mt-16 max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
            Selected Work
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
            Production systems I&apos;ve contributed to.
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-neutral-400">
            A selection of production applications across e-commerce, B2B
            marketplaces, HR platforms, and enterprise workflow systems.
            My work spans backend engineering, APIs, integrations, business
            workflows, and application delivery.
          </p>
        </div>

        <div className="mt-20 space-y-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              number={project.number}
              title={project.title}
              category={project.category}
              description={project.description}
              technologies={project.technologies}
              image={project.gallery[0]}
              architecture={project.architecture}
            />
          ))}
        </div>

        <div className="mt-20 border-t border-neutral-800 pt-10">
          <p className="text-sm text-neutral-500">
            Want to discuss a project or technical opportunity?
          </p>

          <Link
            href="/#contact"
            className="mt-3 inline-block text-sm font-medium text-white transition-colors hover:text-blue-400"
          >
            Get in touch →
          </Link>
        </div>
      </div>
    </main>
  );
}