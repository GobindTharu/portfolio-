import React from "react";
import HeroContent from "../sub/HeroContent";
import { ProjectView } from "../sub/ProjectView";
import GetInTouch from "@/Component/sub/GetInTouch";
import { Testimonial } from "@/Component/sub/Testimonials";
// import { Skills } from "@/Component/sub/Skills";

const Hero = () => {
  return (
    <>
      <HeroContent />
      {/* <Skills/> */}
      <ProjectView />
      <Testimonial/>
      <GetInTouch />
    </>
  );
};

export default Hero;
