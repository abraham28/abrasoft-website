"use client";
import React from "react";
import { Container } from "react-bootstrap";
import styles from "./ClientsSection.module.scss";
import Image from "next/image";
import StGabrielleLogo from "@/public/images/st-gabrielle-logo.webp";
import Link from "next/link";

const ClientsSection = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <h4>Client Review</h4>
        <h2>We&apos;d love to serve you too</h2>
        <div className={styles.details}>
          <div className={styles.detailsText}>
            <h4 className={styles.detailTitle}>
              {"St. Gabrielle HR Solutions"}
            </h4>
            <p>
              visit their website on:&nbsp;
              <Link href="https://stgabriellehrs.com/" target="_blank">
                {"stgabriellehrs.com"}
              </Link>
            </p>
            <blockquote>
              Our experience with Abrasoft in building our website has been
              exceptional. The web development team demonstrated expertise in
              crafting a site that perfectly aligns with our brand and business
              objectives. The sleek, user-centric design coupled with seamless
              application form integration has significantly enhanced our online
              presence. Their commitment to SEO optimization has boosted our
              visibility. Overall, a professional and dedicated team that we
              highly recommend for web development projects.
            </blockquote>
          </div>
          <div className={styles.imgContainer}>
            <Image
              src={StGabrielleLogo}
              alt="St Gabrielle HRS Logo"
              height={250}
              width={500}
              className="d-inline-block align-text-top"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ClientsSection;
