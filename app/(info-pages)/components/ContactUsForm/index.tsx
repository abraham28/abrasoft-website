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

const ContactUsPoolingForm = () => {
  const [isSubmitted, setSubmit] = useState(false);
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
        {!isSubmitted ? (
          <Form className={styles.formLayout} onSubmit={onSubmitForm}>
            <Row>
              <Col lg={6} className="mb-3">
                <FormLabel className={styles.formLabel}>First Name *</FormLabel>
                <FormControl type="text" name="firstName" placeholder="John" />
              </Col>

              <Col lg={6} className="mb-3">
                <FormLabel className={styles.formLabel}>Last Name *</FormLabel>
                <FormControl name="lastName" placeholder="Dela Cruz" required />
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
        ) : (
          <Container className="d-flex justify-content-center flex-column text-center py-3">
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

export default ContactUsPoolingForm;
