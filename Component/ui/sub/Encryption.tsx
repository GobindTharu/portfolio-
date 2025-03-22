"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromTop } from "@/Utils/motion";

const Encryption = () => {
  return (
    <div className="flex flex-col lg:flex-row relative items-center justify-center min-h-screen w-full h-full sm:p-3 md:p-5 overflow-hidden">
      <div className="absolute w-auto h-auto top-7 md:top-12 z-[5] px-4 text-center">
        <motion.div
          variants={slideInFromTop(0.2)}
          className="text-[28px] sm:text-[32px] md:text-[32px] lg:text-[40px] font-medium text-gray-200"
        >
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}&{" "}
          </span>
          Security
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/LockTop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="w-[80px] sm:w-[100px] md:w-[100px] translate-y-5 sm:translate-y-6 md:translate-y-7 transition-all duration-200 group-hover:rotate-y-[-180deg] hover:translate-x-17"
          />
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={150}
            height={150}
            className="z-10 transition-all duration-200 group-hover:translate-y-[2px]"
          />
        </div>

        <div className="Welcome-box px-[12px] sm:px-[15px] z-[20] border my-[6px] sm:my-[8px] border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-[16px] sm:text-[32px]">
            Encryption
          </h1>
        </div>
      </div>

      <div className="absolute z-[20] bottom-14 sm:bottom-6 px-[4px] text-center">
        <div className="cursive text-[16px] sm:text-[18px] md:text-[20px] font-medium text-gray-300">
          Secure your data with end-to-end encryption
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute h-full">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-full object-cover"
          src="/encryption.webm/"
        />
      </div>
    </div>
  );
};

export default Encryption;
