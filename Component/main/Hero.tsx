import React from "react";
import HeroContent from "../sub/HeroContent";
import { About } from "../sub/About";
import GetInTouch from "@/Component/sub/GetInTouch";
import { Testimonial } from "@/Component/sub/Testimonials";

const Hero = () => {
  return (
    <>
      <HeroContent />
      <About />
      <Testimonial/>
      <GetInTouch />
    </>
  );
};

export default Hero;
