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

          <div className="max-w-3xl space-y-5 text-base leading-8 text-neutral-400">
            <p>
              I&apos;m a Software Engineer specializing in PHP and Laravel, with
              full-stack experience across React and Next.js. I build production
              applications, REST APIs, integrations, and business workflows for
              e-commerce, B2B, HR, and enterprise systems.
            </p>

            <p>
              My work spans authentication and RBAC, databases and large datasets,
              payments, shipping, search, notifications, queues, reporting, and
              external database integrations. I also write PHPUnit tests, use Git
              workflows with pull requests and code reviews, and investigate
              performance and production issues across APIs, queries, queues, and logs.
            </p>

            <p>
              I work through the full delivery cycle with Docker, Nginx, Vercel,
              Railway, scheduled tasks, and background workers. Most professional
              systems are proprietary, so I demonstrate that work through sanitized
              case studies, architecture decisions, measurable outcomes, and personal
              projects. I value maintainable code, practical architecture, and
              continuous improvement over unnecessary complexity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
