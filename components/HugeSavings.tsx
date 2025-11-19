"use client";
import { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function HugeSavingsSection() {
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
    <>
      {/* ======================= POPUP ======================= */}
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

      {/* ======================= ORIGINAL SECTION ======================= */}
      <section className="relative py-20 px-6 flex justify-center items-center">
        <div className="relative max-w-[1400px] w-full rounded-[40px] shadow-[0_8px_60px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col md:flex-row items-center justify-between p-6 sm:p-10 md:p-12 bg-cover bg-center bg-[url('/section_img/rv_shaking_hands.webp')]">
          
          <div className="absolute inset-0 bg-gradient-to-r from-white/100 via-white/90 to-white/60"></div>

          <div className="relative z-[2] flex flex-col lg:flex-row items-center justify-between w-full gap-10">
            
            {/* LEFT IMAGE */}
            <div className="flex justify-center w-full lg:w-1/2 mb-10 md:mb-0">
              <img
                src="/section_img/huge-savings-guarantee-65fe2e3c98c92.webp"
                alt="Huge Savings Badge"
                className="w-[200px] sm:w-[260px] md:w-[320px] lg:w-[360px] drop-shadow-md"
              />
            </div>

            {/* RIGHT TEXT */}
            <div className="w-full lg:w-1/2 text-[#09360c] space-y-5 text-center lg:text-left">
              <h2 className="text-[28px] sm:text-[34px] md:text-[38px] lg:text-[40px] font-semibold text-[#064517] leading-snug">
                Our Huge Savings{" "}
                <span className="block">Guarantee</span>
              </h2>

              <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#09360c]">
                OutdoorWarranty provides unbeatable value with extended warranty services that protect your RV from costly repairs.
              </p>

              <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#09360c]">
                Join thousands of satisfied customers enjoying our Huge Savings Guarantee—travel with peace of mind.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-col items-center lg:items-start gap-4 pt-4">

                {/* CALL BUTTON */}
                <a
                  href="tel:269-431-6864"
                  className="inline-flex items-center justify-center gap-2 bg-[#48ac3f] hover:bg-[#3fa039] text-white px-8 py-4 rounded-full text-[16px] md:text-[20px] transition font-medium"
                >
                  <i className="bi bi-telephone-fill text-[18px]"></i>
                  Call 269-431-6864 To Get Started Now!
                </a>

                {/* POPUP BUTTON */}
                <button
                  onClick={() => setShowPopup(true)}
                  className="inline-flex items-center justify-center gap-2 bg-[#48ac3f] hover:bg-[#3fa039] text-white px-8 py-4 rounded-full text-[16px] md:text-[20px] font-medium transition"
                >
                  <i className="bi bi-pencil-fill text-[18px]"></i>
                  Or Fill Our Form
                </button>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
