"use client"
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromRight,
} from "@/Utils/motion";import { Skills } from "@/Component/ui/sub/Skills";

export const Skill = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
       
      >
        {/* Left Section */}
        <div className="flex flex-col ml-2 sm:ml-0 md:ml-0 lg:ml-32 justify-center gap-2 sm:gap-5 md:gap-4 text-start md:text-left sm:text-left w-full">
          <motion.div
            variants={slideInFromRight(2)}
           
          >
            <Skills />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};
