"use client";
import Image from "next/image";
import { Check } from "lucide-react";

export default function DealerMarkupSection() {
  return (
    <section className="w-full bg-white py-14 md:py-20 relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-5 md:px-10 flex flex-col items-center text-center md:text-left">
        
        {/* Top Text */}
        <h4 className="text-[#339966] text-xl sm:text-2xl font-semibold uppercase tracking-wide leading-snug mb-2">
          Get Wholesale Prices on Your Extended RV Warranty: No Middleman Needed!
        </h4>

        {/* Main Headline */}
        <h2 className="text-[#045C1C] text-2xl sm:text-3xl md:text-[38px] lg:text-[46px] font-extrabold leading-tight max-w-[900px] mx-auto md:mx-0">
          "We Noticed The Excessive Dealer Markups On RV Warranties – and We're Here To Make A Difference!"
        </h2>

        {/* CEO Quote */}
        <p className="text-gray-600 italic mt-3 text-base md:text-lg">
          – Michael Campbell, CEO, OutdoorWarranty
        </p>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 mt-12 items-center w-full">

          {/* --- Left Image Group --- */}
          <div className="relative flex justify-center md:justify-end md:-ml-12 lg:-ml-20 w-full">
            <div className="relative w-full max-w-[520px] sm:max-w-[600px]">
              <Image
                src="/extra/family_picnic_rv.webp"
                alt="Family outside RV"
                width={800}
                height={500}
                className="rounded-xl shadow-xl w-full h-auto object-cover"
                priority
              />

              {/* Floating Images */}
              <div className="absolute -top-8 left-[-8%] sm:left-[-10%] w-[48%] sm:w-[42%]">
                <Image
                  src="/extra/rv_family_barbecue.webp"
                  alt="Family cooking outside RV"
                  width={400}
                  height={250}
                  className="rounded-lg border-4 border-white shadow-lg object-cover"
                />
              </div>

              <div className="absolute -bottom-8 right-[-8%] sm:right-[-10%] w-[52%] sm:w-[46%]">
                <Image
                  src="/extra/older_couple_rv.webp"
                  alt="Older couple driving RV"
                  width={400}
                  height={250}
                  className="rounded-lg border-4 border-white shadow-lg object-cover"
                />
              </div>

              {/* Floating Texts */}
              <p className="absolute top-[10%] left-[2%] bg-white text-[#045C1C] text-xs sm:text-sm font-semibold rounded-full shadow-md px-3 sm:px-4 py-1 sm:py-2 flex items-center gap-1 sm:gap-2">
                🤗 Create Unforgettable Memories
              </p>
              <p className="absolute bottom-[10%] right-[2%] bg-white text-[#045C1C] text-xs sm:text-sm font-semibold rounded-full shadow-md px-3 sm:px-4 py-1 sm:py-2 flex items-center gap-1 sm:gap-2">
                ❤️ Experience That Peace of Mind
              </p>
            </div>
          </div>

          {/* --- Right Text Content --- */}
          <div className="text-gray-800 space-y-5 md:space-y-6 mt-8 md:mt-0">
            <div>
              <h3 className="text-[#339966] uppercase text-lg sm:text-xl md:text-2xl font-semibold tracking-wide">
                Our Story
              </h3>
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold mt-1 text-[#045C1C]">
                We're On A Mission
              </h4>
            </div>

            <div className="space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
              <p>
                At <strong>OutdoorWarranty.com</strong>, our goal is to help RV owners embark on worry-free adventures with their families and loved ones without overpaying for extended RV warranties.
              </p>
              <p>
                We crafted our product line in response to the excessive markups dealerships charge for warranties, which often lack the comprehensive coverage we offer.
              </p>
              <p>
                Our mission is to provide a superior alternative at a significantly lower cost for RV owners seeking extended protection and ultimate peace of mind.
              </p>
              <p>
                Located in Elkhart, Indiana – <em>RV Capital of the World</em>, <strong>OutdoorWarranty</strong> is the <strong>leading provider</strong> of RV warranties and extended service contracts!
              </p>
            </div>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <ul className="space-y-2">
                {[
                  "24/7 roadside assistance for peace of mind",
                  "Transferable warranties to boost your RV's resale value",
                  "Expedited claims processing for hassle-free support",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#59d24f] mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {[
                  "No hidden fees or surprise costs",
                  "Coverage for all RV types, from Class A to travel trailers",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#59d24f] mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <p className="text-gray-700 text-base">
              Ready for <strong>huge warranty discounts</strong> and <strong>worry-free travels</strong>?
            </p>

            <div className="flex flex-wrap gap-3 mt-3">
              <a
                href="#get-quote"
                className="bg-[#59d24f] hover:bg-[#40d61e] text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-md transition text-base sm:text-lg"
              >
                Yes! Get Huge Warranty Discounts Now! 👉
              </a>
              <a
                href="tel:2694316864"
                className="border-2 border-[#59d24f] text-[#045C1C] hover:bg-[#59d24f] hover:text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-md transition text-base sm:text-lg flex items-center gap-2"
              >
                <i className="bi bi-telephone-fill"></i> Call Us 269-431-6864
              </a>
            </div>

            <p className="text-gray-700 mt-5 flex items-center justify-center md:justify-start gap-2 text-xs sm:text-sm md:text-base">
              🤗 Wholesale Prices. Interest Free Payment Plan. 24/7 Support.
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Decorative Bottom SVG Separator */}
      {/* ✅ Decorative Floating SVG (centered and overlapping next section) */}
<div
  className="
    absolute 
    bottom-[-60px] 
    left-1/2 
    -translate-x-1/2 
    rotate-[-18deg]
    w-[110px] 
    sm:w-[130px] 
    md:w-[160px] 
    opacity-25 
    text-[#59d24f]
    pointer-events-none
  "
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 82.5 74.999997"
    fill="#59d24f"
    preserveAspectRatio="xMidYMid meet"
  >
    <path
      d="M 64.847656 63.617188 C 45.730469 63.390625 25.929688 55.675781 16.023438 38.648438 C 9.675781 27.730469 9.058594 15.726562 11.699219 3.550781 C 10.027344 13.566406 10.433594 23.417969 14.734375 32.722656 C 23.621094 51.953125 45.039062 60.039062 65.25 59.179688 C 62.109375 57.796875 59.015625 56.375 55.722656 55.589844 C 54.464844 55.261719 53.71875 53.976562 54.050781 52.71875 C 55.113281 48.71875 77.804688 58.792969 76.925781 61.890625 C 77.496094 65.035156 53.914062 73.148438 53.242188 69 C 53.035156 67.71875 53.90625 66.503906 55.191406 66.289062 C 58.484375 65.808594 61.644531 64.699219 64.847656 63.617188 Z"
    />
  </svg>
</div>

    </section>
  );
}
