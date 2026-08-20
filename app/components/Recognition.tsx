const recognition = [
  {
    title: "Performance Recognition",
    description:
      "Received recognition through performance-based compensation, including a performance bonus and increment.",
  },
  {
    title: "Appreciated Contribution",
    description:
      "Recognized for contribution and reliability within professional project environments.",
  },
  {
    title: "Continuous Learner",
    description:
      "Consistently builds new technical capabilities by learning and applying modern tools and engineering practices.",
  },
];

export default function Recognition() {
  return (
    <section className="border-t border-neutral-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
            Recognition
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            A few things I value professionally.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {recognition.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-neutral-800 bg-neutral-950 p-7"
            >
              <h3 className="text-lg font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-neutral-500">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}