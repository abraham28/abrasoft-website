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
    "Abrasoft offers powerful Software-as-a-Service (SaaS) solutions through subscription. Access cutting-edge business tools and applications designed to streamline operations and drive growth.",
  alternates: {
    canonical: OFFICIAL_DOMAIN_URL,
  },
  openGraph: {
    title: "Abrasoft | Elevating Businesses Through Innovative SaaS Solutions",
    description:
      "Abrasoft offers powerful Software-as-a-Service (SaaS) solutions through subscription. Access cutting-edge business tools and applications designed to streamline operations and drive growth.",
    url: OFFICIAL_DOMAIN_URL,
    siteName: "Abrasoft",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abrasoft | Elevating Businesses Through Innovative SaaS Solutions",
    description:
      "Abrasoft offers powerful Software-as-a-Service (SaaS) solutions through subscription. Access cutting-edge business tools and applications.",
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
