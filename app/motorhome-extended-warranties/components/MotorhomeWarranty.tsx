"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MotorhomeWarranty() {
  return (
    <section className="bg-white flex justify-center items-center">
      <div className="container max-w-[1166px] px-4 py-12">
        <div className="rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center">

            {/* IMAGE */}
            <div className="w-full lg:w-1/2">
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[558px]">
                <Image
                  src="/motorhomePage_Img/imgi_3_motorhomeextendedwarranty.png"
                  alt="motorhome"
                  fill
                  sizes="100%"
                  className="object-cover object-bottom"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="w-full lg:w-1/2 p-6 md:p-10 flex justify-center items-center">
              <div className="w-full max-w-xl">

                <h1 className="text-[26px] sm:text-[32px] md:text-[40px] font-extrabold mb-2 text-[#064517] leading-tight">
                  Motorhome Extended Warranty
                </h1>

                <p className="text-[15px] sm:text-[16px] text-[#09360c] font-bold mb-4">
                  Ultimate Protection for Your Home-on-Wheels
                </p>

                <p className="text-[#334e68] text-[15px] sm:text-[16px] mb-6 leading-relaxed">
                  A motorhome is a complex investment. Safeguard it from the high cost of
                  mechanical and electrical breakdowns for major components.
                </p>

                {/* FEATURES GRID */}
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-4 mb-6">
                  <Feature icon={EngineIcon} title="Engine Coverage" />
                  <Feature icon={TransmissionIcon} title="Transmission" />
                  <Feature icon={GeneratorIcon} title="On-Board Generator" />
                  <Feature icon={SlideOutIcon} title="Slide-Out Systems" />
                  <Feature icon={LevelingIcon} title="Leveling Systems" />
                  <Feature icon={HvacIcon} title="Coach A/C & Heat" />
                </div>

                {/* CTA */}
                <button
                  onClick={() => {
                    const el = document.getElementById("motorhome-form");
                    if (el) {
                      const offset = -150; // adjust if needed
                      const y = el.getBoundingClientRect().top + window.scrollY + offset;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }}
                  className="inline-block bg-[#064517] hover:bg-[#034b16] text-white font-semibold px-7 sm:px-9 py-3 sm:py-4 rounded-lg transition"
                >
                  Get My Personalized Quote
                </button>



              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------
   Feature Component
------------------------- */
function Feature({
  icon: Icon,
  title,
}: {
  icon: React.FC<{ className?: string }>;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="w-6 h-6 text-[#045c1c]" />
      <strong className="text-[#334e68] text-[15px] sm:text-[16px]">{title}</strong>
    </div>
  );
}

/* -------------------------
   CLEAN FIXED SVG ICONS
------------------------- */

function EngineIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9z" />
    </svg>
  );
}

function TransmissionIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M4 2h12v2H4V2zm0 4h12v2H4V6zm0 4h12v2H4v-2zm0 4h12v2H4v-2z" />
    </svg>
  );
}

function GeneratorIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M3 5h18v14H3V5zm2 2v10h14V7H5zm4 2h2v6H9V9zm4 0h2v6h-2V9z" />
    </svg>
  );
}

function SlideOutIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M3 4h18v16H3V4zm2 2v12h14V6H5zm3 2h8v8H8V8z" />
    </svg>
  );
}

function LevelingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M4 18h16v2H4v-2zm2-4h12v2H6v-2zm2-4h8v2H8V10zm2-4h4v2h-4V6z" />
    </svg>
  );
}

function HvacIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2a3 3 0 013 3v6a5 5 0 11-6 0V5a3 3 0 013-3z" />
    </svg>
  );
}