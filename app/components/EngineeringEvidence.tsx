const wins = [
  {
    eyebrow: "Performance",
    metric: "~2–3s → ~0.5s",
    title: "Optimized a slow product-detail API",
    description:
      "Investigated database queries and application behavior, then applied targeted indexing and query optimization to cut response time to around 0.5 seconds.",
  },
  {
    eyebrow: "API evolution",
    metric: "v1 → v2 → v3",
    title: "Evolved APIs without breaking clients",
    description:
      "Used versioned REST contracts to introduce new response structures and behavior while keeping older mobile clients working.",
  },
  {
    eyebrow: "Production engineering",
    metric: "Build → ship → support",
    title: "Work beyond feature development",
    description:
      "Contribute across testing, Git, deployment, monitoring, debugging, queues, scheduled tasks, integrations, and production hot fixes.",
  },
];

const principles = [
  {
    title: "Protect existing contracts",
    description: "Version and evolve APIs deliberately when multiple clients depend on them.",
  },
  {
    title: "Investigate before optimizing",
    description: "Use requests, queries, logs, and execution flow to find the real bottleneck first.",
  },
  {
    title: "Move expensive work off the request",
    description: "Use queues, workers, scheduling, and chunking for resource-intensive operations.",
  },
  {
    title: "Ship with safety checks",
    description: "Combine validation, authorization, tests, reviews, and production verification.",
  },
];

export default function EngineeringEvidence() {
  return (
    <section id="engineering-evidence" aria-labelledby="engineering-evidence-title" className="border-t border-neutral-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-500">Engineering Evidence</p>
          <h2 id="engineering-evidence-title" className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            How I approach real software problems.
          </h2>
          <p className="mt-6 text-base leading-7 text-neutral-400">
            Concrete examples of engineering decisions, constraints, and outcomes from production work.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {wins.map((win) => (
            <article key={win.title} className="rounded-2xl border border-neutral-800 bg-neutral-950 p-7 sm:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-blue-500">{win.eyebrow}</p>
              <p className="mt-5 text-2xl font-semibold tracking-tight text-white">{win.metric}</p>
              <h3 className="mt-3 text-lg font-semibold text-white">{win.title}</h3>
              <p className="mt-4 text-sm leading-7 text-neutral-500">{win.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-500">Engineering Principles</p>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl">Practical decisions over buzzwords.</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((principle) => (
              <article key={principle.title} className="rounded-2xl border border-neutral-800 p-6">
                <h4 className="font-semibold text-white">{principle.title}</h4>
                <p className="mt-3 text-sm leading-7 text-neutral-500">{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
