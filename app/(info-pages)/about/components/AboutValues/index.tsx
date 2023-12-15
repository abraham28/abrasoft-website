import React from "react";
import type { NextPage } from "next";
import styles from "./index.module.scss";
import { Container } from "react-bootstrap";

const AboutValues: NextPage = () => {
  return (
    <section className={styles.aboutvalues}>
      <Container>
        <div className={styles.container}>
          <h2 className={styles.ourValues}>Our Values</h2>
        </div>
        <div className={styles.container1}>
          <div className={styles.container2}>
            <p className={styles.atTheCoreContainer}>
              <span>{"At the core of our identity is a commitment to "}</span>
              <b>innovation</b>
              <span>
                . We prioritize staying on the cutting edge of technological
                trends by fostering a culture of continuous learning. Regular
                participation in conferences and collaboration with key
                technology partners ensures that our team is well-equipped to
                deliver solutions that are not just current but anticipate
                future industry advancements.
              </span>
            </p>
            <p className={styles.integrityIsAContainer}>
              <b>Integrity</b>
              <span>
                &nbsp;is a foundational principle that shapes our interactions,
                both internally and externally. We believe in transparent
                communication, honesty, and ethical practices. This commitment
                to integrity establishes trust with our clients and within our
                team. Upholding ethical standards is non-negotiable, ensuring
                that every aspect of our work is conducted with the highest
                level of integrity.
              </span>
            </p>
          </div>
          <div className={styles.container2}>
            <p className={styles.atTheCoreContainer}>
              <span>
                {
                  "Our company values the well-being of our team members, emphasizing "
                }
              </span>
              <b>flexibility</b>
              <span>{" and a healthy "}</span>
              <b>work-life balance</b>
              <span>
                . We operate on a flexible timetable, allowing for breaks and
                encouraging a sustainable work culture. Weekends are reserved
                for rejuvenation, fostering a positive environment that enables
                our team to bring their best to every project.
              </span>
            </p>
            <p className={styles.integrityIsAContainer}>
              <b>Client satisfaction</b>
              <span>
                {" "}
                is paramount in our approach. We go beyond meeting expectations;
                we proactively offer recommendations for improvement even after
                a project is considered successful. This dedication to
                continuous enhancement showcases our problem-solving
                capabilities and underscores our commitment to long-term client
                success. Through the values of Innovation, Integrity,
                Flexibility, and Client Satisfaction, we aim to not only meet
                industry standards but set new benchmarks in the realm of
                software development services.
              </span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutValues;
