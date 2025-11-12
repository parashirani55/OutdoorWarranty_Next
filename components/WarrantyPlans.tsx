"use client";
import Image from "next/image";

export default function WarrantyPlans() {
  return (
    <section className="w-full bg-[#f3fff8] py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* ===== Top Heading Section ===== */}
        <div className="flex flex-col items-center text-center mb-16">
          <h4 className="text-[#0daa38] uppercase text-base md:text-lg font-semibold tracking-wide mb-2">
            Invest In Your RV’s Future
          </h4>

          <h2 className="text-[#064517] text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug mb-4 max-w-4xl">
            Our <span className="text-[#39bf04]">Top-Rated</span> RV Extended Warranty Plans are Catered to Your Unique Needs
          </h2>

          <p className="text-gray-700 max-w-2xl mx-auto text-base md:text-lg">
            We believe that every RV owner deserves the best possible warranty coverage at an affordable price.
            That’s why we offer a range of options to help you find the perfect plan for your needs.
          </p>
        </div>

        {/* ===== First Row (3 Cards) ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12 items-stretch justify-center">
          {[
            {
              img: "/Plans/motorhome_extended_warranty.webp",
              title: "Motorhome Extended Warranty",
              desc: "Protect your motorhome and save on expensive repairs with our extended warranty.",
            },
            {
              img: "/Plans/5thwheel_trailer_extended_warranty.webp",
              title: "Trailer and 5th Wheel Extended Warranties",
              desc: "Don't let unexpected repairs ruin your road trip. Get extended warranty coverage for your 5th wheel or trailer.",
            },
            {
              img: "/Plans/popup_and_camper_extended_warranty.webp",
              title: "Popup and Camper Extended Warranties",
              desc: "Keep your popup camper in top condition and avoid costly repairs with our extended warranty.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-lg border border-[#e6f6ed] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col items-center w-full max-w-[380px] mx-auto"
            >
              {/* Image with white padding around */}
              <div className="p-4 pb-0">
                <div className="w-full h-[230px] bg-white border border-[#e6f6ed] overflow-hidden">
                  <Image
                    src={card.img}
                    alt={card.title}
                    width={400}
                    height={230}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="p-6 flex flex-col justify-between flex-grow text-center">
                <h3 className="text-[#045C1C] text-lg md:text-xl font-semibold mb-2 leading-snug">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ===== Second Row (1 Card + CTA Box) ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start justify-center">
          {/* Roadside Assistance Card */}
          <div className="bg-white rounded-lg border border-[#e6f6ed] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col items-center w-full max-w-[380px] mx-auto">
            <div className="p-4 pb-0">
              <div className="w-full h-[230px] bg-white border border-[#e6f6ed] rounded-md overflow-hidden">
                <Image
                  src="/Plans/roadside_assistance.webp"
                  alt="Roadside Assistance"
                  width={400}
                  height={230}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>

            <div className="p-6 flex flex-col justify-between flex-grow text-center">
              <h3 className="text-[#045C1C] text-lg md:text-xl font-semibold mb-2 leading-snug">
                Roadside Assistance
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Get peace of mind knowing our 24/7/365 roadside assistance is there for you in case of an emergency.
              </p>
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-white rounded-lg border border-[#e6f6ed] shadow-sm p-8 md:p-10 text-center flex flex-col justify-center">
            <h3 className="text-[#0E800E] text-xl md:text-2xl font-semibold mb-3">
              Hit the road with confidence!
            </h3>
            <p className="text-gray-700 text-base md:text-lg mb-6">
              Our comprehensive warranties and affordable payment plans ensure your peace of mind while you enjoy your RV adventures!
            </p>

            <a
              href="tel:2694316864"
              className="inline-flex items-center justify-center gap-3 bg-[#59d24f] hover:bg-[#40d61e] text-white font-semibold px-8 py-4 rounded-full text-lg transition shadow-md"
            >
              <i className="bi bi-telephone-fill text-white"></i>
              Call Us 269-431-6864
            </a>

            <p className="text-sm text-gray-600 mt-4">
              <span className="text-[#ffcc00]">😊</span> Our friendly support is standing by.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
