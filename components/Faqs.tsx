"use client";
import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Faqs() {
  const faqs = [
    {
      question: "What types of RVs are covered under your warranty plans?",
      answer:
        "Our warranty plans cover a variety of RVs, including Class A, B, and C motorhomes, fifth wheels, and travel trailers.",
    },
    {
      question: "How can I purchase an extended warranty for my RV?",
      answer:
        "You can purchase an extended warranty by contacting our sales team. Our representatives will help you select the best coverage plan based on your RV’s age, mileage, and specific needs.",
    },
    {
      question: "Can I extend my warranty coverage after the initial warranty period expires?",
      answer:
        "Yes, you can extend your warranty coverage, subject to eligibility requirements and the condition of your RV. Please contact our customer service department for more information on extending your warranty.",
    },
    {
      question: "What are the payment options for purchasing a warranty plan?",
      answer:
        "We offer flexible payment options, including one-time payments and interest-free monthly installments. Please contact our sales team for more information on available payment methods.",
    },
    {
      question: "Can I transfer the warranty to a new owner if I sell my RV?",
      answer:
        "Yes! The warranty may be transferred to a different owner of the covered RV in the event of a private sale. Getting an extended warranty from OutdoorWarranty can boost resale value of your RV.",
    },
    {
      question: "I have a specific question, who do I get in touch with?",
      answer: (
        <>
          Our friendly support team is standing by! For specific questions, don’t hesitate to reach us.{" "}
          <span className="text-[#28cc1b] font-semibold">Click the email icon above to message us.</span>
        </>
      ),
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* === FAQ Section === */}
      <section className="bg-[#f3fff8] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <div className="w-full max-w-[1400px]">
          {/* === Header === */}
          <div className="text-center mb-10 px-2 sm:px-6">
            <h4 className="text-[16px] sm:text-[18px] text-[#0daa38] font-semibold tracking-wide mb-2">
              FAQ
            </h4>
            <h2 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] font-semibold text-[#064517] mb-4 leading-snug">
              Have You Got Questions? We've Got Answers!
            </h2>

            {/* === Paragraph + Email Icon === */}
            <p className="text-[14px] sm:text-[16px] text-gray-700 flex items-center justify-center gap-2 flex-wrap leading-relaxed max-w-[700px] mx-auto">
              Find answers to your questions below, or send us a message.
              <button
                onClick={() => setIsPopupOpen(true)}
                className="text-[20px] sm:text-[22px] cursor-pointer"
              >
                <i className="bi bi-envelope"></i>
              </button>
            </p>
          </div>

          {/* === Accordion === */}
          <div className="w-full mx-auto space-y-4 sm:space-y-5 px-2 sm:px-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-300 pb-3 transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-start sm:items-center text-left gap-3 text-[#09360c] font-medium focus:outline-none"
                >
                  <i
                    className={`bi ${
                      activeIndex === index
                        ? "bi-caret-up-fill rotate-180 text-[#045c1c]"
                        : "bi-caret-right-fill text-[#045c1c]"
                    } text-[16px] sm:text-[18px] transition-transform duration-300`}
                  ></i>
                  <span className="text-[15px] sm:text-[16px] md:text-[17px] font-semibold text-[#045c1c] leading-snug">
                    {faq.question}
                  </span>
                </button>

                <div
                  className={`pl-7 sm:pl-9 pr-2 text-[14px] sm:text-[15px] text-[#09360c] leading-relaxed transition-all duration-300 ease-in-out ${
                    activeIndex === index
                      ? "max-h-[400px] opacity-100 mt-2"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Popup Modal === */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-[9999] p-4 transition-opacity">
          
          <div className="bg-white rounded-2xl shadow-xl max-w-[650px] w-full p-6 relative animate-fadeIn">
            {/* Close Button */}
            <button onClick={() => setIsPopupOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-[22px]">
              <i className="bi bi-x-lg text-[15px] !font-semibold text-[#48ac3f] cursor-pointer"></i>
            </button>

            {/* Popup Header */}
            <div className="text-center mb-6">
              <h5 className="text-[#045c1c] text-[20px] sm:text-[22px] lg:text-[26px] font-semibold">
                Have any further questions?
              </h5>
              <h6 className="text-[#045c1c] text-[15px] sm:text-[16px] lg:text-[20px]">
                Let us know and we'll get in touch with you after.
              </h6>
            </div>

            {/* === Form === */}
            <form className="space-y-4 flex flex-col items-center">
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#28cc1b]"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#28cc1b]"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#28cc1b]"
              ></textarea>

              <button
                type="submit"
                className="bg-[#48ac3f] text-white px-4.5 py-2 rounded-full font-medium text-[18px]"
              >
                Submit Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}