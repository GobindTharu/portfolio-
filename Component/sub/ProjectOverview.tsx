"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/Utils/cn";
import { sections } from "@/Constants/constants";
import { Button } from "@heroui/react";

interface Section {
  name: string;
  link: string;
  imageUrl: string;
}

export const ProjectOverview: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("Collaborate");

  return (
    <div className={cn("min-h-screen p-6 transition")}>
      <div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl shadow-lg p-6 relative">
        <div className="flex justify-center gap-4 mb-4">
          {sections.map((item: Section, index: number) => (
            <Link key={index} href={item.link} passHref>
              <Button
                className={cn(
                  "flex flex-col items-center px-4 py-2 rounded-lg transition",
                  activeSection === item.name
                    ? "bg-gray-700"
                    : "bg-gray-800 hover:bg-gray-700"
                )}
                onClick={() => setActiveSection(item.name)}
              >
                <Image
                  src={`/${item.imageUrl}`} // Ensure the correct path
                  alt={item.name}
                  width={40}
                  height={40}
                  className="mb-2"
                />
                {item.name}
              </Button>
            </Link>
          ))}
        </div>

        <div className="p-6 bg-gray-800 rounded-xl">
          {activeSection === "Collaborate" ? (
            <p className="text-lg">
              Work easily with your team in real-time with GitHub Pull Requests,
              code reviews, and discussions.
            </p>
          ) : (
            <p className="text-lg">
              Content for {activeSection} section coming soon...
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
