import Footer from "@/component/footer/page";
import HeaderRootComponent from "@/component/header";
import HeroSection from "@/component/hero";
import SkillsSection from "@/component/skills";
import React from "react";

const RootPage = () => {
  return (
    <div className="relative p-[15px] w-full">
      {/* header  */}
      <HeaderRootComponent />
      {/* hero section */}
      <section className="mt-10 h-[95vh]">
        <HeroSection />
      </section>
      {/* skills section  */}
      <section className="">
        <SkillsSection />
      </section>
      {/* footer section  */}
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default RootPage;
