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
    "Event Listeners",
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

export const pakRailways = {
  number: "04",
  title: "Pak Railways Tender Workflow Management System",
  category: "Tender & Workflow Management",

  description:
    "An enterprise workflow management system for handling tender-related data, bid management, shipments, and filtered reporting workflows.",

  technologies: [
    "Laravel",
    "MySQL",
    "Algolia",
    "REST APIs",
    "DataTables",
    "Excel Export",
  ],

  contributions: [
    "A–T data search",
    "Algolia-based search",
    "Bid management",
    "Shipment management",
    "Advanced filtering",
    "Reports",
    "XLS export",
    "CRUD workflows",
  ],

  architecture: {
    title: "Search-driven enterprise workflow",
    description:
      "Built and improved an existing enterprise workflow system with searchable tender data, bid and shipment management, and report generation with multiple filtering options.",
    results: [
      "Category-based A–Z data search",
      "Algolia-powered search",
      "Bid management workflows",
      "Shipment management",
      "Filtered reporting with XLS export",
    ],
  },

  gallery: [
    {
      src: "/images/pak-railways/dashboard.png",
      alt: "Pak Railways tender dashboard with A-T search",
    },
    {
      src: "/images/pak-railways/bids.png",
      alt: "Pak Railways bid management list",
    },
    {
      src: "/images/pak-railways/shipments.png",
      alt: "Pak Railways shipment management",
    },
    {
      src: "/images/pak-railways/reports.png",
      alt: "Pak Railways filtered reports with XLS export",
    },
  ],
};

export const doorToDoor = {
  number: "05",
  title: "Door to Door",
  category: "Single-Vendor E-commerce Platform",

  description:
    "A Canada-focused single-vendor e-commerce platform built around product browsing, category-based filtering, authentication, and online shopping workflows.",

  technologies: [
    "Laravel",
    "Blade",
    "MySQL",
    "REST APIs",
    "Queues",
  ],

  contributions: [
    "Product management",
    "Category filtering",
    "Product listing",
    "Authentication",
    "E-commerce workflows",
    "Backend development",
    "Blade frontend",
  ],

  architecture: {
    title: "Single-vendor e-commerce implementation",
    description:
      "A single-vendor implementation following a similar e-commerce foundation to Mallshark, adapted specifically for the Canadian market.",
    results: [
      "Single-vendor architecture",
      "Canada-focused implementation",
      "Blade-based frontend",
      "Category and product filtering",
      "Integrated e-commerce workflows",
    ],
  },

  gallery: [
    {
      src: "/images/door-to-door/home.png",
      alt: "Door to Door home page",
    },
    {
      src: "/images/door-to-door/login.png",
      alt: "Door to Door login page",
    },
    {
      src: "/images/door-to-door/products.png",
      alt: "Door to Door products listing",
    },
    {
      src: "/images/door-to-door/filters.png",
      alt: "Door to Door category and product filters",
    },
  ],
};
