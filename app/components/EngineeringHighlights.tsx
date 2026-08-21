const highlights = [
  {
    eyebrow: "Search migration",
    title: "Algolia → self-hosted Meilisearch",
    description:
      "Replaced the existing Algolia search implementation with self-hosted Meilisearch, removing the hosted search dependency and reducing recurring search cost by approximately $100/month.",
  },
  {
    eyebrow: "Shipping",
    title: "Multi-provider shipping",
    description:
      "Integrated FedEx, DHL, USPS, and ShipStation for shipment creation, label generation, and tracking URLs across multiple shipping providers.",
  },
  {
    eyebrow: "API architecture",
    title: "Versioned REST APIs",
    description:
      "Worked with mobile-facing REST APIs across v1, v2, and v3, supporting API evolution as production requirements changed.",
  },
  {
    eyebrow: "Data architecture",
    title: "Multi-database workflows",
    description:
      "Connected MySQL application data with MS SQL Server for external stock and pricing information, including customer- and region-based pricing workflows.",
  },
  {
    eyebrow: "Background processing",
    title: "Queues & bulk processing",
    description:
      "Used queues and background jobs for customer/vendor processing and bulk CSV product and stock updates, keeping large workloads asynchronous.",
  },
  {
    eyebrow: "Mobile backends",
    title: "API-first systems",
    description:
      "Built backend APIs consumed by mobile applications, including authentication, Firebase / FCM notifications, and business workflow endpoints.",
  },
];

export default function EngineeringHighlights() {
  return (
    <section
      aria-labelledby="engineering-highlights-title"
      className="border-t border-neutral-800 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
            Engineering Highlights
          </p>
          <h2
            id="engineering-highlights-title"
            className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Practical engineering decisions behind the products.
          </h2>
          <p className="mt-6 text-base leading-7 text-neutral-400">
            Selected examples of the backend, API, integration, and data
            engineering work I have contributed to in production systems.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((highlight) => (
            <article
              key={highlight.title}
              className="group rounded-2xl border border-neutral-800 bg-neutral-950 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-700"
            >
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-blue-500">
                {highlight.eyebrow}
              </p>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {highlight.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-500">
                {highlight.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
