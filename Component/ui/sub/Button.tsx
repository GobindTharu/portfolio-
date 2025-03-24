"use client";
import React from "react";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

export const Button1: React.FC<{ startWriting: () => void }> = ({
  startWriting,
}) => {
  return (
    <button
      onClick={startWriting}
      className="relative flex h-10 sm:h-12 w-full max-w-[200px] sm:max-w-[240px] md:max-w-[260px] overflow-hidden rounded-lg p-[1px] focus:outline-none"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-5 sm:px-7 text-xs sm:text-sm font-medium text-white backdrop-blur-3xl uppercase">
        Show More
      </span>
    </button>
  );
};
export const Button2: React.FC = ({
}) => {
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
    <button
      onClick={handleDownload}
      className="relative flex h-10 sm:h-12 w-full max-w-[300px] sm:max-w-[240px] md:max-w-[260px] overflow-hidden rounded-lg p-[1px] focus:outline-none"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full gap-4 cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-5 sm:px- text-xs sm:text-sm font-medium text-white backdrop-blur-3xl uppercase">
        Download CV <CloudDownloadIcon />
      </span>
    </button>
  );
};
