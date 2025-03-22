"use client";

import Link from "next/link";

import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import { Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 mt-12">
      <div className=" w-full flex flex-col items-center container mx-auto px-6 py-12">
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-5 my-[20px]">
          <div className="space-y-4 ">
            <h2 className="text-2xl font-bold text-white">
              <a href="#about-me" className="flex items-center">
                <Image
                  src="/next.png"
                  alt="logo"
                  width={40}
                  height={40}
                  className="flex flex-col items-center  cursor-pointer hover:animate-slowspin"
                />
                <span className="flex flex-col justify-center items-center  font-bold uppercase text-xl ml-2 md:block text-gray-300">
                  Portfolio
                </span>
              </a>
            </h2>
            <p className="text-sm">
              Providing quality products and excellent customer service
            </p>
            <div className="flex space-x-4"></div>
          </div>
          <div>
            <h3 className="flex flex-col items-center text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="flex flex-col items-center space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/skill"
                  className="hover:text-white transition-colors"
                >
                  Skill
                </Link>
              </li>
              <li>
                <Link
                  href="/project"
                  className="hover:text-white transition-colors"
                >
                  Project
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="flex flex-col items-center  text-lg font-semibold text-white mb-4">
              Legal
            </h3>
            <ul className=" flex flex-col items-center  space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="hover:text-white transition-colors"
                >
                  Return Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Divider className="my-16 bg-gray-600 w-full" />

        <div className="my-[20px] text-[15px] text-center">
          <div className=" flex justify-center gap-3 m-[2px] p-[2px] text-[15px] text-center">
            <Link href={"https://www.facebook.com/balgobind422"}>
              <Button variant="text">
                <Facebook className="h-7 w-7" />
              </Button>
            </Link>
            <Link href={"https://www.linkedin.com/in/balgobind422/"}>
              <Button variant="text">
                <Linkedin className="h-7 w-7" />
              </Button>
            </Link>
            <Link href={"#"}>
              <Button variant="text">
                <Instagram className="h-7 w-7" />
              </Button>
            </Link>
            <Link href={"#"}>
              <Button variant="text">
                <Github className="h-7 w-7" />
              </Button>
            </Link>
            <Link href={"#"}>
              <Button variant="text">
                <Twitter className="h-7 w-7" />
              </Button>
            </Link>
            <Link href={"#"}>
              <Button variant="text">
                <Youtube className="h-7 w-7" />
              </Button>
            </Link>
          </div>
          &copy; Balgobind Chaudhary 2025 . All rights reserved
        </div>
      </div>
    </footer>
  );
}
