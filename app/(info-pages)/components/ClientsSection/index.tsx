"use client";
import React from "react";
import { Carousel, CarouselItem, Container } from "react-bootstrap";
import styles from "./ClientsSection.module.scss";
import Image from "next/image";
import StGabrielleLogo from "@/public/images/st-gabrielle-hrs-logo-with-stroke.webp";
import WashUWantLogo from "@/public/images/wash-u-want-logo-with-stroke.webp";
import Link from "next/link";

const ClientsSection = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <h2>Our Client Reviews</h2>
        <Carousel controls={false} aria-label="Client testimonials">
          <CarouselItem>
            <div className={styles.details}>
              <div className={styles.detailsText}>
                <h4 className={styles.detailTitle}>
                  {"St. Gabrielle HR Solutions"}
                </h4>
                <p>
                  visit their website on:&nbsp;
                  <Link
                    href="https://stgabriellehrs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {"stgabriellehrs.com"}
                  </Link>
                </p>
                <blockquote>
                  Our experience with Abrasoft in building our website has been
                  exceptional. The web development team demonstrated expertise
                  in crafting a site that perfectly aligns with our brand and
                  business objectives. The sleek, user-centric design coupled
                  with seamless application form integration has significantly
                  enhanced our online presence. Their commitment to SEO
                  optimization has boosted our visibility. Overall, a
                  professional and dedicated team that we highly recommend for
                  web development projects.
                </blockquote>
              </div>
              <div className={styles.imgContainer}>
                <Image
                  src={StGabrielleLogo}
                  alt="St Gabrielle HRS Logo"
                  height={250}
                  width={500}
                  style={{ height: "auto", maxWidth: 250 }}
                  className="d-inline-block align-text-top"
                />
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className={styles.details}>
              <div className={styles.detailsText}>
                <h3 className={styles.detailTitle}>{"Wash U Want"}</h3>
                <p>
                  visit their website on:&nbsp;
                  <Link
                    href="https://washuwant.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {"washuwant.com"}
                  </Link>
                </p>
                <blockquote>
                  Abrasoft delivered exceptional results for our laundry shop.
                  Their team crafted a sleek landing page that perfectly aligns
                  with our brand. The seamless integration of their laundry
                  management SAAS has streamlined our operations, and their
                  commitment to SEO optimization has boosted our online
                  visibility. Highly recommend their professional and dedicated
                  team for web development projects.
                </blockquote>
              </div>
              <div className={styles.imgContainer}>
                <Image
                  src={WashUWantLogo}
                  alt="Wash U Want Logo"
                  height={250}
                  width={500}
                  style={{ height: "auto", maxWidth: 250 }}
                  className="d-inline-block align-text-top"
                />
              </div>
            </div>
          </CarouselItem>
        </Carousel>
      </Container>
    </section>
  );
};

export default ClientsSection;
