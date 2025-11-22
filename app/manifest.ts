import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Abrasoft | Elevating Businesses Through Innovative SaaS Solutions",
    short_name: "Abrasoft",
    description:
      "Abrasoft offers powerful Software-as-a-Service (SaaS) solutions through subscription. Access cutting-edge business tools and applications designed to streamline operations and drive growth.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      { type: "image/x-icon", src: "/favicon.ico" },
      { type: "image/png", sizes: "16x16", src: "/favicon-16x16.png" },
      { type: "image/png", sizes: "32x32", src: "/favicon-32x32.png" },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
