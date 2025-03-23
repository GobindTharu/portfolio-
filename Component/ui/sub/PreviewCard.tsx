"use client";

import Image from "next/image";
import { HoverRating } from "./Rating";

export const PreviewCard: React.FC = () => {
  return (
    <>
      <h1 className="flex flex-1 justify-center items-center text-gray-200 text-2xl font-bold md:text-4xl lg:text-6xl uppercase py-4 sm:py-4 lg:py- mt-16 sm:mt-1 lg:mt-6 ">
        Project Overview
      </h1>
      <div className="relative w-full max-w-7xl md:min-h-0 bg-opacity-0 text-white rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden p-4 md:p-8 lg:p-12 mb-4 sm:mb-8 md:mb-10">
        {/* Left Image Section - Mobile View Adjustment */}
        <div className="relative w-full h-auto md:w-3/4 lg:w-2/3 md:h-auto m-4 md:m-8 border border-gray-500 rounded-3xl shadow-xl shadow-gray-700">
          <Image
            src="/desktop.png"
            alt="Desktop Image"
            layout="responsive"
            width={1200}
            height={800}
            className="rounded-4xl"
          />
        </div>

        {/* Right Image Section - Mobile */}
        <div className="border-gray-200 border hidden md:block absolute top-0 right-60 z-20 my-30 w-70 min-h-160 md:h-60 lg:h-auto p-2 md:p-4 rounded-4xl shadow-xl shadow-gray-400">
          <Image
            src="/mobile.png"
            alt="Mobile Image"
            layout="fill"
            objectFit="cover"
            className="rounded-4xl"
          />
        </div>
      </div>
      <HoverRating />
      <button className="relative flex h-12 sm:h-12 w-full max-w-[300px] sm:max-w-[340px] md:max-w-[460px] overflow-hidden rounded-lg p-[3px] focus:outline-none hover:mx-20 mt-2 ">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-5 sm:px-7 text-xs sm:text-sm font-medium text-white backdrop-blur-3xl uppercase">
          Live Preview
        </span>
      </button>
    </>
  );
};
