"use client";

import { useEffect } from "react";

const DisableRightClick = () => {
  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.ctrlKey &&
        (event.key === "u" ||
          event.key === "s" ||
          event.key === "c" ||
          event.key === "p")
      ) {
        event.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
};

export default DisableRightClick;
