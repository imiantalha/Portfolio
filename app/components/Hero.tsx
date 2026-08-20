import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        {/* Content */}
        <div>
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-green-500" />

            <span className="text-sm text-neutral-500">
              Available for opportunities
            </span>
          </div>

          <p className="mt-8 text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
            Software Engineer
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Building reliable software for real-world business needs.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-400">
            I&apos;m Muhammad Talha, a PHP / Laravel and full-stack developer
            focused on building production applications, APIs, integrations,
            and business workflows using Laravel, React, and Next.js.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#work"
              className="rounded-full bg-white px-6 py-3 text-center text-sm font-medium text-black transition-transform hover:scale-[1.02]"
            >
              Explore My Work
            </Link>

            <Link
              href="#contact"
              className="rounded-full border border-neutral-700 px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:border-neutral-500"
            >
              Let&apos;s Talk
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm text-neutral-500">
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
            <div className="absolute -inset-4 rounded-full border border-neutral-800" />

            <div className="relative h-64 w-64 overflow-hidden rounded-full border border-neutral-700 sm:h-80 sm:w-80">
              <Image
                src="/images/profile/me.jpg"
                alt="Muhammad Talha"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 640px) 256px, 320px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}