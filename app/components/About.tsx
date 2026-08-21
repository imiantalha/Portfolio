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
              Engineering practical solutions that work in production.
            </h2>
          </div>

          <div className="max-w-3xl space-y-6 text-base leading-8 text-neutral-400">
            <p>
              I&apos;m a Software Engineer specializing in PHP and Laravel,
              with full-stack experience across React and Next.js. My work
              focuses on building production applications, REST APIs,
              integrations, and business workflows that solve real
              operational needs.
            </p>

            <p>
              I&apos;ve contributed to multi-vendor and B2B e-commerce
              platforms, employee management systems, and enterprise workflow
              applications. This includes working with large datasets,
              high-volume users, payments, shipping, search, notifications,
              background jobs, reporting, and external database systems.
            </p>

            <p>
              I also work closely with requirements and delivery. From
              understanding a client&apos;s needs and translating business
              workflows into technical solutions to implementing, integrating,
              and helping deliver the final product to customers.
            </p>

            <p>
              I value clean architecture, maintainable code, continuous
              learning, and solving problems with practical engineering
              decisions rather than unnecessary complexity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}