"use client";
import { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import PopupForm from "./PopupForm";

export default function HugeSavingsSection() {
  const [showPopup, setShowPopup] = useState(false);

  // Disable page scroll when popup is open
  useEffect(() => {
    document.body.style.overflow = showPopup ? "hidden" : "auto";
  }, [showPopup]);


  return (
    <>
      {/* ============= POPUP FORM ============= */}
      <PopupForm show={showPopup} onClose={() => setShowPopup(false)} />


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
