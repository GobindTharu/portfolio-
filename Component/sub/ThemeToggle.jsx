"use client";
import { useEffect, useState } from "react";
import { DarkMode, LightMode } from "@mui/icons-material";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check theme preference from localStorage
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all"
    >
      {darkMode ? (
        <LightMode className="text-yellow-500" />
      ) : (
        <DarkMode className="text-gray-900" />
      )}
    </button>
  );
};

export default ThemeToggle;
