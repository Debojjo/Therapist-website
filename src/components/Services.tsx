"use client";

import React from "react";
import Image from "next/image";

export default function Services() {
  return (
    <section className="bg-[#f9f6f1] py-16 px-6 text-center">
      <div className="sm:text-6xl font-thin fon mb-20 mt-15 font-serif text-stone-600  text-4xl md:text-5xl">
        Areas of Focus
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">

        <div className="flex flex-col items-center">
          <Image
            src="/images/service1.jpg"
            alt="Military & Frontline Workers"
            width={1000}
            height={1000}
            className="w-80 h-80 object-cover rounded-full mb-6"
          />
          <h3 className="text-xl font-extralight font-serif text-stone-600 mb-5">
            Anxiety & Stress Management
          </h3>
          <p className="text-stone-600 max-w-sm font-extralight font-serif ">
             Learn to navigate anxiety and chronic stress through evidence-based tools, mindfulness, and supportive therapy designed to bring more calm and control into your life.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="/images/service2.jpg"
            alt="Couples Counseling"
            width={1000}
            height={1000}
            className="w-80 h-80 object-cover rounded-full mb-6 shadow-lg"
          />
          <h3 className="text-xl font-extralight font-serif text-stone-600  mb-5">
            Relationship Counseling
          </h3>
          <p className="text-stone-600  max-w-sm font-extralight font-serif ">
            Improve communication, rebuild trust, and foster stronger connections with guidance tailored to your relationship goals—whether with a partner, family, or friend.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="/images/service3.jpg"
            alt="Child Therapy"
            width={1000}
            height={1000}
            className="w-80 h-80 object-cover rounded-full mb-6 shadow-lg"
          />
          <h3 className="text-xl font-extralight font-serif text-stone-600 mb-5">
            Trauma Recovery
          </h3>
          <p className="text-stone-600  max-w-sm font-extralight font-serif ">
             Heal from past trauma with compassionate support and trauma-informed approaches that prioritize safety, resilience, and emotional strength.
          </p>
        </div>
      </div>
    </section>
  );
}
