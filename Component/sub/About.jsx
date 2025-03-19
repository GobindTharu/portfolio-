"use client"
import { Button, MenuItem, Select } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const sections = [
  { name: "Code", link: "/code" },
  { name: "Plan", link: "/plan" },
  { name: "Collaborate", link: "/collaborate" },
  { name: "Automate", link: "/automate" },
  { name: "Secure", link: "/secure" },
];

export const About = () => {
  const [selectedSection, setSelectedSection] = useState("Collaborate");

  return (
    <div className="border-amber-50 border flex items-end min-h-screen p-6 transition">
      <div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl shadow-lg p-6 relative">
        <div className="absolute top-4 right-4"></div>

        {/* Desktop View */}
        <div className="hidden md:flex justify-center gap-4 mb-4">
          {sections.map(({ name, link }) => (
            <Link href={link} key={name} className="flex flex-col items-center">
              <Button
                variant="outlined"
                className="flex flex-col items-center px-4 py-2 rounded-lg transition"
              >
                {name}
              </Button>
            </Link>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex justify-center mb-4">
          <Select
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value)}
            className="w-full bg-gray-700 text-gray-900"
          >
            {sections.map(({ name, link }) => (
              <MenuItem
                key={name}
                value={name}
                className="w-full text-gray-100"
              >
                <Link href={link} className="w-full block">
                  {name}
                </Link>
              </MenuItem>
            ))}
          </Select>
        </div>

        <div className="p-6 bg-gray-800 rounded-xl">
          <p className="text-lg text-gray-400">
            Work easily with your team in real-time with GitHub Pull Requests,
            code reviews, and discussions.
          </p>
          <p className="text-lg text-gray-400">
            Content for section coming soon...
          </p>
        </div>
      </div>
    </div>
  );
};
