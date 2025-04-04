"use client";
import React, { useState, useEffect } from "react";

const LetterWriting: React.FC = () => {
  const letterText = `Dear Friend,
I hope this letter finds you well.
It has been a long time since we last spoke.
I wanted to share some exciting news with you.
Looking forward to hearing from you soon.
Best regards,
Your Friend.`;

  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isWriting, setIsWriting] = useState(false);

  useEffect(() => {
    if (isWriting && charIndex < letterText.length) {
      const timer = setTimeout(() => {
        setDisplayText((prevText) => prevText + letterText[charIndex]);
        setCharIndex((prevIndex) => prevIndex + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [charIndex, letterText, isWriting]);

  const startWriting = () => {
    setDisplayText("");
    setCharIndex(0);
    setIsWriting(true);
  };

  return (
    <div className="p-4 bg-gray-100 border rounded-md max-w-lg mx-auto mt-10 shadow-lg">
      <h2 className="text-xl font-bold mb-2">Letter Writing</h2>
      <button
        onClick={startWriting}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
      >
        Start Writing
      </button>
      <div className="whitespace-pre-wrap font-mono bg-white p-4 border rounded shadow-sm">
        {displayText}
      </div>
    </div>
  );
};

export default LetterWriting;
