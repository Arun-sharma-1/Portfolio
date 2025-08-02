import ContactComponent from "@/component/contact";
import Footer from "@/component/footer/page";
import HeaderRootComponent from "@/component/header";
import HeroSection from "@/component/hero";
import ProgressBar from "@/component/Progressbar";
import ProjectComponent from "@/component/project";
import SkillsSection from "@/component/skills";
import React from "react";

const RootPage = () => {
  return (
    <div className="relative p-[15px] w-full">
      {/* progress bar  */}
      <ProgressBar />
      {/* header  */}
      <HeaderRootComponent />
      {/* hero section */}
      <section className="mt-10 h-[95vh]" id="hero">
        <HeroSection />
      </section>
      {/* skills section  */}
      <section className="" id="skills">
        <SkillsSection />
      </section>
      {/* project section  */}
      <section className="mt-10" id="projects">
        <ProjectComponent />
      </section>
      {/* contact section  */}
      <section id="contact">
        <ContactComponent />
      </section>
      {/* footer section  */}
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default RootPage;
