import React from "react";
import HeroContent from "../sub/HeroContent";
import { ProjectView } from "../sub/ProjectView";
import GetInTouch from "@/Component/ui/sub/GetInTouch";
import { Testimonial } from "@/Component/ui/sub/Testimonials";
import { Skill } from "@/Component/ui/main/Skill";
import Encryption from "../sub/Encryption";
import Portfolio from "@/Component/ui/sub/PortfolioImage";

const Hero = () => {
  return (
    <>

      <HeroContent displayText="Welcome to My Portfolio" />
      <Skill />
      <ProjectView />
      <Testimonial />
      <Encryption />
      <Portfolio />
      <GetInTouch />
    </>
  );
};

export default Hero;
