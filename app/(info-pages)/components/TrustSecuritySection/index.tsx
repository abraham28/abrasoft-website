"use client";
import React from "react";
import { Container } from "react-bootstrap";
import styles from "./TrustSecuritySection.module.scss";

interface SecurityFeature {
  title: string;
  description: string;
}

const securityFeatures: SecurityFeature[] = [
  {
    title: "Data Encryption",
    description:
      "All data is encrypted in transit and at rest using industry-standard encryption protocols to protect your sensitive information.",
  },
  {
    title: "Regular Backups",
    description:
      "Automated daily backups ensure your data is safe and can be restored quickly in case of any unexpected events.",
  },
  {
    title: "Access Controls",
    description:
      "Granular permission settings allow you to control who has access to what, ensuring data security and compliance.",
  },
  {
    title: "Compliance Ready",
    description:
      "Our platforms are designed with compliance in mind, helping you meet industry standards and regulatory requirements.",
  },
];

const TrustSecuritySection = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.header}>
          <h2>Trust & Security</h2>
          <p>
            Your data security and privacy are our top priorities. We implement
            enterprise-grade security measures to protect your business.
          </p>
        </div>

        <div className={styles.securityGrid}>
          {securityFeatures.map((feature, index) => (
            <div key={index} className={styles.securityCard}>
              <div className={styles.icon}>🔐</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TrustSecuritySection;
