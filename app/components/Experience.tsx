const experiences = [
  {
    period: "Sep 2024 — Present",
    role: "Software Engineer",
    company: "MindBlaze Technologies",
    location: "Lahore, Pakistan",
    description:
      "Working on production software across e-commerce, B2B marketplaces, HR platforms, and enterprise systems, with responsibilities spanning backend development, APIs, integrations, and client-facing delivery.",
    highlights: [
      "Work directly with clients to understand requirements and deliver production-ready solutions.",
      "Contribute across the development lifecycle, from requirements and implementation to deployment and delivery.",
      "Build and maintain Laravel applications, REST APIs, integrations, background jobs, and business workflows.",
      "Work across e-commerce, B2B marketplace, HR, and enterprise workflow systems.",
      "Develop frontend interfaces and API integrations using React and Next.js.",
    ],
    technologies: [
      "Laravel",
      "PHP",
      "React",
      "Next.js",
      "MySQL",
      "REST APIs",
    ],
  },
  {
    period: "Jan 2024 — Sep 2024",
    role: "Junior Software Developer",
    company: "6th Sense Technologies",
    location: "Lahore, Pakistan",
    description:
      "Contributed to software development projects with a focus on Laravel, backend development, APIs, and business application workflows.",
    highlights: [
      "Developed and maintained Laravel-based applications.",
      "Implemented backend features and REST APIs.",
      "Worked with databases and application business logic.",
      "Collaborated on feature development and production improvements.",
    ],
    technologies: [
      "PHP",
      "Laravel",
      "MySQL",
      "REST APIs",
    ],
  },
  {
    period: "Sep 2023 — Dec 2023",
    role: "PHP / Laravel Developer Intern",
    company: "6th Sense Technologies",
    location: "Lahore, Pakistan",
    description:
      "Started my professional software engineering career working with PHP and Laravel in a production development environment.",
    highlights: [
      "Developed backend functionality using PHP and Laravel.",
      "Worked with database-driven application features.",
      "Learned production development workflows and software engineering practices.",
      "Contributed to real-world application development under senior guidance.",
    ],
    technologies: [
      "PHP",
      "Laravel",
      "MySQL",
      "Git",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-neutral-800 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
            Experience
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Growing from Laravel development into full-stack engineering.
          </h2>

          <p className="mt-6 text-base leading-7 text-neutral-400">
            A progression built through hands-on production work, increasing
            ownership, and experience delivering software for real business
            needs.
          </p>
        </div>

        <div className="mt-16">
          {experiences.map((experience, index) => (
            <article
              key={`${experience.company}-${experience.period}`}
              className="relative grid gap-8 border-t border-neutral-800 py-10 lg:grid-cols-[220px_1fr]"
            >
              <div>
                <p className="text-sm font-medium text-neutral-300">
                  {experience.period}
                </p>

                <p className="mt-2 text-sm text-neutral-500">
                  {experience.location}
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[29px] top-1 hidden h-3 w-3 rounded-full border-2 border-blue-500 bg-[#0a0a0a] lg:block" />

                <p className="text-sm font-medium text-blue-500">
                  {experience.company}
                </p>

                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                  {experience.role}
                </h3>

                <p className="mt-5 max-w-3xl text-base leading-7 text-neutral-400">
                  {experience.description}
                </p>

                <ul className="mt-6 max-w-3xl space-y-3">
                  {experience.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-sm leading-6 text-neutral-400"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-600" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}