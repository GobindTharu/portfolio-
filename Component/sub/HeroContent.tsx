"use client";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/Utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";
import Button from "./Button";
import { HeroCard } from "./HeroCard";

const HeroContent = () => {
  return (
    <div className="relative w-full ">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        className=" flex flex-col  md:flex-row items-center justify-start mt-22 sm:mt-7 md:mt-12 lg:mt-12 w-full z-[20] gap-6 sm:gap-3 md:gap-5 lg:gap-10"
      >
        {/* Left Section */}
        <div className="flex flex-col ml-2 sm:ml-0 md:ml-0 lg:ml-32 justify-center gap-2 sm:gap-5 md:gap-4 text-center md:text-left w-full">
          <motion.div
            variants={slideInFromTop(1.25)}
            className="welcome-box w-[200px] sm:w-[260px] md:w-[300px] py-[6px] sm:py-[8px] px-[4px] border rounded-xl border-[#7042f88b] opacity-[0.9] mx-auto md:mx-0"
          >
            <span className="flex items-center justify-start">
              <SparklesIcon className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 mr-2 sm:mr-3  text-[#b494ff]" />
              <h1 className="Welcome-text text-[12px] sm:text-[14px] md:text-[16px] xs:text-[333px] text-center sm:text-center">
                FullStack Developer Portfolio
              </h1>
            </span>
          </motion.div>

          {/* Main text */}
          <motion.div
            variants={slideInFromTop(1.5)}
            className="my-3 sm:my-4 md:my-5 z-[10]"
          >
            <h2 className="Welcome-text uppercase tracking-wide text-base sm:text-lg md:text-md lg:text-xl text-blue-100 text-center md:text-left">
              Dynamic Web Design With Next.js
            </h2>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(1.75)}
            className="flex flex-col gap-6 mt-3 text-6xl font-bold text-white max-w-[700px] sm:max-w-[600px] w-auto h-auto"
          >
            <span>
              Providing
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                the best{" "}
              </span>
              project exprience
            </span>
          </motion.div>
          <motion.div
            variants={slideInFromLeft(2)}
            className="flex flex-col mt-3 mb-0 text-3xl font-bold text-white max-w-[600px] w-auto h-auto"
          >
            <span>
              I&apos;m
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                Balgobind Chaudhary{" "}
              </span>
            </span>
          </motion.div>

          <motion.p
            variants={slideInFromLeft(2.25)}
            className="text-lg text-gray-400 my-5 max-w-[600px]"
          >
            Full Stack Software Developer with experience in MERN Stack Web
            Development. Check out my projects and skills.
          </motion.p>

          {/* Button */}
          <motion.div variants={slideInFromLeft(3.75)} className="mx-auto md:mx-0">
            <Button />
          </motion.div>
        </div>

        {/* Right Section - Image */}

        <motion.div
          variants={slideInFromRight(2.5)}
          className="relative flex top-0 flex-col sm:flex-row items-center justify-center w-full p-4 sm:p-6 lg:p-8"
        >
          <HeroCard />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroContent;
