"use client";
import { useState } from "react";
import { Bell, Moon, Sun, Settings } from "lucide-react";

const NavbarIcons: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="flex items-center space-x-3">
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? (
          <Sun className="text-yellow-500" size={22} />
        ) : (
          <Moon className="text-gray-500" size={22} />
        )}
      </button>
      <div className="relative cursor-pointer">
        <Bell className="text-gray-500 dark:text-gray-300" size={22} />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
          4
        </span>
      </div>
      <Settings
        className="text-gray-500 dark:text-gray-300 cursor-pointer"
        size={22}
      />
    </div>
  );
};
export default NavbarIcons;
