"use client";
import React from "react";
import ResumeButton from "../resumebtn";
import { Lamp, Menu } from "lucide-react";
import useTheme from "@/hooks/useTheme";
import Link from "next/link";

const HeaderRootComponent = () => {
  const [currentTheme, setCurrentTheme] = useTheme();
  const resumeHandler = () => {};
  return (
    <div className="fixed top-0 left-0 pt-[35px] back backdrop-blur-xl backdrop:fill-teal-50 md:pt-5 flex justify-evenly md:justify-between items-center w-full z-100 gap-20">
      <div className="text-1xl font-semibold leading-1.5 md:ml-[200px]">
        ARUN
      </div>
      <div className="flex gap-[15px] md:hidden cursor-pointer">
        <Lamp
          onClick={() =>
            setCurrentTheme((prev) => (prev === "light" ? "dark" : "light"))
          }
        />
        <Menu />
      </div>
      <div className="hidden md:flex flex-row gap-6 items-center  font-semibold text-[13px] mr-[280px]">
        <div className="flex flex-col gap-1cursor-pointer">
          <div>SKILLS</div>
          <div></div>
        </div>
        <div className="cursor-pointer">PROJECTS</div>
        <div className="cursor-pointer">CONTACT</div>
        <Link href={`/doc/resume.pdf`} target="_blank">
          <ResumeButton text="RESUME" />
        </Link>
        <div className="cursor-pointer">
          <Lamp
            onClick={() =>
              setCurrentTheme((prev) => (prev === "light" ? "dark" : "light"))
            }
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderRootComponent;
