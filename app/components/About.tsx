export default function About() {
  return (
    <section
      id="about"
      className="border-t border-neutral-800 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
              About Me
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Software engineering with a focus on practical solutions.
            </h2>
          </div>

          <div className="max-w-3xl space-y-6 text-base leading-8 text-neutral-400">
            <p>
              I&apos;m a Software Engineer specializing in PHP and Laravel,
              with full-stack experience across React and Next.js. I build
              production applications, REST APIs, integrations, and
              business workflows for real-world products and organizations.
            </p>

            <p>
              My experience spans multi-vendor and B2B e-commerce platforms,
              employee management systems, and enterprise workflow
              applications. I&apos;ve worked on systems involving large
              datasets, high-volume users, payments, search, shipping,
              notifications, background jobs, and reporting.
            </p>

            <p>
              Beyond implementation, I&apos;m comfortable working through the
              complete development lifecycle — understanding requirements,
              communicating with clients, building solutions, and helping
              deliver them to customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}