"use client"
import { DEFAULT_NAME } from "@/Constants/constants";
import React, { useState } from "react";

const DynamicName: React.FC = () => {
  const [name, setName] = useState(DEFAULT_NAME); // Use constant as default value

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div className="p-4 border rounded-md">
      <h2 className="text-xl font-bold mb-4">Dynamic Name Component</h2>
      <p className="mt-2 text-lg text-amber-50">{name ? name : "there"}!</p>
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
        className="border p-2 rounded-md text-amber-100"
        placeholder="Enter your name"
      />
    </div>
  );
};

export default DynamicName;
