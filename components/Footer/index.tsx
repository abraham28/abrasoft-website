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
                  <p className={styles.footerTexth4}>{"footer.heading"}</p>
                  <blockquote className={styles.footerPlainText}>
                    {"footer.paragraph"}
                  </blockquote>
                  <p className={styles.footerAddress}>{"company.address"}</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className={styles.footerTexth5}>{"footer.useful-links"}</p>
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
                  <p className={styles.footerTexth5}>{"contact-us"}</p>
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
                      {"company.facebook-link"}
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
