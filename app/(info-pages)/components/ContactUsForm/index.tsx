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
import ServiceChoicesForm from "../ServiceChoicesForm/ServiceChoicesForm";

interface ContactUsPoolingFormProps {
  setSubmit: (value: boolean) => void;
}

const ContactUsPoolingForm: React.FC<ContactUsPoolingFormProps> = ({
  setSubmit,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [service, setService] = useState("");

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    // const stringToArray = phoneNumber.split("");
    // if (stringToArray.map((search) => isFinite(parseInt(search)))) {
    //   alert("Error!! Contains string");
    //   e.preventDefault();
    //   e.stopPropagation();
    //   return;
    // }
    alert(`
    Firstname: ${firstName}
    LastName: ${lastName}
    Company: ${company ? `${company}` : "None"}
    Email: ${email}
    phoneNumber: ${phoneNumber}
    Service: ${service}`);
    e.preventDefault();
    e.stopPropagation();
    setSubmit(true);
  };
  return (
    <section>
      <Container>
        <Form className={styles.formLayout} onSubmit={onSubmitForm}>
          <Row>
            <Col lg={6} className="mb-3">
              <FormLabel className={styles.formLabel}>First Name</FormLabel>
              <FormControl
                onChange={(event) => setFirstName(event.target.value)}
                type="text"
                name="fname"
                placeholder="John"
              />
            </Col>

            <Col lg={6} className="mb-3">
              <FormLabel type="text" name="lname" className={styles.formLabel}>
                Last Name
              </FormLabel>
              <FormControl
                name="lname"
                onChange={(event) => setLastName(event.target.value)}
                placeholder="Dela Cruz"
              />
            </Col>
          </Row>

          <div className="mb-3">
            <FormLabel className={styles.formLabel}>Company</FormLabel>
            <FormControl
              onChange={(event) => setCompany(event.target.value)}
              placeholder="My Company"
            />
          </div>

          <div className="mb-3">
            <FormLabel className={styles.formLabel}>Email</FormLabel>
            <FormControl
              type="email"
              onChange={(event) => setEmail(event.target.value)}
              placeholder="email@example.com"
            />
          </div>

          <div className="mb-3">
            <FormLabel className={styles.formLabel}>Phone</FormLabel>
            <FormControl
              type="text"
              onChange={(event) => setPhoneNumber(event.target.value)}
              placeholder="(+63) 000 0000 000"
            />
          </div>

          <ServiceChoicesForm setService={setService} />

          <div className="mb-3">
            <FormLabel className={styles.formLabel}>Message</FormLabel>
            <FormControl placeholder="Write a message" as="textarea" rows={3} />
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
