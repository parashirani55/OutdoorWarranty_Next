"use client";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect, useRef, useState } from "react";

export default function FinancingSection() {

    const [animate, setAnimate] = useState(true)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setAnimate(true);       
                        observer.disconnect();  
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat py-20 sm:py-24 px-6 flex justify-center items-center text-white"
            style={{
                backgroundImage:
                    "url('/section_img/friends_on_rv_travel.webp')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Inner Content */}
            <div className="relative z-10 w-full max-w-[1400px] flex flex-col gap-10">
                {/* === Headline === */}
                <h1 className="text-[26px] sm:text-[34px] md:text-[44px] lg:text-[46px] font-semibold leading-snug text-center">
                    “Hassle-Free Protection: Get{" "}
                    <span className="relative inline-block text-[#0daa38] px-2 z-10">
                        <span className="relative z-20">0% Interest</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 500 150"
                            preserveAspectRatio="none"
                            className="absolute left-0 bottom-[-4px] w-full h-auto z-0"
                        >
                            <path
                                d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6
                                 c1.4,32.4,52.2,54,142.6,63.7
                                 c66.2,7.1,212.2,7.5,273.5-8.3
                                 c64.4-16.6,104.3-57.6,33.8-98.2
                                 C386.7-4.9,179.4-1.4,126.3,20.7"
                                fill="none"
                                stroke="#ff4343"
                                strokeWidth="6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={animate ? "animate-draw" : ""}
                            ></path>
                        </svg>
                    </span>

                    Financing for Your Extended RV Warranty Today!”
                </h1>

                {/* === Middle Section (Icons + Review) === */}
                <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
                    {/* Icon List */}
                    <ul className="space-y-4 text-[16px] font-medium text-white/90 flex-1">
                        {[
                            "Interest Free Coverage Plans",
                            "Affordable monthly payments",
                            "Hassle-free extended warranty coverage you need!",
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <i className="bi bi-check-circle-fill text-[#0daa38] text-[20px]"></i>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Testimonial Box */}
                    <div className="bg-black/40 rounded-lg p-4 max-w-[550px] flex flex-col sm:flex-row items-start gap-5 text-left">
                        <img
                            src="/section_img/rafael.png"
                            alt="Rafael Dos Santos Dionizio"
                            className="w-[36px] h-[36px] rounded-full object-cover"
                        />

                        <div className="flex-1 w-full">
                            <h4 className="text-white font-semibold text-[14px]">
                                Rafael Dos Santos Dionizio
                            </h4>

                            <div className="flex text-[#f8b400] text-[15px] mb-1">
                                {[...Array(5)].map((_, i) => (
                                    <i key={i} className="bi bi-star-fill"></i>
                                ))}
                            </div>

                            {/* ✅ Make paragraph take full width */}
                            <p className="w-full text-[14px] text-white/90 leading-relaxed">
                                Outdoor Warranty was fantastic to work with! They helped me find
                                an extended warranty plan that fit my needs and budget, and their
                                team was always available to answer my questions.
                            </p>
                        </div>

                        {/* ✅ Fixed Google Icon styling */}
                        <div className="ml-auto bg-[#DB4437] text-white rounded-full w-[26px] h-[26px] flex items-center justify-center">
                            <i className="bi bi-google text-[14px]"></i>
                        </div>
                    </div>

                </div>

                {/* === Subtext === */}
                <p className="text-white/80 italic text-center mt-4 text-[16px]">
                    Enjoy peace of mind on the road without breaking the bank.
                </p>

                {/* === Buttons === */}
                <div className="flex flex-col items-center gap-4 mt-6">
                    <a
                        href="tel:269-431-6864"
                        className="inline-flex items-center justify-center gap-2 bg-[#24b619] hover:bg-[#28cc1b] text-white px-8 py-4 rounded-full text-[16px] lg:text-[22px] shadow-[0_5px_20px_rgba(40,204,27,0.4)] transition-all duration-300  text-center"
                    >
                        <i className="bi bi-telephone-fill text-[22px]"></i>
                        Call 269-431-6864 Now!
                    </a>

                    <a
                        href="tel:574-406-2503"
                        className="inline-flex items-center justify-center gap-2 border-2 underline border-white text-white px-8 py-4 rounded-full font-medium text-[16px] lg:text-[18px] hover:bg-[#61CE70] hover:text-white  text-center"
                    >
                        Get The Best RV Warranty Plans👉
                    </a>
                </div>
            </div>

            {/* animation */}
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
        }`}</style>
        </section>
    );
}