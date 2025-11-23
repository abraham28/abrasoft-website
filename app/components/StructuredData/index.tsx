import React from "react";
import {
  OFFICIAL_DOMAIN_URL,
  EMAIL_ADDRESS,
  CONTACT_NUMBER,
} from "@/app/constants";

interface StructuredDataProps {
  type: "organization" | "website" | "faq" | "breadcrumb" | "software";
  data?: Record<string, unknown>;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const getStructuredData = () => {
    switch (type) {
      case "organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Abrasoft",
          url: OFFICIAL_DOMAIN_URL,
          logo: `${OFFICIAL_DOMAIN_URL}android-chrome-512x512.png`,
          description:
            "Abrasoft offers powerful Software-as-a-Service (SaaS) solutions through subscription. Access cutting-edge business tools and applications designed to streamline operations and drive growth.",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: CONTACT_NUMBER,
            contactType: "Customer Service",
            email: EMAIL_ADDRESS,
            availableLanguage: "English",
          },
          sameAs: [],
        };

      case "website":
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Abrasoft",
          url: OFFICIAL_DOMAIN_URL,
          description:
            "Abrasoft offers powerful Software-as-a-Service (SaaS) solutions through subscription. Access cutting-edge business tools and applications designed to streamline operations and drive growth.",
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${OFFICIAL_DOMAIN_URL}?q={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
          },
        };

      case "faq":
        if (!data?.faqs) return null;
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: (
            data.faqs as Array<{ question: string; answer: string }>
          ).map((faq: { question: string; answer: string }) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        };

      case "breadcrumb":
        if (!data?.items) return null;
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: (
            data.items as Array<{ name: string; url: string }>
          ).map((item: { name: string; url: string }, index: number) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        };

      case "software": {
        if (!data?.software) return null;
        const software = data.software as {
          name: string;
          rating?: { value: number; count: number };
        };
        return {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: software.name,
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web Browser",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
          ...(software.rating && {
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: software.rating.value,
              ratingCount: software.rating.count,
            },
          }),
        };
      }

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
