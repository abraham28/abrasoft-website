import React from "react";
import { Button, Container } from "react-bootstrap";
import styles from "./Page.module.scss";

const Page = () => {
  return (
    <section className={styles.hero}>
      <Container className={styles.container}>
        <h1>Turning Ideas into Reality</h1>
        <p>
          Discover tailored software solutions for every industry. Elevate your
          business with high-value technology and innovation.
        </p>
        <div>
          <Button variant="primary">Get in Touch</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </Container>
    </section>
  );
};

export default Page;
