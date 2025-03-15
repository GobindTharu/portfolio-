"use client";

import Image from "next/image";
import { CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";

export const HeroCard =()=> {
  return (
    <div className="flex justify-center items-center bg-opacity-0">
      <motion.div
        className="relative flex items-center justify-center top-10 w-190 h-190 bg-opacity-0 shadow-lg overflow-hidden"
        whileHover={{ y: -20 }}
      >
        <motion.div
          className="absolute inset-2 bg-opacity-0 sm:w-100 md:w-200 lg:w-200"
          whileHover={{ y: 20, x: 20 }}
        >
          <Image
            src="/profile01.png"
            alt="Balgobind Chaudhary"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
        <CardContent className="absolute bottom-2 left-0 right-0 text-center">
          <Typography
            variant="h2"
            className=" text-md  cursive uppercase bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text text-transparent text-5xl font-extrabold"
          >
            BALGOBIND CHAUDHARY
          </Typography>
        </CardContent>
      </motion.div>
    </div>
  );
}
