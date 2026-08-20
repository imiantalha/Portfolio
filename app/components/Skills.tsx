const skillGroups = [
  {
    title: "Backend Engineering",
    description:
      "Building APIs, business logic, background processing, and production Laravel applications.",
    skills: ["PHP", "Laravel", "REST APIs", "MVC", "Queues", "Scheduled Jobs"],
  },
  {
    title: "Frontend Development",
    description:
      "Building responsive interfaces and connecting modern frontend applications to production APIs.",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "Blade", "Vite"],
  },
  {
    title: "Data & Search",
    description:
      "Working with relational databases, external data sources, and production search infrastructure.",
    skills: ["MySQL", "PostgreSQL", "SQL Server", "Meilisearch", "Algolia"],
  },
  {
    title: "Integrations",
    description:
      "Integrating payment, shipping, authentication, notification, and third-party business services.",
    skills: [
      "Stripe",
      "PayPal",
      "Crypto.com",
      "FedEx",
      "USPS",
      "ShipStation",
      "Firebase",
    ],
  },
  {
    title: "Architecture & Security",
    description:
      "Applying structured application architecture, authentication, authorization, and maintainable development practices.",
    skills: [
      "Sanctum",
      "RBAC",
      "Spatie Permissions",
      "Service / Repository Pattern",
      "SOLID",
    ],
  },
  {
    title: "Development Tools",
    description:
      "Tools and workflows used throughout development, debugging, collaboration, and delivery.",
    skills: ["Git", "Bitbucket", "Docker", "Claude", "ChatGPT", "GitHub Copilot"],
  },
];

export default function Skills() {
  return (
    <section className="border-t border-neutral-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
            Technical Expertise
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Technologies I use to build production-ready systems.
          </h2>

          <p className="mt-6 text-base leading-7 text-neutral-400">
            My experience spans backend engineering, full-stack development,
            databases, third-party integrations, search infrastructure, and
            modern development workflows.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-800 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="bg-[#0a0a0a] p-7 transition-colors hover:bg-neutral-950"
            >
              <h3 className="text-lg font-medium text-white">
                {group.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-neutral-500">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
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