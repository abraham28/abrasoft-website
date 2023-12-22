"use client";
import React, { useState } from "react";
import type { NextPage } from "next";
import { Button, Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import CompleteFormSVG from "@/public/images/complete_form.webp";
import ContactUsForm from "@/app/(info-pages)/components/ContactUsForm";
import styles from "./ContactUsFormSection.module.scss";

const HOME_ROUTE = "/";

const ContactUsFormSection: NextPage = () => {
  const [isSubmitted, setSubmit] = useState(false);
  return (
    <section className="py-5">
      {!isSubmitted ? (
        <Container>
          <Row>
            <Col lg={4} className="d-flex align-items-center">
              <div className="mx-auto">
                <h2>Connect with us today.</h2>
                <p>
                  Explore our world, connect with us,and engage in the
                  experience for exciting updates
                </p>
              </div>
            </Col>
            <Col lg={8}>
              <ContactUsForm setSubmit={setSubmit} />
            </Col>
          </Row>
        </Container>
      ) : (
        <Container>
          <Row>
            <Col
              xs={{ order: "2" }}
              sm={{ order: "2" }}
              lg={{ span: "4", order: "1" }}
              className="d-flex align-items-center justify-content-center"
            >
              <div>
                <h2 className={styles.thankYou}>
                  Thank you for contacting us!
                </h2>
                <h5 className={styles.pleaseExpect}>
                  Please expect a call from one of our associates
                </h5>
                <div className={styles.buttonAlignment}>
                  <Button className="d-block" href={HOME_ROUTE}>Back to Home</Button>
                </div>
              </div>
            </Col>
            <Col
              xs={{ order: "1" }}
              sm={{ order: "1" }}
              lg={{ span: "8", order: "2" }}
            >
              <div className="my-5 d-flex justify-content-center">
                <Image
                  src={CompleteFormSVG}
                  alt={"Complete form image"}
                  className={styles.imageStyle}
                />
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </section>
  );
};

export default ContactUsFormSection;
