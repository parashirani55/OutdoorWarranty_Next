"use client";

import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function FooterFaqs() {
  const faqs = [
    {
      q: "What types of RVs are covered under your warranty plans?",
      a: "Our warranty plans cover a variety of RVs, including Class A, B, and C motorhomes, fifth wheels, and travel trailers.",
    },
    {
      q: "What is the duration of the warranty coverage?",
      a: "The duration of our warranty coverage depends on the type of camper you own. We offer extended warranties ranging from 2 to 7 years.",
    },
    {
      q: "What components and systems are covered under the warranty?",
      a: "Our warranty covers electrical, hydraulic, and mechanical systems—including the engine, transmission, electrical systems, plumbing, appliances, and leveling jacks.",
    },
    {
      q: "Are there any mileage limitations on the warranty coverage?",
      a: "Our warranty plans may have mileage limitations depending on the specific coverage you choose.",
    },
    {
      q: "Can I transfer the warranty to a new owner if I sell my RV?",
      a: "Yes. Warranty coverage may be transferred in a private sale, but cannot be transferred to another RV or RV dealer.",
    },
    {
      q: "What is the process for getting repairs done under warranty?",
      a: "Once your claim is approved, you can take your RV to an authorized repair facility for diagnosis and repair.",
    },
    {
      q: "Are there deductibles for warranty claims?",
      a: "Yes, our warranties come with a $100 deductible per claim.",
    },
    {
      q: "Is there a waiting period before the warranty coverage begins?",
      a: "Trailers & fifth wheels: 30 days. Motorhomes: 30 days + 500 miles.",
    },
    {
      q: "Can I cancel my warranty coverage? Will I receive a refund?",
      a: "Yes. Refund amount depends on time elapsed and claims made. Refer to your cancellation policy.",
    },
    {
      q: "Are there maintenance requirements to keep my warranty valid?",
      a: "Yes. You must follow the manufacturer’s recommended maintenance schedule and maintain proof of service.",
    },
    {
      q: "Does the warranty cover consequential damages?",
      a: "Coverage primarily includes direct repair costs. Some plans may include limited consequential damage coverage.",
    },
    {
      q: "Are pre-existing conditions covered?",
      a: "No, pre-existing conditions are not covered. Coverage applies only to issues occurring after the warranty starts.",
    },
    {
      q: "Can I take my RV to any repair facility?",
      a: "Yes! Any U.S. or Canadian facility is accepted. Mobile technicians may also be covered depending on your plan.",
    },
    {
      q: "What is not covered under the warranty?",
      a: `Not covered items include:
- Unauthorized repairs
- Pre-existing failures
- Parts covered by other warranties
- Failures caused by modifications
- Failures of non-covered parts
- Road hazards with low tread
- Winch-out beyond 25ft from a roadway`,
    },
    {
      q: "How can I purchase an extended warranty for my RV?",
      a: "Contact our sales team. We will help you choose the right plan based on age, mileage, and RV type.",
    },
    {
      q: "What are the payment options?",
      a: "We offer one-time payments or interest-free monthly installments.",
    },
    {
      q: "Can I extend my warranty coverage?",
      a: "Yes, depending on RV condition and eligibility. Contact customer service for extension options.",
    },
    {
      q: "Is roadside assistance included?",
      a: `Yes, 24/7/365 roadside assistance up to $500 per occurrence:
- Battery jump-starts
- Flat tire changes
- Fluid delivery
- Lockout assistance`,
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="max-w-[800px] mx-auto px-4 pt-10">
      <h1 className="text-[26px] sm:text-[32px] lg:text-[40px] font-medium text-[#064517] mb-6 text-left">
        Frequently Asked Questions
      </h1>

      {/* Accordion */}
      <div className="space-y-4">
        {faqs.map((item, i) => (
          <div key={i} className="pb-3 border-b border-gray-300">
            {/* Question Row */}
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-start gap-3 text-left group"
            >
              {/* Icon */}
              <i
                className={`bi ${openIndex === i
                    ? "bi-caret-up-fill text-[#045c1c]"
                    : "bi-caret-right-fill text-[#045c1c]"
                  } text-[18px] transition-all duration-300 mt-1`}
              ></i>

              {/* Question Text */}
              <span className="text-[15px] sm:text-[16px] md:text-[17px] font-semibold text-[#045c1c] leading-snug">
                {item.q}
              </span>
            </button>

            {/* Answer */}
            <div
              className={`pl-7 pr-1 text-[14px] sm:text-[15px] text-[#09360c] leading-relaxed transition-all duration-300 ease-in-out ${openIndex === i
                  ? "max-h-[400px] opacity-100 mt-2"
                  : "max-h-0 opacity-0 overflow-hidden"
                }`}
            >
              <p className="whitespace-pre-line">{item.a}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="w-full border-b-10 border-green-600 my-10"></div>

    </section>
  );
}