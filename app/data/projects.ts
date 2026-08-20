export const mallshark = {
  number: "01",
  title: "Mallshark",
  category: "Multi-Vendor E-commerce Platform",

  description:
    "A production multi-vendor e-commerce platform supporting large-scale customer, vendor, product, order, payment, shipping, and search workflows.",

  metrics: [
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
  ],

  technologies: [
    "Laravel",
    "MySQL",
    "REST APIs",
    "Meilisearch",
    "Queues",
    "Sanctum",
  ],

  contributions: [
    "Order processing",
    "Shipping",
    "Mobile APIs",
    "Stripe",
    "PayPal",
    "Crypto.com",
    "Search",
    "Queued batch updates",
  ],

  highlight: {
    title: "Algolia → Self-hosted Meilisearch",
    description:
      "Migrated production search to self-hosted Meilisearch to reduce third-party dependency, increase infrastructure ownership, and save $100+ per month in search costs.",
    results: [
      "$100+ monthly cost saving",
      "Reduced third-party dependency",
      "Greater infrastructure ownership",
    ],
  },

  liveUrl: "https://mallshark.com/",
};