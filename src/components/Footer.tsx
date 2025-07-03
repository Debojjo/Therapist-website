"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f9f6f1] text-center text-stone-800 py-10 font-serif text-sm space-y-3">
      <h2 className="text-xl sm:text-3xl font-normal mb-9">Serena Blake, Psy.D., Licensed Psychologist</h2>

      <div className="space-y-1">
        <a href="mailto:serena@blakepsychology.com" className="underline hover:text-stone-600 mb-2 sm:text-lg">
          serena@blakepsychology.com
        </a>
        <div className="sm:text-lg">
          Phone:{" "}
          <a href="tel:3235550192" className="underline hover:text-stone-600 sm:text-md">
            (323) 555-0192
          </a>
        </div>
      </div>

      <div className="my-6 text-light sm:text-lg ">1287 Maplewood Drive, Los Angeles, CA 90026</div>

      <div>
        <p className="sm:text-lg">Office Hours:</p>
        <p className="sm:text-lg">In-person: Tue & Thu, 10 AM–6 PM</p>
        <p className="sm:text-lg mb-10">Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM</p>
      </div>

      <div className="space-x-4 mt-2 sm:text-md">
        <Link href="/" className="underline hover:text-stone-600">Home</Link>
        <Link href="/privacy-policy" className="underline hover:text-stone-600">Privacy Policy</Link>
        <Link href="/good-faith-estimate" className="underline hover:text-stone-600">Good Faith Estimate</Link>
      </div>

      <div className="mt-8 sm:text-md">
        <Link href="/client-portal" className="underline hover:text-stone-600">Client Portal</Link>
      </div>

      <p className="text-xs mt-4 sm:text-md">&copy; 2025 Serena Blake, Psy.D. Psychological Services. All rights reserved.</p>
    </footer>
  );
}
