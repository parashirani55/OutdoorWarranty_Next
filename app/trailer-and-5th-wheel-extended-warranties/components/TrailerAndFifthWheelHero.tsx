"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function TrailerAndFifthWheelHero() {
  return (
    <section className="bg-white flex justify-center items-center">
      <div className="container max-w-[1166px] px-4 py-12">
        <div className="rounded-2xl shadow-lg overflow-hidden">

          <div className="flex flex-col lg:flex-row items-center">

            {/* IMAGE */}
            <div className="w-full lg:w-1/2">
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[615px] lg:h-[695px]">
                <Image
                  src="/TrailerFifthwheelPage_img/imgi_3_RV-Trailers.png"
                  alt="Trailers"
                  fill
                  sizes="100%"
                  className="object-cover object-bottom-left"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="w-full lg:w-1/2 p-6 md:p-10 flex justify-center items-center">
              <div className="w-full max-w-xl">

                <h1 className="text-[26px] sm:text-[32px] md:text-[40px] font-extrabold mb-2 text-[#064517] leading-tight">
                  RV Extended Warranty for Fifth Wheel and RV Trailers
                </h1>

                <p className="text-[15px] sm:text-[16px] text-[#09360c] font-bold mb-4">
                  Your safety net for worry-free adventures.
                </p>

                <p className="text-[#334e68] text-[15px] sm:text-[16px] mb-6 leading-relaxed">
                  Safeguard your fifth wheel or RV trailer from costly surprises on the road. An extended warranty means stress-free travels and protected major systems.
                </p>

                {/* FEATURES GRID */}
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-4 mb-6">
                  <Feature icon={EngineIcon} title="Frame & Suspension" />
                  <Feature icon={TransmissionIcon} title="Braking System" />
                  <Feature icon={GeneratorIcon} title="Electrical & Wiring Components" />
                  <Feature icon={SlideOutIcon} title="Slide-Out Mechanisms" />
                  <Feature icon={LevelingIcon} title="Fresh & Waste Water Systems" />
                  <Feature icon={HvacIcon} title="Heating & Cooling Units" />
                </div>

                {/* CTA */}
                <button
                  onClick={() => {
                    const el = document.getElementById("warranty-form");
                    if (el) {
                      const offset = -150; // adjust if needed
                      const y = el.getBoundingClientRect().top + window.scrollY + offset;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }}
                  className="inline-block bg-[#064517] hover:bg-[#034b16] text-white font-semibold px-7 sm:px-9 py-3 sm:py-4 rounded-lg transition cursor-pointer"
                >
                  Get My Personalized Quote
                </button>


              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
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

/* ---------------------------------
   UPDATED SVG ICONS FROM ELEMENTOR
---------------------------------- */

// 1) Frame & Suspension
function EngineIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
  );
}

// 2) Braking System
function TransmissionIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
    >
      <path d="M256 21A235 235 0 0 0 21 256a235 235 0 0 0 235 235 235 235 0 0 0 235-235A235 235 0 0 0 256 21zm0 82c84.393 0 153 68.607 153 153s-68.607 153-153 153-153-68.607-153-153 68.607-153 153-153zm0 18c-20.417 0-39.757 4.52-57.09 12.602C210.457 166.482 230.218 208 256 208c25.823 0 44.926-41.65 56.752-74.555C295.505 125.462 276.284 121 256 121zm98.752 42.88c-27.714 21.143-61.142 52.79-53.17 77.327 7.981 24.564 53.508 29.858 88.459 30.936.628-5.294.959-10.678.959-16.143 0-35.642-13.755-68.012-36.248-92.12zm-197.729.243C134.663 188.204 121 220.477 121 256c0 5.55.34 11.018.988 16.39 34.833-.825 80.381-6.793 88.344-31.3 7.974-24.542-25.68-55.553-53.309-76.967zm70.188 43.643a9 9 0 0 0-5.035 1.714 9 9 0 0 0-1.99 12.57 9 9 0 0 0 12.57 1.993 9 9 0 0 0 1.992-12.572 9 9 0 0 0-7.537-3.705zm57.578 0a9 9 0 0 0-.637.004 9 9 0 0 0-6.9 3.7 9 9 0 0 0 1.992 12.573 9 9 0 0 0 12.57-1.992 9 9 0 0 0-1.99-12.57 9 9 0 0 0-5.035-1.715zM256 224a32 32 0 0 0-32 32 32 32 0 0 0 32 32 32 32 0 0 0 32-32 32 32 0 0 0-32-32zm-46.297 38.037a9 9 0 0 0-2.652.44 9 9 0 0 0-5.78 11.341 9 9 0 0 0 11.34 5.778 9 9 0 0 0 5.78-11.34 9 9 0 0 0-8.688-6.219zm92.856.008a9 9 0 0 0-8.95 6.21 9 9 0 0 0 5.78 11.34 9 9 0 0 0 11.34-5.777 9 9 0 0 0-5.78-11.341 9 9 0 0 0-2.39-.432zm-92.143 27.713c-21.59.104-50.24 16.832-72.424 31.928 19.029 34.168 52.46 59.164 92.143 66.837 9.99-33.39 18.42-78.618-2.446-93.777-4.854-3.527-10.737-5.02-17.273-4.988zm91.016.02c-6.58 0-12.492 1.516-17.346 5.042-20.895 15.181-11.863 60.106-2.088 93.678 39.687-7.715 73.108-32.76 92.1-66.973-22.006-15.224-50.935-31.747-72.666-31.748zM256 295.58a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9z"></path>
    </svg>
  );
}

// 3) Electrical & Wiring Components
function GeneratorIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
    >
      <path d="M376 211H256V16L136 301h120v195z"></path>
    </svg>
  );
}

// 4) Slide-Out Mechanisms
function SlideOutIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
    >
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"></path>
    </svg>
  );
}

// 5) Fresh & Waste Water Systems
function LevelingIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path>
    </svg>
  );
}

// 6) Heating & Cooling Units
function HvacIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
    </svg>
  );
}
