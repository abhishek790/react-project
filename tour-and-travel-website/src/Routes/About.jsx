import React from "react";
import Hero from "../components/Hero";
import imgs from "../imgs/night.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
function About() {
  return (
    <div>
      <Hero cName="hero-mid" heroImg={imgs} title="About" btnClass="hide" />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default About;
