"use client";
import React, { useState } from "react";
import type { NextPage } from "next";
import styles from "./index.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import ContactUsForm from "@/app/(info-pages)/components/ContactUsForm";

const ContactUsFormSection: NextPage = () => {
  const [isSubmitted, setSubmit] = useState(false);
  return (
    <section className="py-5">
      <Container>
        {!isSubmitted ? (
          <Row>
            <Col lg={4} className="d-flex align-items-center">
              <div className="mx-auto">
                <h3 className={styles.connectWithUsToday}>
                  Connect with us today.
                </h3>
                <p className={styles.exploreOurWorld}>
                  Explore our world, connect with us,and engage in the
                  experience for exciting updates
                </p>
              </div>
            </Col>
            <Col lg={8}>
              <ContactUsForm setSubmit={setSubmit} />
            </Col>
          </Row>
        ) : (
          <Container
            className={`d-flex justify-content-center flex-column text-center py-3 ${styles.submittedForm}`}
          >
            <div className="my-5">
              <svg
                width="256px"
                height="256px"
                viewBox="0 0 20.00 20.00"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
                stroke="#0b2b57"
                strokeWidth="0.52"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#CCCCCC"
                  strokeWidth="0.6"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill="#0b2b57"
                    fillRule="evenodd"
                    d="M3 10a7 7 0 019.307-6.611 1 1 0 00.658-1.889 9 9 0 105.98 7.501 1 1 0 00-1.988.22A7 7 0 113 10zm14.75-5.338a1 1 0 00-1.5-1.324l-6.435 7.28-3.183-2.593a1 1 0 00-1.264 1.55l3.929 3.2a1 1 0 001.38-.113l7.072-8z"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <h2>
              Thank you for contacting us, please expect a call from one of our
              associates
            </h2>
          </Container>
        )}
      </Container>
    </section>
  );
};

export default ContactUsFormSection;
