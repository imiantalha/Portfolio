import Image from "next/image";

type ProjectCardProps = {
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: {
    src: string;
    alt: string;
  };
  architecture?: {
    title: string;
    description: string;
    results: string[];
  };
};

export default function ProjectCard({
  number,
  title,
  category,
  description,
  technologies,
  image,
  architecture,
}: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950">
      <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
        {/* Image */}
        <div className="relative min-h-[260px] overflow-hidden bg-neutral-900 lg:min-h-[460px]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col p-7 sm:p-10">
          <div className="flex items-start justify-between gap-6">
            <span className="text-sm font-medium text-blue-500">
              {number}
            </span>

            <span className="max-w-[70%] text-right text-xs uppercase tracking-[0.15em] text-neutral-600">
              {category}
            </span>
          </div>

          <h2 className="mt-8 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {title}
          </h2>

          <p className="mt-4 text-sm leading-7 text-neutral-400">
            {description}
          </p>

          {architecture && (
            <div className="mt-8 border-t border-neutral-800 pt-7">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-blue-500">
                {architecture.title}
              </p>

              <p className="mt-3 text-sm leading-6 text-neutral-500">
                {architecture.description}
              </p>

              <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {architecture.results.slice(0, 4).map((result) => (
                  <div
                    key={result}
                    className="rounded-lg border border-neutral-800 bg-neutral-900/50 px-3 py-2 text-xs text-neutral-500"
                  >
                    {result}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-auto pt-8">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-600">
              Technologies
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-neutral-800 px-3 py-1.5 text-xs text-neutral-500"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}