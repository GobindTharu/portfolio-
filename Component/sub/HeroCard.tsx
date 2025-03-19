"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const HeroCard =()=> {
  return (
    <div className="flex justify-center items-center bg-opacity-0">
      <motion.div
        className="relative flex items-center justify-center top-10 w-190 h-190 bg-opacity-0 shadow-lg overflow-hidden"
      >
        <motion.div
          className="absolute inset-2 bg-opacity-0 sm:w-100 md:w-200 lg:w-200"
        >
          <Image
            src="/profile01.png"
            alt="Balgobind Chaudhary"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
