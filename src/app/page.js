"use client";

import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import PricingHighlight from "./components/PricingHighlight";
import Safety from "./components/Safety";
import DriverCTA from "./components/DriverCTA";
import Testimonials from "./components/Testimonials";
import EnquiryForm from "./components/EnquiryForm";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  // 🔹 Always start page from top on reload
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <PricingHighlight />
      <Safety />
      <DriverCTA />
      <Testimonials />
      <EnquiryForm />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
