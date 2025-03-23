"use client";

import { Box, Button, MenuItem, Select } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { PreviewCard } from "./PreviewCard";
import { sections } from "@/Constants/constants";

export const ProjectView: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<string>("Collaborate");

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-6 transition gap-3">
      {/* Project Overview */}
      <PreviewCard />

      <div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl shadow-lg p-6 relative">
        {/* Desktop View */}
        <div className="hidden md:flex justify-center gap-4 mb-4">
          {sections.map(({ name, link }) => (
            <Box key={name}>
              <Button
                variant="outlined"
                className="flex flex-col bg-amber-50 items-center px-4 py-2 rounded-lg transition"
              >
                <Link href={link} className="w-full block">
                  {name}
                </Link>
              </Button>
            </Box>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex justify-center mb-4">
          <Select
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value as string)}
            className="w-full bg-gray-300 text-gray-900"
          >
            {sections.map(({ name, link }) => (
              <MenuItem key={name} value={name} className="w-full text-gray-100">
                <Link href={link} className="w-full block">
                  {name}
                </Link>
              </MenuItem>
            ))}
          </Select>
        </div>

        <div className="p-6 bg-gray-800 rounded-xl">
          <p className="text-lg text-gray-400">
            Performance and security-based Development Projects workflow
          </p>
          <p className="text-lg text-gray-400">Content for section coming soon...</p>
        </div>
      </div>
    </div>
  );
};