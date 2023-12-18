import React from "react";
import { FunctionComponent } from "react";
import HeroSection from "./components/HeroSection/index";
import ContactUsForm from "./components/ContactUsForm";
import ContactUsDetails from "./components/ContactUsDetails";

const ContactUs: FunctionComponent = () => {
  return (
    <>
      <HeroSection />
      <ContactUsForm />
      <ContactUsDetails />
    </>
  );
};

export default ContactUs;
