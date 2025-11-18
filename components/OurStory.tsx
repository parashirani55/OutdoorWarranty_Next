"use client";
import Image from "next/image";
import { Check } from "lucide-react";

export default function DealerMarkupSection() {
  return (
    <section className="w-full bg-white py-14 md:py-20 relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-5 md:px-10 flex flex-col items-center text-center md:text-left">

        {/* Top Text */}
        <h4 className="text-[#4C9b44]  lg:text-[20px] font-semibold uppercase tracking-wide leading-snug mb-2">
          Get Wholesale Prices on Your Extended RV Warranty: No Middleman Needed!
        </h4>

        {/* Main Headline */}
        <h2 className="text-[#064517] text-2xl sm:text-3xl md:text-[38px] lg:text-[46px] font-extrabold leading-tight max-w-[900px] mx-auto md:mx-0">
          "We Noticed The Excessive Dealer Markups On RV Warranties – and We're Here To Make A Difference!"
        </h2>

        {/* CEO Quote */}
        <p className="text-gray-600 italic mt-3 text-base md:text-lg">
          – Michael Campbell, CEO, OutdoorWarranty
        </p>

        {/* ⭐ Left Floating Decorative SVG (Your exact SVG) ⭐ */}
        <div className=" absolute  left-[-300px]  2xl:hidden top-1/2  -translate-y-1/2  hidden xl:block xl:w-[800px] xl:h-[800px] opacity-20  pointer-events-none z-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="100%"
            height="100%"
            viewBox="0 0 150 112.499997"
            preserveAspectRatio="xMidYMid meet"
            fill="#59d24f"
          >
            <defs>
              <clipPath id="cde008592a">
                <path d="M 4.472656 12.261719 L 148.582031 12.261719 L 148.582031 112.003906 L 4.472656 112.003906 Z" />
              </clipPath>
            </defs>
            <g clipPath="url(#cde008592a)">
              <path
                d="M 81.765625 112.027344 C 81.796875 111.859375 81.816406 111.691406 81.816406 111.515625 L 81.816406 89.355469 C 83.289062 90.507812 92.65625 97.734375 95.589844 97.609375 C 92.160156 92.976562 98.1875 89.199219 98.1875 89.199219 C 98.1875 89.199219 100.230469 92.199219 104.582031 94.566406 L 97.394531 102.328125 L 105.984375 98.628906 C 105.984375 98.628906 107.164062 100.945312 104.78125 103.339844 C 110.175781 103.585938 115.625 98.628906 115.625 98.628906 C 115.625 98.628906 116.503906 98.851562 117.527344 99.34375 L 117.527344 112.027344 Z M 33.421875 98.726562 C 34.34375 99.449219 40.207031 103.972656 42.042969 103.894531 C 39.894531 100.992188 43.667969 98.628906 43.667969 98.628906 C 43.667969 98.628906 47.386719 104.101562 55.664062 103.730469 C 52.152344 101.675781 49.4375 98.628906 49.4375 98.628906 L 43.300781 91.925781 L 47.980469 89.910156 C 48.375 89.929688 48.785156 89.933594 49.210938 89.914062 C 49.042969 89.808594 48.878906 89.703125 48.71875 89.59375 L 49.636719 89.199219 C 49.636719 89.199219 51.515625 92.894531 47.710938 96.726562 C 56.332031 97.117188 65.039062 89.199219 65.039062 89.199219 C 65.039062 89.199219 66.445312 89.546875 68.078125 90.339844 L 68.078125 111.515625 C 68.078125 111.691406 68.09375 111.859375 68.125 112.027344 L 33.421875 112.027344 Z M 40.253906 85.847656 C 40.253906 85.847656 40.964844 86.960938 42.464844 88.027344 L 41.089844 89.511719 L 38.96875 87.195312 C 39.476562 86.371094 40.253906 85.847656 40.253906 85.847656 Z M 110.261719 85.847656 C 110.261719 85.847656 110.875 87.136719 110.042969 88.671875 L 108.5 90.339844 C 107.800781 89.636719 107.410156 89.199219 107.410156 89.199219 L 106.097656 87.761719 Z M 142.136719 98.628906 L 131.667969 87.195312 C 132.175781 86.371094 132.953125 85.847656 132.953125 85.847656 C 132.953125 85.847656 135.730469 90.210938 141.910156 89.914062 C 139.289062 88.277344 137.261719 85.847656 137.261719 85.847656 L 129.652344 76.980469 C 129.734375 75.75 131.03125 74.882812 131.03125 74.882812 C 131.03125 74.882812 133.277344 78.414062 138.277344 78.171875 C 136.15625 76.847656 134.515625 74.882812 134.515625 74.882812 C 134.515625 74.882812 125.011719 59.675781 122.105469 50.476562 C 120.695312 58.699219 107.480469 77.269531 107.480469 77.269531 L 112.671875 74.882812 C 112.671875 74.882812 113.382812 76.375 111.941406 77.921875 C 112.429688 77.945312 112.921875 77.890625 113.398438 77.789062 L 105.402344 87.003906 L 90.679688 70.929688 C 91.488281 69.605469 92.730469 68.773438 92.730469 68.773438 C 92.730469 68.773438 97.167969 75.746094 107.042969 75.269531 C 102.855469 72.65625 99.617188 68.773438 99.617188 68.773438 L 87.457031 54.601562 C 87.585938 52.636719 89.65625 51.25 89.65625 51.25 C 89.65625 51.25 93.25 56.890625 101.242188 56.507812 C 97.851562 54.390625 95.230469 51.25 95.230469 51.25 C 95.230469 51.25 80.042969 26.949219 75.394531 12.246094 C 73.144531 25.382812 52.023438 55.058594 52.023438 55.058594 L 60.316406 51.25 C 60.316406 51.25 61.453125 53.632812 59.15625 56.105469 C 59.9375 56.144531 60.71875 56.058594 61.484375 55.890625 L 46.21875 73.484375 L 56.46875 68.773438 C 56.46875 68.773438 57.449219 70.828125 56.117188 73.285156 L 44.523438 85.804688 L 36.953125 76.980469 C 37.035156 75.75 38.332031 74.882812 38.332031 74.882812 C 38.332031 74.882812 40.578125 78.414062 45.578125 78.171875 C 43.457031 76.847656 41.816406 74.882812 41.816406 74.882812 C 41.816406 74.882812 32.316406 59.675781 29.402344 50.476562 C 27.996094 58.699219 14.78125 77.269531 14.78125 77.269531 L 19.96875 74.882812 C 19.96875 74.882812 20.683594 76.375 19.242188 77.921875 C 19.730469 77.945312 20.222656 77.890625 20.699219 77.789062 L 11.148438 88.796875 L 17.5625 85.847656 C 17.5625 85.847656 18.175781 87.136719 17.339844 88.671875 L 4.695312 102.328125 L 13.285156 98.628906 C 13.285156 98.628906 14.464844 100.945312 12.082031 103.339844 C 17.476562 103.585938 22.925781 98.628906 22.925781 98.628906 C 22.925781 98.628906 23.804688 98.851562 24.824219 99.34375 L 24.824219 112.027344 Z"
              />
            </g>
          </svg>
        </div>



        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 mt-12 items-center w-full">

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

    </section>
  );
}
