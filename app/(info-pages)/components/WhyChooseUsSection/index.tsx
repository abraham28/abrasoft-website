"use client";
import React from "react";
import { Container } from "react-bootstrap";
import styles from "./WhyChooseUsSection.module.scss";

interface Reason {
  title: string;
  description: string;
}

const reasons: Reason[] = [
  {
    title: "Innovation First",
    description:
      "We stay ahead of the curve with cutting-edge technology and continuous innovation in our SaaS platforms.",
  },
  {
    title: "User-Centric Design",
    description:
      "Our applications are built with your experience in mind - intuitive, easy to use, and designed for productivity.",
  },
  {
    title: "Dedicated Support",
    description:
      "Get the help you need when you need it. Our support team is committed to your success and satisfaction.",
  },
  {
    title: "Affordable & Flexible",
    description:
      "No large upfront costs or hidden fees. Our subscription-based model offers flexible pricing that scales with your business needs.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.header}>
          <h2>Why Choose Abrasoft?</h2>
          <p>
            We&apos;re committed to providing SaaS solutions that make a real
            difference for your business.
          </p>
        </div>

        <div className={styles.reasonsGrid}>
          {reasons.map((reason, index) => (
            <div key={index} className={styles.reasonCard}>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUsSection;
