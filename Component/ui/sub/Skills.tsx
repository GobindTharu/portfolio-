"use client";

import React from "react";
import {
  Backend_skill,
  Frontend_skill,
  Other_skill,
} from "@/Constants/constants";
import { Card } from "@heroui/react";
import { Button } from "@mui/material";
import Image from "next/image";

// Define type for skill items
interface SkillItem {
  skill_name: string;
  Image: string;
}

export const Skills: React.FC = () => {
  return (
    <section className="flex flex-col items-center py-12 px-6 gap-b-10">
      {/* Title */}
      <h1 className="text-gray-200 text-3xl md:text-5xl font-bold uppercase mb-8">
        Skills
      </h1>

      {/* Frontend Skills */}
      <h3 className="w-full max-w-7xl text-gray-200 text-xl md:text-2xl font-bold uppercase mb-2">
        FrontEnd Skills
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 w-full max-w-7xl mb-20">
        {Frontend_skill.map((item: SkillItem, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-900 p-5 rounded-xl shadow-lg transition-transform hover:scale-105"
          >
            <Card className="w-full h-26 md:h-40 lg:h-50 rounded-lg overflow-hidden shadow-md">
              <Image
                src={item.Image}
                width={200}
                height={400}
                alt={item.skill_name}
                className="w-full h-full"
              />
            </Card>

            <h2 className="text-lg font-semibold text-gray-200 mt-5">
              {item.skill_name}
            </h2>

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

      {/* Backend Skills */}
      <h3 className="w-full max-w-7xl text-gray-200 text-xl md:text-2xl font-bold uppercase mb-2">
        Backend Skills
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl mb-20">
        {Backend_skill.map((item: SkillItem, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-900 p-5 rounded-xl shadow-lg transition-transform hover:scale-105"
          >
            <Card className="w-full h-26 md:h-40 lg:h-50 rounded-lg overflow-hidden shadow-md">
              <Image
                src={item.Image}
                width={200}
                height={400}
                alt={item.skill_name}
                className="w-full h-full"
              />
            </Card>
            <h2 className="text-lg font-semibold text-gray-200 mt-5">
              {item.skill_name}
            </h2>

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

      {/* Learning Skills */}
      <h3 className="text-gray-200 w-full max-w-7xl text-xl md:text-2xl font-bold uppercase mb-2">
        Learning Skills
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {Other_skill.map((item: SkillItem, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-900 p-5 rounded-xl shadow-lg transition-transform hover:scale-105"
          >
            <Card className="w-full h-26 md:h-40 lg:h-50rounded-lg overflow-hidden shadow-md">
              <Image
                src={item.Image}
                width={200}
                height={400}
                alt={item.skill_name}
                className="w-full h-full"
              />
            </Card>

            <h2 className="text-lg font-semibold text-gray-200 mt-5">
              {item.skill_name}
            </h2>

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
