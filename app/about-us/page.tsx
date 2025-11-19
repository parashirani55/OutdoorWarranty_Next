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
      {/* Fixed Header Section */}
      <div className="w-full relative">
        <div className="w-full z-50 flex flex-col md:flex-col-reverse
                     bg-center bg-cover before:absolute before:inset-0 before:bg-black/30 before:z-0"
          style={{ backgroundImage: "url('/assets/rv-with-awning-pulled-up.png')" }}>
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