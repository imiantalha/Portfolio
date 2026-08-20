const metrics = [
  {
    value: "3+",
    label: "Years of Experience",
  },
  {
    value: "1M+",
    label: "Customers",
  },
  {
    value: "200+",
    label: "Vendors",
  },
  {
    value: "6K+",
    label: "Products",
  },
  {
    value: "Thousands",
    label: "Orders",
  },
];

export default function Metrics() {
  return (
    <section className="border-y border-neutral-800">
      <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 lg:grid-cols-5 lg:px-8">
        {metrics.map((metric, index) => (
          <div
            key={metric.label}
            className={`px-6 py-10 text-center ${
              index < metrics.length - 1
                ? "border-neutral-800 lg:border-r"
                : ""
            }`}
          >
            <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {metric.value}
            </p>

            <p className="mt-2 text-sm text-neutral-500">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}