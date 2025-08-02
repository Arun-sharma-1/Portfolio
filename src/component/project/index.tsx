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
    image: "/images/studynotion.png",
  },
  {
    title: "Best Corporate Event",
    description:
      "An event management admin platform with multiple user roles, enabling seamless management of facilitators and their respective sites..",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: "/images/foodiezone.png",
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

  useEffect(() => {
    const updateWidth = () => {
      if (wrapperRef.current) {
        setScreenWidth(wrapperRef.current.offsetWidth);
      }
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
      style={{ height: `${projects.length * 90}vh` }}
      className="relative"
    >
      <p className="text-2xl md:text-3xl leading-10 text-center font-semibold m-6">
        PROJECTS
       </p>
      <div
        ref={wrapperRef}
        className="sticky top-0 h-screen overflow-hidden text-[var(--text-color)]"
      >
        <motion.div
          style={{
            x,
            width: `${projects.length * screenWidth}px`,
          }}
          className="flex h-full"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              style={{ width: `${screenWidth}px` }}
              className="h-full flex flex-row items-center justify-center gap-6 px-4 py-5 border-[1px] border-[var(--sec-bg-color)]"
            >
              {/* LEFT */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex-1 space-y-6"
              >
                <h2 className="text-3xl sm:text-4xl font-bold ">
                  {project.title}
                </h2>
                <p className="text-base sm:text-lg">{project.description}</p>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 md:px-4 py-1 bg-cyan-600 text-sm rounded-full"
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
                className="flex-1 flex justify-center"
              >
                <div className="rounded-xl  border-4 border-cyan-500 shadow-xl w-full max-w-[450px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-unset w-full h-[300px] sm:h-[400px]"
                  />
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
