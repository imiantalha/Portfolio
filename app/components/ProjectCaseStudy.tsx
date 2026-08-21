import Image from "next/image";
import type { Project } from "../data/projects";

type ProjectCaseStudyProps = { project: Project };

export default function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950">
      <div className="p-8 sm:p-10 lg:p-12">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="text-sm font-medium text-blue-500">{project.number}</span>
          <span className="text-xs uppercase tracking-[0.15em] text-neutral-600">{project.category}</span>
        </div>
        <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{project.title}</h3>
        <p className="mt-5 max-w-3xl text-base leading-7 text-neutral-400">{project.description}</p>
        <p className="mt-5 text-sm text-neutral-500"><span className="font-medium text-neutral-300">Role:</span> {project.role}</p>
        <div className="mt-7 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span key={technology} className="rounded-full border border-neutral-800 px-3 py-1.5 text-xs text-neutral-500">{technology}</span>
          ))}
        </div>
      </div>

      {project.impact && (
        <div className="border-y border-blue-500/15 bg-blue-500/[0.04] p-8 sm:p-10 lg:p-12">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400">Impact</p>
          <h4 className="mt-4 text-xl font-semibold text-white">{project.impact.title}</h4>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-neutral-400">{project.impact.description}</p>
        </div>
      )}

      {project.architecture && (
        <div className="border-y border-neutral-800 bg-[#0b0b0b] p-8 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-500">Architecture & Engineering</p>
              <h4 className="mt-4 text-2xl font-semibold text-white">{project.architecture.title}</h4>
              <p className="mt-4 text-sm leading-7 text-neutral-500">{project.architecture.description}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">Technical Highlights</p>
              <ul className="mt-5 space-y-3">
                {project.architecture.results.map((result) => (
                  <li key={result} className="flex gap-3 text-sm leading-6 text-neutral-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="p-8 sm:p-10 lg:p-12">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">My Contribution</p>
        <ul className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.contributions.map((contribution) => (
            <li key={contribution} className="flex gap-3 text-sm leading-6 text-neutral-400">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-600" />
              <span>{contribution}</span>
            </li>
          ))}
        </ul>
      </div>

      {project.challenges?.length ? (
        <div className="border-t border-neutral-800 p-8 sm:p-10 lg:p-12">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">Challenges & Decisions</p>
          <div className="mt-7 grid gap-5 lg:grid-cols-3">
            {project.challenges.map((challenge) => (
              <section key={challenge.title} className="rounded-2xl border border-neutral-800 bg-[#0b0b0b] p-6">
                <h4 className="text-base font-semibold text-white">{challenge.title}</h4>
                <p className="mt-3 text-sm leading-6 text-neutral-500">{challenge.description}</p>
                <ul className="mt-5 space-y-2">
                  {challenge.approach.map((item) => (
                    <li key={item} className="text-sm leading-6 text-neutral-500"><span className="mr-2 text-blue-500">•</span>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      ) : null}

      <div className="border-t border-neutral-800 p-4 sm:p-6">
        <div className="grid gap-4 md:grid-cols-2">
          {project.gallery.map((image, index) => (
            <div key={image.src} className="group relative aspect-[16/10] overflow-hidden rounded-xl bg-neutral-900">
              <Image src={image.src} alt={image.alt} fill priority={index === 0} className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
