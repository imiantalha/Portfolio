const experiences = [
  {
    period: "Sep 2024 — Present",
    role: "Software Engineer",
    company: "MindBlaze Technologies",
    location: "Lahore, Pakistan",
    description:
      "Backend-focused full-stack engineering across e-commerce, B2B marketplaces, HR platforms, and enterprise workflow systems, with responsibility spanning implementation, testing, deployment, debugging, and production support.",
    highlights: [
      "Build and maintain PHP/Laravel applications and versioned REST APIs used by web and mobile clients, with backward compatibility as a key API design concern.",
      "Implement authentication, RBAC, authorization policies, request validation, CSRF protection, rate limiting, webhooks, and other production application safeguards.",
      "Write PHPUnit feature and API tests for authentication, validation, business workflows, and critical application behavior, supported by practical Postman verification.",
      "Build queues, background jobs, scheduled processes, chunked processing, and reporting workflows for asynchronous and resource-intensive operations.",
      "Investigate production issues across requests, logs, database behavior, API responses, queues, and application flow, including performance work that reduced one API operation from approximately 2–3 seconds to around 0.5 seconds.",
      "Work with MySQL and external database systems, including query optimization, indexing, multi-database workflows, and business data integrations.",
      "Use structured Git workflows with feature, bug-fix, hot-fix, development, and main branches, including pull requests, code reviews, cherry-picking, production hot-fixes, Docker-based development, Nginx/Vercel deployment environments, and ongoing maintenance.",
    ],
  },
  {
    period: "Jan 2024 — Sep 2024",
    role: "Junior Software Developer",
    company: "6th Sense Technologies",
    location: "Hybrid",
    description:
      "Contributed to web application development and maintenance, building practical experience across backend development, APIs, databases, and business logic.",
    highlights: [
      "Developed and maintained PHP/Laravel applications and backend functionality.",
      "Built REST APIs and implemented application business logic against relational databases.",
      "Implemented features from project requirements and collaborated through testing, debugging, refinement, and delivery workflows.",
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
      "Worked with databases, models, and application workflows under project requirements and development guidance.",
      "Built practical experience with professional development, testing, debugging, and delivery workflows.",
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
            My experience has grown from PHP and Laravel development into
            backend-focused software engineering across APIs, integrations,
            business workflows, testing, performance, deployment, and production
            support.
          </p>
        </div>

        <div className="mt-16">
          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.period}`}
              className="grid gap-6 border-t border-neutral-800 py-10 lg:grid-cols-[180px_1fr]"
            >
              <div>
                <p className="text-sm text-neutral-500">{experience.period}</p>
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
