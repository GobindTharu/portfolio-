import React from "react";
import HeroContent from "../sub/HeroContent";
import { About } from "../sub/About";
import GetInTouch from "@/Component/sub/GetInTouch";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <>
    <Navbar/>
      <HeroContent />
      <About />
      <GetInTouch />
    </>
  );
};

export default Hero;
