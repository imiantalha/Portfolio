import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 pb-20 pt-32 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        {/* Content */}
        <div>
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
            Software Engineer
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Building scalable
            <span className="block text-neutral-400">
              web applications & APIs.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
            I specialize in PHP, Laravel, and React, building production-ready
            applications, APIs, integrations, and business systems across
            e-commerce, B2B marketplaces, HR platforms, and enterprise
            workflows.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-full bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-600"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-neutral-500"
            >
              Let's Talk
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-neutral-500">
            <span>PHP</span>
            <span>Laravel</span>
            <span>React</span>
            <span>Next.js</span>
            <span>REST APIs</span>
          </div>
        </div>

        {/* Profile */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] border border-blue-500/10" />

            <div className="relative h-72 w-72 overflow-hidden rounded-[2rem] border border-neutral-800 bg-neutral-900 sm:h-80 sm:w-80">
                <Image
                    src="/images/profile/me.jpg"
                    alt="Muhammad Talha - Software Engineer"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 320px, 384px"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}