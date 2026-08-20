import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://github.com/imiantalha",
      lastModified: new Date(),
    },
    {
      url: "https://www.linkedin.com/in/imiantalha/",
      lastModified: new Date(),
    },
  ];
}