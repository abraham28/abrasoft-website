"use client";
import React from "react";
import { Container } from "react-bootstrap";
import styles from "./FeaturesSection.module.scss";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: "Cloud-Based Access",
    description:
      "Access your business tools from anywhere, anytime. No installation required - just log in and start working.",
    icon: "☁️",
  },
  {
    title: "Scalable Solutions",
    description:
      "Grow your business without worrying about software limitations. Our SaaS solutions scale with your needs.",
    icon: "📈",
  },
  {
    title: "Regular Updates",
    description:
      "Always have the latest features and improvements. We continuously update our platforms to serve you better.",
    icon: "🔄",
  },
  {
    title: "Cost-Effective",
    description:
      "Pay only for what you need with flexible subscription plans. No large upfront costs or hidden fees.",
    icon: "💰",
  },
  {
    title: "Secure & Reliable",
    description:
      "Your data is protected with enterprise-grade security. We ensure 99.9% uptime for uninterrupted operations.",
    icon: "🔒",
  },
  {
    title: "Easy Integration",
    description:
      "Seamlessly integrate with your existing workflows. Our platforms work with the tools you already use.",
    icon: "🔗",
  },
];

const FeaturesSection = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.header}>
          <h2>Why Choose SaaS Solutions?</h2>
          <p>
            Discover the benefits of cloud-based software that transforms how
            you manage your business.
          </p>
        </div>

        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturesSection;
