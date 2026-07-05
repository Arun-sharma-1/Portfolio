"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    title: "CPD",
    description:
      "CPD is a platform that allows you to list events and courses on CPD websites, helping to increase their visibility and reach a wider audience.",
    tech: [
      "Next.js",
      "TypeScript",
      "Styled-Components",
      "Redux Toolkit",
      "Ant Design",
      "NestJS",
      "Sequelize",
      "MariaDB",
      "Twilio",
    ],
    image: "/projects/cpd.jpeg",
  },
  {
    title: "Best Corporate Event",
    description:
      "An event management admin platform with multiple user roles, enabling seamless management of facilitators and their respective sites..",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: "/projects/bce.jpeg",
  },
  {
    title: "Adminify",
    description:
      "A comprehensive platform for managing Meta (Facebook) advertising campaigns with real-time insights, performance analytics, and detailed data visualization for Facebook ads.",
    tech: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "TypeORM",
      "Context API",
      "Tailwind CSS",
    ],
    image: "/projects/adminify.jpeg",
  },
  {
    title: "Portfolio",
    description:
      "A modern, responsive portfolio website designed to showcase my skills, projects, and achievements as a full stack developer.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Styled-Components",
    ],
    image: "/projects/portfolio.png",
  },
];

const ProjectScroller = () => {
  const containerRef = useRef(null);
  const wrapperRef = useRef<any>(null);
  const [screenWidth, setScreenWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateWidth = () => {
      if (wrapperRef.current) {
        setScreenWidth(wrapperRef.current.offsetWidth);
      }
      setIsMobile(window.innerWidth < 640);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -screenWidth * (projects.length - 1)]
  );

  return (
    <section
      ref={containerRef}
      style={{ height: `${projects.length * (isMobile ? 80 : 90)}vh` }}
      className="relative"
    >
      <p className="text-xl sm:text-2xl md:text-3xl leading-10 text-center font-semibold m-4 sm:m-6">
        PROJECTS
      </p>
      <div
        ref={wrapperRef}
        className="sticky top-6 h-screen overflow-hidden text-[var(--text-color)]"
      >
        <motion.div
          style={{
            x,
            width: `${projects.length * screenWidth}px`,
          }}
          className="flex h-full mt-6 sm:mt-0"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              style={{ width: `${screenWidth}px` }}
              className="h-max sm:h-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4 sm:px-6 py-4 sm:py-5 border-w-d sm:border-r-[1px] border-[var(--sec-bg-color)] overflow-y-auto"
            >
              {/* LEFT */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex-1 space-y-4 sm:space-y-6 w-full sm:w-auto"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center sm:text-left">
                  {project.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-center sm:text-left">
                  {project.description}
                </p>
                <div className="hidden sm:flex flex-wrap gap-2 sm:gap-3">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 sm:px-3 md:px-4 py-1 bg-cyan-600 text-xs sm:text-sm rounded-full whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* RIGHT */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex-1 flex flex-col items-center justify-center w-full sm:w-auto sm:h-full "
              >
                <div className="rounded-xl border-4 border-cyan-500 shadow-xl w-full max-w-full sm:max-w-[500px] mb-4 sm:mb-0 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-contain w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-lg"
                  />
                </div>
                <div className="sm:hidden flex flex-wrap gap-2 justify-center w-full px-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 sm:px-3 py-1 bg-cyan-600 text-xs sm:text-sm rounded-full whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectScroller;
