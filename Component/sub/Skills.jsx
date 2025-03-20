"use client";

import { Skill_data } from "@/Constants/constants";
import Image from "next/image";

export const Skills = () => {
  return (
    <>
      <h1 className="flex justify-center items-center text-gray-200 text-2xl font-bold md:text-4xl lg:text-6xl uppercase py-4 sm:py-4 lg:py- mt-16 sm:mt-1 lg:mt-6 ">
        Skills
      </h1>

      {/* main */}
      <div className="relative w-full  md:min-h-20 bg-opacity-0 text-white rounded-lg shadow-lg flex flex-col p-4 md:p-8 lg:p-12 mb-4 sm:mb-8 md:mb-10">
        {Skill_data?.map((item, index) => (
         
        ))}
      </div>
    </>
  );
};
