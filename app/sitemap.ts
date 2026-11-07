export const dynamic = "force-static";

import type { MetadataRoute } from "next";

const BASE_URL = "https://atocem.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", changeFrequency: "yearly" as const, priority: 1 },
  ];

  const currentDate = new Date();

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
