import Image from "next/image";
import { mallshark } from "../data/projects";
import ProjectGallery from "./ProjectGallery";

export default function FeaturedProjects() {
  return (
    <section id="work" className="border-t border-neutral-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
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

        {/* Mallshark */}
        <article className="mt-16 overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950">
          {/* Header */}
          <div className="p-8 sm:p-10 lg:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-medium text-blue-500">
                  {mallshark.number} / {mallshark.title}
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {mallshark.category}
                </h3>

                <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-400">
                  {mallshark.description}
                </p>
              </div>

              <a
                href={mallshark.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-sm font-medium text-white transition-colors hover:text-blue-400"
              >
                Visit Project →
              </a>
            </div>

            {/* Metrics */}
            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-neutral-800 bg-neutral-800 sm:grid-cols-4">
              {mallshark.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="bg-neutral-950 p-5"
                >
                  <p className="text-2xl font-semibold text-white">
                    {metric.value}
                  </p>

                  <p className="mt-1 text-xs text-neutral-500">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Screenshot */}
              <div className="border-y border-neutral-800 bg-neutral-900 p-4 sm:p-6">
                <ProjectGallery images={mallshark.gallery} />
              </div>

          {/* Contributions */}
          <div className="grid gap-12 p-8 sm:p-10 lg:grid-cols-2 lg:p-12">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                My Contribution
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {mallshark.contributions.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-neutral-800 px-3 py-2 text-sm text-neutral-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Engineering highlight */}
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                Engineering Highlight
              </p>

              <h4 className="mt-4 text-xl font-semibold text-white">
                {mallshark.highlight.title}
              </h4>

              <p className="mt-4 text-sm leading-6 text-neutral-400">
                {mallshark.highlight.description}
              </p>

              <ul className="mt-5 space-y-2">
                {mallshark.highlight.results.map((result) => (
                  <li
                    key={result}
                    className="flex items-center gap-2 text-sm text-neutral-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}