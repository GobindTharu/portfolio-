"use client";

import { useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 2000); // Ensures video plays for at least 3 seconds
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (!loading) return null;

  return (
    <div className="h-full w-full z-100 fixed inset-0 flex items-center justify-center bg-black transition-opacity duration-500">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        onEnded={() => setLoading(false)}
      >
        <source src="/forest.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Preloader;
