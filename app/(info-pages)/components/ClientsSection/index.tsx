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
                  Our experience with Abrasoft&apos;s SaaS solutions has been
                  exceptional. Their platform perfectly aligns with our brand
                  and business objectives. The sleek, user-centric interface
                  coupled with seamless functionality has significantly enhanced
                  our operations. Their commitment to continuous improvement and
                  responsive support has made a real difference. Overall, a
                  professional and dedicated team that we highly recommend for
                  businesses looking for reliable SaaS solutions.
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
                  Their laundry management SaaS has streamlined our operations
                  significantly. The seamless subscription-based platform
                  perfectly aligns with our needs, and their commitment to
                  continuous updates and support has been outstanding. Highly
                  recommend their professional and dedicated team for businesses
                  looking for reliable SaaS solutions.
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
