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
};

export default function ProjectCard({
  number,
  title,
  category,
  description,
  technologies,
  image,
}: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 transition-colors hover:border-neutral-700">
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-neutral-900">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Content */}
      <div className="p-7">
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
      </div>
    </article>
  );
}