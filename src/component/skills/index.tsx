import Link from "next/link";
import React from "react";

const SkillsSection = () => {
  const skillNameArray = [
    "javascript.svg",
    "typescript.svg",
    "react.svg",
    "nextjs.webp",
    "redux.svg",
    "html.svg",
    "css.svg",
    "tailwindcss.svg",
    "antd.svg",
    "mongodb.svg",
    "mysql.svg",
    "postgresql.svg",
    "docker.svg",
    "kubernetes.svg",
    "aws.svg",
  ];

  return (
    <div className="size-full flex flex-col gap-10">
      <p className="text-2xl md:text-3xl leading-10 text-center font-semibold">
        Experience and Tech Stack
      </p>

      <div className="flex lg:flex-row flex-col justify-between  lg:items-start gap-12 lg:gap-1 w-full md:w-9/12 mx-auto mt-6 lg:mt-14">
        <div className="flex gap-2 md:gap-8 justify-center items-center">
          <div className="w-20 h-20">
            <img
              className="object-cover"
              width={"100%"}
              height={"100%"}
              src={"/cloud-analogy.png"}
            />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-[14px] sm:text-[14px]">
              Full Stack Developer
            </p>
            <p className="font-semibold text-[12px] sm:text-[14px]">
              <Link target="_blank" href={"https://www.cloudanalogy.com/"}>
                CLOUD ANALOGY CRM SPECIALIST LIMITED
              </Link>
            </p>
            <div className="flex font-light items-center gap-1 text-[14px]">
              <p className="text-[12px] md:text-[14px]">Feb 2024 - Present </p>
              <p className="w-1 h-1 bg-[var(--sec-bg-color)] rounded-md font-light text-[12px] md:text-[14px]"></p>
              <p className="text-[12px] md:text-[14px]">Full Time</p>
            </div>
            <p className="text-[12px] md:text-[14px]">Noida , UP</p>
          </div>
        </div>

        <div
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5
                place-items-center gap-y-6 gap-x-0 lg:gap-10"
        >
          {skillNameArray?.map((img: string) => {
            return (
              <div
                key={img}
                className="relative group w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 border-2 cursor-pointer rounded-[10px] border-[#EDF2F7] bg-[#EDF2F7] text-center flex justify-center items-center
                    "
              >
                <div className="text-[10px] lg:text-[14px] min-w-20 text-center rounded-md border-2 border-white text-black absolute top-2 group-hover:-top-10 opacity-0 group-hover:opacity-100 w-fit p-1 h-fit bg-[var(--primary-color)] transition-all duration-300">
                  {img?.[0].toUpperCase() + img.substring(1, img.length - 4)}
                </div>
                <img
                  key={img}
                  src={`/skills/${img}`}
                  width={"90%"}
                  className="object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
