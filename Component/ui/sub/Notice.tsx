"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function Notice() {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 9000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showPopup && (
        <div className="absolute w-full h-full flex items-center justify-center z-50">
          <div
            className="absolute inset-0 backdrop-blur-md"
            onClick={() => setShowPopup(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed z-50 bg-gray-200 shadow-lg rounded-xl text-center flex flex-col items-center w-full md:max-w-md p-6 relative"
          >
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
              onClick={() => setShowPopup(false)}
            >
              <X size={20} />
            </button>
            <h2 className="text-lg font-semibold">Notice</h2>
            <p className="text-gray-600 mt-2">
              Welcome to my website. I am working more on my website. So all
              components are not well managed!!!
            </p>
          </motion.div>
        </div>
      )}
    </>
  );
}
