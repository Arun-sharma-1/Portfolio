"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { closeDrawer } from "@/redux/slices/drawer";
import React, { FC, useEffect, useState } from "react";
import { AnimatedUnderline } from "../styledComponent";
import { X } from "lucide-react";
import ResumeButton from "@/component/resumebtn";
import Link from "next/link";

interface Props {
  position?: "left" | "right" | "top" | "bottom";
}

const getInitialTransform = (position: string) => {
  switch (position) {
    case "left":
      return "-translate-x-full";
    case "right":
      return "translate-x-full";
    case "top":
      return "-translate-y-full";
    case "bottom":
      return "translate-y-full";
    default:
      return "translate-x-full";
  }
};

const getFinalTransform = () => "translate-x-0 translate-y-0";

const CustomDrawer: FC<Props> = ({ position = "right" }) => {
  const { isOpen } = useAppSelector((state) => state.drawer);
  const dispatch = useAppDispatch();

  const [shouldRender, setShouldRender] = useState(isOpen);
  const [animate, setAnimate] = useState(false);

  // When isOpen becomes true, mount and animate in
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setTimeout(() => setAnimate(true), 10); // allow DOM update before animating
    } else if (shouldRender) {
      // animate out, then unmount after animation
      setAnimate(false);
      const timeout = setTimeout(() => setShouldRender(false), 300); // match duration-300
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  // Prevent click inside drawer from closing it
  const onDrawerClick = (e: React.MouseEvent) => e.stopPropagation();

  // Animation classes
  const baseClasses =
    "fixed bg-[var(--bg-color)] shadow-lg transition-transform duration-300 ease-in-out";
  let positionClasses = "";
  const transformClass = animate
    ? getFinalTransform()
    : getInitialTransform(position);

  switch (position) {
    case "right":
      positionClasses = "top-0 right-0 h-full w-64";
      break;
    case "left":
      positionClasses = "top-0 left-0 h-full w-64";
      break;
    case "bottom":
      positionClasses = "bottom-0 left-0 w-full h-64";
      break;
    case "top":
      positionClasses = "top-0 left-0 w-full h-64";
      break;
    default:
      positionClasses = "top-0 right-0 h-full w-64";
  }
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });

      dispatch(closeDrawer());
    }
  };

  return (
    <div
      className="fixed inset-0 z-[999] bg-transparent bg-opacity-30"
      onClick={() => dispatch(closeDrawer())}
    >
      <div
        className={`${baseClasses} ${positionClasses} ${transformClass} border-l-[0.1px]  border-l-white text-[var(--text-color)]`}
        onClick={onDrawerClick}
      >
        {/* {children} */}
        <div className="relative mt-10 h-[500px] overflow-hidden flex flex-col gap-4 text-center font-semibold text-[14px] p-6">
          {/* Cross Button */}
          <button
            onClick={() => dispatch(closeDrawer())}
            className="absolute top-0 right-10 text-var[--sec-bg-color] cursor-pointer dark:hover:text-white"
          >
            <X size={24} />
          </button>

          <div
            className="cursor-pointer group mt-8"
            onClick={() => scrollToSection("skills")}
          >
            <div>SKILLS</div>
            <AnimatedUnderline />
          </div>
          <div
            className="cursor-pointer group"
            onClick={() => scrollToSection("projects")}
          >
            <div>PROJECTS</div>
            <AnimatedUnderline />
          </div>
          <div
            className="cursor-pointer group"
            onClick={() => scrollToSection("contact")}
          >
            <div>CONTACT</div>
            <AnimatedUnderline />
          </div>
          <Link href={`/doc/resume.pdf`} target="_blank">
            <ResumeButton text="RESUME" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomDrawer;
