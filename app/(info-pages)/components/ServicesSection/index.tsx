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
      <div style={{ overflow: "hidden" }}>
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            fill: "#0b2b57",
            width: "118%",
            height: 75,
            transform: "rotate(180deg) scaleX(-1)",
          }}
        >
          <path
            d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
            opacity=".25"
          />
          <path
            d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
            opacity=".5"
          />
          <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
        </svg>
      </div>
    </section>
  );
};

export default ServicesSection;