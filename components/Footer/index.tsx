import React from "react";
import styles from "./Footer.module.scss";
import * as constants from "@/app/constants";
import { Button, Container } from "react-bootstrap";
import Link from "next/link";
import { getLinkProps } from "@/app/utils/linkProps";

interface Footer {}

const Footer: React.FC<Footer> = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.topFooter}>
        <Container className={styles.container}>
          <div className={styles.message}>
            <p className={styles.mainMessage}>
              Access powerful SaaS solutions through subscription.
            </p>
            <div>
              <Link
                href={constants.APPS_ROUTE}
                className={styles.ctaButtonLink}
              >
                <Button variant="secondary" className={styles.ctaButton}>
                  See all Apps
                </Button>
              </Link>
            </div>
          </div>
          <div className={styles.contactLinks}>
            <div>
              <h3>Browse More</h3>
              <ul>
                {constants.NAV_LINKS_ARR.map((link, key) => {
                  const linkProps = getLinkProps(link);
                  return (
                    <li key={key}>
                      <Link {...linkProps}>{link.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h3>Contact Us</h3>
              <ul>
                <li>
                  <Link href={`tel:${constants.CONTACT_NUMBER}`}>
                    {constants.CONTACT_NUMBER}
                  </Link>
                </li>
                <li>
                  <Link href={`mailto:${constants.EMAIL_ADDRESS}`}>
                    {constants.EMAIL_ADDRESS}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <div className={styles.bottomFooter}>
        <Container>
          <div className={styles.bottomContent}>
            <p className={styles.tagline}>{constants.TAGLINE}</p>
            <p className={styles.copyright}>{constants.COPYRIGHT}</p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
