"use client";

import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section className="bg-white py-16 px-4 fade-in">
      <div className="mx-auto w-full max-w-[1000px]">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 px-2 md:px-4 text-left fade-in ">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-600 mb-6 font-serif text-center sm:text-left">
              About Dr. Serena Blake
            </h2>
            <p className="text-stone-500 text-base sm:text-lg leading-relaxed font-serif font-thin text-align sm:text-left">
              I’m a licensed clinical psychologist (PsyD) based in Los Angeles,
              CA, with eight years of experience and over 500 client sessions. I
              blend evidence-based methods—like cognitive-behavioral therapy and
              mindfulness—with personalized, compassionate care to help you
              manage anxiety, improve relationships, and recover from trauma.
              Whether we meet in my Maplewood Drive office or connect virtually
              through Zoom, I’m here to support your growth in a safe,
              understanding environment.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex justify-center fade-in ">
            <Image
              src="/images/dr.serena blake.jpg"
              alt="Dr. Serena Blake"
              width={350}
              height={500}
              className="rounded-md object-cover w-full max-w-xs sm:max-w-sm md:max-w-[400px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
