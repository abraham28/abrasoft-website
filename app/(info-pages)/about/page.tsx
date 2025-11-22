import React from "react";
import { FunctionComponent } from "react";
import type { Metadata } from "next";
import AboutValues from "./components/AboutValues";
import AboutMissionVision from "./components/AboutMissionVision";
import AboutIntro from "./components/AboutIntro";
import { OFFICIAL_DOMAIN_URL, ABOUT_ROUTE } from "../../constants";

export const metadata: Metadata = {
  title: "About Us | Abrasoft - Software Development Experts",
  description:
    "Learn about Abrasoft's mission, vision, and values. We are dedicated to turning ideas into reality through innovative software solutions for businesses across industries.",
  alternates: {
    canonical: `${OFFICIAL_DOMAIN_URL}${ABOUT_ROUTE.slice(1)}`,
  },
  openGraph: {
    title: "About Us | Abrasoft - Software Development Experts",
    description:
      "Learn about Abrasoft's mission, vision, and values. We are dedicated to turning ideas into reality through innovative software solutions.",
    url: `${OFFICIAL_DOMAIN_URL}${ABOUT_ROUTE.slice(1)}`,
    siteName: "Abrasoft",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Abrasoft - Software Development Experts",
    description:
      "Learn about Abrasoft's mission, vision, and values. We are dedicated to turning ideas into reality through innovative software solutions.",
  },
};

const AboutUs: FunctionComponent = () => {
  return (
    <>
      <AboutIntro />
      <AboutValues />
      <AboutMissionVision />
    </>
  );
};

export default AboutUs;
