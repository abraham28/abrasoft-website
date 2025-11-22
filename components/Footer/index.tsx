import React from "react";
import styles from "./Footer.module.scss";
import * as constants from "@/app/constants";
import { Button, Container } from "react-bootstrap";
import Link from "next/link";

interface Footer {}

const Footer: React.FC<Footer> = () => {
  return (
    <footer>
      <div className={styles.topFooter}>
        <Container className={styles.container}>
          <div className={styles.message}>
            <p>We develop, test and deploy software apps.</p>
            <p>
              Tell us your idea.&nbsp;
              <Button
                variant="secondary"
                as="a"
                href={`mailto:${constants.EMAIL_ADDRESS}`}
              >
                Send a message
              </Button>
            </p>
          </div>
          <div className={styles.contactLinks}>
            <div>
              <p>Browse More</p>
              <ul>
                {constants.NAV_LINKS_ARR.map((link, key) => (
                  <li key={key}>
                    <Link href={link.path} target={link.target}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p>Contact Us</p>
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
      <Container>
        <div className={styles.bottomFooter}>
          <p>{constants.TAGLINE}</p>
          <p>{constants.COPYRIGHT}</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
