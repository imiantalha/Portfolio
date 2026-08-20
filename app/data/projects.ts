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

  gallery: [
    {
      src: "/images/mallshark/explore.png",
      alt: "Mallshark product exploration page",
    },
    {
      src: "/images/mallshark/product.png",
      alt: "Mallshark product detail page",
    },
    {
      src: "/images/mallshark/checkout.png",
      alt: "Mallshark checkout and payment page",
    },
    {
      src: "/images/mallshark/seller-center.png",
      alt: "Mallshark seller center dashboard",
    },
  ],
};

export const textileSouk = {
  number: "02",
  title: "Textile Souk",
  category: "B2B Textile Marketplace",

  description:
    "A B2B textile marketplace connecting customers with textile products while supporting orders, enquiries, shipments, cargo management, inventory, and business workflows.",

  technologies: [
    "Laravel",
    "MySQL",
    "SQL Server",
    "REST APIs",
    "Firebase",
  ],

  contributions: [
    "Orders & enquiries",
    "Product management",
    "Shipment workflows",
    "Cargo management",
    "Inventory integration",
    "REST APIs",
    "Firebase notifications",
    "Analytics",
  ],

  architecture: {
    title: "Multi-database business integration",
    description:
      "The platform uses MySQL for application data such as users and orders while integrating with an external SQL Server system for stock and customer information.",
    results: [
      "MySQL for orders and users",
      "SQL Server integration for stock and customers",
      "Integrated shipment workflows",
      "Business data synchronized across systems",
    ],
  },

  gallery: [
    {
      src: "/images/textile-souk/dashboard.png",
      alt: "Textile Souk dashboard",
    },
    {
      src: "/images/textile-souk/products.png",
      alt: "Textile Souk products interface",
    },
    {
      src: "/images/textile-souk/brands.png",
      alt: "Textile Souk Brands",
    },
    {
      src: "/images/textile-souk/stock.png",
      alt: "Textile Souk stock management",
    },
  ],

  liveUrl: "https://admin.textilesouk.com/",
};

export const ems = {
  number: "03",
  title: "Employee Management System",
  category: "HR & Employee Management Platform",

  description:
    "An internal employee management platform supporting attendance, leave management, role-based access control, and business workflows through a Laravel API and Next.js frontend.",

  technologies: [
    "Laravel",
    "Next.js",
    "React",
    "REST APIs",
    "RBAC",
  ],

  contributions: [
    "Attendance management",
    "Leave management",
    "Role-based access control",
    "REST API integration",
    "Next.js UI",
    "Existing system improvements",
    "CRUD workflows",
  ],

  architecture: {
    title: "API-driven full-stack application",
    description:
      "Worked across the backend APIs and frontend interface, connecting business workflows from Laravel APIs to a Next.js application.",
    results: [
      "Laravel REST APIs",
      "Next.js frontend",
      "Role-based access control",
      "Integrated attendance workflows",
      "Integrated leave workflows",
    ],
  },

  gallery: [
    {
      src: "/images/ems/dashboard.png",
      alt: "Employee Management System dashboard",
    },
    {
      src: "/images/ems/leaves.png",
      alt: "Employee Management System leave management",
    },
    {
      src: "/images/ems/calendar.png",
      alt: "Employee Management System calendar",
    },
    {
      src: "/images/ems/wfh.png",
      alt: "Employee Management System work from home management",
    },
  ],

  liveUrl: "https://ems.mindblaze.net/",
};