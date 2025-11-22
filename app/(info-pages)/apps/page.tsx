import React from "react";
import type { Metadata } from "next";
import { OFFICIAL_DOMAIN_URL, APPS_ROUTE } from "../../constants";
import AppsShowcase from "./components/AppsShowcase";

export const metadata: Metadata = {
  title: "Our Apps | Abrasoft - SaaS Solutions",
  description:
    "Explore Abrasoft's suite of SaaS applications. Access powerful business management tools including accounting software, inventory systems, POS, and HOA management through subscription.",
  alternates: {
    canonical: `${OFFICIAL_DOMAIN_URL}${APPS_ROUTE.slice(1)}`,
  },
  openGraph: {
    title: "Our Apps | Abrasoft - SaaS Solutions",
    description:
      "Explore Abrasoft's suite of SaaS applications. Access powerful business management tools through subscription.",
    url: `${OFFICIAL_DOMAIN_URL}${APPS_ROUTE.slice(1)}`,
    siteName: "Abrasoft",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Apps | Abrasoft - SaaS Solutions",
    description:
      "Explore Abrasoft's suite of SaaS applications. Access powerful business management tools through subscription.",
  },
};

const AppsPage = () => {
  return <AppsShowcase />;
};

export default AppsPage;
