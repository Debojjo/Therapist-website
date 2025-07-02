"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you accept insurance?",
    answer: "No, but a superbill is provided for self-submission.",
  },
  {
    question: "Are online sessions available?",
    answer: "Yes—all virtual sessions are conducted via Zoom.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "A 24-hour notice is required to avoid a cancellation fee.",
  },
  {
    question: "How long is each therapy session?",
    answer: "Each session typically lasts 50 minutes unless otherwise discussed.",
  },
  {
    question: "Is therapy confidential?",
    answer: "Yes. Sessions are strictly confidential in accordance with HIPAA guidelines.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-[#ffffff] text-[#45809b] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-xl sm:text-4xl font-serif font-thin mb-12">
          Frequently Asked Questions
        </h2>
        <h3 className="text-lg sm:text-2xl font-serif font-light text-left mb-10">
          Therapy
        </h3>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-[#253f4b] pb-4 transition-all duration-300 ease-in-out"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center w-full text-left text-md  sm:text-lg font-serif gap-3 hover:text-[#3d5a5b] transition cursor-pointer"
              >
                <span className="flex items-center justify-center border border-[#253f4b] rounded-full w-6 h-6 text-sm">
                  <ChevronDown
                    className={`transform transition-transform duration-300 ease-in-out ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                    size={14}
                  />
                </span>
                {faq.question}
              </button>

              {activeIndex === index && (
                <div className="mt-2 text-md sm:text-lg text-[#3b667a] font-light font-serif transition-opacity duration-500 ease-in-out">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
