import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main id="main-content" style={{ paddingTop: 70 }}>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
