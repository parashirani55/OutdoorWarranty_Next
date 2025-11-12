"use client";
import Image from "next/image";

export default function TrustElements() {
  return (
    <section className="w-full bg-[#effff4] py-4 sm:py-6">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-16 text-center">
        
        {/* Title */}
        <h3 className="text-[#045C1CC2] text-lg sm:text-2xl md:text-3xl font-semibold font-poppins tracking-wide uppercase whitespace-nowrap">
          AS SEEN ON
        </h3>

        {/* Logos Row */}
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16">
          {[
            { src: "/Company/1.png", alt: "CNN" },
            { src: "/Company/5.png", alt: "Fox News" },
            { src: "/Company/3.webp", alt: "NBC" },
            { src: "/Company/4.png", alt: "ABC" },
            { src: "/Company/2.png", alt: "Yahoo" },
          ].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center w-[100px] sm:w-[130px] md:w-[150px] h-[50px] sm:h-[60px] md:h-[70px] transition duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={150}
                height={70}
                className="object-contain w-full h-full grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
