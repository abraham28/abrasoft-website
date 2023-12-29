import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";
import styles from "./index.module.scss";
import { candidateRawFormSchema } from "@/helpers/validators";
import ServiceChoicesForm from "../ServiceChoicesForm/ServiceChoicesForm";
import * as formik from "formik";

interface ContactUsPoolingFormProps {
  setSubmit: (value: boolean) => void;
}

const ContactUsPoolingForm: React.FC<ContactUsPoolingFormProps> = () => {
  const [service, setService] = useState("");
  const { Formik } = formik;

  return (
    <section>
      <Container>
        <Formik
          validationSchema={candidateRawFormSchema}
          onSubmit={console.log}
          initialValues={{
            firstName: "",
            lastName: "",
            company: "",
            email: "",
            phoneNumber: "",
            service: service,
            message: "",
          }}
        >
          {({ handleSubmit, handleChange, values, errors }) => (
            <Form
              noValidate
              className={styles.formLayout}
              onSubmit={handleSubmit}
            >
              <Row>
                <FormGroup as={Col} lg={6} className="mb-3">
                  <FormLabel className={styles.formLabel}>
                    First Name *
                  </FormLabel>
                  <FormControl
                    type="text"
                    name="firstName"
                    placeholder="John"
                    value={values.firstName}
                    onChange={handleChange}
                    isInvalid={!!errors.firstName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName}
                  </Form.Control.Feedback>
                </FormGroup>

                <FormGroup as={Col} lg={6} className="mb-3">
                  <FormLabel className={styles.formLabel}>
                    Last Name *
                  </FormLabel>
                  <FormControl
                    name="lastName"
                    placeholder="Dela Cruz"
                    value={values.lastName}
                    onChange={handleChange}
                    isInvalid={!!errors.lastName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.lastName}
                  </Form.Control.Feedback>
                </FormGroup>
              </Row>

              <FormGroup className="mb-3">
                <FormLabel className={styles.formLabel}>Company</FormLabel>
                <FormControl
                  placeholder="My Company"
                  name="company"
                  value={values.company}
                  onChange={handleChange}
                  isInvalid={!!errors.company}
                />
              </FormGroup>

              <FormGroup className="mb-3">
                <FormLabel className={styles.formLabel}>Email *</FormLabel>
                <FormControl
                  type="email"
                  placeholder="email@example.com"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </FormGroup>

              <FormGroup className="mb-3">
                <FormLabel className={styles.formLabel}>Phone *</FormLabel>
                <FormControl
                  type="tel"
                  placeholder="(+63) 000 0000 000"
                  name="phoneNumber"
                  value={values.phoneNumber}
                  onChange={handleChange}
                  isInvalid={!!errors.phoneNumber}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phoneNumber}
                </Form.Control.Feedback>
              </FormGroup>

              <FormGroup className="mb-3">
                <ServiceChoicesForm
                  value={values.service}
                  onChangeService={handleChange}
                  setService={setService}
                  isInvalid={!!errors.service}
                />
                <Form.Control.Feedback
                  style={{ display: "block", marginTop: 4 }}
                  type="invalid"
                >
                  {errors.service}
                </Form.Control.Feedback>
              </FormGroup>

              <FormGroup className="mb-3">
                <FormLabel className={styles.formLabel}>Message *</FormLabel>
                <FormControl
                  placeholder="Write a message"
                  as="textarea"
                  name="message"
                  rows={3}
                  value={values.message}
                  onChange={handleChange}
                  isInvalid={!!errors.message}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>
              </FormGroup>
              <Button type="submit" className={`w-100 ${styles.submitButton}`}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </section>
  );
};

export default ContactUsPoolingForm;
