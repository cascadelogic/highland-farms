import type { MetadataRoute } from "next";

const BASE_URL = "https://highlandfarmsoregon.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/weddings", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/farm-tours", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/nordic-spa", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/stay", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/stay/lodge", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/stay/cottage", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/stay/camp", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/stay/whole-farm", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/celebrations", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/shop", priority: 0.5, changeFrequency: "weekly" as const },
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
