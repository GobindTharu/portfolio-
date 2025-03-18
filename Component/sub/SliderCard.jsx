"use client";

import { Button } from "@mui/material";
import Link from "next/link";
import { Testimonials } from "@/Constants/constants";

export const SliderCard = () => {
 

  return (
    <>
      <h1 className="flex flex-1 justify-center items-center text-gray-200  text-2xl font-bold  md:text-4xl lg:text-6xl uppercase py-4 sm:py-4 lg:py- mt-16 sm:mt-1 lg:mt-6">
      Testimonials
      </h1>
      <div className="z-20 w-full overflow-x-auto whitespace-nowrap">
        <div className="flex items-center space-x-6 px-4 my-20">
          {Testimonials?.map((item, index) => (
            <div key={index} className="flex-none w-[50vw] md:w-[50vw]">
              <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 ">
                <div className="flex justify-center">
                  <Link href={"/detail"}>
                    <img
                      className="h-[14rem] md:h-[23rem] object-cover rounded-lg"
                      src={item?.Image}
                      alt={item?.name}
                      width={400}
                    />
                  </Link>
                </div>
                <div className="flex-1 flex flex-col items-center text-center md:text-left md:items-start gap-4">
                  <div className="flex flex-col gap-4">
                    <Link href={`/detail`}>
                      <h1 className="md:text-4xl text-xl font-semibold text-amber-50">
                        {item?.name}
                      </h1>
                    </Link>
                    <h1 className="flex flex-colborder border-amber-50  justify-center items-center  text-gray-400 md:text-md text-sm max-w-60  line-clamp-2">
                      {item?.description}
                    </h1>
                  </div>
                  <div className=" flex-col flex items-center justify-center gap-4">
                    <Link href={"/detail"}>
                      <Button
                        variant="outlined"
                        type={"large"}
                      
                        className="bg-blue-500 text-white text-xs md:text-sm px-4 py-1.5 rounded-lg"
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
