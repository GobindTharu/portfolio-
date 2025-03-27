"use client";
import React from "react";
import { Download } from "lucide-react";
import { Button } from "@mui/material";

const Portfolio: React.FC = () => {
  const handleDownload = async () => {
    const imageUrl = "/PortfolioImage.png"; 
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "BalGobind's_Portfolio.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col items-center gap-5 mx-12 sm:mx-4">
      <img
        src="/PortfolioImage.png"
        alt="resume"
        className="rounded-md shadow-lg shadow-indigo-500/100 my-16 "
      />
      <Button
        variant="contained"
        onClick={handleDownload}
        className="flex gap-6"
      >
        <Download size={16} /> Download my cv
      </Button>
    </div>
  );
};

export default Portfolio;
