import React from "react";
import HeroContent from "../sub/HeroContent";
import { ProjectView } from "../sub/ProjectView";
import GetInTouch from "@/Component/ui/sub/GetInTouch";
import { Testimonial } from "@/Component/ui/sub/Testimonials";
import { Skill } from "@/Component/ui/main/Skill";
import Encryption from "../sub/Encryption";
import DummyImageDownloader from "@/Component/ui/sub/DummyImage";

const Hero = () => {
  return (
    <>
      <HeroContent displayText="Welcome to My Portfolio" />
      <Skill />
      <ProjectView />
      <Testimonial />
      <Encryption />
      <DummyImageDownloader/>
      <GetInTouch />
    </>
  );
};

export default Hero;
