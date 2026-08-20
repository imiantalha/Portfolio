export default function Education() {
  return (
    <section
      id="education"
      className="border-t border-neutral-800 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
              Education
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Academic foundation in computer science.
            </h2>
          </div>

          <div className="border-t border-neutral-800 pt-8">
            <p className="text-sm text-neutral-500">
              Bachelor of Science
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-white">
              Bachelor of Science in Computer Science
            </h3>

            <p className="mt-2 text-sm text-blue-400">
              Virtual University of Pakistan
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-400">
              A computer science foundation supporting my professional work
              across software engineering, backend development, databases,
              APIs, and full-stack application development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}