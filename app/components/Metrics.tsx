const metrics = [
  {
    value: "200+",
    label: "Vendors",
    description: "Across multi-vendor marketplace systems.",
  },
  {
    value: "1M+",
    label: "Customers",
    description: "Across production customer-facing platforms.",
  },
  {
    value: "1M+",
    label: "API Users",
    description: "Across high-volume application workloads.",
  },
  {
    value: "6K+",
    label: "Products",
    description: "Across production e-commerce systems.",
  },
  {
    value: "Thousands",
    label: "Orders",
    description: "Across high-volume order workflows.",
  },
  {
    value: "Large",
    label: "Data Volumes",
    description: "Experience with large production databases.",
  },
];

export default function Metrics() {
  return (
    <section className="border-y border-neutral-800">
      <div className="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
          Scale of systems I&apos;ve contributed to
        </p>
      </div>

      <div className="mx-auto mt-2 grid max-w-7xl grid-cols-2 divide-x divide-y divide-neutral-800 px-6 lg:grid-cols-6 lg:divide-y-0 lg:px-8">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="px-5 py-8 sm:px-6 lg:px-5"
          >
            <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {metric.value}
            </p>

            <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-neutral-400">
              {metric.label}
            </p>

            <p className="mt-3 hidden text-xs leading-5 text-neutral-600 lg:block">
              {metric.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}