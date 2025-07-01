"use client";

import React from "react";
import Image from "next/image"; 

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

      <header className="absolute top-0 left-0 w-full px-6 py-10 flex justify-between items-center bg-[#f9f6f1] z-10">

        <div className="flex items-center gap-3 cursor-pointer ">
          <Image
            src="/images/header-logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />

          <div className="text-black leading-tight">
            <p className="text-md font-light font-serif text-emerald-950">
              Dr. Serena Blake, Psy.D.
            </p>
            <p className="text-md font-light text-emerald-950 font-serif">Psychological Services</p>
          </div>
        </div>

        <div className="text-3xl text-black cursor-pointer ">
          &#9776;
        </div>
      </header>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white text-3xl md:text-6xl mt-40 mb-5 font-bold font-serif sm:mt-50 sm:mb-10 ">
          Psychological Care for
        </h1>
        <h1 className="text-white text-3xl md:text-6xl  font-bold mt-2 leading-tight font-serif  sm:mb-5">
          Change, Insight, and Well-being
        </h1>

        <p className="text-white text-sm  pt-7  font-serif sm:text-2xl">
          Offering individual psychotherapy for adults via telehealth in California and 
          <span className="underline cursor-pointer"> most U.S. states </span>
             through PSYPACT participation.
        </p>

        <a
          href="#contact"
          className="mt-8 bg-[#a6c4be] text-white text-sm font-medium px-8 py-3 rounded-full shadow hover:opacity-90 transition"
        >
          Schedule a Consultation
        </a>
      </div>

    </section>
  );
}





