"use client";

import { Button } from "@mui/material";
import Link from "next/link";
import { Testimonials } from "@/Constants/constants";

export const SkillCard = () => {
  return (
    <>
      <h2 className="flex justify-center items-center text-gray-200 text-xl font-semibold md:text-base uppercase my-8">
        Testimonials
      </h2>
      <div className="z-20 w-full overflow-hidden whitespace-nowrap relative">
        <div className="flex items-center space-x-6 px-4 my-20 animate-scroll">
          {Testimonials.map((item, index) => (
            <div
              key={index}
              className="flex-none w-[80vw] md:w-[40vw] bg-gray-800 shadow-lg rounded-xl p-6 transition-transform transform hover:scale-105"
            >
              <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6">
                <div className="flex justify-center">
                  <Link href={"/detail"}>
                    <img
                      className="h-[14rem] md:h-[20rem] object-cover rounded-lg"
                      src={item?.Image}
                      alt={item?.name}
                    />
                  </Link>
                </div>
                <div className="flex-1 flex flex-col items-center text-center md:text-left md:items-start gap-4">
                  <div className="flex flex-col gap-4">
                    <Link href={`/detail`}>
                      <h1 className="md:text-3xl text-lg font-semibold text-amber-50">
                        {item?.name}
                      </h1>
                    </Link>
                    <p className="text-gray-400 md:text-sm text-xs max-w-96 line-clamp-2">
                      {item?.description}
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-4">
                    <Link href={"/detail"}>
                      <Button
                        variant="contained"
                        className="bg-blue-500 hover:bg-blue-600 text-white text-xs md:text-sm px-4 py-2 rounded-lg"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
