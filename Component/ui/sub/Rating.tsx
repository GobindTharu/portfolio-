"use client";
import * as React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

// Define a type for the labels object
const labels: Record<number, string> = {
  0.5: "Useless",
  1: "Poor",
  1.5: "Average",
  2: "Decent",
  2.5: "Good",
  3: "Nice",
  3.5: "Great",
  4: "Excellent",
  4.5: "Outstanding",
  5: "Masterpiece",
};

// Function to get label text with type safety
const getLabelText = (value: number): string => {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
};

export const HoverRating: React.FC = () => {
  const [value, setValue] = React.useState<number>(3.5);
  const [hover, setHover] = React.useState<number>(-1);

  return (
    <Box className="w-52 flex items-center p-4 rounded-lg shadow-md">
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(_event, newValue) => {
          if (newValue !== null) setValue(newValue);
        }}
        onChangeActive={(_event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={
          <StarIcon className="text-white opacity-50" fontSize="inherit" />
        }
      />
      <Box className="ml-2 text-gray-300 font-medium bg-opacity-0 px-2 py-1 rounded">
        {labels[hover !== -1 ? hover : value]}
      </Box>
    </Box>
  );
};
