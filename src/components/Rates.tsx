"use client";

import React from "react";

export default function Rates() {
  return (
    <section className="py-20 px-6 text-center" style={{ backgroundColor: "#99b2b1" }}>
      <div className="max-w-3xl mx-auto space-y-6 text-black">
        <h2 className="text-2xl sm:text-3xl font-serif font-thin">Rates and Insurance</h2>

        <div className="text-md font-thin font-serif">
          <p className="mb-5" >Individual Session Fee - $200</p>
          <p>Couples Session Fee- $240</p>
        </div>

        <p className="text-md font-serif font-light">
          I accept both private pay and insurance. I am in-network with BCBS and Aetna.
        </p>

        <p className="text-md font-serif font-lg">
          For out-of-network plans, I’ve partnered with Mentaya using{" "}
          <a
            href="https://www.mentaya.com"
            className="underline text-black-900 hover:text-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            this tool
          </a>{" "}
          to help you check your eligibility for reimbursement for my services.
        </p>
      </div>
    </section>
  );
}
