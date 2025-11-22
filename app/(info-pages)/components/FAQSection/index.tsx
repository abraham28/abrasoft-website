"use client";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import styles from "./FAQSection.module.scss";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is SaaS and how does it work?",
    answer:
      "SaaS (Software as a Service) is a cloud-based software delivery model where applications are hosted online and accessed through a web browser. You subscribe to use the software rather than purchasing and installing it on your own servers. This means automatic updates, no installation required, and access from anywhere with an internet connection.",
  },
  {
    question: "How do I subscribe to an application?",
    answer:
      "Simply browse our apps page, select the application you need, and choose a subscription plan that fits your business. You can start using the application immediately after subscribing - no installation or setup required.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, our subscriptions are flexible with no long-term commitments. You can cancel your subscription at any time, though we'd love to hear feedback on how we can improve our services.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We implement enterprise-grade security measures including data encryption, regular backups, and access controls. Your data is protected both in transit and at rest, and we follow industry best practices for data security and privacy.",
  },
  {
    question: "Do I need technical knowledge to use these applications?",
    answer:
      "No technical knowledge is required. Our applications are designed with user-friendliness in mind, featuring intuitive interfaces that anyone can learn quickly. We also provide support and documentation to help you get started.",
  },
  {
    question: "Can I use multiple applications with one subscription?",
    answer:
      "Each application has its own subscription plan. You can subscribe to multiple applications based on your business needs. We offer flexible plans that allow you to mix and match the tools that work best for you.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.header}>
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about our SaaS solutions.</p>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${
                openIndex === index ? styles.open : ""
              }`}
            >
              <button
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{faq.question}</span>
                <span className={styles.icon}>
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={styles.faqAnswer}
                aria-hidden={openIndex !== index}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;
