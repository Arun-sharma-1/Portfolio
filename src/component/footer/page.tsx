import React from "react";
// import Link from "next/link";
// import { Github, Instagram, Linkedin, MessageCircle } from "lucide-react";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  Whatsapp,
} from "@/lib/Icon";
const Footer = () => {
  const socialIconArray = [
    { icon: <LinkedinIcon width="100%" height="100%" />, link: "https://www.linkedin.com/in/arun31" },
    { icon: <GithubIcon width="30px" height="30px" />, link: "https://github.com/Arun-sharma-1" },
    { icon: <Whatsapp width="30px" height="30px" />, link: "https://wa.me/9116016932" },
    { icon: <InstagramIcon width="30px" height="30px" />, link: "https://instagram.com/arun.sharma.31" },
  ];
  return (
    <div className="w-full m-5 md:max-w-9/12 mx-auto h-full flex justify-between mt-10 items-center gap-6 p-3 box-border">
      <div className="w-3/6 md:w-4/6 text-[10px] md:text-[14px]">
        Page Created by Arun Sharma @2025. All Rights Reserved
      </div>
      <div className="flex gap-5 md:gap-5 justify-between items-start">
        {socialIconArray?.map((img: any, idx: number) => (
          <a
            href={img.link}
            className="flex gap-6 cursor-pointer"
            key={img?.icon + idx}
            target="_blank"
          >
            <div className="md:hover:h-[33px] md:hover:w-[33px] h-[20px] w-[20px] md:h-[30px] md:w-[30px] transition-all duration-300">
              {img?.icon}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
