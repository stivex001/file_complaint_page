import React from "react";
import HeroWrapper from "./hero.styles";
import heroImage from "../../assets/hero.png"

const Hero = () => {
  return (
    <HeroWrapper>
      <div className="container">
        <div className="hero-desc">
          <h1>SUPPORT CENTER FOR YOUR HELP</h1>
          <button>Contact Support</button>
        </div>
        <div className="hero-img">
            <img src={heroImage} alt="" />
        </div>
      </div>
    </HeroWrapper>
  );
};

export default Hero;
