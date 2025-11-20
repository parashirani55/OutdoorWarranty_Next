"use client";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect, useState } from "react";
import PopupForm from "./PopupForm";

export default function SmartSavingsSection() {
  const [showPopup, setShowPopup] = useState(false);

  // Disable page scroll when popup is open
  useEffect(() => {
    document.body.style.overflow = showPopup ? "hidden" : "auto";
  }, [showPopup]);

  return (
    <>
      {/* ======================= POPUP (added) ======================= */}
      <PopupForm show={showPopup} onClose={() => setShowPopup(false)} />



      {/* ======================= ORIGINAL CODE START ======================= */}

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* === Decorative SVG ALWAYS VISIBLE === */}
        <div className="absolute 2xl:hidden  top-100 right-20 sm:top-80 sm:right-60  md:top-90 md:right-50 lg:top-80 lg:right-[-50] xl:top-60 xl:right-[-40] 2xl:top-50 2xl:right-[-180px]
          opacity-30 
          pointer-events-none 
          z-0
        ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 150 75"
            preserveAspectRatio="xMidYMid meet"
            className="w-[200px] sm:w-[260px] md:w-[320px] lg:w-[380px] xl:w-[647px] h-auto"
          >
            <path
              d="M147.277 68.988L118.445 37.766l-2.563 5.55-11.168-11.652-8.422 8.832-3.914-6.285-20.633 29.879L59.023 50.66l-1.395 4.758-12.14-8.656L31.469 55l-1.028-3.336L8.535 65.969a.66.66 0 0 1 .297-.688l37.445-38.32c.621-.633 1.875-.586 2.406.098l21.984 28.07c.598.766 2.059.711 2.559-.094l29.11-46.676c.516-.828 2.035-.855 2.598-.039l42.344 60.668z"
              fill="#064517"
            />
          </svg>
        </div>

        {/* === MAIN SECTION CONTENT === */}
        <div className="relative z-10 max-w-[1200px] mx-auto text-center">
          <h4 className="text-[#0daa38] text-[18px] sm:text-[20px] font-semibold uppercase mb-2">
            Smart Savings
          </h4>

          <h2 className="text-[#064517] text-[26px] sm:text-[34px] md:text-[40px] font-semibold leading-snug mb-3">
            Extended Warranties Can Save{" "}
            <span className="block">You Thousands of Dollars In</span> Repair Costs
          </h2>

          <p className="text-[#09360c] text-[15px] sm:text-[16px] max-w-[800px] mx-auto leading-relaxed">
            The right extended warranty can save RV owners between $1,000–$5,000 (or more)
            in extensive repair costs. OutdoorWarranty helps you avoid expensive repairs and
            replacements by getting reliable warranty coverage.
          </p>
        </div>

        {/* === MAIN CONTENT GRID === */}
        <div className="max-w-[1400px] mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start relative z-10">

          {/* LEFT COLUMN */}
          <div className="text-left space-y-6 order-2 lg:order-1 flex flex-col items-center lg:items-start">

            <h3 className="text-[#064517] text-[16px] sm:text-[18px] font-semibold">
              Did You Know?
            </h3>

            <p className="text-[#09360c] text-[15px] sm:text-[16px] leading-relaxed">
              An extended warranty for your RV protects you from unexpected and expensive repairs that can easily add up to thousands of dollars. For example, if your RV’s air conditioning unit fails and needs to be replaced, the cost could range from $1,500 to $3,000 or more. With an extended warranty, you would only have to pay your deductible and the rest of the cost would be covered. This can save you a significant amount of money in repair costs over the life of your RV.
            </p>

            {/* Testimonial Card */}
            <div className="bg-white rounded-xl shadow-xl p-6 max-w-[500px]">
              <div className="flex justify-center mb-2 text-[#f8b400] text-[16px]">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="bi bi-star-fill"></i>
                ))}
              </div>

              <p className="text-[#09360c] text-[14px] leading-relaxed mb-4 text-center">
                "I purchased an extended warranty for my motorhome from Outdoor Warranty, and it has saved me a lot of money in repair costs. The claims process was easy and hassle-free, and they were very friendly and knowledgeable."
              </p>

              <div className="flex items-center justify-center gap-3">
                <img
                  src="/section_img/pedro-1.png"
                  alt="Pedro Nicolas"
                  className="w-[40px] h-[40px] rounded-full"
                />
                <h4 className="text-[#064517] font-semibold text-[15px]">
                  Pedro Nicolas Tavares Dos Santos
                </h4>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col items-center lg:items-start">
              <h4 className="text-[#064517] font-semibold text-[18px] sm:text-[20px] lg:text-[22px] mb-5">
                Start Saving In Repair Costs! 👉
              </h4>

              <div className="flex flex-col items-center lg:items-start gap-4">

                <a
                  href="tel:269-431-6864"
                  className="inline-flex items-center justify-center gap-2 bg-[#28cc1b] hover:bg-[#24b619] text-white px-8 py-3 rounded-full font-medium text-[15px] sm:text-[16px] shadow-[0_5px_20px_rgba(40,204,27,0.4)] transition-all"
                >
                  <i className="bi bi-telephone-fill text-[18px]"></i>
                  Call 269-431-6864
                </a>

                {/* ================== POPUP BUTTON (added) ================== */}
                <button
                  onClick={() => setShowPopup(true)}
                  className="inline-flex items-center justify-center gap-2 bg-[#28cc1b] hover:bg-[#24b619] text-white px-8 py-3 rounded-full font-medium text-[15px] sm:text-[16px] transition-all"
                >
                  <i className="bi bi-pencil-fill text-[18px]"></i>
                  Or Complete Our Form!
                </button>

              </div>

              <p className="mt-4 text-center italic text-[#09360c] text-[15px] sm:text-[16px] ps-0 lg:ps-[8rem]">
                Start saving over 40% in repair costs! 🤗
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN (Images) */}
          <div className="relative flex justify-center order-1 lg:order-2  lg:justify-end">
            <img
              src="/section_img/rv_extended_warranty_repairs-e1682875858497.jpg"
              alt="man working on RV engine"
              className="w-[100%] sm:w-[450px] lg:w-[407px] shadow-lg border-4 border-white"
            />
            <img
              src="/section_img/extended_rv_warranty_peek_outside.webp"
              alt="woman waving from RV window"
              className="absolute -bottom-8 left-6 sm:left-10 w-[180px] sm:w-[200px] lg:w-[291px] shadow-md border-4 border-white"
            />
          </div>

        </div>
      </section>

      {/* ======================= ORIGINAL CODE END ======================= */}
    </>
  );
}