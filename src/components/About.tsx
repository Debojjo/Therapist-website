"use client";

import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section className="bg-white py-16 px-4 sm:px-20 ">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* ✅ Text Content */}
        <div className="w-full md:w-1/2  sm:w-1/2 text-left sm:pl-px-30 pl-5 md:ml-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-600 mb-6 font-serif">
            About Dr. Serena Blake
          </h2>
          <p className="text-stone-500 text-base sm:text-lg leading-relaxed font-serif font-thin">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, 
            with eight years of experience and over 500 client sessions. She blends evidence-based 
            approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized 
            care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you 
            meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to 
            creating a safe, supportive space for you to thrive.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex justify-center mt-5">
          <Image
            src="/images/dr.serena blake.jpg"
            alt="Dr. Serena Blake"
            width={400}
            height={400}
            className="rounded-md object-cover max-h-[500px] w-auto h-auto md:w-[400px] md:h-[1000px]"
          />
        </div>
      </div>
    </section>
  );
}
