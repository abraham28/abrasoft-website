"use client";
import React from "react";
import { Container } from "react-bootstrap";
import styles from "./CompanyValuesSection.module.scss";

interface Value {
  title: string;
  description: string;
}

const values: Value[] = [
  {
    title: "Innovation",
    description:
      "At the core of our identity is a commitment to innovation. We prioritize staying on the cutting edge of technological trends by fostering a culture of continuous learning. Regular participation in conferences and collaboration with key technology partners ensures that our team is well-equipped to deliver solutions that are not just current but anticipate future industry advancements.",
  },
  {
    title: "Integrity",
    description:
      "Integrity is a foundational principle that shapes our interactions, both internally and externally. We believe in transparent communication, honesty, and ethical practices. This commitment to integrity establishes trust with our clients and within our team. Upholding ethical standards is non-negotiable, ensuring that every aspect of our work is conducted with the highest level of integrity.",
  },
  {
    title: "Flexibility",
    description:
      "Our company values the well-being of our team members, emphasizing flexibility and a healthy work-life balance. We operate on a flexible timetable, allowing for breaks and encouraging a sustainable work culture. Weekends are reserved for rejuvenation, fostering a positive environment that enables our team to bring their best to every project.",
  },
  {
    title: "Client Satisfaction",
    description:
      "Client satisfaction is paramount in our approach. We go beyond meeting expectations; we proactively offer recommendations for improvement and continuously enhance our SaaS offerings based on user feedback. This dedication to continuous enhancement showcases our problem-solving capabilities and underscores our commitment to long-term client success.",
  },
];

const CompanyValuesSection = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.header}>
          <h2>Our Core Values</h2>
          <p>
            These values guide everything we do and shape how we serve our
            clients.
          </p>
        </div>

        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CompanyValuesSection;
