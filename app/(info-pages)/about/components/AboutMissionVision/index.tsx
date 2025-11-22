import React from "react";
import type { NextPage } from "next";
import styles from "./index.module.scss";
import { Container } from "react-bootstrap";

const AboutMissionVision: NextPage = () => {
  return (
    <section className={styles.aboutmissionvision}>
      <div className={styles.pageDivider}>
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fill: "#ffffff", height: 75 }}
          aria-hidden="true"
        >
          <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
        </svg>
      </div>
      <Container className={styles.container}>
        <div className={styles.container1}>
          <h2 className={styles.ourMission}>Our Mission</h2>
          <p className={styles.hereAtOur}>
            Here at our company, we&apos;re on a mission to empower businesses
            through accessible and powerful SaaS solutions. Our goal is to
            provide subscription-based software tools that streamline
            operations, enhance productivity, and drive growth for businesses of
            all sizes. We&apos;re committed to delivering innovative cloud-based
            solutions that are easy to access, scalable, and designed to meet
            the evolving needs of modern businesses. Let&apos;s work together to
            transform how businesses operate through cutting-edge SaaS
            technology.
          </p>
        </div>
        <div className={styles.container2}>
          <h2 className={styles.ourVision}>Our Vision</h2>
          <p className={styles.hereAtOur1}>
            Here at our company, we envision establishing ourselves as a trusted
            leader in the SaaS industry, cultivating robust relationships not
            only with large corporations but also with government entities. Our
            broader vision extends to making substantial contributions to the
            technological progress of the Philippines. By providing accessible
            and powerful subscription-based software solutions, we aim to play a
            pivotal role in shaping the digital landscape, fostering innovation,
            and driving positive change on a national scale.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default AboutMissionVision;
