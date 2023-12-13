"use client";
import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import styles from "./ServicesSection.module.scss";
import Image from "next/image";

const sampleServices: ServiceItem[] = [
  {
    title: "App Development",
    imgSrc: "/images/app-development.jpg",
    p: "Whether it's your personalized accounting software, HR system, or a versatile POS, we specialize in crafting tailored application tools that meet your unique requirements.",
    features: [
      "Deployment to Apple Store or Play Store",
      "Built using Flutter",
      "Ongoing App Maintenance",
    ],
  },
  {
    title: "Web Development",
    imgSrc: "/images/responsive-web-design.webp",
    p: "From sleek corporate websites to dynamic e-commerce platforms, we excel in creating customized web solutions that resonate with your brand and engage your audience.",
    features: [
      "Responsive and User-Centric Designs",
      "E-commerce Integration",
      "SEO-Optimized Development",
    ],
  },
  {
    title: "Game Development",
    imgSrc: "/images/game-development.jpg",
    p: "Embark on a gaming adventure with our expertise in developing captivating and immersive games. From concept to execution, we bring your gaming ideas to life.",
    features: [
      "Interactive and Engaging Gameplay",
      "Cross-Platform Compatibility",
      "Game Updates and Enhancements",
    ],
  },
];

interface ServiceItem {
  title: string;
  imgSrc: string;
  p: string;
  features: string[];
}

const ServicesSection = () => {
  const [activeServiceItem, setActiveServiceItem] = useState<ServiceItem>(
    sampleServices[0],
  );

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <h4>Services</h4>
        <h2>What we can do for you</h2>
        <div className={styles.controls}>
          {sampleServices.map((item, key) => (
            <Button
              key={`service-btn ${key}`}
              onClick={() => setActiveServiceItem(item)}
              variant={
                activeServiceItem.title == item.title
                  ? "primary"
                  : "transparent"
              }
            >
              {item.title}
            </Button>
          ))}
        </div>
        <div className={styles.details}>
          <div className={styles.imgContainer}>
            <Image
              src={activeServiceItem.imgSrc}
              alt="Abrasoft Logo"
              height={250}
              width={500}
              className="d-inline-block align-text-top"
            />
          </div>
          <div>
            <h4>{activeServiceItem.title}</h4>
            <p>{activeServiceItem.p}</p>
            <ul>
              {activeServiceItem.features.map((feature, key) => (
                <li key={`feature ${key}`}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
