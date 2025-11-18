"use client";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";

export default function HugeSavingsSection() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {/* ======================= POPUP (added) ======================= */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 z-[9999] flex justify-center items-center p-4">
          <div className="bg-white w-full max-w-[640px] p-10 py-10 rounded-2xl shadow-2xl relative">

            {/* Close Button */}
            <button
              className="absolute top-3 right-4 text-lg text-[#3eb000] cursor-pointer"
              onClick={() => setShowPopup(false)}
            >
              ✖
            </button>

            <h2 className="text-[26px] lg:text-[31px] font-[700] text-center mb-2 text-[#09360c]">
              Hurry: Discover <span className="text-[#3eb000]">Unbeatable Savings</span> on RV Extended Warranties!
            </h2>

            <p className="text-center text-[16px] font-semibold mb-4 text-[#09360c]">
              Just a few clicks away from exceptional coverage! 👇
            </p>

            {/* Popup Form */}
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
              <input
                type="tel"
                placeholder="Mobile Phone Number"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
              <input
                type="number"
                placeholder="Zip Code"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />

              <p className="text-[11px] text-gray-700 leading-snug mt-2">
                You agree to receive automated follow-up and promotional messages.
                Msg & data rates may apply. See{" "}
                <a href="https://outdoorwarranty.com/terms/" className="text-green-600">Terms of Service</a>{" "}
                &{" "}
                <a href="https://outdoorwarranty.com/privacy-policy/" className="text-green-600">Privacy Policy</a>.
              </p>

              <button
                type="submit"
                className="w-full bg-[#48ac3f] text-white py-3 rounded-full font-medium text-[18px] cursor-pointer"
              >
                Claim Your Savings Now! 👉
              </button>
            </form>

            <p className="text-center text-[13px] mt-4">
              Just takes a few minutes to get started! 👍
            </p>

            <p className="text-left text-[11px] mt-5 text-[#09360c]">
              *Privacy is important to us. We never sell or distribute your email to any third party services at any time.
            </p>
          </div>
        </div>
      )}

      {/* ======================= ORIGINAL SECTION CODE ======================= */}

      <section className="relative py-20 px-6 flex justify-center items-center">
        <div className="relative max-w-[1400px] w-full rounded-[40px] shadow-[0_8px_60px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col md:flex-row items-center justify-between p-6 sm:p-10 md:p-12 bg-cover bg-center bg-[url('/section_img/rv_shaking_hands.webp')]">
          
          <div className="absolute inset-0 bg-gradient-to-r from-white/100 via-white/90 to-white/60"></div>

          <div className="relative z-[2] flex flex-col md:flex-row items-center justify-between w-full gap-10">
            
            {/* LEFT IMAGE */}
            <div className="flex justify-center w-full md:w-1/2 mb-10 md:mb-0">
              <img
                src="/section_img/huge-savings-guarantee-65fe2e3c98c92.webp"
                alt="Huge Savings Badge"
                className="w-[220px] sm:w-[280px] md:w-[340px] lg:w-[380px] drop-shadow-md"
              />
            </div>

            {/* RIGHT TEXT */}
            <div className="w-full md:w-1/2 text-[#09360c] space-y-5 text-center md:text-left">
              <h2 className="text-[26px] sm:text-[32px] md:text-[38px] lg:text-[40px] font-semibold text-[#064517] leading-snug">
                Our Huge Savings{""}
                <span className="block">Guarantee</span>
              </h2>

              <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#09360c]">
                OutdoorWarranty is committed to providing our customers with the best value possible. With our extended warranty services, you can rest assured that you’ll receive top-notch protection and unbeatable savings on repairs.
              </p>

              <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#09360c]">
                Join the hundreds of satisfied customers who have already taken advantage of our Huge Savings Guarantee and start enjoying worry-free travels today!
              </p>

              {/* BUTTONS */}
              <div className="flex flex-col items-start gap-4 pt-4">

                {/* CALL BUTTON */}
                <a
                  href="tel:269-431-6864"
                  className="inline-flex items-center justify-center gap-2 bg-[#48ac3f] hover:bg-[#4BC341] hover:border border-[#1dff0d] text-white px-8 py-5 rounded-full text-[15px] sm:text-[16px] lg:text-[22px]"
                >
                  <i className="bi bi-telephone-fill text-[18px]"></i>
                  Call 269-431-6864 To Get Started Now!
                </a>

                {/* POPUP BUTTON (REPLACED ELEMENTOR LINK) */}
                <button
                  onClick={() => setShowPopup(true)}
                  className="inline-flex items-center justify-center gap-2 bg-[#48ac3f] hover:bg-[#4BC341] hover:border border-[#1dff0d] text-white px-8 py-5 rounded-full font-medium text-[15px] sm:text-[16px] lg:text-[22px]"
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