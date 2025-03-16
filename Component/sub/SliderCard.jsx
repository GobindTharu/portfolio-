"use client";

import { Button } from "@mui/material";
import Link from "next/link";
import Slider from "react-slick";
import { Testimonials } from "@/Constants/constants";

export const SliderCard = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="z-20 w-full overflow-x-auto whitespace-nowrap">
      <div className="flex items-center space-x-6 px-4 my-20">
        {Testimonials?.map((item, index) => (
          <div key={index} className="flex-none w-[80vw] md:w-[50vw]">
            <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6">
              <div className="flex justify-center">
                <Link href={"/detail"}>
                  <img
                    className="h-[14rem] md:h-[23rem] object-cover rounded-lg"
                    src={item?.Image}
                    alt={item?.name}
                  />
                </Link>
              </div>
              <div className="flex-1 flex flex-col items-center text-center md:text-left md:items-start gap-4">
                <h2 className="text-gray-500 text-xs md:text-base uppercase">
                  Testimonials
                </h2>
                <div className="flex flex-col gap-4">
                  <Link href={`/detail`}>
                    <h1 className="md:text-4xl text-xl font-semibold text-amber-50">
                      {item?.name}
                    </h1>
                  </Link>
                  <h1 className="text-gray-600 md:text-sm text-xs max-w-96 line-clamp-2">
                    {item?.description}
                  </h1>
                </div>
                <div className=" flex-col flex items-center justify-center gap-4">
                  <Link href={"/detail"}>
                    <button className="bg-blue-500 text-white text-xs md:text-sm px-4 py-1.5 rounded-lg">
                      Learn More
                    </button>
                  </Link>
                  <Button variant="underlined" type={"large"} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
