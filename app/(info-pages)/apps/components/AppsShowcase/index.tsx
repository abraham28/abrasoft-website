"use client";
import React from "react";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { HOME_ROUTE } from "@/app/constants";
import styles from "./AppsShowcase.module.scss";

interface App {
  id: string;
  title: string;
  description: string;
  imgSrc: string;
  isActive: boolean;
  link?: string;
  features: string[];
}

const apps: App[] = [
  {
    id: "accounting",
    title: "Accounting Software",
    description:
      "Comprehensive accounting solution for managing your business finances. Track income, expenses, invoices, and generate financial reports with ease.",
    imgSrc: "/images/app-development.jpg",
    isActive: true,
    link: "https://books.abrasoft.com/login",
    features: [
      "Financial Reporting",
      "Invoice Management",
      "Expense Tracking",
      "Multi-User Access",
    ],
  },
  {
    id: "inventory",
    title: "Inventory System",
    description:
      "Streamline your inventory management with real-time tracking, automated alerts, and comprehensive reporting. Perfect for businesses of all sizes.",
    imgSrc: "/images/responsive-web-design.webp",
    isActive: false,
    features: [
      "Real-Time Tracking",
      "Automated Alerts",
      "Stock Management",
      "Analytics Dashboard",
    ],
  },
  {
    id: "pos",
    title: "Point of Sale (POS)",
    description:
      "Complete POS solution for retail businesses. Process sales, manage products, track inventory, and generate sales reports all in one platform.",
    imgSrc: "/images/game-development.jpg",
    isActive: false,
    features: [
      "Sales Processing",
      "Product Management",
      "Receipt Printing",
      "Sales Analytics",
    ],
  },
  {
    id: "hoa",
    title: "HOA Management System",
    description:
      "Comprehensive Homeowners Association management platform. Manage residents, payments, maintenance requests, and community communications efficiently.",
    imgSrc: "/images/app-development.jpg",
    isActive: false,
    features: [
      "Resident Management",
      "Payment Processing",
      "Maintenance Requests",
      "Communication Portal",
    ],
  },
];

const AppsShowcase = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.header}>
          <h1>Our SaaS Applications</h1>
          <p>
            Access powerful business management tools through subscription-based
            SaaS solutions. Choose the applications that best fit your business
            needs.
          </p>
        </div>

        <div className={styles.appsGrid}>
          {apps.map((app) => (
            <div
              key={app.id}
              className={`${styles.appCard} ${
                !app.isActive ? styles.comingSoon : ""
              }`}
            >
              <div className={styles.appImage}>
                <Image
                  src={app.imgSrc}
                  alt={`${app.title} illustration`}
                  height={300}
                  width={400}
                  className={styles.image}
                />
                {!app.isActive && (
                  <div className={styles.comingSoonBadge}>Coming Soon</div>
                )}
              </div>
              <div className={styles.appContent}>
                <h2>{app.title}</h2>
                <p>{app.description}</p>
                <ul className={styles.features}>
                  {app.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                {app.isActive && app.link ? (
                  <Button
                    variant="primary"
                    as="a"
                    href={app.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.appButton}
                  >
                    Open App
                  </Button>
                ) : (
                  <Button
                    variant="secondary"
                    disabled
                    className={styles.appButton}
                  >
                    Coming Soon
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <h2>Need More Information?</h2>
          <p>
            Learn more about our SaaS solutions and how they can help your
            business grow.
          </p>
          <Link href={HOME_ROUTE} className={styles.homeButtonLink}>
            <Button variant="primary" size="lg" className={styles.homeButton}>
              Back to Home
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default AppsShowcase;
