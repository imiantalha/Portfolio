import ProjectCaseStudy from "./ProjectCaseStudy";
import { mallshark, textileSouk, ems } from "../data/projects";

export default function FeaturedProjects() {
  return (
    <section id="work" className="border-t border-neutral-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
            Featured Work
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Real systems. Real users. Real engineering challenges.
          </h2>

          <p className="mt-6 text-base leading-7 text-neutral-400">
            A selection of production projects where I contributed to
            architecture, development, integrations, and delivery.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          <ProjectCaseStudy project={mallshark} />
          <ProjectCaseStudy project={textileSouk} />
          <ProjectCaseStudy project={ems} />
        </div>
      </div>
    </section>
  );
}