"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import SearchComponent from "./Search";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-6 md:px-10 sm:px-8 lg:px-16">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        {/* Logo */}
        <a href="#about-me" className="flex items-center">
          <Image
            src="/next.png"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold uppercase text-xl ml-2 md:block text-gray-300">
            Portfolio
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 text-gray-200 text-sm font-medium">
          <a href="#about-me" className="cursor-pointer uppercase">
            About
          </a>
          <a href="#skills" className="cursor-pointer uppercase">
            Skills
          </a>
          <a href="#projects" className="cursor-pointer uppercase">
            Projects
          </a>
          <a href="#testimonials" className="cursor-pointer uppercase">
            Testimonials
          </a>
          <a href="#contact" className="cursor-pointer uppercase">
            Contact
          </a>
        </div>
        <div className="flex">
          <SearchComponent />

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-[65px] right-0 w-[60vw]  h-[80vh] bg-[#030014] backdrop-blur-md shadow-md flex flex-col items-center py-12 space-y-4 text-gray-200 text-sm font-medium ">
          <a
            href="#about-me"
            className="flex flex-col items-center w-100 cursor-pointer uppercase  py-4 hover:tracking-widest hover:bg-[#878788]"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#skills"
            className="flex flex-col items-center w-100 cursor-pointer uppercase  py-4  hover:tracking-widest hover:bg-[#878788]"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="flex flex-col items-center w-100 cursor-pointer uppercase  py-4  hover:tracking-widest hover:bg-[#878788]"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#testimonials"
            className="flex flex-col items-center w-100 cursor-pointer uppercase  py-4  hover:tracking-widest hover:bg-[#878788]"
            onClick={() => setIsOpen(false)}
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="flex flex-col items-center w-100 cursor-pointer uppercase  py-4  hover:tracking-widest hover:bg-[#878788]"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
