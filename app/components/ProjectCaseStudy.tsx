import Image from "next/image";

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  contributions: string[];
  architecture?: {
    title: string;
    description: string;
    results: string[];
  };
  gallery: {
    src: string;
    alt: string;
  }[];
};

type ProjectCaseStudyProps = {
  project: Project;
};

export default function ProjectCaseStudy({
  project,
}: ProjectCaseStudyProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950">
      {/* Header */}
      <div className="p-8 sm:p-10 lg:p-12">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="text-sm font-medium text-blue-500">
            {project.number}
          </span>

          <span className="text-xs uppercase tracking-[0.15em] text-neutral-600">
            {project.category}
          </span>
        </div>

        <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {project.title}
        </h3>

        <p className="mt-5 max-w-3xl text-base leading-7 text-neutral-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-7 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-neutral-800 px-3 py-1.5 text-xs text-neutral-500"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      {/* Architecture / Engineering */}
      {project.architecture && (
        <div className="border-y border-neutral-800 bg-[#0b0b0b] p-8 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-500">
                Engineering
              </p>

              <h4 className="mt-4 text-2xl font-semibold text-white">
                {project.architecture.title}
              </h4>

              <p className="mt-4 text-sm leading-6 text-neutral-500">
                {project.architecture.description}
              </p>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
                Highlights
              </p>

              <ul className="mt-5 space-y-3">
                {project.architecture.results.map((result) => (
                  <li
                    key={result}
                    className="flex gap-3 text-sm leading-6 text-neutral-400"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Contributions */}
      <div className="p-8 sm:p-10 lg:p-12">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
            My Contribution
          </p>

          <div className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.contributions.map((contribution) => (
              <div
                key={contribution}
                className="border-l border-neutral-800 pl-4 text-sm text-neutral-400"
              >
                {contribution}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="border-t border-neutral-800 p-4 sm:p-6">
        <div className="grid gap-4 md:grid-cols-2">
          {project.gallery.map((image) => (
            <div
              key={image.src}
              className="relative aspect-[16/10] overflow-hidden rounded-xl bg-neutral-900"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}