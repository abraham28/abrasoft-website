import React from "react";
import { Container } from "react-bootstrap";

const Page = () => {
  return (
    <section
      style={{
        background: "var(--secondary)",
        height: "100svh",
        color: "var(--light)",
      }}
    >
      <Container>
        <p>{"greeting"}</p>
      </Container>
    </section>
  );
};

export default Page;
