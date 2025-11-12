"use client";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute w-full z-50 bg-transparent text-white mb-6 md:mb-10 lg:mb-14">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center px-6 py-4">

        {/* --- Left Section: Logo (30%) --- */}
        <div className="w-[30%] flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/outdoowarranty-logo.svg"
              alt="Outdoor Warranty Logo"
              width={95}
              height={95}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* --- Right Section: Navigation (70%) --- */}
        <div className="w-[70%] flex flex-col items-end text-[15px] font-medium tracking-wide leading-relaxed">
          {/* Top Row */}
          <div className="flex flex-wrap justify-end gap-x-8 gap-y-2 text-right">
            {[
              { href: "/", label: "Outdoor Warranty" },
              { href: "/about", label: "About Us" },
              { href: "/contact", label: "Contact" },
              { href: "/motorhome-extended-warranty", label: "Motorhome Extended Warranty" },
              { href: "/trailer-fifth-wheel-extended-warranty", label: "Trailer And Fifth Wheel Extended Warranty" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative group whitespace-nowrap transition-colors duration-200 hover:text-green-500"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Bottom Row */}
          <div className="flex flex-wrap justify-end gap-x-8 gap-y-2 mt-1 text-right">
            {[
              { href: "/rv-roadside-assistance", label: "RV Road Side Assistance" },
              { href: "/rv-tire-wheel-protection", label: "RV Tire And Wheel Protection" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative group whitespace-nowrap transition-colors duration-200 hover:text-green-500"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
