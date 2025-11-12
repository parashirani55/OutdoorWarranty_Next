"use client";
import { useEffect, useState } from "react";
import { MapPin, Phone, Star } from "lucide-react";

export default function TopBar() {
  const texts = ["Interest Free Plan", "Free Plan"];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Smooth text transition
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setFade(true); // fade in next text
      }, 400);
    }, 2500); // 2.5s between swaps
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#000000AB] text-white text-sm">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center py-2 px-4 gap-2 md:gap-0">
        
        {/* LEFT SIDE — Location + Phone */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center gap-2 text-gray-100">
            <MapPin size={16} className="text-white/90" />
            <span className="whitespace-nowrap">
              1029, 4024 Elkhart Rd. Ste 26, Goshen, IN 46526
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-100">
            <Phone size={16} className="text-white/90" />
            <span>
              Call Us at{" "}
              <a
                href="tel:5745056246"
                className="text-white hover:text-blue-300 font-semibold transition"
              >
                574-505-6246
              </a>
            </span>
          </div>
        </div>

        {/* RIGHT SIDE — Typing Text + Rating */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Animated Text */}
          <div
            className={`transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            } text-white font-semibold`}
          >
            {texts[index]}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 text-gray-200">
            <span>Rated Excellent 4.8/5</span>
            <div className="flex gap-[2px]">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
