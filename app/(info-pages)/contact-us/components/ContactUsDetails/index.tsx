import React from "react";
import { NextPage } from "next";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./index.module.scss";

const ContactUsDetails: NextPage = () => {
  return (
    <section className={`py-5 ${styles.sectionLayout}`}>
      <Container>
        <Row className="py-5">
          <Col className={styles.detailsLogo} lg={4} xs={{ order: "2" }}></Col>
          <Col
            lg={{ span: "8", order: "2" }}
            className={`my-5 ${styles.information}`}
          >
            <div>
              <h5>Abraham Guerrero</h5>
              <h5>+63 915 654 9303</h5>
              <h5>abraham.guerrero@abrasoft.com</h5>
              <h5>
                Blk 11 Lot 28 Security Ave. Banckers Village 1, North Caloocan
                City
              </h5>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUsDetails;
