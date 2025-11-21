"use client";

import { Poppins } from "next/font/google";

export default function AboutContent() {
    return (
        <div className="max-w-[749px] mx-auto px-4 pt-10">
            <h1 className="text-4xl font-bold text-left mb-10 text-[#064517]">
                About Us
            </h1>

            {/* TOP CONTENT */}
            <div className="flex flex-col md:flex-row items-center gap-10">

                {/* Logo */}
                <img
                    src="https://outdoorwarranty.com/wp-content/uploads/2023/05/outdoowarranty-logo.svg"
                    alt="Outdoor Warranty Logo"
                    className="w-60 h-60 object-contain mx-auto"
                />

                {/* Title + Text */}
                <div>
                    <h3 className="text-[28px] mb-3 text-center text-[#045c1c]">
                        You’re in Good Company
                    </h3>
                    <p className="text-[#09360c] leading-relaxed">
                        <strong className="text-[#09360c]">Outdoor Warranty</strong> is based in <strong className="text-[#09360c]">Elkhart County, Indiana</strong> — known as the “RV Capital of the World” because it’s where most recreational vehicles are built. We know the industry and take pride in being part of it. The staff of Outdoor Warranty lives in the community where most RVs get their start and, no matter where you are when you need help, we may have already had professional dealings with the service provider closest to you.
                    </p>
                </div>
            </div>

            {/* BODY PARAGRAPHS */}
            <div className="mt-10 space-y-5 text-[#09360c] leading-relaxed">
                <p>
                    We’re a top provider of warranties for RVs — also known as RV extended service contracts — and we’ve developed our product line after witnessing firsthand the markup that dealerships were getting for providing warranties that weren’t as comprehensive as what we provide.
                </p>

                <p>
                    This isn’t a sidelight for us — a lucrative revenue stream thought up by the corporate marketing department. Instead, it’s our core business and grew out of our own experiences as RV owners.
                </p>

                <p>
                    What we do is bring greater value to the RV warranty market. Not only do we offer a better price, but we also provide exceptional customer service. You can always expect fair pricing and excellent coverage from Outdoor Warranty — and a real person on the line when you call, one who realizes that you might not be having the best day.
                </p>

                <p>
                    Before you hit the road, we’ll guide you in purchasing the best warranty for your circumstances based on the options available, level of coverage you need, pricing model, and time commitment you require.
                </p>

                <p>
                    Once you have coverage with us, you’ll be able to enjoy the open road without fretting about the unexpected. You’ll know that we have your back. We provide coverage throughout the United States and Canada, so wherever you may roam we’ll be ready to help you out of any surprises. If you’re tired of worrying about mechanical breakdowns, we’ll provide you some peace of mind for years to come.

                </p>
            </div>

            {/* Divider */}
            <div className="w-full border-b-4 border-green-600 my-10"></div>
        </div>
    );
}