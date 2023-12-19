"use client";
import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  FormLabel,
  Row,
} from "react-bootstrap";
import styles from "./index.module.scss";
import ServiceChoicesForm from "../ServiceChoicesForm/ServiceChoicesForm";

const ContactUsPoolingForm = () => {
  return (
    <section>
      <Container>
        <Form className={styles.formLayout}>
          <Row>
            <Col lg={6} className="mb-3">
              <FormLabel className={styles.formLabel}>First Name</FormLabel>
              <FormControl
                type="text"
                name="fname"
                placeholder="John"
                required
              />
            </Col>

            <Col lg={6} className="mb-3">
              <FormLabel type="text" name="lname" className={styles.formLabel}>
                Last Name
              </FormLabel>
              <FormControl placeholder="Dela Cruz" required />
            </Col>
          </Row>

          <div className="mb-3">
            <FormLabel className={styles.formLabel}>Company</FormLabel>
            <FormControl placeholder="My Company" />
          </div>

          <div className="mb-3">
            <FormLabel className={styles.formLabel}>Email</FormLabel>
            <FormControl
              type="email"
              placeholder="email@example.com"
              required
            />
          </div>

          <div className="mb-3">
            <FormLabel className={styles.formLabel}>Phone</FormLabel>
            <FormControl
              type="text"
              placeholder="(+63) 000 0000 000"
              required
            />
          </div>

          <ServiceChoicesForm />

          <div className="mb-3">
            <FormLabel className={styles.formLabel}>Message</FormLabel>
            <FormControl
              placeholder="Write a message"
              as="textarea"
              rows={3}
              required
            />
          </div>
          <Button type="submit" className={`w-100 ${styles.submitButton}`}>
            Submit
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default ContactUsPoolingForm;
