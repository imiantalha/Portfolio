import ProjectGallery from "./ProjectGallery";

type ProjectMetric = {
  value: string;
  label: string;
};

type ProjectHighlight = {
  title: string;
  description: string;
  results: string[];
};

type ProjectArchitecture = {
  title: string;
  description: string;
  results: string[];
};

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  metrics?: ProjectMetric[];
  technologies: string[];
  contributions: string[];
  gallery: {
    src: string;
    alt: string;
  }[];
  highlight?: ProjectHighlight;
  architecture?: ProjectArchitecture;
  liveUrl?: string;
};

type ProjectCaseStudyProps = {
  project: Project;
};

export default function ProjectCaseStudy({
  project,
}: ProjectCaseStudyProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950">
      <div className="p-8 sm:p-10 lg:p-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-medium text-blue-500">
              {project.number} / {project.title}
            </p>

            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {project.category}
            </h3>

            <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-400">
              {project.description}
            </p>
          </div>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-sm font-medium text-white transition-colors hover:text-blue-400"
            >
              Visit Project →
            </a>
          )}
        </div>

        {project.metrics && (
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-neutral-800 bg-neutral-800 sm:grid-cols-4">
            {project.metrics.map((metric) => (
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
        )}
      </div>

      <div className="border-y border-neutral-800 bg-neutral-900 p-4 sm:p-6">
        <ProjectGallery images={project.gallery} />
      </div>

      <div className="grid gap-12 p-8 sm:p-10 lg:grid-cols-2 lg:p-12">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            My Contribution
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.contributions.map((item) => (
              <span
                key={item}
                className="rounded-full border border-neutral-800 px-3 py-2 text-sm text-neutral-300"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              Technologies
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full bg-neutral-900 px-3 py-2 text-sm text-neutral-400"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>

        {project.architecture && (
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              Engineering Highlight
            </p>

            <h4 className="mt-4 text-xl font-semibold text-white">
              {project.architecture.title}
            </h4>

            <p className="mt-4 text-sm leading-6 text-neutral-400">
              {project.architecture.description}
            </p>

            <ul className="mt-5 space-y-2">
              {project.architecture.results.map((result) => (
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
        )}

        {project.highlight && (
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              Engineering Highlight
            </p>

            <h4 className="mt-4 text-xl font-semibold text-white">
              {project.highlight.title}
            </h4>

            <p className="mt-4 text-sm leading-6 text-neutral-400">
              {project.highlight.description}
            </p>

            <ul className="mt-5 space-y-2">
              {project.highlight.results.map((result) => (
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
        )}
      </div>
    </article>
  );
}