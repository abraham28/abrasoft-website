import React from "react";
import type { NextPage } from "next";
import { Col, Container, Row } from "react-bootstrap";
import ContactUsForm from "@/app/(info-pages)/components/ContactUsForm";

const ContactUsFormSection: NextPage = () => {
  return (
    <section className="py-5">
      <Container>
        <Row>
          <Col lg={4} className="d-flex align-items-center">
            <div className="mx-auto">
              <h2>Connect with us today.</h2>
              <p>
                Explore our world, connect with us,and engage in the experience
                for exciting updates
              </p>
            </div>
          </Col>
          <Col lg={8}>
            <ContactUsForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUsFormSection;
