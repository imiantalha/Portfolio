const strengths = [
  {
    title: "Performance Recognition",
    description:
      "Recognized through a performance bonus and salary increment for professional contribution and performance.",
  },
  {
    title: "Client Communication",
    description:
      "Comfortable discussing requirements with clients and translating business needs into working software.",
  },
  {
    title: "Continuous Learning",
    description:
      "Strong learning mindset with a focus on continuously improving engineering skills and adopting new technologies.",
  },
  {
    title: "End-to-End Ownership",
    description:
      "Experience taking features from requirements and implementation through testing, integration, and production delivery.",
  },
];

export default function Recognition() {
  return (
    <section className="border-t border-neutral-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
            Recognition & Strengths
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            How I approach my work.
          </h2>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-800 md:grid-cols-2">
          {strengths.map((strength) => (
            <article
              key={strength.title}
              className="bg-[#0a0a0a] p-8"
            >
              <h3 className="text-lg font-medium text-white">
                {strength.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-neutral-500">
                {strength.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}