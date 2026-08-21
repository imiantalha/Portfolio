const highlights = [
  {
    title: "Career Progression",
    description:
      "Progressed from a PHP / Laravel development internship into professional software engineering roles.",
  },
  {
    title: "Production Experience",
    description:
      "Contributed to production systems across e-commerce, B2B marketplaces, HR platforms, and enterprise workflows.",
  },
  {
    title: "End-to-End Delivery",
    description:
      "Experience working from business requirements and implementation through integrations, refinement, and customer delivery.",
  },
];

export default function Recognition() {
  return (
    <section className="border-t border-neutral-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
            Professional Highlights
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Experience built through real projects.
          </h2>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-800 md:grid-cols-3">
          {highlights.map((highlight) => (
            <article
              key={highlight.title}
              className="bg-[#0a0a0a] p-7 sm:p-8"
            >
              <h3 className="text-lg font-semibold text-white">
                {highlight.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-neutral-500">
                {highlight.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}