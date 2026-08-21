export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  role: string;
  technologies: string[];
  contributions: string[];
  architecture?: {
    title: string;
    description: string;
    results: string[];
  };
  challenges?: {
    title: string;
    description: string;
    approach: string[];
  }[];
  impact?: {
    title: string;
    description: string;
  };
  gallery: ProjectImage[];
};

export const mallshark: Project = {
  number: "01",
  title: "Mallshark",
  category: "Multi-Vendor E-commerce Marketplace",
  description:
    "A production multi-vendor e-commerce marketplace covering vendors, customers, products, orders, checkout, payments, shipping, search, notifications, inventory, reporting, and mobile-facing APIs.",
  role: "Backend / Full-Stack Software Engineer",
  technologies: [
    "PHP",
    "Laravel",
    "MySQL",
    "Laravel Passport",
    "REST APIs",
    "Stripe",
    "PayPal",
    "Crypto.com",
    "FedEx",
    "DHL",
    "USPS",
    "ShipStation",
    "Algolia",
    "Meilisearch",
    "Firebase / FCM",
    "Queues & Jobs",
  ],
  contributions: [
    "Product, vendor, customer, order, checkout, and multi-vendor workflows",
    "Payment integrations with Stripe, PayPal, and Crypto.com",
    "Shipping integrations with FedEx, DHL, USPS, and ShipStation",
    "Shipment creation, label generation, and tracking URL workflows",
    "Versioned mobile-facing APIs across v1, v2, and v3",
    "Firebase notifications and webhook processing",
    "Queue-based background jobs and CSV bulk product / stock processing",
    "Caching and asynchronous processing workflows",
    "Multi-warehouse inventory workflows across the Middle East",
    "Customer- and origin-based pricing workflows",
    "MySQL integration with an external MS SQL system",
  ],
  architecture: {
    title: "Production-scale marketplace engineering",
    description:
      "Contributed to a production marketplace with multiple business domains, external integrations, versioned APIs, asynchronous processing, and data exchanged between MySQL and an external MS SQL system.",
    results: [
      "200+ vendors",
      "1M+ customers",
      "1M+ API users",
      "Thousands of orders",
      "6K+ products",
      "Large production database",
      "Multiple warehouses across the Middle East",
      "Laravel Passport authentication",
      "API versions v1, v2, and v3",
    ],
  },
  challenges: [
    {
      title: "Algolia → self-hosted Meilisearch migration",
      description:
        "The existing production search implementation used Algolia. I migrated the search system to self-hosted Meilisearch to remove the third-party search dependency while maintaining the application's search functionality.",
      approach: [
        "Replaced the production search dependency with self-hosted Meilisearch",
        "Migrated the application search integration and product search workflow",
        "Removed approximately $100/month in recurring search cost",
      ],
    },
    {
      title: "Multi-carrier shipping integrations",
      description:
        "The marketplace needed to work with multiple shipping authorities and services rather than relying on a single carrier integration.",
      approach: [
        "Integrated FedEx, DHL, USPS, and ShipStation",
        "Implemented shipment creation and label generation workflows",
        "Supported tracking URLs across carrier integrations",
      ],
    },
    {
      title: "Multi-database business workflows",
      description:
        "Core application data lived in MySQL while stock and customer-related information also came from an external MS SQL system.",
      approach: [
        "Connected application workflows across MySQL and MS SQL",
        "Integrated stock and customer data into marketplace operations",
        "Handled business workflows spanning different data sources",
      ],
    },
  ],
  impact: {
    title: "A measurable infrastructure decision",
    description:
      "The Algolia-to-Meilisearch migration removed approximately $100/month in recurring search cost without claiming an unmeasured performance improvement.",
  },
  gallery: [
    { src: "/images/mallshark/explore.png", alt: "Mallshark product exploration interface" },
    { src: "/images/mallshark/product.png", alt: "Mallshark product management interface" },
    { src: "/images/mallshark/checkout.png", alt: "Mallshark checkout interface" },
    { src: "/images/mallshark/seller-center.png", alt: "Mallshark seller center interface" },
  ],
};

