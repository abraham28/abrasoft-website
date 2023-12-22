"use client";
import React, { useState } from "react";
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
import { candidateRawFormSchema } from "@/helpers/validators";
import ServiceChoicesForm from "../ServiceChoicesForm/ServiceChoicesForm";

interface FormElements extends HTMLFormControlsCollection {
  firstName: HTMLInputElement;
  lastName: HTMLInputElement;
  company: HTMLInputElement;
  email: HTMLInputElement;
  phoneNumber: HTMLInputElement;
  service: HTMLInputElement;
  message: HTMLInputElement;
}

interface ContactUsPoolingFormProps {
  setSubmit: (value: boolean) => void;
}

const ContactUsPoolingForm: React.FC<ContactUsPoolingFormProps> = ({
  setSubmit,
}) => {
  const [service, setService] = useState("");

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    // Get form values
    const { firstName, lastName, company, email, phoneNumber, message } = e
      .currentTarget.elements as FormElements;

    const formData = {
      firstName: firstName.value,
      lastName: lastName.value,
      company: company.value,
      email: email.value,
      phoneNumber: phoneNumber.value,
      service: service,
      message: message.value,
    };

    candidateRawFormSchema
      .validate(formData)
      .then(() => {
        alert(`
          Firstname: ${formData.firstName}
          LastName: ${formData.lastName}
          Company: ${formData.company ? `${formData.company}` : "None"}
          Email: ${formData.email}
          phoneNumber: ${formData.phoneNumber}
          Service: ${service}
          Message: ${formData.message}`);
        setSubmit(true);
      })
      .catch((err) => {
        console.error(err.errors);
        alert(err.errors);
      });
  };
  return (
    <section>
      <Container>
        <Form className={styles.formLayout} onSubmit={onSubmitForm}>
          <Row>
            <Col lg={6} className="mb-3">
              <FormLabel className={styles.formLabel}>First Name *</FormLabel>
              <FormControl type="text" name="firstName" placeholder="John" />
            </Col>

            <Col lg={6} className="mb-3">
              <FormLabel className={styles.formLabel}>Last Name *</FormLabel>
              <FormControl name="lastName" placeholder="Dela Cruz" />
            </Col>
          </Row>

          <div className="mb-3">
            <FormLabel className={styles.formLabel}>Company</FormLabel>
            <FormControl placeholder="My Company" name="company" />
          </div>

          <div className="mb-3">
            <FormLabel className={styles.formLabel}>Email *</FormLabel>
            <FormControl
              type="email"
              placeholder="email@example.com"
              name="email"
            />
          </div>

          <div className="mb-3">
            <FormLabel className={styles.formLabel}>Phone *</FormLabel>
            <FormControl
              type="tel"
              placeholder="(+63) 000 0000 000"
              name="phoneNumber"
            />
          </div>

          <ServiceChoicesForm setService={setService} />

          <div className="mb-3">
            <FormLabel className={styles.formLabel}>Message *</FormLabel>
            <FormControl
              placeholder="Write a message"
              as="textarea"
              name="message"
              rows={3}
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
