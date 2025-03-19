"use client"
import React from "react";
import { RxDiscordLogo, RxGithubLogo } from "react-icons/rx";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="min-w-[200px] h-auto flex items-center justify-center">
      <div className="w-auto h-auto flex flex-col items-start justify-center">
        <div className="font-bold text-[16px]"></div>
        <p className="flex flex-row items-center my-[15px] cursor-pointer">
          <span className="text-[15px] ml-[6px]">Become Sponsor</span>
        </p>
        <p className="flex flex-row items-center my-[15px] cursor-pointer">
          <span className="text-[15px] ml-[6px]">Learning about me</span>
        </p>
        <p className="flex flex-row items-center my-[15px] cursor-pointer">
          <span className="text-[15px] ml-[6px]">gobind9800@gmail.com</span>
        </p>
      </div>
      <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
        <div className="font-bold text-[16px]">About</div>
        <p className="flex flex-row items-center my-[15px] cursor-pointer">
          <span className="text-[15px] ml-[6px]">Become Sponsor</span>
        </p>
        <p className="flex flex-row items-center my-[15px] cursor-pointer">
          <span className="text-[15px] ml-[6px]">Learning about me</span>
        </p>
        <p className="flex flex-row items-center my-[15px] cursor-pointer">
          <span className="text-[15px] ml-[6px]">gobind9800@gmail.com</span>
        </p>
      </div>
      </div>

      <div className="mb-[20px] text-[15px] text-center">
        <div className=" flex justify-center gap-3 m-[2px] p-[2px] text-[15px] text-center">
          <a
            href="https://www.facebook.com/balgobind422/"
            className=" flex justify-center  border rounded-full items-center gap-12 m-[2px] p-[12px] text-[15px] text-center"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/balgobind422"
            className=" flex justify-center  border rounded-full items-center gap-12 m-[2px] p-[12px] text-[15px] text-center"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/balgobind422"
            className=" flex justify-center  border rounded-full items-center gap-12 m-[2px] p-[12px] text-[15px] text-center"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/GobindTharu"
            className=" flex justify-center  border rounded-full items-center gap-12 m-[2px] p-[12px] text-[15px] text-center"
          >
            <RxGithubLogo />
          </a>
          <a
            href="#"
            className=" flex justify-center  border rounded-full items-center gap-12 m-[2px] p-[12px] text-[15px] text-center"
          >
            <RxDiscordLogo />
          </a>
          <a
            href="#"
            className=" flex justify-center  border rounded-full items-center gap-12 m-[2px] p-[12px] text-[15px] text-center"
          >
            <FaYoutube/>
          </a>
        </div>

        <div className="my-[20px] text-[15px] text-center">
          &copy; Balgobind Chaudhary 2025 . All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
