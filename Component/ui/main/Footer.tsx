"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

interface SocialLink {
  href: string;
  Icon: React.ElementType;
}

const socialLinks: SocialLink[] = [
  { href: "https://www.facebook.com/balgobind422", Icon: Facebook },
  { href: "https://www.linkedin.com/in/balgobind422/", Icon: Linkedin },
  { href: "https://www.instagram.com/balgobind422/", Icon: Instagram },
  { href: "https://github.com/GobindTharu", Icon: Github },
  { href: "https://x.com/", Icon: Twitter },
  { href: "https://www.youtube.com/", Icon: Youtube },
];

export  const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 mt-12">
      <div className="w-full flex flex-col items-center container mx-auto px-6 py-12">
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-5 my-5">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              <a href="#about-me" className="flex items-center">
                <Image
                  src="/next.png"
                  alt="logo"
                  width={40}
                  height={40}
                  className="cursor-pointer hover:animate-slowspin"
                />
                <span className="font-bold uppercase text-xl ml-2 text-gray-300">
                  Portfolio
                </span>
              </a>
            </h2>
            <p className="text-sm">
              Providing quality products and excellent customer service
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 text-center">
              Quick Links
            </h3>
            <ul className="flex flex-col items-center space-y-2">
              {["Home", "About", "Skill", "Project", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 text-center">
              Legal
            </h3>
            <ul className="flex flex-col items-center space-y-2">
              {["Privacy Policy", "Terms and Conditions", "Return Policy"].map(
                (item, index) => (
                  <li key={index}>
                    <Link
                      href={`/${item.replace(/ /g, "").toLowerCase()}`}
                      className="hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <Divider className="my-16 bg-gray-600 w-full" />
        <div className="my-5 text-center text-sm">
          <div className="flex justify-center  mb-2">
            {socialLinks.map(({ href, Icon }, index) => (
              <Link key={index} href={href} passHref>
                <Button variant="text">
                  <Icon className="h-7 w-7" />
                </Button>
              </Link>
            ))}
          </div>
          &copy; Balgobind Chaudhary 2025. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
