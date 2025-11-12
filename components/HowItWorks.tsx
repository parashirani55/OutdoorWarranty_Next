"use client";
import Image from "next/image";
import { Phone } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="relative w-full bg-[#f8fff9] py-20 md:py-28 overflow-hidden text-center">
      {/* ✅ Decorative top SVG (rotated like Elementor) */}
      <div className="max-w-[1300px] mx-auto px-6">
        {/* Section Title */}
        <h4 className="text-[#339966] uppercase text-lg sm:text-xl md:text-2xl font-semibold tracking-wider">
  How It Works
</h4>

        <h2 className="text-[#064517] text-2xl sm:text-3xl md:text-[38px] font-semibold leading-tight mt-3">
          Discover How Much You Can Save On <br /> Your Extended RV Warranty:
          <br />
          <span className="text-[#0e800e]">Easy as 1-2-3!</span>
        </h2>
        <p className="text-gray-600 mt-3 max-w-[650px] mx-auto text-sm sm:text-base">
          Don’t Overpay for Your Extended RV Warranty: Find Out How Much You Can Save Now!
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-14 mt-16 text-left">
          {[
            {
              step: "STEP 1",
              icon: "/extra/icon-1.png",
              title: "Fill in Our Easy Form",
              desc: "Provide us with some basic information about your RV, such as the make, model, year, and mileage. This will help us give you an accurate quote.",
            },
            {
              step: "STEP 2",
              icon: "/extra/icon-2.png",
              title: "Get Customized Coverage and Save Big!",
              desc: "Once we receive your information, we’ll work with you to customize your coverage and provide a personalized quote that reflects our wholesale prices.",
            },
            {
              step: "STEP 3",
              icon: "/extra/icon-3.png",
              title: "Enjoy Worry-Free Travels And Huge Cost Savings!",
              desc: "Start hitting the road with confidence knowing you’re protected from unexpected breakdowns and costly repairs. Plus, our wholesale prices save you big compared to dealers!",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center px-4 sm:px-6"
            >
              <div className="text-white bg-[#339966] text-xs font-semibold px-4 py-1 rounded-full mb-3">
                {item.step}
              </div>
              <Image
                src={item.icon}
                alt={item.title}
                width={80}
                height={80}
                className="object-contain mb-4"
              />
              <h5 className="text-[#045C1C] font-bold text-lg sm:text-xl mb-2">
                {item.title}
              </h5>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Review Card */}
        <div className="bg-white shadow-md rounded-2xl p-6 max-w-[600px] mx-auto mt-16 text-left">
          <div className="flex items-center gap-4 mb-3">
            <Image
              src="/person/araceli.jpg"
              alt="Araceli Martinez"
              width={50}
              height={50}
              className="rounded-full border border-gray-300"
            />
            <div>
              <p className="font-semibold text-black">Araceli Martinez</p>
              <p className="text-yellow-400 text-sm">★★★★★</p>
            </div>
          </div>
          <p className="text-gray-700 italic text-sm sm:text-base leading-relaxed">
            “They made the process of purchasing an extended warranty for my Heartland Big
            Country easy and stress-free. They were upfront about all of the coverage options
            and pricing, and I felt confident in my decision to choose them.”
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center mt-10 gap-5">
          <p className="text-[#045C1C] text-lg">
            Want Worry-Free Travels And Huge Cost Savings? 👉
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#get-quote"
              className="bg-[#59d24f] hover:bg-[#40d61e] text-white font-semibold px-10 py-4 rounded-full shadow-md transition text-base sm:text-lg"
            >
              Yes! Get Started Now! 👉
            </a>
            <a
              href="tel:2694316864"
              className="border-2 border-[#59d24f] text-[#045C1C] hover:bg-[#59d24f] hover:text-white font-semibold px-10 py-4 rounded-full shadow-md transition text-base sm:text-lg flex items-center gap-2"
            >
              <Phone size={20} /> Or Call Us 269-431-6864
            </a>
          </div>
          <p className="text-gray-500 italic text-xs sm:text-sm mt-3">
            *It only takes a few minutes to get started!
          </p>
        </div>
      </div>
    </section>
  );
}
