"use client"

import { useState } from "react";


export default function RvRoadsideAssistanceForm() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        zip: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    };

    return (
        <>
            <div className="max-w-[749px] mx-auto shadow-2xl p-6 sm:p-8 rounded-2xl bg-white mb-20 mt-10 w-[95%] sm:w-[90%] md:w-auto">

                {/* Top Title */}
                <p className="text-[14px] sm:text-[16px] font-semibold mb-2 text-center italic leading-snug">
                    👉 <span className="text-[#045c1c]">Call Us 574–505–6246</span>
                </p>

                <h2 className="text-[20px] sm:text-[24px] text-[#045c1c] font-extrabold mb-3 text-center leading-snug">
                    Save Big on Your RV Warranty Today!
                </h2>

                <p className="text-[#045c1c] mb-6 text-center text-[16px] sm:text-[20px] leading-normal">
                    Let us give you the best quote we can! 👇
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">

                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={handleChange}
                        value={formData.name}
                        required
                        className="w-full border border-gray-300 rounded-md p-3 placeholder-gray-500 text-[14px] sm:text-[16px]"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        onChange={handleChange}
                        value={formData.email}
                        required
                        className="w-full border border-gray-300 rounded-md p-3 placeholder-gray-500 text-[14px] sm:text-[16px]"
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Mobile Phone Number"
                        onChange={handleChange}
                        value={formData.phone}
                        required
                        className="w-full border border-gray-300 rounded-md p-3 placeholder-gray-500 text-[14px] sm:text-[16px]"
                    />

                    <input
                        type="text"
                        name="zip"
                        placeholder="Zip Code"
                        onChange={handleChange}
                        value={formData.zip}
                        className="w-full border border-gray-300 rounded-md p-3 placeholder-gray-500 text-[14px] sm:text-[16px]"
                    />

                    <p className="text-xs text-[#09360c] leading-relaxed">
                        You agree to receive automated follow-up, reminder, and promotional messages with varying frequency. Text and data rates may apply. Reply STOP to end. Text HELP for help. Click for{" "}
                        <a href="/terms" className="text-green-700 underline">Terms of Service</a>{" "}
                        and{" "}
                        <a href="/privacy-policy" className="text-green-700 underline">Privacy Policy</a>.
                    </p>

                    <div className="flex justify-center items-center">
                        <button
                            type="submit"
                            className="bg-green-600 text-[14px] sm:text-[16px] text-white px-7 sm:px-10 py-2 rounded-md flex justify-center items-center gap-2"
                        >
                            Claim Your Savings Now! 👉
                        </button>
                    </div>

                </form>
            </div>
        </>
    )
}