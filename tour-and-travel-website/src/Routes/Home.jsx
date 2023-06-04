import React from "react";
import Hero from "../components/Hero";
import imgs from "../imgs/12.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Hero
        cName="hero"
        heroImg={imgs}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </div>
  );
}

export default Home;
