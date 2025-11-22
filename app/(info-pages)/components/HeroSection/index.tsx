import React from "react";
import { Button, Container } from "react-bootstrap";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <Container className={styles.container}>
        <h1>
          Turning Ideas into <span>Reality</span>
        </h1>
        <p>
          Discover tailored software solutions for every industry. Elevate your
          business with high-value technology and innovation.
        </p>
        <div>
          <Button variant="primary" as="a" href="#contact">
            Get in Touch
          </Button>
          <Button variant="secondary" as="a" href="/about">
            Learn More
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
