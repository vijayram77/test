"use client";

import gsap from "gsap";
import React, { useRef } from "react";
import Section from "./Section";

const SwitchableTabs = () => {
  const ref = useRef();
  const underLineRef = useRef();

  // GSAP Animations
  const handleWorkTabClick = () => {
    gsap.to(ref.current, { x: "0%", duration: 0.7 });
    gsap.to(underLineRef.current, {
      x: "0%",
      duration: 1.2,
      keyframes: [{ width: "60%" }, { width: "50%" }],
      ease: "power4.out",
    });
    gsap.to(".education", { color: "#afafaf" });
    gsap.to(".work", { color: "#ffffff" });
  };

  const handleEducationTabClick = () => {
    gsap.to(ref.current, { x: "-100%", duration: 0.7 });
    gsap.to(underLineRef.current, {
      x: "100%",
      duration: 1.2,
      keyframes: [{ width: "60%" }, { width: "50%" }],
      ease: "power4.out",
    });
    gsap.to(".work", { color: "#afafaf" });
    gsap.to(".education", { color: "#ffffff" });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Tab Navigation */}
      <div className="flex relative justify-center w-fit mx-auto border-b border-zinc-800 mb-6 overflow-hidden">
        <div ref={underLineRef} className="absolute h-[2px] bg-zinc-300 w-1/2 left-0 bottom-0">
        <div className="absolute w-[80%] left-1/2 -translate-x-1/2 h-[200%] blur-md bg-zinc-50 bottom-0"></div>
        
        </div>
        <button
          onClick={handleWorkTabClick}
          className="px-6 tracking-tight py-2 text-base md:text-xl font-[Gilroy] font-semibold work text-[#ffffff] transition-all w-[120px]"
        >
          Work
        </button>
        <button
          onClick={handleEducationTabClick}
          className="px-6 tracking-tight py-2 text-base md:text-xl font-[Gilroy] font-semibold education text-zinc-400 transition-all w-[120px]"
        >
          Education
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-[#151515] rounded-lg shadow-md p-4 md:p-6 text-gray-200 relative overflow-hidden">
        <div ref={ref} className="flex">
          {/* Work Tab Content */}
          <div className="min-w-full px-[5vw] py-2 flex flex-col gap-6">
            <Section
              Period="June 2024 - July 2024"
              Title="Technical Hub"
              subtitle="Frontend Developer Internship"
            />
          </div>

          {/* Education Tab Content */}
          <div className="min-w-full px-[5vw] py-2 flex flex-col gap-6">
            <Section
              Period="August 2022 - April 2026 (Expected)"
              Title="Aditya College Of Engineering & Technology"
              subtitle="B.Tech in Electronics And Communication Engineering"
              remarks="CGPA : 7.5"
            />
            <Section
              Period="August 2020 - May 2022"
              Title="Government Junior College"
              subtitle="Intermediate in MPC"
              remarks="Percentage : 67"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchableTabs;
