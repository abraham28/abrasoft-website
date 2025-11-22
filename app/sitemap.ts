import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  return [
    {
      url: "https://abrasoft.com/",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://abrasoft.com/about",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
