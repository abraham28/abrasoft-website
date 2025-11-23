import { MetadataRoute } from "next";
import { OFFICIAL_DOMAIN_URL, ABOUT_ROUTE, APPS_ROUTE } from "./constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  return [
    {
      url: OFFICIAL_DOMAIN_URL,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${OFFICIAL_DOMAIN_URL}${ABOUT_ROUTE.slice(1)}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${OFFICIAL_DOMAIN_URL}${APPS_ROUTE.slice(1)}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
