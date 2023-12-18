"use client";
import React from "react";
import type { NextPage } from "next";
import styles from "./index.module.scss";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  FormLabel,
  FormSelect,
  Row,
} from "react-bootstrap";

const ContactUsForm: NextPage = () => {
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
            <Form className={styles.formLayout}>
              <Row>
                <Col lg={6} className="mb-3">
                  <FormLabel className={styles.formLabel}>First Name</FormLabel>
                  <FormControl placeholder="John" required />
                </Col>

                <Col lg={6} className="mb-3">
                  <FormLabel className={styles.formLabel}>Last Name</FormLabel>
                  <FormControl placeholder="Dela Cruz" required />
                </Col>
              </Row>

              <div className="mb-3">
                <FormLabel className={styles.formLabel}>Email</FormLabel>
                <FormControl placeholder="exampleEmail@myemail.com" required />
              </div>

              <div className="mb-3">
                <FormLabel className={styles.formLabel}>Service</FormLabel>
                <FormSelect required>
                  <option>Select service</option>
                  <option>Service 1</option>
                  <option>Service 2</option>
                  <option>Service 3</option>
                </FormSelect>
              </div>

              <div className="mb-3">
                <FormLabel className={styles.formLabel}>Subject</FormLabel>
                <FormControl placeholder="Enter your subject here" required />
              </div>

              <div className="mb-3">
                <FormLabel className={styles.formLabel}>Message</FormLabel>
                <FormControl
                  placeholder="Write a message"
                  as="textarea"
                  rows={3}
                  required
                />
              </div>
              <Button className={`w-100 ${styles.submitButton}`}>Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUsForm;
