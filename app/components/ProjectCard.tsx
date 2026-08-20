type ProjectCardProps = {
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
};

export default function ProjectCard({
  number,
  title,
  category,
  description,
  technologies,
}: ProjectCardProps) {
  return (
    <article className="group rounded-2xl border border-neutral-800 bg-neutral-950 p-7 transition-colors hover:border-neutral-700">
      <div className="flex items-start justify-between gap-4">
        <span className="text-sm font-medium text-blue-500">
          {number}
        </span>

        <span className="text-xs uppercase tracking-[0.15em] text-neutral-600">
          {category}
        </span>
      </div>

      <h3 className="mt-8 text-xl font-semibold text-white transition-colors group-hover:text-blue-400">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-neutral-500">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-neutral-800 px-3 py-1.5 text-xs text-neutral-500"
          >
            {technology}
          </span>
        ))}
      </div>
    </article>
  );
}