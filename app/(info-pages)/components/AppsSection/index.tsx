"use client";
import React from "react";
import { Container, Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import styles from "./AppsSection.module.scss";
import { APPS_ROUTE } from "@/app/constants";

interface App {
  id: string;
  title: string;
  description: string;
  imgSrc: string;
  isActive: boolean;
}

const featuredApps: App[] = [
  {
    id: "accounting",
    title: "Accounting Software",
    description:
      "Comprehensive accounting solution for managing your business finances.",
    imgSrc: "/images/app-development.jpg",
    isActive: true,
  },
  {
    id: "inventory",
    title: "Inventory System",
    description:
      "Streamline your inventory management with real-time tracking and automated alerts.",
    imgSrc: "/images/responsive-web-design.webp",
    isActive: false,
  },
  {
    id: "pos",
    title: "Point of Sale (POS)",
    description:
      "Complete POS solution for retail businesses. Process sales and manage products.",
    imgSrc: "/images/game-development.jpg",
    isActive: false,
  },
  {
    id: "hoa",
    title: "HOA Management System",
    description:
      "Comprehensive Homeowners Association management platform for communities.",
    imgSrc: "/images/app-development.jpg",
    isActive: false,
  },
];

const AppsSection = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.header}>
          <h2>Our SaaS Applications</h2>
          <p>
            Access powerful business management tools through subscription-based
            SaaS solutions.
          </p>
        </div>

        <div className={styles.appsGrid}>
          {featuredApps.map((app) => (
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
                  height={200}
                  width={300}
                  className={styles.image}
                />
                {!app.isActive && (
                  <div className={styles.comingSoonBadge}>Coming Soon</div>
                )}
              </div>
              <div className={styles.appContent}>
                <h3>{app.title}</h3>
                <p>{app.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <Link href={APPS_ROUTE} className={styles.ctaButtonLink}>
            <Button variant="primary" size="lg">
              See all Apps
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default AppsSection;
