"use client";
import React from "react";
import { Container } from "react-bootstrap";
import styles from "./StatisticsSection.module.scss";

interface Stat {
  value: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  {
    value: "85%",
    label: "Cost Reduction",
    description:
      "Businesses using cloud-based software report significant cost savings compared to traditional solutions.",
  },
  {
    value: "3x",
    label: "Faster Deployment",
    description:
      "Cloud SaaS solutions can be deployed up to 3 times faster than on-premise software installations.",
  },
  {
    value: "99.9%",
    label: "Uptime",
    description:
      "Cloud-based platforms offer superior reliability with industry-standard uptime guarantees.",
  },
  {
    value: "50%",
    label: "Productivity Boost",
    description:
      "Studies show that cloud software can increase team productivity by up to 50% through better collaboration.",
  },
];

const StatisticsSection = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.header}>
          <h2>The Power of Cloud-Based Software</h2>
          <p>
            Industry research shows the measurable benefits of adopting SaaS
            solutions for your business.
          </p>
        </div>

        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statValue}>{stat.value}</div>
              <h3>{stat.label}</h3>
              <p>{stat.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StatisticsSection;
