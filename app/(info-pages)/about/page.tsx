import React from "react";
import { FunctionComponent } from "react";
import AboutValues from "./components/AboutValues";
import AboutMissionVision from "./components/AboutMissionVision";
import AboutIntro from "./components/AboutIntro";

const AboutUs: FunctionComponent = () => {
  return (
    <>
      <AboutIntro />
      <AboutValues />
      <AboutMissionVision />
    </>
  );
};

export default AboutUs;
