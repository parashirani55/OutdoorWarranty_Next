"use client";
import React from "react";
import Image from "next/image";

export default function WarrantySavingsSection() {
  return (
    <section className="relative w-full bg-[#f3fff8] py-20 md:py-28 overflow-hidden">
      {/* ===== Background Image ===== */}
      <div className="absolute inset-0">
        <Image
          src="/extra/family_enjoying_rv_time.png"
          alt="Family enjoying RV trip"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Subtle overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-[#f3fff8]/90 to-[#f3fff8]/40"></div>
      </div>

      {/* ===== Content ===== */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        {/* --- Section Heading --- */}
        <h4 className="text-[#0daa38] uppercase text-sm md:text-base font-semibold tracking-wide mb-3">
          Enjoy More Adventures Without Breaking The Bank
        </h4>

        <h2 className="text-[#064517] text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug mb-5 max-w-4xl mx-auto">
          Fact: OutdoorWarranty Customers{" "}
          <span className="text-[#39bf04]">Save Over 40%</span> on Their Service
          Contracts Compared to Traditional Warranty Providers
        </h2>

        <p className="text-gray-700 max-w-3xl mx-auto text-base md:text-lg mb-14">
          Dealerships can charge a HUGE markup for warranties. For example, if
          you buy a $50,000 RV a dealership typically charges 8–10% of the
          purchase price for the warranty. Something that would cost you
          $4,000–$5,000 at the dealership would only cost you $1,950–$2,600
          through OutdoorWarranty.com!
        </p>

        {/* --- Testimonials Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14 items-start">
          {[
            {
              title: '"...blew us away with their quote..."',
              rating: "⭐⭐⭐⭐⭐",
              text: `Shopping around for a good warranty can be a real pain,
              especially when dealers are trying to sell you on overpriced options.
              But OutdoorWarranty.com blew us away with their quote, which was a full
              thousand dollars less than what our dealer was trying to charge.
              Needless to say, we'll be referring all our friends to this amazing company.`,
              author: "Jason Watson",
            },
            {
              title:
                '"...their prices were very reasonable compared to other companies..."',
              rating: "⭐⭐⭐⭐⭐",
              text: `Thankfully, I haven't had to file any claims yet, but it's good
              to know that I'm covered if something goes wrong. Plus, their prices
              were very reasonable compared to other companies I checked out.`,
              author: "Denise Webber",
            },
            {
              title: '"...Their prices were good too..."',
              rating: "⭐⭐⭐⭐⭐",
              text: `I got an RV extended warranty from Outdoor Warranty and I'm really
              happy with it. They made it easy to understand and Jeremy was very helpful.
              I haven't had to use it yet, but I feel better knowing my RV is protected
              if anything goes wrong. Their prices were good too. I think Outdoor Warranty
              is a great choice if you want an extended warranty for your RV.`,
              author: "Daniel Da Silva Ferraz",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="flex flex-col justify-between h-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 text-left shadow-[0_4px_20px_rgba(0,0,0,0.08),0_-2px_10px_rgba(0,0,0,0.05),4px_0_10px_rgba(0,0,0,0.05),-4px_0_10px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.15)] transition-all duration-300"
            >
              <div>
                <p className="text-[#09360C] font-semibold text-sm md:text-base mb-2 leading-snug">
                  {t.title}
                </p>
                <p className="text-yellow-400 text-sm mb-3">{t.rating}</p>
                <p className="text-[#09360C] text-[13px] md:text-sm leading-relaxed font-normal mb-4">
                  {t.text}
                </p>
              </div>
              <p className="text-[#09360C] font-medium text-right text-sm mt-auto">
                – {t.author}
              </p>
            </div>
          ))}
        </div>

        {/* --- CTA Section --- */}
        <div className="mb-6">
          <p className="italic text-gray-700 text-base md:text-lg mb-4">
            Ready For The <span className="font-semibold">Best</span> Warranty Prices? 👉
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center gap-2 bg-[#59d24f] hover:bg-[#40d61e] text-white font-semibold px-8 py-3 rounded-full text-lg transition shadow-md"
            >
              Yes! Get Started Now! 👉
            </a>
            <a
              href="tel:2694316864"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#59d24f] hover:bg-[#59d24f] hover:text-white text-[#064517] font-semibold px-8 py-3 rounded-full text-lg transition"
            >
              <i className="bi bi-telephone-fill text-[#59d24f] hover:text-white"></i>
              Call 269-431-6864 Now!
            </a>
          </div>
        </div>

        <p className="text-sm italic text-gray-600">
          *Huge Cost Savings Guaranteed
        </p>
      </div>
    </section>
  );
}
