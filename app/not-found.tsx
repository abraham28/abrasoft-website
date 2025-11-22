import Link from "next/link";
import React from "react";
import { Button, Container } from "react-bootstrap";
import { HOME_ROUTE } from "./constants";
import Image from "next/image";
import AbrasoftLogo from "@/public/images/company-logo.webp";

const NotFoundPage = () => {
  return (
    <div
      style={{
        height: "100dvh",
        background: "var(--base-color)",
        color: "var(--white-color)",
      }}
    >
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Image
          alt="Abrasoft Logo"
          src={AbrasoftLogo}
          width={0}
          height={0}
          style={{ width: 200, height: "auto" }}
        />
        <h1 style={{ marginBottom: "2rem", fontSize: 24 }}>
          Page Not Found (404)
        </h1>
        <p style={{ marginBottom: "2rem" }}>
          The page you are looking for does not exist.
        </p>
        <Link href={HOME_ROUTE}>
          <Button>Go Back Home</Button>
        </Link>
      </Container>
    </div>
  );
};

export default NotFoundPage;
