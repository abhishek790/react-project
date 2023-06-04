import React from "react";
import Hero from "../components/Hero";
import imgs from "../imgs/night.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <div>
      <Hero cName="hero-mid" heroImg={imgs} title="Service" btnClass="hide" />
      <Trip />
      <Footer />
    </div>
  );
}

export default Service;