export const textileSouk: Project = {
  number: "02",
  title: "Textile Souk",
  category: "B2B Textile Marketplace · API-First Backend",
  description:
    "Built from scratch as an API-first backend for a mobile application, covering products, orders, inquiries, shipments, cargo management, stock, warehouse transfers, notifications, reports, and external business data.",
  role: "Backend Engineer",
  technologies: [
    "PHP",
    "Laravel",
    "MySQL",
    "MS SQL Server",
    "REST APIs",
    "Firebase / FCM",
  ],
  contributions: [
    "Built the backend and REST API system from scratch for mobile clients",
    "Product and order management",
    "Inquiry workflows",
    "Shipment and cargo management",
    "Stock management and stock transfers between warehouses",
    "Firebase / FCM push notifications",
    "Reports and business workflows",
    "External stock and pricing data integration through MS SQL Server",
    "Customer-based and region-based pricing workflows",
  ],
  architecture: {
    title: "Two-database architecture driven by business data",
    description:
      "The application used MySQL for its primary application and workflow records while integrating with MS SQL Server for external stock and pricing data. The separation reflected the business domain: stock and customer / region-specific pricing were maintained in the external system and consumed by the application.",
    results: [
      "Backend built from scratch for a mobile application",
      "MySQL for core application records and business workflows",
      "MS SQL Server for external stock and pricing information",
      "Customer- and region-specific pricing workflows",
      "Warehouse stock transfer workflows",
      "REST API-first architecture",
      "Firebase / FCM push notifications",
    ],
  },
  challenges: [
    {
      title: "Customer- and region-specific pricing",
      description:
        "Pricing was not simply a single catalogue value. The application needed to use pricing information associated with customers and regions from the external business data system.",
      approach: [
        "Integrated the application with the external MS SQL pricing data",
        "Connected customer and regional context to pricing workflows",
        "Kept application workflows aligned with external stock and pricing information",
      ],
    },
    {
      title: "API-first mobile backend",
      description:
        "There was no traditional web frontend for the product. The backend was designed around REST APIs consumed by the mobile application.",
      approach: [
        "Built API endpoints around core marketplace workflows",
        "Structured product, order, shipment, stock, and notification operations for mobile clients",
        "Implemented backend business logic independently of a traditional web UI",
      ],
    },
  ],
  impact: {
    title: "A backend built around the mobile product",
    description:
      "The system was built from scratch as the API layer for a mobile application, with application data and external stock/pricing data connected through a deliberate two-database architecture.",
  },
  gallery: [
    { src: "/images/textile-souk/dashboard.png", alt: "Textile Souk dashboard" },
    { src: "/images/textile-souk/products.png", alt: "Textile Souk products interface" },
    { src: "/images/textile-souk/brands.png", alt: "Textile Souk brands interface" },
    { src: "/images/textile-souk/stock.png", alt: "Textile Souk stock transfer interface" },
  ],
};

export const ems: Project = {
  number: "03",
  title: "Employee Management System",
  category: "HR & Employee Management",
  description:
    "An HR platform covering attendance, leave management, employee workflows, role-based access control, REST APIs, and a modern Next.js / React interface.",
  role: "Backend / Full-Stack Software Engineer",
  technologies: [
    "Laravel",
    "PHP",
    "Next.js",
    "React",
    "REST APIs",
    "Laravel Sanctum",
    "RBAC",
    "MySQL",
  ],
  contributions: [
    "Attendance and leave management workflows",
    "REST API development",
    "Laravel Sanctum authentication",
    "Role-based access control",
    "Next.js / React frontend integration",
    "Employee data and workflow updates",
    "Leave recalculation after significant employee data updates",
  ],
  architecture: {
    title: "API-driven HR application",
    description:
      "Worked across the Laravel API and Next.js / React interface, connecting backend business workflows with a modern application UI.",
    results: [
      "Laravel backend",
      "Next.js / React interface",
      "Laravel Sanctum authentication",
      "RBAC",
      "Attendance and leave workflows",
      "MySQL",
    ],
  },
  gallery: [
    { src: "/images/ems/dashboard.png", alt: "Employee management system dashboard" },
  ],
};

export const pakRailways: Project = {
  number: "04",
  title: "Pak Railways Tender Workflow Management System",
  category: "Enterprise Workflow Management",
  description:
    "An enterprise workflow system covering tenders, bids, orders, shipments, reporting, filters, imports/exports, and a unified dashboard search experience.",
  role: "Software Engineer",
  technologies: [
    "Laravel",
    "PHP",
    "MySQL",
    "Algolia",
    "DataTables",
    "Excel Imports / Exports",
    "RBAC",
  ],
  contributions: [
    "Unified dashboard search across relevant enterprise data",
    "Tender and bid management workflows",
    "Order and shipment workflows",
    "Advanced filters and DataTables",
    "Reports and Excel exports",
    "Excel imports and bulk addition workflows",
    "CRUD and enterprise data management",
  ],
  architecture: {
    title: "Unified search for enterprise workflows",
    description:
      "Instead of forcing users to navigate separate pages for different information types, dashboard search brought relevant orders, bids, shipments, and other enterprise data into one search experience.",
    results: [
      "Unified dashboard search",
      "Algolia-powered search",
      "Bid management",
      "Order and shipment workflows",
      "Filtered reporting",
      "Excel imports and exports",
    ],
  },
  gallery: [
    { src: "/images/pak-railways/dashboard.png", alt: "Pak Railways tender workflow dashboard" },
  ],
};

export const doorToDoor: Project = {
  number: "05",
  title: "Door to Door / Fresco Canada",
  category: "Canada-Focused Single-Vendor E-commerce",
  description:
    "A concise single-vendor e-commerce implementation using Laravel and Blade, covering authentication, product browsing, categories, filtering, and backend integration for a Canada-focused storefront.",
  role: "Software Engineer",
  technologies: ["Laravel", "PHP", "Blade", "MySQL", "E-commerce"],
  contributions: [
    "Authentication",
    "Product listing and catalogue workflows",
    "Category browsing and filtering",
    "Storefront and dashboard interfaces",
    "Backend integration",
  ],
  architecture: {
    title: "Single-vendor e-commerce implementation",
    description:
      "A single-vendor implementation following familiar e-commerce patterns while keeping the architecture and presentation focused on the Canada-focused storefront.",
    results: [
      "Single-vendor architecture",
      "Blade frontend",
      "Product catalogue",
      "Category filtering",
      "Authentication",
    ],
  },
  gallery: [
    { src: "/images/door-to-door/home.png", alt: "Door to Door e-commerce homepage" },
  ],
};

export const featuredProjects: Project[] = [mallshark, textileSouk];
export const otherProjects: Project[] = [ems, pakRailways, doorToDoor];
export const projects: Project[] = [mallshark, textileSouk, ems, pakRailways, doorToDoor];
