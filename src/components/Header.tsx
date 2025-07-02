"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 w-full px-6 py-10 flex justify-between items-center bg-[#f9f6f1] z-50">
        <div className="flex items-center justify-around gap-2">
          <Image
            src="/images/header-logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="h-8 w-8 sm:h-12 sm:w-12 object-contain"
          />

          <Link href="https://therapist-website-delta.vercel.app">
            <div className="cursor-pointer text-black leading-tight hover:opacity-80 transition">
              <p className="text-md font-light font-serif text-stone-700 sm:text-xl sm:font-medium">
                Dr. Serena Blake, Psy.D.
              </p>
              <p className="text-md font-light text-stone-700 font-serif sm:text-xl sm:font-medium">
                Psychological Services
              </p>
            </div>
          </Link>
        </div>

        <div
          className="text-3xl pl-6 text-black cursor-pointer xl:hidden"
          onClick={() => setMenuOpen(true)}
        >
          &#9776;
        </div>
      </header>

      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#f9f6f1]  z-50 shadow-lg flex flex-col items-center justify-center transition duration-300">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-4xl text-black hover:opacity-60"
          >
            &times;
          </button>
          <p className="text-black font-serif text-xl"></p>
        </div>
      )}
    </>
  );
}
