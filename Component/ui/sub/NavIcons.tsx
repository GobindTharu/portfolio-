"use client";
import { useState } from "react";
import { Moon, Sun} from "lucide-react";

const NavbarIcons = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="flex items-center space-x-3 ">
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? (
          <Sun className="text-yellow-500" size={22} />
        ) : (
          <Moon className="text-gray-300" size={22} />
        )}
      </button>
      
    </div>
  );
};
export default NavbarIcons;
