import React from "react";
import type { Metadata } from "next";
import { OFFICIAL_DOMAIN_URL, APPS_ROUTE, HOME_ROUTE } from "../../constants";
import AppsShowcase from "./components/AppsShowcase";
import StructuredData from "@/app/components/StructuredData";

export const metadata: Metadata = {
  title: "Our Apps | Abrasoft - SaaS Solutions",
  description:
    "Explore Abrasoft's suite of SaaS applications. Access powerful business management tools including accounting software, inventory systems, POS, and HOA management through subscription. Start your free trial today.",
  keywords: [
    "SaaS applications",
    "accounting software",
    "inventory management system",
    "POS system",
    "HOA management software",
    "business management tools",
    "cloud-based software",
    "subscription software",
  ],
  alternates: {
    canonical: `${OFFICIAL_DOMAIN_URL}${APPS_ROUTE.slice(1)}`,
  },
  openGraph: {
    title: "Our Apps | Abrasoft - SaaS Solutions",
    description:
      "Explore Abrasoft's suite of SaaS applications. Access powerful business management tools including accounting software, inventory systems, POS, and HOA management through subscription.",
    url: `${OFFICIAL_DOMAIN_URL}${APPS_ROUTE.slice(1)}`,
    siteName: "Abrasoft",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${OFFICIAL_DOMAIN_URL}og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Abrasoft SaaS Applications",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Apps | Abrasoft - SaaS Solutions",
    description:
      "Explore Abrasoft's suite of SaaS applications. Access powerful business management tools through subscription.",
    images: [`${OFFICIAL_DOMAIN_URL}og-image.jpg`],
  },
};

const AppsPage = () => {
  return (
    <>
      <StructuredData
        type="breadcrumb"
        data={{
          items: [
            {
              name: "Home",
              url: `${OFFICIAL_DOMAIN_URL}${
                HOME_ROUTE === "/" ? "" : (HOME_ROUTE as string).slice(1)
              }`,
            },
            {
              name: "Apps",
              url: `${OFFICIAL_DOMAIN_URL}${APPS_ROUTE.slice(1)}`,
            },
          ],
        }}
      />
      <AppsShowcase />
    </>
  );
};

export default AppsPage;
