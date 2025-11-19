"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function WarrantyHero() {
  const [showPopup, setShowPopup] = useState(false);

  // Disable page scroll when popup is open
  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showPopup]);

  // Close popup on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowPopup(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="w-full bg-[#f3fff8]">

      {/* ============= POPUP FORM ============= */}
      {showPopup && (
      <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex justify-center items-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowPopup(false);
          }}
        >
          <div className="bg-white w-full max-w-[540px] sm:max-w-[600px] md:max-w-[650px] rounded-2xl shadow-2xl p-6 sm:p-10 relative max-h-[90vh] overflow-y-auto">

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-2xl text-[#3eb000] hover:text-[#2e8a00] transition"
              onClick={() => setShowPopup(false)}
            >
              ✖
            </button>

            <h2 className="text-[22px] sm:text-[28px] lg:text-[30px] font-[700] text-center mb-3 text-[#09360c] leading-snug">
              Hurry: Discover{" "}
              <span className="text-[#3eb000]">Unbeatable Savings</span> on RV Extended Warranties!
            </h2>

            <p className="text-center text-[14px] sm:text-[16px] font-semibold mb-5 text-[#09360c]">
              Just a few clicks away from exceptional coverage! 👇
            </p>

            {/* Popup Form */}
            <form className="space-y-4 sm:space-y-5">
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-[14px] sm:text-[15px]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-[14px] sm:text-[15px]"
              />

              <input
                type="tel"
                placeholder="Mobile Phone Number"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-[14px] sm:text-[15px]"
              />

              <input
                type="text"
                placeholder="Zip Code"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-[14px] sm:text-[15px]"
              />

              <p className="text-[11px] sm:text-[12px] text-gray-700 leading-snug">
                By submitting, you agree to receive automated follow-up messages. Msg & data rates
                may apply. See{" "}
                <a href="https://outdoorwarranty.com/terms/" className="text-green-600 underline">
                  Terms of Service
                </a>{" "}
                &{" "}
                <a href="https://outdoorwarranty.com/privacy-policy/" className="text-green-600 underline">
                  Privacy Policy
                </a>.
              </p>

              <button
                type="submit"
                className="w-full bg-[#48ac3f] hover:bg-[#3fa039] text-white py-3 rounded-full text-[15px] sm:text-[17px] font-semibold transition"
              >
                Claim Your Savings Now! 👉
              </button>
            </form>

            <p className="text-center text-[12px] sm:text-[13px] mt-4 text-[#09360c]">
              Takes just a few minutes to get started! 👍
            </p>

            <p className="text-left text-[10px] sm:text-[11px] mt-4 text-[#09360c] leading-relaxed">
              *We respect your privacy. We never sell or share your email.
            </p>
          </div>
        </div>
      )}

      {/* ============= Testimonial Section ============= */}
      <div className="max-w-[900px] mx-auto px-6 relative z-20 mb-[-6rem] md:mb-[-8rem]">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 text-center border border-[#e8f8ee]">
          <p className="text-yellow-400 text-lg md:text-xl mb-2">⭐⭐⭐⭐⭐</p>
          <p className="text-gray-700 text-base md:text-lg italic leading-relaxed mb-3">
            "I highly recommend Outdoor Warranty…"
          </p>

          <div className="flex flex-row items-center justify-center gap-2">
            <Image
              src="/logo-social/googleicon.png"
              alt="Google"
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

      {/* ============= Hero Section ============= */}
      <div className="relative w-full overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/extra/rv_family_waving.webp"
            alt="RV Family Background"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-24 md:py-36 pt-32 md:pt-40 text-white text-center mt-12">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 leading-snug">
            Secure Your Next RV Adventure With Our <br />
            <span className="text-[#40d61e]">Top-Rated</span> Extended Warranty Services
          </h2>

          <h4 className="text-lg md:text-xl mb-8 font-medium text-gray-100">
            When you get your extended RV Warranty from us, you:
          </h4>

          {/* Checklist */}
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

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <a
              href="tel:2694316864"
              className="inline-flex items-center justify-center gap-2 bg-[#59d24f] hover:bg-[#40d61e] text-white font-semibold px-8 py-3 rounded-full text-lg transition shadow-md"
            >
              Call 269-431-6864 Now!
            </a>

            {/* OPEN POPUP */}
            <button
              onClick={() => setShowPopup(true)}
              className="inline-flex items-center justify-center gap-2 border-2 border-white hover:bg-white hover:text-[#064517] text-white font-semibold px-8 py-3 rounded-full text-lg transition"
            >
              <i className="bi bi-pen"></i> Or Fill our Form
            </button>
          </div>

          <p className="text-[#f4cc00] text-sm md:text-base italic">
            ⭐ Custom Tailored Plans Available
          </p>
        </div>
      </div>
    </section>
  );
}
