"use client";
import React, { useEffect, useState } from "react";
import ResumeButton from "../resumebtn";
import { Lamp, Menu, X } from "lucide-react";
import useTheme from "@/hooks/useTheme";
import Link from "next/link";
import { AnimatedUnderline } from "@/lib/commonElements/styledComponent";
import { useDispatch } from "react-redux";
import { closeDrawer, openDrawer } from "@/redux/slices/drawer";

const HeaderRootComponent = () => {
  const [currentTheme, setCurrentTheme] = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      dispatch(closeDrawer());
    }
  };

  const menuHandler = () => {
    dispatch(
      openDrawer({
        children: (
          <div className="relative mt-10 flex flex-col gap-4 text-center font-semibold text-[14px] p-6">
            {/* Cross Button */}
            <button
              onClick={() => dispatch(closeDrawer())}
              className="absolute top-0 right-10 text-var[--sec-bg-color] cursor-pointer dark:hover:text-white"
            >
              <X size={24} />
            </button>

            <div className="cursor-pointer group mt-8" onClick={() => scrollToSection("skills")}>
              <div>SKILLS</div>
              <AnimatedUnderline />
            </div>
            <div className="cursor-pointer group" onClick={() => scrollToSection("project")}>
              <div>PROJECTS</div>
              <AnimatedUnderline />
            </div>
            <div className="cursor-pointer group" onClick={() => scrollToSection("contact")}>
              <div>CONTACT</div>
              <AnimatedUnderline />
            </div>
            <Link href={`/doc/resume.pdf`} target="_blank">
              <ResumeButton text="RESUME" />
            </Link>
          </div>
        ),
        isOpen: true,
      })
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`fixed top-0 left-0  ${
        scrolled ? "pt-3" : "pt-[35px] md:pt-5"
      } transition-all duration-300 back backdrop-blur-xl backdrop:fill-teal-50  flex justify-evenly md:justify-between items-center w-full z-100 gap-20`}
    >
      <div className="text-1xl font-semibold leading-1.5 md:ml-[200px] cursor-pointer" onClick={() => scrollToSection("hero")}>
        ARUN
      </div>

      {/* mobile view  */}
      <div className="flex gap-[15px] md:hidden cursor-pointer">
        <Lamp
          onClick={() =>
            setCurrentTheme((prev) => (prev === "light" ? "dark" : "light"))
          }
        />
        <div onClick={menuHandler} className="cursor-pointer">
          <Menu />
        </div>
      </div>

      {/* desktop view */}
      <div className="hidden md:flex flex-row gap-6 items-center  font-semibold text-[13px] mr-[280px]">
        <div className="flex flex-col gap-1 cursor-pointer group pt-2">
          <div className="" onClick={() => scrollToSection("skills")}>SKILLS</div>
          <AnimatedUnderline />
        </div>
        <div className="flex flex-col gap-1 cursor-pointer group pt-2" onClick={() => scrollToSection("projects")}>
          <div className="">PROJECTS</div>
          <AnimatedUnderline />
        </div>
        <div className="flex flex-col gap-1 cursor-pointer group pt-2" onClick={() => scrollToSection("contact")}>
          <div className="">CONTACT</div>
          <AnimatedUnderline />
        </div>
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
