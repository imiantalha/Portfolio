export default function Education() {
  return (
    <section id="education" className="border-t border-neutral-800 py-24 sm:py-32" aria-labelledby="education-title">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-500">Education</p>
            <h2 id="education-title" className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Computer science foundation.</h2>
          </div>
          <div>
            <article className="border-t border-neutral-800 pt-7">
              <h3 className="text-xl font-semibold text-white">Bachelor of Science in Computer Science (BSCS)</h3>
              <p className="mt-2 text-sm text-blue-400">Virtual University of Pakistan</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
