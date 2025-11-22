import React from "react";
import type { NextPage } from "next";
import styles from "./index.module.scss";
import { Container } from "react-bootstrap";

const AboutIntro: NextPage = () => {
  return (
    <section className={styles.aboutintro}>
      <Container className={styles.container}>
        <div className={styles.headings}>
          <h1 className={styles.abrasoft}>Abrasoft</h1>
          <h2 className={styles.isASoftware}>is a SaaS company</h2>
        </div>
        <p className={styles.shortsummary}>
          Our company is guided by innovation, integrity and client
          satisfaction, we strive to deliver cutting-edge solutions with a
          commitment to transparency and excellence in all our endeavors.
        </p>
      </Container>
    </section>
  );
};

export default AboutIntro;
