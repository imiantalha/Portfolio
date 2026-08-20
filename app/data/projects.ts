export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  contributions: string[];
  architecture?: {
    title: string;
    description: string;
    results: string[];
  };
  gallery: ProjectImage[];
};

export const mallshark: Project = {
  number: "01",
  title: "Mallshark",
  category: "Multi-Vendor E-commerce Marketplace",

  description:
    "A production multi-vendor e-commerce marketplace covering vendors, customers, products, orders, shipping, payments, search, analytics, notifications, and mobile-facing APIs.",

  technologies: [
    "PHP",
    "Laravel",
    "MySQL",
    "REST APIs",
    "Stripe",
    "PayPal",
    "Crypto.com",
    "Algolia",
    "Meilisearch",
    "Queues",
    "Webhooks",
  ],

  contributions: [
    "Multi-vendor marketplace workflows",
    "Product and order management",
    "Order processing",
    "Shipping integrations",
    "Queue-based batch updates",
    "Mobile-facing APIs",
    "Stripe, PayPal and Crypto.com integrations",
    "Search and search optimization",
    "Analytics",
    "Notifications",
    "Background jobs",
    "Multi-warehouse inventory workflows",
    "Customer and origin-based pricing",
    "MySQL and external MS SQL integration",
  ],

  architecture: {
    title: "Production-scale marketplace engineering",
    description:
      "Worked across core marketplace workflows and integrations, contributing to the development and delivery of a system handling large-scale customer, vendor, order, inventory and API workloads.",

    results: [
      "200+ vendors",
      "1M+ customers",
      "Thousands of orders",
      "Large production database",
      "1M+ API users",
      "Multiple warehouses across the Middle East",
      "Customer and origin-based pricing",
      "MySQL for core application data linked with MS SQL for stock and customer data",
    ],
  },

  gallery: [
    {
      src: "/images/mallshark/explore.png",
      alt: "Mallshark explore",
    },
    {
      src: "/images/mallshark/product.png",
      alt: "Mallshark products",
    },
    {
      src: "/images/mallshark/checkout.png",
      alt: "Mallshark checkout",
    },
    {
      src: "/images/mallshark/seller-center.png",
      alt: "Mallshark seller center",
    },
  ],
};

export const textileSouk: Project = {
  number: "02",
  title: "Textile Souk",
  category: "B2B Textile Marketplace",

  description:
    "A B2B textile marketplace covering products, orders, enquiries, shipments, cargo management, notifications, analytics, and integrations with external business systems.",

  technologies: [
    "PHP",
    "Laravel",
    "MySQL",
    "MS SQL",
    "REST APIs",
    "Firebase",
    "FCM",
    "Queues",
    "Notifications",
  ],

  contributions: [
    "Product management",
    "Order management",
    "Enquiry workflows",
    "Shipment management",
    "Cargo management",
    "Analytics",
    "REST APIs",
    "Firebase push notifications",
    "External database integration",
    "Customer and stock data workflows",
  ],

  architecture: {
    title: "B2B marketplace with external data integration",
    description:
      "Worked across marketplace workflows and integrations connecting application data with external stock and customer systems.",

    results: [
      "B2B product and order workflows",
      "Order and enquiry management",
      "Shipment and cargo workflows",
      "MySQL application data",
      "MS SQL integration for external business data",
      "Firebase push notifications",
      "REST APIs for application clients",
    ],
  },

  gallery: [
    {
      src: "/images/textile-souk/dashboard.png",
      alt: "Textile Souk dashboard",
    },
    {
      src: "/images/textile-souk/products.png",
      alt: "Textile Souk products",
    },
    {
      src: "/images/textile-souk/brands.png",
      alt: "Textile Souk brands",
    },
    {
      src: "/images/textile-souk/stock.png",
      alt: "Textile Souk stock transfer",
    },
  ],
};

export const ems: Project = {
  number: "03",
  title: "Employee Management System",
  category: "HR & Employee Management",

  description:
    "An employee management platform covering attendance, leave management, role-based access control, APIs, and a modern application interface.",

  technologies: [
    "Laravel",
    "PHP",
    "Next.js",
    "React",
    "REST APIs",
    "RBAC",
    "MySQL",
  ],

  contributions: [
    "Attendance management",
    "Leave management",
    "Role-based access control",
    "REST API development",
    "API-to-UI integration",
    "Frontend development",
    "Client-facing workflows",
  ],

  architecture: {
    title: "API-driven employee management platform",
    description:
      "Worked across backend APIs and the application interface to deliver employee management workflows from the API layer through to the user interface.",

    results: [
      "Attendance management",
      "Leave management",
      "Role-based access control",
      "REST APIs",
      "API-to-UI integration",
    ],
  },

  gallery: [
    {
      src: "/images/ems/dashboard.png",
      alt: "Employee management system dashboard",
    },
  ],
};

export const pakRailways: Project = {
  number: "04",
  title: "Pak Railways Tender Workflow Management System",
  category: "Enterprise Workflow Management",

  description:
    "An enterprise tender workflow system covering tender search, bid management, shipments, reports, filtering, DataTables, and Excel-based reporting.",

  technologies: [
    "Laravel",
    "PHP",
    "MySQL",
    "REST APIs",
    "Algolia",
    "DataTables",
    "Excel Export",
    "RBAC",
  ],

  contributions: [
    "Tender dashboard",
    "A-T data search",
    "Category-based search",
    "Bid management",
    "Order history",
    "Shipment management",
    "Reports",
    "Advanced filters",
    "DataTables",
    "Excel exports",
    "CRUD workflows",
    "UI improvements",
  ],

  architecture: {
    title: "Search-driven enterprise workflow",
    description:
      "Worked on an existing enterprise system by implementing improvements across tender search, bid workflows, data tables, reporting and CRUD operations.",

    results: [
      "Category-based A-T search",
      "Bid management workflows",
      "Shipment management",
      "Filtered reporting",
      "Excel report exports",
      "Search and CRUD workflows on the same page",
    ],
  },

  gallery: [
    {
      src: "/images/pak-railways/dashboard.png",
      alt: "Pak Railways tender workflow dashboard",
    },
  ],
};

export const doorToDoor: Project = {
  number: "05",
  title: "Door to Door / Fresco Canada",
  category: "Canada-Focused Single-Vendor E-commerce",

  description:
    "A Canada-focused single-vendor e-commerce implementation covering the storefront, authentication, product browsing, categories, and filtered product discovery.",

  technologies: [
    "Laravel",
    "PHP",
    "Blade",
    "MySQL",
    "REST APIs",
    "E-commerce",
  ],

  contributions: [
    "Home/dashboard interface",
    "Authentication",
    "Product listing",
    "Product categories",
    "Sidebar category filters",
    "Product browsing workflows",
    "Backend integration",
  ],

  architecture: {
    title: "Single-vendor e-commerce platform",
    description:
      "A single-vendor implementation following the same core e-commerce pattern as Mallshark, adapted specifically for the Canadian market.",

    results: [
      "Single-vendor architecture",
      "Blade-based frontend",
      "Product catalogue",
      "Category filtering",
      "Authentication",
      "Canada-focused implementation",
    ],
  },

  gallery: [
    {
      src: "/images/door-to-door/home.png",
      alt: "Door to Door e-commerce homepage",
    },
  ],
};

export const featuredProjects: Project[] = [
  mallshark,
  textileSouk,
];

export const otherProjects: Project[] = [
  ems,
  pakRailways,
  doorToDoor,
];

export const projects: Project[] = [
  mallshark,
  textileSouk,
  ems,
  pakRailways,
  doorToDoor,
];