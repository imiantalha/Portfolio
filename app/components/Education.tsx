export default function Education() {
  return (
    <section
      id="education"
      className="border-t border-neutral-800 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
              Education
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Computer Science foundation.
            </h2>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-8">
            <p className="text-sm text-neutral-500">
              Bachelor&apos;s Degree
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-white">
              Bachelor of Science in Computer Science
            </h3>

            <p className="mt-3 text-sm text-neutral-400">
              Computer Science
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-neutral-800 px-3 py-1.5 text-xs text-neutral-400">
                Software Engineering
              </span>

              <span className="rounded-full border border-neutral-800 px-3 py-1.5 text-xs text-neutral-400">
                Programming
              </span>

              <span className="rounded-full border border-neutral-800 px-3 py-1.5 text-xs text-neutral-400">
                Databases
              </span>

              <span className="rounded-full border border-neutral-800 px-3 py-1.5 text-xs text-neutral-400">
                Computer Science
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}