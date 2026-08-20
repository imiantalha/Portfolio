const skillGroups = [
  {
    title: "Backend",
    skills: [
      "PHP",
      "Laravel",
      "REST APIs",
      "MySQL",
      "PostgreSQL",
      "SQL Server",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "Vite",
      "Blade",
    ],
  },
  {
    title: "Architecture & Engineering",
    skills: [
      "RESTful APIs",
      "RBAC",
      "Queues & Jobs",
      "Caching",
      "Authentication",
      "Database Integration",
      "Webhooks",
    ],
  },
  {
    title: "Integrations & Services",
    skills: [
      "Stripe",
      "PayPal",
      "Crypto.com",
      "Firebase",
      "Shipping APIs",
      "Search",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "Bitbucket",
      "Postman",
    ],
  },
];

const exploring = [
  "Docker",
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
            Tools and technologies I use to build production systems.
          </h2>

          <p className="mt-6 text-base leading-7 text-neutral-400">
            My experience spans backend engineering, full-stack development,
            APIs, databases, integrations, and the infrastructure behind
            production applications.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6 transition-colors hover:border-neutral-700"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white">
                {group.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-xs text-neutral-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white">
                Currently Exploring
              </h3>

              <p className="mt-2 text-sm text-neutral-600">
                Expanding my infrastructure and deployment knowledge.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {exploring.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-blue-500/30 bg-blue-500/5 px-4 py-2 text-sm text-blue-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}