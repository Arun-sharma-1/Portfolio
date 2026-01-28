"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { closeDrawer } from "@/redux/slices/drawer";
import React, { FC, useEffect, useState } from "react";

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
  const { isOpen, children } = useAppSelector((state) => state.drawer);
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

  return (
    <div
      className="fixed inset-0 z-[999] bg-transparent bg-opacity-30"
      onClick={() => dispatch(closeDrawer())}
    >
      <div
        className={`${baseClasses} ${positionClasses} ${transformClass} border-l-[0.1px]  border-l-white text-[var(--text-color)]`}
        onClick={onDrawerClick}
      >
        {children}
      </div>
    </div>
  );
};

export default CustomDrawer;
