"use client";
import React from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const widthValue = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const width = useMotionTemplate`${widthValue}%`;
  return (
    <motion.div
      initial={{ width: 0 }}
      style={{ width }}
      className="fixed left-0 top-0 z-[9999] h-1  bg-[var(--sec-bg-color)]"
    ></motion.div>
  );
};

export default ProgressBar;
