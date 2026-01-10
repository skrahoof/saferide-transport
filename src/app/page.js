import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Safety from "./components/Safety";
import Testimonials from "./components/Testimonials";
import EnquiryForm from "./components/EnquiryForm";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import PricingHighlight from "./components/PricingHighlight";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <PricingHighlight />
      <Safety />
      <Testimonials />
      <EnquiryForm />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

