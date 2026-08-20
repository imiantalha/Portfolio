import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import {
  doorToDoor,
  ems,
  // frescoCanada,
  pakRailways,
} from "../data/projects";

const projects = [
  doorToDoor,
  // frescoCanada,
  ems,
  pakRailways,
];

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

        <div className="mt-16 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
            Selected Work
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
            Projects I&apos;ve worked on.
          </h1>

          <p className="mt-6 text-base leading-7 text-neutral-400">
            A collection of production applications and systems spanning
            e-commerce, B2B marketplaces, HR platforms, and enterprise
            workflow management.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              number={project.number}
              title={project.title}
              category={project.category}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </main>
  );
}