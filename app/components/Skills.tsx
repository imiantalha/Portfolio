const skillGroups = [
  {
    title: "Backend",
    description:
      "Building APIs, business logic, integrations, and production backend systems.",
    skills: [
      "PHP",
      "Laravel",
      "REST APIs",
      "MVC",
      "Service / Repository Pattern",
      "SOLID",
      "Authentication",
      "RBAC",
    ],
  },
  {
    title: "Frontend",
    description:
      "Building responsive application interfaces and connecting them with backend APIs.",
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "Vite",
      "Blade",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Databases & Search",
    description:
      "Working with relational databases, external data sources, and application search.",
    skills: [
      "MySQL",
      "PostgreSQL",
      "SQL Server",
      "Algolia",
      "Meilisearch",
    ],
  },
  {
    title: "Integrations & Infrastructure",
    description:
      "Connecting applications with external services and asynchronous workflows.",
    skills: [
      "Stripe",
      "PayPal",
      "Crypto.com",
      "Firebase",
      "Queues",
      "Jobs",
      "Webhooks",
      "Scheduler",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-neutral-800 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
            Technical Expertise
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Tools and technologies I work with.
          </h2>

          <p className="mt-6 text-base leading-7 text-neutral-400">
            A practical stack built through production development across
            e-commerce, B2B, HR, and enterprise applications.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-800 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="bg-[#0a0a0a] p-8 sm:p-10"
            >
              <h3 className="text-xl font-semibold text-white">
                {group.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-neutral-500">
                {group.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-neutral-800 px-3 py-1.5 text-xs text-neutral-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}