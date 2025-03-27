"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Notice() {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 9000); // Popup disappears after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute w-full h-full flex items-center justify-center z-100">
      <div
        className={`absolute inset-0 transition-all ${showPopup ? "backdrop-blur-md" : ""}`}
      />


      {/* Popup */}
      {showPopup && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed z-50 bg-gray-200 shadow-lg rounded-xl text-center flex flex-col items-center w-full md:max-w-7xl h-50"
        >
          <h2 className="text-lg font-semibold">Notice</h2>
          <p className="text-gray-600">
            Welcome to my website. I am working more on my website. So all components are not well managed !!!
          </p>
        </motion.div>
      )}
    </div>
  );
}
