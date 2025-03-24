"use client";
import React, { useState, useEffect } from "react";

const LetterWriting: React.FC = () => {
  const letterText = `An algorithm is a step-by-step set of instructions designed to solve a specific problem or perform a task. It serves as a blueprint for computations, enabling a computer or human to process data systematically and produce a desired outcome. Algorithms are widely used in computer science, mathematics, and everyday problem-solving.

An algorithm consists of a finite sequence of steps, ensuring that it eventually terminates with a result. It takes input, processes it through a series of well-defined operations, and produces an output. Algorithms must be clear, unambiguous, and efficient, meaning they should be easy to understand and optimized for performance.

Algorithms can be classified based on their approach, such as brute force, divide and conquer, greedy algorithms, dynamic programming, and more. They are fundamental in areas like searching (e.g., binary search), sorting (e.g., quicksort, mergesort), and pathfinding (e.g., Dijkstra's algorithm).

In programming, algorithms are implemented using different programming languages. The efficiency of an algorithm is often measured in terms of time complexity (how fast it runs) and space complexity (how much memory it uses). Choosing the right algorithm for a given problem can significantly impact performance, making algorithm design a crucial skill in software development. 
{""}
  Dear Friend,
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
