"use client";
import React, { useState } from "react";
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
import styles from "./index.module.scss";

const ContactUsPoolingForm = () => {
  const [options, setOptions] = useState("");

  const handleOptions = (event: {
    target: { value: React.SetStateAction<string> };
  }) => setOptions(event.target.value);
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
            <FormControl placeholder="My Company" required />
          </div>

          <div className="mb-3">
            <FormLabel className={styles.formLabel}>Email</FormLabel>
            <FormControl
              type="email"
              placeholder="exampleEmail@myemail.com"
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

          <div className="mb-3">
            <FormLabel className={styles.formLabel}>Service</FormLabel>
            <FormSelect
              id="handle-other-option"
              value={options}
              onChange={handleOptions}
            >
              <option>Select service</option>
              <option value="Web Development">Web Development</option>
              <option value="App Development">App Development</option>
              <option value="Game Development">Game Development</option>
              <option value="Other">Other:</option>
            </FormSelect>
            {options === "Other" ? (
              <FormControl
                className="my-2"
                type="text"
                placeholder="Enter other service"
                required
              />
            ) : (
              ""
            )}
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
          <Button type="submit" className={`w-100 ${styles.submitButton}`}>
            Submit
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default ContactUsPoolingForm;
