export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-neutral-800 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950 px-8 py-16 text-center sm:px-12 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
              Let&apos;s Work Together
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Have a project or opportunity in mind?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-neutral-400">
              Whether you&apos;re looking for a software engineer to join your
              team or need help building a production-ready application,
              I&apos;d be happy to discuss the opportunity.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="mailto:muhammadtalha.codes@gmail.com"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
              >
                Get in Touch
              </a>

              <a
                href="https://www.linkedin.com/in/imiantalha"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-neutral-500"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}