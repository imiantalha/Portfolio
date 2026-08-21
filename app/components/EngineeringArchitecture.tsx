const integrations = [
  { label: "Payments", items: "Stripe · PayPal · Crypto.com" },
  { label: "Shipping", items: "FedEx · DHL · USPS · ShipStation" },
  { label: "Search", items: "Meilisearch · Algolia" },
  { label: "Notifications", items: "Firebase / FCM" },
];

export default function EngineeringArchitecture() {
  return (
    <section
      aria-labelledby="architecture-title"
      className="border-t border-neutral-800 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
            Engineering View
          </p>
          <h2
            id="architecture-title"
            className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            APIs at the center, integrations around them.
          </h2>
          <p className="mt-6 text-base leading-7 text-neutral-400">
            A simplified view of the architecture patterns and integrations I
            have worked with across production applications. Individual
            projects used different subsets of this stack.
          </p>
        </div>

        <div className="mt-14 rounded-3xl border border-neutral-800 bg-neutral-950 p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col items-center">
            <div className="grid w-full max-w-3xl gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-neutral-800 bg-[#0b0b0b] p-4 text-center">
                <p className="text-xs uppercase tracking-[0.15em] text-neutral-600">Clients</p>
                <p className="mt-2 text-sm font-medium text-white">Web / Mobile</p>
              </div>
              <div className="flex items-center justify-center text-neutral-700 sm:text-xl" aria-hidden="true">↓</div>
              <div className="rounded-xl border border-blue-500/30 bg-blue-500/[0.04] p-4 text-center">
                <p className="text-xs uppercase tracking-[0.15em] text-blue-500">API layer</p>
                <p className="mt-2 text-sm font-medium text-white">REST APIs · Laravel</p>
              </div>
            </div>

            <div className="my-3 text-neutral-700" aria-hidden="true">↓</div>

            <div className="grid w-full max-w-3xl gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-neutral-800 bg-[#0b0b0b] p-4 text-center">
                <p className="text-xs uppercase tracking-[0.15em] text-neutral-600">Primary data</p>
                <p className="mt-2 text-sm font-medium text-white">MySQL</p>
              </div>
              <div className="rounded-xl border border-neutral-800 bg-[#0b0b0b] p-4 text-center">
                <p className="text-xs uppercase tracking-[0.15em] text-neutral-600">External data</p>
                <p className="mt-2 text-sm font-medium text-white">MS SQL Server</p>
              </div>
              <div className="rounded-xl border border-neutral-800 bg-[#0b0b0b] p-4 text-center">
                <p className="text-xs uppercase tracking-[0.15em] text-neutral-600">Async work</p>
                <p className="mt-2 text-sm font-medium text-white">Queues / Jobs</p>
              </div>
            </div>

            <div className="mt-8 grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {integrations.map((integration) => (
                <div key={integration.label} className="rounded-xl border border-neutral-800 bg-[#0b0b0b] p-4">
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-blue-500">{integration.label}</p>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">{integration.items}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
