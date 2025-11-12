"use client";
import { Check, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { Kalam } from "next/font/google";

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export default function Hero() {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-[100vh] flex items-center justify-center text-white font-poppins overflow-hidden"
      style={{
        backgroundImage: "url('/assets/hero-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      {/* Main container */}
      <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 sm:px-6 pt-36 pb-20 items-center mt-6 sm:mt-10">
        {/* Left Section */}
        <div className="space-y-8 sm:space-y-10 relative">
          {/* “Skip the markup!” */}
          <div className="absolute -left-16 top-[8%] hidden md:flex flex-col items-center rotate-[-10deg]">
            <span
              className={`${kalam.className} text-[#59d24f] font-normal text-[24px] lg:text-[28px] leading-tight text-center`}
              style={{ transform: "rotate(-15deg)" }}
            >
              skip the<br />markup!
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 75 52.5"
              className="w-[80px] lg:w-[90px] mt-[-6px] -rotate-[5deg]"
            >
              <path
                d="M 9.363281 2.597656 C 7.816406 5.164062 8.359375 7.628906 9.238281 9.824219 C 10.453125 12.851562 11.898438 15.871094 13.742188 18.542969 C 22.179688 30.792969 33.96875 37.875 48.328125 40.640625 C 52.023438 41.351562 55.832031 41.476562 59.933594 41.90625 C 58.074219 45.398438 54.34375 47.238281 52.1875 50.789062 C 53.882812 51.195312 54.949219 50.320312 55.910156 49.5625 C 59.660156 46.609375 63.382812 43.613281 67.015625 40.515625 C 68.78125 39.011719 68.855469 37.878906 67.304688 36.363281 C 64.097656 33.226562 60.265625 31.285156 55.777344 30.835938 C 55.582031 30.816406 55.355469 31.132812 54.925781 31.457031 C 55.972656 35.105469 60.582031 34.105469 62.382812 37.277344 C 56.554688 38.773438 50.996094 37.902344 45.496094 36.484375 C 39.8125 35.019531 34.320312 33.027344 29.386719 29.703125 C 24.585938 26.464844 20.605469 22.363281 16.945312 17.882812 C 13.277344 13.398438 10.878906 8.292969 9.363281 2.597656 Z"
                fill="#59d24f"
              />
            </svg>
          </div>

          {/* Tagline */}
          <p className="uppercase text-[#40d61e] font-semibold tracking-wide text-sm sm:text-base md:text-lg lg:text-xl text-center lg:text-left">
            INVEST IN RELIABLE PROTECTION{" "}
            <span className="text-white normal-case">
              : Your RV Deserves the Best Extended Warranty
            </span>
          </p>

          {/* Headings */}
          <div className="text-center space-y-3">
            <h1 className="text-[24px] sm:text-[34px] md:text-[44px] lg:text-[50px] font-extrabold leading-tight tracking-tight">
              RV Extended Warranty
            </h1>
            <div className="relative inline-block mt-1">
              <span className="text-[#59d24f] text-[22px] sm:text-[30px] md:text-[40px] lg:text-[46px] font-extrabold relative z-10 leading-[1.1] text-center block">
                Cost and Coverage
              </span>
              <svg
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[106%] h-auto"
                viewBox="0 0 450 140"
              >
                <ellipse
                  cx="225"
                  cy="70"
                  rx="210"
                  ry="45"
                  fill="none"
                  stroke="#FF3B30"
                  strokeWidth="5"
                  className={animate ? "animate-draw" : ""}
                />
              </svg>
            </div>
          </div>

          {/* Reviews */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mt-8 max-w-[700px] w-full">
            <div className="flex items-center gap-2 text-sm sm:text-base md:text-lg">
              <i className="bi bi-facebook text-[#1877F2] text-2xl sm:text-3xl"></i>
              <span className="text-white">
                Facebook Reviews <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm sm:text-base md:text-lg">
              <i className="bi bi-google text-[#DB4437] text-2xl sm:text-3xl"></i>
              <span className="text-white">
                Google Reviews <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              </span>
            </div>
          </div>

          {/* Review Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 mt-5 max-w-[700px]">
            <div className="flex items-center gap-3 sm:gap-4 mb-2">
              <img
                src="/person/robert_barbell.jpg"
                alt="Robert Barbell"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/30"
              />
              <div>
                <p className="font-semibold text-white text-base sm:text-lg">
                  Robert Barbell
                </p>
                <p className="text-yellow-400 text-xs sm:text-sm">⭐⭐⭐⭐⭐</p>
              </div>
            </div>
            <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
              “Wow, I cannot say enough good things about the customer service at
              OutdoorWarranty.com! They really went above and beyond to make sure I got
              the best deal possible. Not only that, but their price beat the dealer’s
              cost by a mile. I’m so grateful for their help!”
            </p>
          </div>

          {/* Checklist */}
          <ul className="space-y-4 sm:space-y-5 mt-8 text-left max-w-[700px]">
            {[
              {
                title: "Find Cheapest RV Extended Warranty Price",
                desc: "Compare RV Extended Prices and Customize Your Plan",
              },
              {
                title: "Get Best RV Warranty Coverage",
                desc: "Compare Different RV Extended Warranty Coverage",
              },
              {
                title: "Have Best RV Extended Warranty Duration",
                desc: "Extended Warranty Duration with Lower Cost",
              },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 sm:gap-5 text-base sm:text-lg leading-snug">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#59d24f] flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                  <Check size={18} className="text-white sm:size-[22px]" />
                </div>
                <div>
                  <strong className="text-[#59d24f] block text-base sm:text-lg">
                    {item.title}
                  </strong>
                  <span className="text-gray-200 text-sm sm:text-base">{item.desc}</span>
                </div>
              </li>
            ))}
          </ul>

          {/* Quote Line */}
          <p className="text-white text-base sm:text-lg md:text-xl font-semibold leading-relaxed font-poppins text-center lg:text-left">
            Get an{" "}
            <span className="text-[#00ff00] font-bold">
              Extended RV Warranty Quote
            </span>{" "}
            from the Best Company
          </p>

          {/* Call Button */}
          <a
            href="tel:2694316864"
            className="relative inline-flex items-center gap-3 bg-[#59d24f] hover:bg-[#40d61e] text-white font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full mt-6 transition text-lg sm:text-xl shadow-lg"
          >
            <span className="absolute left-8 right-8 bottom-[8px] h-[2px] bg-white"></span>
            <Phone size={20} className="relative z-10" />
            <span className="relative z-10">Call 269-431-6864 Now!</span>
          </a>
        </div>

        {/* Right Form */}
        <div className="bg-white text-gray-900 rounded-3xl shadow-2xl p-6 sm:p-10 md:p-12 max-w-[600px] mx-auto w-full min-h-[500px] sm:min-h-[640px] flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 leading-tight">
            Apply for <span className="text-[#339966]">RV Extended Warranty</span>
          </h2>
          <p className="text-center text-base sm:text-lg mb-2 text-gray-800 font-medium">
            Get the Best Extended RV Warranty Price
          </p>
          <p className="text-center text-sm sm:text-md italic font-semibold text-[#339966] mb-6 sm:mb-8">
            <i className="bi bi-telephone-fill mr-2 text-[#339966]"></i>
            (Or Call us at 269-431-6864 Now!)
          </p>

          <form className="space-y-4 sm:space-y-5">
            {["Name", "Email Address", "Mobile Phone Number", "Zip Code"].map((ph, i) => (
              <input
                key={i}
                type="text"
                placeholder={ph}
                className="w-full border border-gray-300 rounded-lg p-3 sm:p-4 text-base sm:text-lg focus:ring-2 focus:ring-[#59d24f] outline-none"
              />
            ))}

            <p className="text-left text-[10px] sm:text-xs text-gray-600 leading-relaxed mt-2">
              You agree to receive automated follow-up, reminder, and promotional messages with varying frequency. Text and data rates may apply. Reply STOP to end. Text HELP for help. Click for{" "}
              <a href="#" className="text-[#339966] underline">Terms of Service</a> and{" "}
              <a href="#" className="text-[#339966] underline">Privacy Policy</a>.
            </p>

            <button
              type="submit"
              className="w-full bg-[#59d24f] hover:bg-[#40d61e] text-white font-semibold py-4 sm:py-5 px-6 sm:px-8 rounded-full transition text-lg sm:text-xl flex justify-center items-center gap-2 shadow-md mt-3"
            >
              Claim Your Savings Now! 👉
            </button>
          </form>

          <p className="text-xs sm:text-sm text-center text-gray-700 mt-4 sm:mt-6 flex items-center justify-center gap-2">
            <i className="bi bi-hand-thumbs-up-fill text-[#59d24f]"></i>
            Get Your RV Warranty in the same day.
          </p>
        </div>
      </div>

      {/* Animation for ellipse */}
      <style jsx>{`
        @keyframes draw {
          0% {
            stroke-dasharray: 0 1000;
            stroke-dashoffset: 1000;
          }
          100% {
            stroke-dasharray: 1000 0;
            stroke-dashoffset: 0;
          }
        }
        .animate-draw {
          animation: draw 3s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
}
