import { DarkMode } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <IconButton onClick={toggleDarkMode} color="inherit">
      {darkMode ? (
        <MdLightMode className="text-yellow-400" />
      ) : (
        <MdDarkMode className="text-gray-700" />
      )}
    </IconButton>
  );
};

export default DarkMode;
