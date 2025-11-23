import React from "react";
import type { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import AppsSection from "./components/AppsSection";
import HowItWorksSection from "./components/HowItWorksSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import StatisticsSection from "./components/StatisticsSection";
import TrustSecuritySection from "./components/TrustSecuritySection";
import CompanyValuesSection from "./components/CompanyValuesSection";
import FAQSection from "./components/FAQSection";
import { OFFICIAL_DOMAIN_URL } from "../constants";

export const metadata: Metadata = {
  title: "Abrasoft | Elevating Businesses Through Innovative SaaS Solutions",
  description:
    "Abrasoft offers powerful Software-as-a-Service (SaaS) solutions through subscription. Access cutting-edge business tools including accounting software, inventory systems, POS, and HOA management. Streamline operations, reduce costs, and scale your business with cloud-based applications.",
  keywords: [
    "SaaS solutions",
    "business software",
    "cloud-based applications",
    "accounting software",
    "inventory management",
    "POS system",
    "HOA management",
    "subscription software",
    "enterprise SaaS",
    "business management tools",
  ],
  alternates: {
    canonical: OFFICIAL_DOMAIN_URL,
  },
  openGraph: {
    title: "Abrasoft | Elevating Businesses Through Innovative SaaS Solutions",
    description:
      "Abrasoft offers powerful Software-as-a-Service (SaaS) solutions through subscription. Access cutting-edge business tools including accounting software, inventory systems, POS, and HOA management.",
    url: OFFICIAL_DOMAIN_URL,
    siteName: "Abrasoft",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${OFFICIAL_DOMAIN_URL}og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Abrasoft - SaaS Solutions for Your Business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abrasoft | Elevating Businesses Through Innovative SaaS Solutions",
    description:
      "Abrasoft offers powerful Software-as-a-Service (SaaS) solutions through subscription. Access cutting-edge business tools and applications.",
    images: [`${OFFICIAL_DOMAIN_URL}og-image.jpg`],
  },
};

const Page = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <AppsSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <StatisticsSection />
      <TrustSecuritySection />
      <CompanyValuesSection />
      <FAQSection />
    </>
  );
};

export default Page;
