"use client";

import "bootstrap-icons/font/bootstrap-icons.css";

export default function CoverageCallSection() {
    return (
        <section className="bg-white text-center py-16 px-4">
            <div className="max-w-[900px] mx-auto">
                {/* Heading */}
                <h3 className="text-[22px] font-[500] sm:text-[26px] md:text-[30px]  text-[#045c1c] leading-relaxed mb-6">
                    "Getting The Right RV Coverage Isn't Just About Protection, It's About Saving for the Future"
                </h3>

                {/* Star Rating */}
                <div className="flex justify-center items-center gap-1 mb-6 text-[#f8b400] text-[22px]">
                    {[...Array(5)].map((_, i) => (
                        <i key={i} className="bi bi-star-fill"></i>
                    ))}
                </div>

                {/* Call Button */}
                <div className="flex justify-center mb-6">
                    <a
                        href="tel:269-431-6864"
                        className="inline-flex items-center gap-2 border border-[#28cc1b] bg-[#48ac3f] text-white px-6 sm:px-7 py-5 rounded-full text-[15px] sm:text-[16px] lg:text-[22px] 
      shadow-[0_4px_20px_rgba(72,172,63,0.5)] hover:shadow-[0_6px_25px_rgba(72,172,63,0.6)] 
      hover:border-[#28cc1b] transition-all duration-300 ease-in-out"
                    >
                        <i className="bi bi-telephone-fill text-[18px] lg:text-[22px]"></i>
                        Call 269-431-6864 To Get Started Now!
                        <span role="img" aria-label="point right">
                            👉
                        </span>
                    </a>
                </div>


                {/* Tagline */}
                <p className="italic text-[14px] text-[#09360c]">
                    Discounted coverage prices with friendly support awaits.
                </p>
            </div>
        </section>
    );
}