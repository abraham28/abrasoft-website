import React from "react";
import type { NextPage } from "next";
import styles from "./index.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import ContactUsPoolingForm from "@/app/(info-pages)/components/ContactUsForm";

const ContactUsFormSection: NextPage = () => {
  return (
    <section className="py-5">
      <Container>
        <Row>
          <Col lg={4} className="d-flex align-items-center">
            <div className="mx-auto">
              <h3 className={styles.connectWithUsToday}>
                Connect with us today.
              </h3>
              <p className={styles.exploreOurWorld}>
                Explore our world, connect with us,and engage in the experience
                for exciting updates
              </p>
            </div>
          </Col>
          <Col lg={8}>
            <ContactUsPoolingForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUsFormSection;
