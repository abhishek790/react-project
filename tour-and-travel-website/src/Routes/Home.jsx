import React from "react";
import Hero from "../components/Hero";
import imgs from "../imgs/12.jpg";

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
    </div>
  );
}

export default Home;
