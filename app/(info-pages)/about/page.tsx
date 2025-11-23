import React from "react";
import { FunctionComponent } from "react";
import type { Metadata } from "next";
import AboutValues from "./components/AboutValues";
import AboutMissionVision from "./components/AboutMissionVision";
import AboutIntro from "./components/AboutIntro";
import { OFFICIAL_DOMAIN_URL, ABOUT_ROUTE, HOME_ROUTE } from "../../constants";
import StructuredData from "@/app/components/StructuredData";

export const metadata: Metadata = {
  title: "About Us | Abrasoft - SaaS Solutions Provider",
  description:
    "Learn about Abrasoft's mission, vision, and values. We are a SaaS company dedicated to providing innovative subscription-based software solutions for businesses across industries. Discover our commitment to innovation, integrity, and client satisfaction.",
  keywords: [
    "about Abrasoft",
    "SaaS company",
    "software solutions provider",
    "business software company",
    "cloud-based solutions",
  ],
  alternates: {
    canonical: `${OFFICIAL_DOMAIN_URL}${ABOUT_ROUTE.slice(1)}`,
  },
  openGraph: {
    title: "About Us | Abrasoft - SaaS Solutions Provider",
    description:
      "Learn about Abrasoft's mission, vision, and values. We are a SaaS company dedicated to providing innovative subscription-based software solutions.",
    url: `${OFFICIAL_DOMAIN_URL}${ABOUT_ROUTE.slice(1)}`,
    siteName: "Abrasoft",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${OFFICIAL_DOMAIN_URL}og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "About Abrasoft - SaaS Solutions Provider",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Abrasoft - SaaS Solutions Provider",
    description:
      "Learn about Abrasoft's mission, vision, and values. We are a SaaS company dedicated to providing innovative subscription-based software solutions.",
    images: [`${OFFICIAL_DOMAIN_URL}og-image.jpg`],
  },
};

const AboutUs: FunctionComponent = () => {
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
              name: "About Us",
              url: `${OFFICIAL_DOMAIN_URL}${ABOUT_ROUTE.slice(1)}`,
            },
          ],
        }}
      />
      <AboutIntro />
      <AboutValues />
      <AboutMissionVision />
    </>
  );
};

export default AboutUs;
