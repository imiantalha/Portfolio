const skillGroups = [
  {
    title: "Backend",
    skills: ["PHP", "Laravel", "REST APIs", "Authentication", "Authorization", "API Versioning", "Webhooks"],
  },
  {
    title: "Engineering",
    skills: [
      "Queues / Jobs",
      "Background Processing",
      "Caching",
      "Database Optimization",
      "Bulk Processing",
      "Testing / PHPUnit",
      "Monitoring / Debugging",
      "Rate Limiting",
    ],
  },
  {
    title: "Laravel Engineering",
    skills: [
      "Service Classes",
      "Service Container & Dependency Injection",
      "Repository Pattern",
      "Events & Listeners",
      "Jobs & Queues",
      "Task Scheduling",
      "Notifications & Mailables",
      "Laravel Telescope",
      "HTTP Client",
    ],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "JavaScript / TypeScript", "Blade", "Vite"],
  },
  {
    title: "Data & Performance",
    skills: [
      "MySQL",
      "PostgreSQL",
      "MS SQL Server",
      "Caching",
      "Database Transactions",
      "Query Optimization",
    ],
  },
  {
    title: "Integrations",
    skills: [
      "Stripe",
      "PayPal",
      "Crypto.com",
      "FedEx",
      "DHL",
      "USPS",
      "ShipStation",
      "Firebase / FCM",
    ],
  },
  {
    title: "Search",
    skills: ["Meilisearch", "Algolia"],
  },
  {
    title: "Development / Infrastructure",
    skills: ["Git", "Docker", "Postman", "Vercel", "Railway", "Nginx"],
  },
  {
    title: "Authentication & Authorization",
    skills: [
      "Laravel Passport",
      "Laravel Sanctum",
      "Policies & Gates",
      "Session Authentication",
      "RBAC",
      "CSRF Protection",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-neutral-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
            Technical Expertise
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Backend-first engineering, with full-stack delivery.
          </h2>
          <p className="mt-6 text-base leading-7 text-neutral-400">
            The strongest part of my stack is PHP / Laravel and API
            engineering, supported by frontend, database, integration, testing,
            debugging, and production workflow experience.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <article
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
