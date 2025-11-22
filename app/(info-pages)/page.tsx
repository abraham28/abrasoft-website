import React from "react";
import type { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ClientsSection from "./components/ClientsSection";
import { OFFICIAL_DOMAIN_URL } from "../constants";

export const metadata: Metadata = {
  title:
    "Abrasoft | Elevating Businesses Through Innovative Software Solutions",
  description:
    "Abrasoft specializes in cutting-edge software development services, crafting solutions that propel businesses forward. Explore our expertise in custom web and application development for unparalleled digital experiences.",
  alternates: {
    canonical: OFFICIAL_DOMAIN_URL,
  },
  openGraph: {
    title:
      "Abrasoft | Elevating Businesses Through Innovative Software Solutions",
    description:
      "Abrasoft specializes in cutting-edge software development services, crafting solutions that propel businesses forward. Explore our expertise in custom web and application development for unparalleled digital experiences.",
    url: OFFICIAL_DOMAIN_URL,
    siteName: "Abrasoft",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Abrasoft | Elevating Businesses Through Innovative Software Solutions",
    description:
      "Abrasoft specializes in cutting-edge software development services, crafting solutions that propel businesses forward.",
  },
};

const Page = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ClientsSection />
    </>
  );
};

export default Page;
