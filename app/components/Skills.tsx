const skillGroups = [
  {
    title: "Core Backend",
    skills: ["PHP", "Laravel", "REST APIs", "API Versioning", "Authentication", "Authorization", "Webhooks"],
  },
  {
    title: "Engineering",
    skills: [
      "Database Optimization",
      "Queues / Jobs",
      "Background Processing",
      "Caching",
      "Bulk Processing",
      "Testing / PHPUnit",
      "Monitoring / Debugging",
      "Rate Limiting",
    ],
  },
  {
    title: "Laravel Practices",
    skills: [
      "Service Classes",
      "Dependency Injection",
      "Repository Pattern",
      "Events & Listeners",
      "Task Scheduling",
      "Notifications & Mail",
      "Laravel Telescope",
      "HTTP Client",
    ],
  },
  {
    title: "Data",
    skills: [
      "MySQL",
      "PostgreSQL",
      "MS SQL Server",
      "Database Transactions",
      "Query Optimization",
      "Multi-database Workflows",
    ],
  },
  {
    title: "Full Stack",
    skills: ["React", "Next.js", "JavaScript / TypeScript", "Blade", "Vite"],
  },
  {
    title: "Integrations",
    skills: [
      "Stripe",
      "PayPal",
      "FedEx",
      "DHL",
      "USPS",
      "ShipStation",
      "Firebase / FCM",
      "Meilisearch",
      "Algolia",
    ],
  },
  {
    title: "Delivery",
    skills: [
      "Git",
      "Pull Requests",
      "Code Reviews",
      "Docker",
      "Nginx",
      "Vercel",
      "Railway",
      "Postman",
    ],
  },
  {
    title: "Security",
    skills: [
      "Laravel Sanctum",
      "Laravel Passport",
      "Policies & Gates",
      "RBAC",
      "CSRF Protection",
      "Request Validation",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-neutral-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
            Technical Expertise
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Backend-first engineering, with full-stack delivery.
          </h2>
          <p className="mt-6 text-base leading-7 text-neutral-400">
            I keep my strongest skills close to the work I can demonstrate: API
            engineering, databases, application performance, security, testing,
            asynchronous processing, production debugging, and full-stack delivery.
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

        <p className="mt-8 max-w-3xl text-sm leading-7 text-neutral-600">
          CI/CD automation and deeper cloud infrastructure are areas I am actively
          developing; my production experience today is strongest in application
          engineering, Git workflows, deployment, troubleshooting, and maintenance.
        </p>
      </div>
    </section>
  );
}
