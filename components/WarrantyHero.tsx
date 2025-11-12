"use client";
import Image from "next/image";

export default function WarrantyHero() {
  return (
    <section className="w-full bg-[#f3fff8]">
      {/* ===== Testimonial Box (Top Section) ===== */}
<div className="max-w-[900px] mx-auto px-6 relative z-20 mb-[-6rem] md:mb-[-8rem]">

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 text-center border border-[#e8f8ee]">
          <p className="text-yellow-400 text-lg md:text-xl mb-2">⭐⭐⭐⭐⭐</p>
          <p className="text-gray-700 text-base md:text-lg italic leading-relaxed mb-3">
            "I highly recommend Outdoor Warranty for anyone in need of extended warranty coverage for their RV.
            Their team was friendly, professional, and able to find me a plan that met all of my needs."
          </p>
          <div className="flex flex-row items-center justify-center gap-2">
            <Image
              src="/logo-social/googleicon.png"
              alt="Google icon"
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="text-gray-800 font-medium text-sm md:text-base">
              Camily Vicente Antonio
            </p>
          </div>
        </div>
      </div>

      {/* ===== Hero Section ===== */}
      <div className="relative w-full overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/extra/rv_family_waving.webp"
            alt="RV Family Background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-24 md:py-36 pt-32 md:pt-40 text-white text-center mt-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-snug">
            Secure Your Next RV Adventure With Our <br />
            <span className="text-[#40d61e]">Top-Rated</span> Extended Warranty Services
          </h2>

          <h4 className="text-lg md:text-xl mb-8 font-medium text-gray-100">
            When you get your extended RV Warranty from us, you:
          </h4>

          {/* Checklist Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-10 text-left max-w-4xl mx-auto">
            <ul className="space-y-3">
              {[
                "Enjoy worry-free travels and adventures on the road!",
                "Protect your RV against unexpected breakdowns and costly repairs.",
                "Save big on RV warranty coverage with our wholesale prices!",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <i className="bi bi-check-lg text-[#59d24f] text-xl mt-0.5"></i>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <ul className="space-y-3">
              {[
                "Boost your RV's resale value.",
                "Have peace of mind knowing you're covered by the best RV warranty service around!",
                "Travel adventures with family and friends are enjoyed more!",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <i className="bi bi-check-lg text-[#59d24f] text-xl mt-0.5"></i>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4 text-center">
            <a
              href="tel:2694316864"
              className="inline-flex items-center justify-center gap-2 bg-[#59d24f] hover:bg-[#40d61e] text-white font-semibold px-8 py-3 rounded-full text-lg transition shadow-md"
            >
              Call 269-431-6864 Now!
            </a>
            <a
              href="#form"
              className="inline-flex items-center justify-center gap-2 border-2 border-white hover:bg-white hover:text-[#064517] text-white font-semibold px-8 py-3 rounded-full text-lg transition"
            >
              <i className="bi bi-pen"></i> Or Fill our Form
            </a>
          </div>

          {/* Small Subtext */}
          <p className="text-[#f4cc00] text-sm md:text-base italic text-center">
            ⭐ Custom Tailored Plans Available
          </p>
        </div>
      </div>
    </section>
  );
}
