"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden  text-white">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-2] "
      >
        <source src="/videos/waves.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/40 z-[-1]" />



      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white text-3xl md:text-6xl mt-40 mb-5 font-bold font-serif sm:mt-50 sm:mb-10 ">
          Psychological Care for
        </h1>
        <h1 className="text-white text-3xl md:text-6xl  font-bold mt-2 leading-tight font-serif  sm:mb-5">
          Change, Insight, and Well-being
        </h1>

        <p className="text-white text-lg pt-7 font-serif px-10 sm:text-2xl sm:px-20">
          Offering individual psychotherapy for adults via telehealth in
          California and{" "}
          <a
            href="https://psypact.gov/page/psypactmap"
            className="underline text-white hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            this tool
          </a>{" "}
          through PSYPACT participation.
        </p>

        <a
          href="#contact"
          className="mt-10 bg-[#6ab4a4] text-white text-lg font-medium px-8 py-3 rounded-full shadow hover:opacity-85 transition"
        >
          Schedule a Consultation
        </a>
      </div>
    </section>
  );
}
