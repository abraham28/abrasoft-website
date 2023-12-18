import React from "react";
import type { NextPage } from "next";
import styles from "./index.module.scss";
import { Button, Container } from "react-bootstrap";

const HeroSection: NextPage = () => {
  return (
    <section className={styles.hero}>
      <Container className={styles.container}>
        <div className={styles.actionButton}>
          <Button className={`mx-2 ${styles.outlineButton}`}>Log in</Button>
          <Button className={styles.primaryButton}>Get In Touch</Button>
        </div>
        <div className={styles.headerText}>
          <div>
            <h1 className={styles.header}>Unveiling Connections</h1>
            <p className={styles.elevatingYourExperience}>
              Elevating Your Experience Beyond the Website
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
