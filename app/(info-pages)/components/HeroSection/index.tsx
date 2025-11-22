import React from "react";
import { Button, Container } from "react-bootstrap";
import Link from "next/link";
import { APPS_ROUTE } from "@/app/constants";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundOverlay}></div>
      <Container className={styles.container}>
        <div className={styles.content}>
          <h1>
            Turning Ideas into <span>Reality</span>
          </h1>
          <p>
            Access powerful SaaS solutions through subscription. Elevate your
            business with high-value technology and innovation.
          </p>
          <div className={styles.buttonWrapper}>
            <Link href={APPS_ROUTE} className={styles.ctaButtonLink}>
              <Button variant="primary" className={styles.ctaButton}>
                See all Apps
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
