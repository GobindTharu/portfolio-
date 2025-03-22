"use client";

import * as React from "react";
import { Button } from "@mui/material";
import Link from "next/link";
import { Testimonials } from "@/Constants/constants";

export const Testimonial = () => {
  return (
    <>
      <h1 className="flex flex-1 justify-center items-center text-gray-200 text-2xl font-bold md:text-4xl lg:text-6xl uppercase py-4 sm:py-4 lg:py- mt-16 sm:mt-1 lg:mt-6">
        Testimonials
      </h1>
      <div className="z-20 w-full overflow-x-auto whitespace-nowrap">
        <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-x-6 px-4 my-20">
          {Testimonials?.map((item, index) => (
            <div
              key={index}
              className="flex-none w-[90vw] sm:w-[50vw] md:w-[50vw]"
            >
              <div className="flex flex-col sm:flex-row items-center justify-start w-full gap-5">
                <Link href={"/detail"}>
                  <img
                    className="h-[14rem] md:h-[23rem] object-cover rounded-lg"
                    src={item?.Image}
                    alt={item?.name}
                    width={400}
                  />
                </Link>

                <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-5">
                  <Link href={"/detail"}>
                    <h1 className="md:text-4xl text-xl font-semibold text-amber-50">
                      {item?.name}
                    </h1>
                  </Link>
                  <div className="flex p-6 bg-opacity-0 rounded-xl">
                    <p className="text-lg text-gray-200">Hello</p>
                  </div>


                  <Link href={"/detail"}>
                    <Button
                      variant="outlined"
                      type="large"
                      className="bg-blue-500 border border-e-amber-50 text-white text-xs md:text-sm px-4 py-1.5 rounded-lg"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
