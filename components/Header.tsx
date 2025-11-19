"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // <-- GET CURRENT ROUTE

  const navTop = [
    { href: "/", label: "Outdoor Warranty" },
    { href: "/about-us", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/motorhome-extended-warranties", label: "Motorhome Extended Warranty" },
    { href: "/trailer-and-5th-wheel-extended-warranties", label: "Trailer And Fifth Wheel Extended Warranty" }
  ];

  const navBottom = [
    { href: "/rv-roadside-assistance", label: "RV Road Side Assistance" },
    { href: "/rv-tire-and-wheel-protection", label: "RV Tire And Wheel Protection" }
  ];

  return (
    <header className={`w-full h-auto text-white transition-all duration-300 
    ${pathname === "/" ? "bg-transparent" : "bg-black/45"}`}>
    
      <div className="max-w-[1400px] mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/outdoowarranty-logo.svg"
            alt="Outdoor Warranty Logo"
            width={95}
            height={95}
            className="object-contain w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]  md:w-[65px] md:h-[65px] lg:w-[80px] lg:h-[80px]  xl:w-[95px] xl:h-[95px] ms-0 xl:ms-30"
            priority
          />

          <span className="text-[14px] font-semibold md:hidden ml-2">
            Outdoor Warranty
          </span>
        </Link>


        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-col items-end w-[70%] text-[15px] font-medium tracking-wide">

          {/* Top Row */}
          <div className="flex lg:flex-wrap xl:flex-nowrap justify-end gap-x-8 gap-y-2 text-right">
            {navTop.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative group whitespace-nowrap transition duration-200 
                    ${isActive ? "text-[#4c9b44]" : "hover:text-green-500"}`}
                >
                  {item.label}

                  {/* Underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-green-500 transition-all duration-300 
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  ></span>
                </Link>
              );
            })}
          </div>

          {/* Bottom Row */}
          <div className="flex flex-wrap justify-end gap-x-8 gap-y-2 mt-4 text-right">
            {navBottom.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative group whitespace-nowrap transition duration-200 
                    ${isActive ? "text-[#4c9b44]" : "hover:text-green-500"}`}
                >
                  {item.label}

                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-green-500 transition-all duration-300 
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  ></span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[#1aac43] z-[9999]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`w-full absolute lg:hidden z-[9999]  bg-white text-gray-800 px-6 py-6 space-y-6 transition-all duration-300 overflow-hidden ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        {/* Top Navigation */}
        <div className="flex flex-col gap-4 text-[14px]">
          {navTop.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block pb-2 transition 
                  ${isActive ? "text-[#4c9b44] font-semibold" : "hover:text-green-400"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Bottom Navigation */}
        <div className="flex flex-col gap-4 text-[14px]">
          {navBottom.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block pb-2 transition 
                  ${isActive ? "text-[#4c9b44] font-semibold" : "hover:text-green-400"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}