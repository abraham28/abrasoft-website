import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { ListGroupItem } from "react-bootstrap";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { EMAIL_ADDRESS, FACEBOOK_LINK, NAV_LINKS_ARR } from "@/app/constants";

interface Footer {}

const Footer: React.FC<Footer> = () => {
  return (
    <div>
      <footer className={styles.footerLayout}>
        <Container>
          <Row>
            <Col lg={{ order: "first" }} xs={{ order: "last" }}>
              <Row>
                <Col>
                  <p className={styles.footerTexth4}>
                    Reach out, your voice matters
                  </p>
                  <blockquote className={styles.footerPlainText}>
                    At Abrasoft, we are dedicated to empowering individuals and
                    businesses to thrive through our comprehensive recruitment
                    services. We take pride in our unwavering commitment to
                    forging meaningful connections between talented individuals
                    and rewarding career opportunities. Your success is our
                    priority, and we aspire to be the reliable partner guiding
                    you through every step of your career journey.
                  </blockquote>
                  <p className={styles.footerAddress}>
                    Blk 11 Lot 28 Security Ave, Banker&apos;s Village 1, North
                    Caloocan City, Philippines
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className={styles.footerTexth5}>Useful Links</p>
                  <ListGroup className={styles.footerPlainText}>
                    {NAV_LINKS_ARR.map((item, key) => {
                      return (
                        <ListGroupItem key={key} className={styles.links}>
                          <Link href={item.path}>
                            <p>{item.name}</p>
                          </Link>
                        </ListGroupItem>
                      );
                    })}
                  </ListGroup>
                </Col>
                <Col>
                  <p className={styles.footerTexth5}>Contact Us</p>
                  <a
                    className={styles.contacts}
                    href={`mailto:${EMAIL_ADDRESS}`}
                  >
                    <p>
                      <MdEmail />
                      &nbsp;{EMAIL_ADDRESS}
                    </p>
                  </a>
                  <div className={styles.snsLinks}>
                    <Link href={FACEBOOK_LINK} target="_blank" passHref>
                      <BsFacebook />
                      /abrasoft
                    </Link>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
