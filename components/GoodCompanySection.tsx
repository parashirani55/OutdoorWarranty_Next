"use client";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function GoodCompanySection() {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat text-[#09360c] py-16 px-4 overflow-hidden"
            style={{
                backgroundImage:
                    "url('/section_img/family_rv_warranty.webp')",
            }}
        >
            {/* === Light White Overlay === */}
            <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px] z-[1]"></div>

            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-[2]">
                {/* ========= LEFT COLUMN ========= */}
                <div>
                    {/* Heading */}
                    <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] text-[#064517] font-semibold mb-4 text-center">
                        You are in Good Company With OutdoorWarranty!
                    </h2>

                    {/* Testimonial Box */}
                    <div className="relative inline-block bg-white/50 backdrop-blur-[1px] rounded-lg p-4 sm:p-5  mx-auto mb-5">
                        <p className="text-[14px] sm:text-[15px] leading-relaxed text-center text-[#09360c]">
                            “I’d highly recommend Outdoor Warranty to anyone who is looking for an extended warranty
                            for their RV. Their coverage is comprehensive, their prices are reasonable, and their
                            customer service is top-notch.”
                        </p>
                        <p className="mt-3 text-center text-[14px] text-[#09360c] font-medium">– Margaret Singer</p>
                    </div>


                    {/* Star Rating */}
                    <div className="flex gap-1 text-[#f8b400] text-[20px] justify-center mb-6">
                        {[...Array(5)].map((_, i) => (
                            <i key={i} className="bi bi-star-fill"></i>
                        ))}
                    </div>

                    {/* Icon List */}
                    <ul className="space-y-3 text-[14px] sm:text-[16px] mb-8 text-[#09360c]">
                        {[
                            "Top provider of RV extended service contracts based in Elkhart County, Indiana - the “RV Capital of the World.”",
                            "Comprehensive coverage at fair pricing, with exceptional customer service.",
                            "Guide you in purchasing the best warranty for your circumstances.",
                            "Coverage throughout the United States and Canada.",
                            "Say goodbye to worrying about unexpected mechanical breakdowns on the open road.",
                        ].map((text, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <i className="bi bi-check-lg text-[#28cc1b] text-[20px] font-[700] mt-[2px]"></i>
                                <span>{text}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Subheading */}
                    <h3 className="text-[18px] sm:text-[20px] md:text-[25px] font-medium mb-4">
                        Call us or fill out the form for a free quote and start enjoying your RV adventures
                        worry-free!
                    </h3>

                    {/* Call Button */}
                    <a
                        href="tel:269-431-6864"
                        className="inline-flex items-center gap-2 border border-[#28cc1b] bg-[#48ac3f] text-white px-6 py-4 rounded-full text-[15px] sm:text-[16px] lg:text-[18px] font-medium 
              shadow-[0_4px_20px_rgba(72,172,63,0.5)] hover:shadow-[0_6px_25px_rgba(72,172,63,0.6)] hover:bg-[#24b619] transition-all duration-300 ease-in-out underline"
                    >
                        <i className="bi bi-telephone-fill text-[18px] lg:text-[20px]"></i>
                        Call 269-431-6864 Now!
                    </a>

                    {/* Decorative Icon */}
                    <div className="hidden lg:flex justify-end mt-8">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="80"
                            height="60"
                            fill="#48ac3f"
                            viewBox="0 0 75 52.5"
                        >
                            <path d="M9.4 2.6c-1.5 2.6-.9 5 0 7.2 1.2 3 2.7 5.9 4.5 8.5 8.4 12.3 20.2 19.4 34.3 22.2 3.8.7 7.6.8 11.8 1.2-1.8 3.5-5.5 5.3-7.7 8.8 1.7.4 2.8-.5 3.8-1.3 3.8-3 7.5-6 11-9.1 1.8-1.5 1.9-2.6.3-4.1-3.2-3.2-7.1-5.1-11.6-5.6-.2 0-.4.3-.8.6 1 3.6 5.6 2.6 7.4 5.8-5.8 1.5-11.3.6-16.8-.8-5.7-1.4-11.2-3.5-16-6.8-4.8-3.2-8.8-7.3-12.4-12C13.3 13.4 10.9 8.3 9.4 2.6Z" />
                        </svg>
                    </div>
                </div>

                {/* ========= RIGHT COLUMN ========= */}
                <div className="bg-white/90 backdrop-blur-sm rounded-[30px] shadow-2xl p-6 sm:p-8 relative ">
                    {/* Headings */}
                    <h2 className="text-[24px] sm:text-[28px] lg:text-[40px] font-semibold mb-3 text-center">
                        Save Big On The Perfect Plan For You!
                    </h2>
                    <h5 className="text-[16px] sm:text-[18px] lg:text-[20px] font-medium mb-4 text-center text-[#045c1c]">
                        Your Worry-Free Adventure Awaits! <span role="img" aria-label="down">👇</span>
                    </h5>

                    {/* Phone Line */}
                    <p className="flex items-center justify-center gap-2 text-[15px] lg:text-[18px] font-bold mb-6 italic text-[#018525] hover:text-[#28cc1b]">
                        <i className="bi bi-telephone-fill text-[#045c1c]"></i> (Or Call us at{" "}
                        <a href="tel:269-431-6864">
                            269-431-6864
                        </a>
                        )
                    </p>

                    {/* Form */}
                    <form className="space-y-4 flex flex-col items-center">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 text-[14px] focus:ring-2 focus:ring-[#28cc1b] outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 text-[14px] focus:ring-2 focus:ring-[#28cc1b] outline-none"
                        />
                        <input
                            type="tel"
                            placeholder="Mobile Phone Number"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 text-[14px] focus:ring-2 focus:ring-[#28cc1b] outline-none"
                        />
                        <input
                            type="number"
                            placeholder="Zip Code"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 text-[14px] focus:ring-2 focus:ring-[#28cc1b] outline-none"
                        />

                        {/* Terms */}
                        <p className="text-[11px] text-gray-[#09360c] leading-snug mt-2">
                            You agree to receive automated follow-up, reminder, and promotional messages with
                            varying frequency. Text and data rates may apply. Reply STOP to end. Text HELP for
                            help. Click for{" "}
                            <a
                                href="https://outdoorwarranty.com/terms/"
                                className="text-[#28cc1b] hover:underline"
                            >
                                Terms of Service
                            </a>{" "}
                            and{" "}
                            <a
                                href="https://outdoorwarranty.com/privacy-policy/"
                                className="text-[#28cc1b] hover:underline"
                            >
                                Privacy Policy
                            </a>
                            .
                        </p>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="mt-4 bg-[#48ac3f] text-white px-5 py-4 rounded-full font-medium text-[15px] sm:text-[16px] lg:text-[20px] cursor-pointer hover:bg-[#48ac3f9f]"
                        >
                            Claim Your Savings Now! <span role="img" aria-label="point right">👉</span>
                        </button>
                    </form>

                    {/* Bottom note */}
                    <div className="mt-6 text-center">
                        <i className="bi bi-star-fill text-[#59AD66] mr-2"></i>
                        It only takes a couple of minutes to get started!
                    </div>
                </div>
            </div>
        </section>
    );
}
