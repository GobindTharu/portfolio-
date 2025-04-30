"use client";

import Image from "next/image";
import { HoverRating } from "./Rating";
import { Link } from "@mui/material";
import { PreviewCardList } from "@/Constants/constants";

export const PreviewCard: React.FC = () => {
  return (
    <>
      <h1 className="flex flex-1 justify-center items-center text-gray-200 text-2xl font-bold md:text-4xl lg:text-6xl uppercase py-4 sm:py-4 lg:py- mt-16 sm:mt-1 lg:mt-6 ">
        Project Overview
      </h1>
      {PreviewCardList.map((item, index) => {
        return (
          <div
            key={index}
            className="relative w-full max-w-7xl md:min-h-0 bg-opacity-0 text-white rounded-lg shadow-lg flex flex-col overflow-hidden p-4 md:p-8 lg:p-12 mb-4 sm:mb-8 md:mb-10"
          >
            {/* Left Image Section - Mobile View Adjustment */}
            <div className="relative w-full h-full md:w-12 lg:w-250 md:h-auto  md:m-8 border border-gray-500 rounded-2xl shadow-xl shadow-gray-700">
              <Image
                src={item.imageUrl}
                alt={item.name}
                layout="responsive"
                width={1200}
                height={800}
                className="rounded-2xl"
              />
            </div>

            {/* Right Image Section - Mobile */}
            <div className="border-gray-200 border hidden md:block absolute top-10 right-30 z-20 my-30 w-70 min-h-140 md:h-60 lg:h-auto p-2 md:p-4 rounded-4xl shadow-xl shadow-gray-400">
              <Image
                src={item.mobileImageUrl}
                alt={item.name}
                layout="fill"
                className="rounded-4xl"
              />
            </div>
            <div className="flex flex-col justify-center items-center ">
              <HoverRating />
              <Link href={item.link} target="_blank">
                <button className="relative flex h-12 sm:h-12 w-full max-w-[400px] sm:max-w-[340px] md:max-w-[460px] overflow-hidden rounded-lg p-[3px] focus:outline-none transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-5 sm:px-7 text-xs sm:text-sm font-medium text-white backdrop-blur-3xl uppercase">
                    Live Preview
                  </span>
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};
