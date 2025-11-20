"use client";

import "bootstrap-icons/font/bootstrap-icons.css";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

export default function GoodCompanySection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    zip: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Validation (Required fields)
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.zip.trim()
    ) {
      Swal.fire({
        icon: "error",
        title: "Missing Fields",
        text: "Please fill all required fields before submitting.",
        heightAuto: false,
            didOpen: () => {
                const swal = document.querySelector('.swal2-container') as HTMLElement;
                if (swal) swal.style.zIndex = "100000";
            }
      });
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Form Submitted!",
          text: "We have received your details.",
          heightAuto: false,
            didOpen: () => {
                const swal = document.querySelector('.swal2-container') as HTMLElement;
                if (swal) swal.style.zIndex = "100000";
            }
        });

        // Clear form
        setFormData({ name: "", email: "", phone: "", zip: "" });
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: "Something went wrong. Try again.",
          heightAuto: false,
            didOpen: () => {
                const swal = document.querySelector('.swal2-container') as HTMLElement;
                if (swal) swal.style.zIndex = "100000";
            }
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Server Error",
        text: "Unable to send data. Check console for details.",
        heightAuto: false,
            didOpen: () => {
                const swal = document.querySelector('.swal2-container') as HTMLElement;
                if (swal) swal.style.zIndex = "100000";
            }
      });
      console.error(error);
    }
  };

  

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-[#09360c] py-16 px-4 overflow-hidden"
      style={{
        backgroundImage: "url('/section_img/family_rv_warranty.webp')",
      }}
    >
      {/* === Light White Overlay === */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px] z-[1]"></div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-[2]">
        {/* LEFT COLUMN */}
        <div>
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] text-[#064517] font-semibold mb-4 text-center">
            You are in Good Company With OutdoorWarranty!
          </h2>

          {/* Testimonial Box */}
          <div className="relative inline-block bg-white/50 backdrop-blur-[1px] rounded-lg p-4 sm:p-5 mx-auto mb-5">
            <p className="text-[14px] sm:text-[15px] leading-relaxed text-center text-[#09360c]">
              “I’d highly recommend Outdoor Warranty to anyone who is looking for
              an extended warranty for their RV. Their coverage is comprehensive,
              their prices are reasonable, and their customer service is
              top-notch.”
            </p>
            <p className="mt-3 text-center text-[14px] text-[#09360c] font-medium">
              – Margaret Singer
            </p>
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

          <h3 className="text-[18px] sm:text-[20px] md:text-[25px] font-medium mb-4">
            Call us or fill out the form for a free quote and start enjoying your
            RV adventures worry-free!
          </h3>

          <a
            href="tel:269-431-6864"
            className="inline-flex items-center gap-2 border border-[#28cc1b] bg-[#48ac3f] text-white px-6 py-4 rounded-full text-[15px] sm:text-[16px] lg:text-[18px] font-medium 
              shadow-[0_4px_20px_rgba(72,172,63,0.5)] hover:shadow-[0_6px_25px_rgba(72,172,63,0.6)] hover:bg-[#24b619] transition-all duration-300 ease-in-out underline"
          >
            <i className="bi bi-telephone-fill text-[18px] lg:text-[20px]"></i>
            Call 269-431-6864 Now!
          </a>
        </div>

        {/* RIGHT COLUMN (FORM) */}
        <div className="bg-white/90 backdrop-blur-sm rounded-[30px] shadow-2xl p-6 sm:p-8 relative">
          <h2 className="text-[24px] sm:text-[28px] lg:text-[40px] font-semibold mb-3 text-center">
            Save Big On The Perfect Plan For You!
          </h2>
          <h5 className="text-[16px] sm:text-[18px] lg:text-[20px] font-medium mb-4 text-center text-[#045c1c]">
            Your Worry-Free Adventure Awaits! 👇
          </h5>

          <p className="flex items-center justify-center gap-2 text-[15px] lg:text-[18px] font-bold mb-6 italic text-[#018525] hover:text-[#28cc1b]">
            <i className="bi bi-telephone-fill text-[#045c1c]"></i> (Or Call us at{" "}
            <a href="tel:269-431-6864">269-431-6864</a>)
          </p>

          {/* FORM */}
          <form
            className="space-y-4 flex flex-col items-center"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-[14px] focus:ring-2 focus:ring-[#28cc1b] outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-[14px] focus:ring-2 focus:ring-[#28cc1b] outline-none"
            />
            <input
              type="tel"
              placeholder="Mobile Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-[14px] focus:ring-2 focus:ring-[#28cc1b] outline-none"
            />
            <input
              type="number"
              placeholder="Zip Code"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-[14px] focus:ring-2 focus:ring-[#28cc1b] outline-none"
            />

            {/* Terms */}
            <p className="text-[11px] text-[#09360c] leading-snug mt-2">
              You agree to receive automated follow-up, reminder, and promotional
              messages with varying frequency. Text and data rates may apply.
              Reply STOP to end. Text HELP for help. Click for{" "}
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

            <button
              type="submit"
              className="mt-4 bg-[#48ac3f] text-white px-5 py-4 rounded-full font-medium text-[15px] sm:text-[16px] lg:text-[20px] cursor-pointer hover:bg-[#48ac3f9f]"
            >
              Claim Your Savings Now! 👉
            </button>
          </form>

          <div className="mt-6 text-center">
            <i className="bi bi-star-fill text-[#59AD66] mr-2"></i>
            It only takes a couple of minutes to get started!
          </div>
        </div>
      </div>
    </section>
  );
}
