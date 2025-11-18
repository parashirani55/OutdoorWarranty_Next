"use client";
import { useEffect, useState } from "react";
import { MapPin, Phone, Star } from "lucide-react";

export default function TopBar() {
  const texts = ["INTEREST FREE PLAN", "WHOLESALE PRICING"];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setFade(true);
      }, 400);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full text-white text-sm bg-[#000000AB]">
      <div className=" max-w-[1400px] mx-auto  flex flex-col lg:flex-row  justify-between items-center  py-2 px-4 gap-3 lg:gap-0  ">

        {/* LEFT SIDE */}
        <div className="flex flex-col md:flex-row items-center gap-4">

          {/* Address — hidden on mobile */}
          <div className="hidden md:flex items-center gap-2 text-gray-100">
            <MapPin size={16} className="text-[#48ac3f]" />
            <span className="whitespace-nowrap">
              1029, 4024 Elkhart Rd. Ste 26, Goshen, IN 46526
            </span>
          </div>

          {/* Phone — Desktop text / Mobile button */}
          <div className="md:hidden w-full flex justify-start">
            <a href="tel:5745056246" className="bg-[#48ac3f] text-white px-20 py-2 rounded-full font-semibold  flex items-center justify-start gap-2 shadow-md">
              <Phone  className="text-white w-[60px]" />
             Call 269-431-6864 For Premium Warranties!
            </a>
          </div>

          {/* Desktop phone text */}
          <div className="hidden md:flex items-center gap-2 text-gray-100">
            <Phone size={16} className="text-[#48ac3f]" />
            <span>
              Call Us at{" "}
              <a
                href="tel:5745056246"
                className="text-white hover:text-blue-300 transition"
              >
                574-505-6246
              </a>
            </span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col md:flex-row items-center gap-4">

          {/* Animated text */}
          <div
            className={`transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            } text-white text-[12px] md:text-auto`}
          >
            {texts[index]}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 text-gray-200 text-[12px] md:text-auto">
            <span>| Rated Excellent 4.8/5</span>
            <div className="flex gap-[2px]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}