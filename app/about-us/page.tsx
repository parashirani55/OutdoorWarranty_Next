import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import AboutContent from "./components/AboutContent";
import AboutForm from "./components/AboutForm";
import { getBaseUrl } from "@/lib/getBaseUrl";
import Image from "next/image";

export async function generateMetadata() {
  const baseUrl = getBaseUrl();

  return {
    title: "About Us | Outdoor Warranty",
    description: "Outdoor Warranty provides affordable, comprehensive RV extended warranty plans across the U.S. and Canada—offering honest pricing, transparent coverage, and reliable protection for every RV owner.",
    alternates: {
      canonical: `${baseUrl}/about-us`,
    },
  };
}

export default function AboutPage() {
  return (
    <>
      {/* FIXED HEADER & BACKGROUND SECTION */}
      <div className="w-full relative">

        {/* Background Image (Lazy Loaded + Blur Placeholder) */}
        <div className="absolute inset-0 w-full h-full -z-10">
          <Image
            src="/assets/rv-with-awning-pulled-up.png"
            alt="RV with Awning"
            fill
            priority={false}   // lazy load
            loading="lazy"
            className="object-cover object-center"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 -z-0"></div>

        {/* Header + TopBar On Top */}
        <div className="relative z-10 flex flex-col md:flex-col-reverse">
          <Header />
          <TopBar />
        </div>
      </div>

      {/* ABOUT CONTENT SECTION */}
      <section className="bg-white">
        <AboutContent />
      </section>

      {/* FORM SECTION */}
      <section className="mt-5">
        <AboutForm />
      </section>

      {/* FOOTER */}
      <section className="bg-white">
        <Footer />
      </section>
    </>
  );
}