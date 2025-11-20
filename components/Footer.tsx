"use client";

import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {
  const [isMapOpen, setIsMapOpen] = useState(false);

  return (
    <>
      <footer className="bg-[#022d0e] text-white">
        {/* ===== Top Section ===== */}
        <div className="max-w-[1400px] mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Column 1 */}
          <div>
            <h5 className="text-[20px] mb-4 tracking-wide">ABOUT US</h5>
            <p className="text-[14px] text-[#cccccc] leading-relaxed pe-[5.5rem]">
              Outdoorwarranty.com is a top provider of warranties for RVs — also known as RV extended service contracts — and they’ve developed their product line after witnessing firsthand the markup that dealerships were getting for providing warranties that weren’t as comprehensive as what we provide.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h5 className="text-[20px] mb-4 tracking-wide">LINKS</h5>
            <ul className="text-gray-200">
              <li><a href="/blog" className="hover:text-[#28cc1b]">Blog</a></li>
              <li><a href="/frequently-asked-questions" className="hover:text-[#28cc1b]">FAQ</a></li>
              <li><a href="/privacy-policy" className="hover:text-[#28cc1b]">Privacy Policy</a></li>
              <li><a href="/refund-policy" className="hover:text-[#28cc1b]">Refund Policy</a></li>
              <li><a href="/terms" className="hover:text-[#28cc1b]">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Column 3 — CONTACT */}
          <div>
            <h5 className="text-[20px] mb-4 tracking-wide">CONTACT</h5>

            <ul className="space-y-3 text-[14px] text-gray-200">

              <li>
                <a href="tel:574-505-6246" className="flex items-center gap-2 hover:text-[#28cc1b]">
                  <i className="bi bi-telephone-fill"></i> 574-505-6246
                </a>
              </li>

              <li>
                <a href="/contact" className="flex items-center gap-2 hover:text-[#28cc1b]">
                  <i className="bi bi-envelope-fill"></i> Email Us
                </a>
              </li>

              {/* ADDRESS → opens popup */}
              <li>
                <button
                  onClick={() => setIsMapOpen(true)}
                  className="flex items-start gap-2 hover:text-[#28cc1b] text-left cursor-pointer"
                >
                  <i className="bi bi-geo-alt-fill"></i>
                  <span>
                    223 South Main St. Suite 21
                    <span className="block">Elkhart, IN 46514</span>
                  </span>
                </button>
              </li>

            </ul>

            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              <a href="https://facebook.com/OutdoorWarranty" target="_blank" className="w-8 h-8 bg-[#3b5998] flex items-center justify-center rounded-sm">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://twitter.com/OutdoorWarranty" target="_blank" className="w-8 h-8 bg-[#1DA1F2] flex items-center justify-center rounded-sm">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/company/outdoorwarranty-com/about/" target="_blank" className="w-8 h-8 bg-[#0077B5] flex items-center justify-center rounded-sm">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>

          </div>
        </div>

        {/* ===== Bottom Section ===== */}
        <div className="bg-white text-[#09360c]">
          <div className="max-w-[1400px] mx-auto px-6 py-6 text-center sm:text-left">
            <p className="italic text-[13px] leading-relaxed"> Disclosure: Outdoor Warranty is a wholesale broker of RV service
              contracts. Website content is for informational purposes only. In case of any discrepancy,
              the written contract governs.{" "} <a href="https://outdoorwarranty.com/terms/" rel="noopener noreferrer" target="_blank"
                className="text-[#28cc1b] hover:underline font-medium" > Read full Terms & Disclosures › </a>
            </p>
          </div>
        </div>
      </footer>

      {/* ================================================= */}
      {/*              MAP  POPUP              */}
      {/* ================================================= */}

      {isMapOpen && (
        <div
          className="
            fixed inset-0 bg-black/70 flex justify-center items-center 
            z-[9999] px-4 cursor-pointer
          "
        >
          <div
            className="
              bg-white rounded-lg shadow-xl relative 
              w-full max-w-[700px] overflow-hidden
              animate-[fadeIn_.35s_ease]
            "
          >

            {/* Close Button */}
            <button
              onClick={() => setIsMapOpen(false)}
              className="
                absolute top-3 right-3
                text-[#064517] hover:text-[#28cc1b] 
                text-2xl z-[999] cursor-pointer
              "
            >
              <i className="bi bi-x-lg !font-bold"></i>
            </button>

            {/* Popup Content (matches Elementor) */}
            <div className="text-center py-6 px-6">

              <h2 className="text-[24px] font-semibold text-[#022d0e]">
                OutdoorWarranty
              </h2>

              <p className="text-[16px] mt-1 mb-4 text-gray-700">
                223 South Main St. Suite 21 Elkhart, IN 46514
              </p>

              {/* Google Map */}
              <iframe
                className="w-full h-[350px] rounded-lg"
                loading="lazy"
                src="https://maps.google.com/maps?q=223%20South%20Main%20St%20Suite%2021%20Elkhart%20IN%2046514&t=m&z=12&output=embed&iwloc=near"
              ></iframe>

            </div>
          </div>
        </div>
      )}
    </>
  );
}