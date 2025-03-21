import React from "react";
import HeroContent from "../sub/HeroContent";
import { ProjectView } from "../sub/ProjectView";
import GetInTouch from "@/Component/sub/GetInTouch";
import { Testimonial } from "@/Component/sub/Testimonials";
import { Skill } from "@/Component/main/Skill";

const Hero = () => {
  return (
    <>
      <HeroContent />
      <Skill />
      <ProjectView />
      <Testimonial />
      <GetInTouch />
    </>
  );
};

export default Hero;
