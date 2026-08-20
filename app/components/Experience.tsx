const experiences = [
  {
    period: "Sep 2024 — Present",
    role: "Software Engineer",
    company: "MindBlaze Technologies",
    location: "Lahore, Pakistan",
    description:
      "Working on production web applications and business systems across e-commerce, B2B marketplaces, HR platforms, and enterprise workflows.",
    highlights: [
      "Develop and maintain PHP/Laravel applications and REST APIs.",
      "Build and integrate frontend interfaces using React and Next.js.",
      "Work on payment, shipping, search, notification, and third-party integrations.",
      "Develop background jobs, queues, scheduled processes, and reporting workflows.",
      "Communicate with clients to understand requirements and deliver production solutions.",
    ],
  },
  {
    period: "Jan 2024 — Sep 2024",
    role: "Junior Software Developer",
    company: "6th Sense Technologies",
    location: "Hybrid",
    description:
      "Contributed to application development across backend systems, APIs, database workflows, and business functionality.",
    highlights: [
      "Developed and maintained web applications using PHP and Laravel.",
      "Worked with REST APIs, databases, and application business logic.",
      "Implemented and improved features based on project requirements.",
    ],
  },
  {
    period: "Sep 2023 — Dec 2023",
    role: "PHP / Laravel Developer Intern",
    company: "6th Sense Technologies",
    location: "Hybrid",
    description:
      "Started my professional software engineering career working with PHP and Laravel.",
    highlights: [
      "Developed backend functionality using PHP and Laravel.",
      "Worked with databases and application workflows.",
      "Contributed to real project development while building professional engineering experience.",
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
            Growing through real-world software engineering.
          </h2>

          <p className="mt-6 text-base leading-7 text-neutral-400">
            Experience spanning professional development, production systems,
            client communication, and end-to-end project delivery.
          </p>
        </div>

        <div className="mt-16">
          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.period}`}
              className="grid gap-6 border-t border-neutral-800 py-10 lg:grid-cols-[180px_1fr]"
            >
              <div>
                <p className="text-sm text-neutral-500">
                  {experience.period}
                </p>
              </div>

              <div>
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {experience.role}
                    </h3>

                    <p className="mt-1 text-sm text-blue-400">
                      {experience.company}
                    </p>
                  </div>

                  <span className="text-sm text-neutral-600">
                    {experience.location}
                  </span>
                </div>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-neutral-400">
                  {experience.description}
                </p>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {experience.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-sm leading-6 text-neutral-500"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-600" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}