"use client";

import { Backend_skill, Frontend_skill, Other_skill, } from "@/Constants/constants";
import { Card } from "@heroui/react";
import { Button } from "@mui/material";

export const Skills = () => {
  return (
    <section className="flex flex-col items-center py-12 px-6 gap-b-10">
      {/* Title */}
      <h1 className="text-gray-200 text-3xl md:text-5xl font-bold uppercase mb-8">
        Skills
      </h1>

      <h3 className="w-full max-w-7xl text-gray-200 text-xl md:text-2xl font-bold uppercase mb-2">
        FrontEnd Skills
      </h3>

      {/* Grid Container */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full max-w-7xl mb-20">
        {Frontend_skill.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-900 p-5 rounded-xl shadow-lg  transition-transform hover:scale-105"
          >
            {/* Card Component */}
            <Card className="w-full h-40 rounded-lg overflow-hidden shadow-md">
              <img
                src={item.Image}
                alt={item.skill_name}
                className="w-full h-full"
              />
            </Card>
            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-200 mt-5">
              {item.skill_name}
            </h2>
            {/* Button */}
            <Button
              variant="outlined"
              color="primary"
              className="w-full mt-4 text-sm sm:text-base"
            >
              Explore
            </Button>
          </div>
        ))}
      </div>
      <section />

      <h3 className="w-full max-w-7xl text-gray-200 text-xl md:text-2xl font-bold uppercase mb-2">
        Backend Skills
      </h3>

      {/* Grid Container */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full max-w-7xl mb-20">
        {Backend_skill.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-900 p-5 rounded-xl shadow-lg  transition-transform hover:scale-105"
          >
            {/* Card Component */}
            <Card className="w-full h-40 rounded-lg overflow-hidden shadow-md">
              <img
                src={item.Image}
                alt={item.skill_name}
                className="w-full h-full"
              />
            </Card>
            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-200 mt-5">
              {item.skill_name}
            </h2>
            {/* Button */}
            <Button
              variant="outlined"
              color="primary"
              className="w-full mt-4 text-sm sm:text-base"
            >
              Explore
            </Button>
          </div>
        ))}
      </div>

      <h3 className="text-gray-200 w-full max-w-7xl text-xl md:text-2xl font-bold uppercase mb-2">
        Learning Skills
      </h3>

      {/* Grid Container */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full max-w-7xl">
        {Other_skill.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-900 p-5 rounded-xl shadow-lg  transition-transform hover:scale-105"
          >
            {/* Card Component */}
            <Card className="w-full h-40 rounded-lg overflow-hidden shadow-md">
              <img
                src={item.Image}
                alt={item.skill_name}
                className="w-full h-full"
              />
            </Card>
            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-200 mt-5">
              {item.skill_name}
            </h2>
            {/* Button */}
            <Button
              variant="outlined"
              color="primary"
              className="w-full mt-4 text-sm sm:text-base"
            >
              Explore
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};
