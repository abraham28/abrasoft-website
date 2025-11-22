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
            Powerful <span>SaaS Solutions</span> for Your Business
          </h1>
          <p>
            Streamline your operations with cloud-based software. Subscribe to
            our suite of business applications and access powerful tools
            instantly—no installation required.
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
