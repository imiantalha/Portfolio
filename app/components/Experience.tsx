const experiences = [
  {
    period: "Sep 2024 — Present",
    role: "Software Engineer",
    company: "MindBlaze Technologies",
    location: "Lahore, Pakistan",
    description:
      "Working on production software across e-commerce, B2B marketplaces, HR platforms, and enterprise workflow systems, with a focus on backend engineering and full-stack delivery.",
    highlights: [
      "Build and maintain PHP/Laravel applications and REST APIs for production systems.",
      "Develop frontend functionality using React, Next.js, and Blade based on project requirements.",
      "Implement payment, shipping, search, notification, and other third-party integrations.",
      "Build queues, background jobs, scheduled processes, and reporting workflows for asynchronous and recurring operations.",
      "Work with MySQL and external database systems to support business and integration workflows.",
      "Collaborate with clients to understand requirements, translate business workflows into technical solutions, and deliver production features.",
    ],
  },
  {
    period: "Jan 2024 — Sep 2024",
    role: "Junior Software Developer",
    company: "6th Sense Technologies",
    location: "Hybrid",
    description:
      "Contributed to the development and maintenance of web applications, building practical experience across backend development, APIs, databases, and business logic.",
    highlights: [
      "Developed and maintained PHP/Laravel applications and backend functionality.",
      "Built REST APIs and implemented application business logic.",
      "Worked with relational databases and data-driven application workflows.",
      "Implemented features and improvements based on project requirements.",
      "Collaborated within development workflows to test, refine, and deliver application functionality.",
    ],
  },
  {
    period: "Sep 2023 — Dec 2023",
    role: "PHP / Laravel Developer Intern",
    company: "6th Sense Technologies",
    location: "Hybrid",
    description:
      "Started my professional software engineering career by working with PHP and Laravel on real application development.",
    highlights: [
      "Developed backend functionality using PHP and Laravel.",
      "Worked with databases, models, and application workflows.",
      "Implemented features under project requirements and development guidance.",
      "Built practical experience working with real-world software projects and professional development workflows.",
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
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
            Experience
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            From learning Laravel to building production systems.
          </h2>

          <p className="mt-6 text-base leading-7 text-neutral-400">
            My experience has grown from backend development with PHP and
            Laravel into production engineering across APIs, integrations,
            business workflows, and full-stack applications.
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

                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {experience.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-sm leading-6 text-neutral-500"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-600" />
                      <span>{highlight}</span>
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
