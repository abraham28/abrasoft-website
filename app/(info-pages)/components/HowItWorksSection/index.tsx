"use client";
import React from "react";
import { Container } from "react-bootstrap";
import styles from "./HowItWorksSection.module.scss";

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "1",
    title: "Choose Your App",
    description:
      "Browse our suite of SaaS applications and select the tools that best fit your business needs.",
  },
  {
    number: "2",
    title: "Subscribe",
    description:
      "Select a subscription plan that works for you. Flexible pricing with no long-term commitments required.",
  },
  {
    number: "3",
    title: "Start Using",
    description:
      "Access your chosen application immediately. No installation, no setup - just log in and begin.",
  },
  {
    number: "4",
    title: "Scale & Grow",
    description:
      "As your business grows, easily upgrade your plan or add more applications to your subscription.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.header}>
          <h2>How It Works</h2>
          <p>
            Getting started with our SaaS solutions is simple and
            straightforward.
          </p>
        </div>

        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepContent}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className={styles.connector} aria-hidden="true">
                  <div className={styles.line}></div>
                  <div className={styles.arrow}>↓</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorksSection;
