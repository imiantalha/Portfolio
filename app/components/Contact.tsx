export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-neutral-800 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl border border-neutral-800 bg-neutral-950 px-6 py-16 text-center sm:px-12 sm:py-20">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
            Contact
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Let&apos;s build something useful.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-neutral-500">
            Whether you&apos;re hiring a software engineer, building a product,
            or need help solving a technical problem, feel free to get in
            touch.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:muhammadtalha.codes@gmail.com"
              className="w-full rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02] sm:w-auto"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/imiantalha"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-neutral-500 sm:w-auto"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/imiantalha"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-neutral-500 sm:w-auto"
            >
              GitHub
            </a>
          </div>

          <p className="mt-8 text-sm text-neutral-600">
            muhammadtalha.codes@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}