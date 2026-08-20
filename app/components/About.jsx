export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
            About Me
          </p>

          <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Software engineer focused on building real-world software.
          </h2>

          <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-neutral-400">
            <p>
              I&apos;m a Software Engineer specializing in PHP and Laravel,
              with experience building and enhancing production applications
              across e-commerce, B2B marketplaces, HR platforms, and
              enterprise workflow systems.
            </p>

            <p>
              My work spans backend architecture, REST APIs, database
              integrations, payment and shipping services, search
              infrastructure, background processing, and modern frontend
              development with React and Next.js.
            </p>

            <p>
              I&apos;ve worked directly with clients from requirements through
              production delivery, while also improving existing systems where
              reliability, usability, and maintainability are just as
              important as new feature development.
            </p>
          </div>
        </div>

        <div className="lg:pt-12">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8">
            <p className="text-sm font-medium text-white">
              What I bring
            </p>

            <ul className="mt-6 space-y-5">
              <li className="border-b border-neutral-800 pb-5">
                <p className="font-medium text-white">
                  Backend Engineering
                </p>
                <p className="mt-1 text-sm leading-6 text-neutral-500">
                  Laravel applications, REST APIs, business logic, queues,
                  integrations, and database-driven systems.
                </p>
              </li>

              <li className="border-b border-neutral-800 pb-5">
                <p className="font-medium text-white">
                  Full-Stack Development
                </p>
                <p className="mt-1 text-sm leading-6 text-neutral-500">
                  Building interfaces and integrating them with production
                  APIs using React and Next.js.
                </p>
              </li>

              <li className="border-b border-neutral-800 pb-5">
                <p className="font-medium text-white">
                  Client & Product Ownership
                </p>
                <p className="mt-1 text-sm leading-6 text-neutral-500">
                  Translating requirements into working software and taking
                  features through development and delivery.
                </p>
              </li>

              <li>
                <p className="font-medium text-white">
                  Problem Solving
                </p>
                <p className="mt-1 text-sm leading-6 text-neutral-500">
                  Comfortable working with complex pricing, inventory,
                  search, integrations, and existing production systems.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}