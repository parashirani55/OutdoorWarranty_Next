"use client";

import Image from "next/image";
import Link from "next/link";

export default function RvTireWheelProtectionHero() {
  return (
    <section className="bg-white flex justify-center items-center">
      <div className="container max-w-[1400px] px-4 py-12">
        <div className="rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center">

            {/* LEFT IMAGE */}
            <div className="w-full lg:w-1/2">
              <div className="relative w-full h-[300px] sm:h-[420px] md:h-[620px]">
                <Image
                  src="/RvTireProtec_img/RV-Tire-and-Wheel-Protection.jpeg"
                  alt="RV Tire & Wheel Protection"
                  fill
                  sizes="100%"
                  className="object-cover object-bottom-left"
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="w-full lg:w-1/2 p-6 md:p-10 flex justify-center items-center">
              <div className="w-full max-w-xl">

                <h1 className="text-[26px] sm:text-[32px] md:text-[36px] font-extrabold mb-2 text-[#064517] leading-tight">
                  RV Tire & Wheel Protection
                </h1>

                <p className="text-[15px] sm:text-[16px] text-[#334E68] font-medium mb-6">
                  Don&apos;t let a flat tire or damaged rim derail your adventure.
                  Travel with complete peace of mind.
                </p>

                {/* BENEFITS GRID */}
                <div className="grid grid-cols-1 gap-4 mb-6">

                  <Benefit
                    icon={TireRepairIcon}
                    title="Tire Repair & Replacement"
                    desc="Covers road hazards like nails, glass, & potholes."
                  />

                  <Benefit
                    icon={ShieldIcon}
                    title="Wheel & Rim Protection"
                    desc="Includes repair or replacement for damaged wheels."
                  />

                  <Benefit
                    icon={MountIcon}
                    title="Mounting, Balancing & Taxes"
                    desc="All associated costs are covered with no hidden fees."
                  />

                  <Benefit
                    icon={SlideIcon}
                    title="24/7 Roadside Assistance"
                    desc="Nationwide emergency service whenever you need it."
                  />

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
                  className="inline-block bg-[#064517] hover:bg-[#034b16] text-white font-semibold px-7 sm:px-9 py-3 sm:py-4 rounded-lg transition mt-4 cursor-pointer"
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

/* ---------------------------------
   BENEFIT COMPONENT
---------------------------------- */
function Benefit({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.FC<{ className?: string }>;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="w-8 h-8 text-[#064517]" />
      <p className="text-[14px] leading-snug text-[#334E68]">
        <strong className="text-[#09360C]">{title}:</strong> {desc}
      </p>
    </div>
  );
}

/* ---------------------------------
   SVG ICONS (FULL PATHS FROM ELEMENTOR)
---------------------------------- */

function TireRepairIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 512 512">
      <path d="M128.844 16.313c-1.26.01-2.52.042-3.75.093-19.69.814-35.63 6.786-46.625 17.782-21.992 21.99-23.814 63.782-4.72 115.687s58.568 112.162 113.688 167.28c55.12 55.12 115.376 94.595 167.28 113.69 51.906 19.092 93.73 17.27 115.72-4.72 21.99-21.99 23.78-63.782 4.687-115.688-19.094-51.905-58.54-112.195-113.656-167.312C306.35 88.008 246.06 48.563 194.155 29.47c-24.33-8.952-46.42-13.317-65.312-13.157zm34.97 52.156c45.347-.48 113.94 35.972 175.155 97.186 76.95 76.95 114.752 165.567 89.28 205-16.348-55.695-56.743-120.148-115.438-178.844C254.13 133.127 189.692 92.728 134 76.376c8.06-5.202 18.167-7.784 29.813-7.906zM42.718 70.03L31.78 80.97c-10.986 10.987-16.853 26.35-17.686 46.06-.834 19.712 3.62 43.48 13.219 69.376C46.508 248.202 86.06 308.372 141.156 363.47c55.097 55.096 115.267 94.646 167.063 113.842 25.896 9.6 49.663 14.052 69.374 13.22 19.71-.834 35.076-6.702 46.062-17.688l10.97-10.97c-25.293 3.142-55.017-1.975-86.345-13.5-55.3-20.342-117.292-61.23-174.06-118-56.77-56.768-97.658-118.728-118-174.03-11.516-31.302-16.626-61.026-13.5-86.313zm77.218 21.876c52.77 13.2 119.523 52.99 179.656 113.125 60.133 60.136 99.926 126.892 113.125 179.657-41.025 21.154-126.707-16.642-201.408-91.343-74.715-74.716-112.55-160.424-91.375-201.438z"></path>
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path>
    </svg>
  );
}

function MountIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M16.01 7 16 3h-2v4h-4V3H8v4h-.01C7 6.99 6 7.99 6 8.99v5.49L9.5 18v3h5v-3l3.5-3.51v-5.5c0-1-1-2-1.99-1.99z"></path>
    </svg>
  );
}

function SlideIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"></path>
    </svg>
  );
}
