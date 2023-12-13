import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://abrasoft.com/",
      lastModified: new Date("2023-11-17T01:23:23+00:00"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://abrasoft.com/about",
      lastModified: new Date("2023-11-17T01:23:23+00:00"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://abrasoft.com/contact-us",
      lastModified: new Date("2023-11-17T01:23:23+00:00"),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];
}
