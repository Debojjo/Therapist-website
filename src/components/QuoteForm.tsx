"use client";

import Image from "next/image";

export default function QuoteForm() {
  return (
  <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[85vh]  overflow-hidden">
      <Image
        src="/images/quote.jpg"
        alt="Waves background for quote"
        fill
        className="object-cover opacity-80"
        priority
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-black font-serif text-xl md:text-3xl sm:text-4xl max-w-3xl leading-snug ">
          “Caring for yourself is not self-indulgence, it is self-preservation.”
        </h1>
        <h3 className="text-black-200 mt-8 text-sm sm:text-md">— Audre Lorde</h3>
      </div>
    </div>
  );
}

