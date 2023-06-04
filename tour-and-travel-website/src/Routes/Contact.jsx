import React from "react";
import Hero from "../components/Hero";
import imgs from "../imgs/2.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div>
      <Hero cName="hero-mid" heroImg={imgs} title="Contact" btnClass="hide" />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contact;
