"use client";

import React from "react";
import Image from "next/image";

export default function Services() {
  return (
    <section className="bg-[#f9f6f1] py-16 px-6 text-center">
      <h2 className="sm:text-6xl font-thin fon mb-20 mt-15 font-serif text-stone-600  text-4xl md:text-5xl">
        Areas of Focus
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">

        <div className="flex flex-col items-center">
          <Image
            src="/images/service1.jpg"
            alt="Military & Frontline Workers"
            width={1000}
            height={1000}
            className="w-80 h-80 object-cover rounded-full mb-6 shadow-lg"
          />
          <h3 className="text-xl font-semibold font-serif text-emerald-950 mb-5">
            Therapy for Frontline Families
          </h3>
          <p className="text-gray-700 max-w-sm">
            Support for military dependents and frontline workers coping with stress, trauma, and life transitions. A space to process, reflect, and build resilience.
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
          <h3 className="text-xl font-semibold font-serif text-emerald-950 mb-5">
            Couples Counseling
          </h3>
          <p className="text-gray-700 max-w-sm">
            Helping couples navigate conflict, communication challenges, and emotional distance — with care, compassion, and constructive guidance.
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
          <h3 className="text-xl font-semibold font-serif text-emerald-950 mb-5">
            Behavioral Therapy for Adolescents & Children
          </h3>
          <p className="text-gray-700 max-w-sm">
            Evidence-based support to help young people develop healthier behavior patterns, emotional regulation, and stronger communication—tailored to their unique developmental needs.
          </p>
        </div>
      </div>
    </section>
  );
}
