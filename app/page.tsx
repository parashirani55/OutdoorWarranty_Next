import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustElements from "@/components/TrustElements";
import OurStory from "@/components/OurStory";
import HowItWorks from "@/components/HowItWorks";
import WarrantyPlans from "@/components/WarrantyPlans";
import WarrantyHero from "@/components/WarrantyHero";
import WarrantySavingsSection from "@/components/WarrantySavingsSection";
import Footer from "@/components/Footer";
import GoodCompanySection from "@/components/GoodCompanySection";
import HugeSavingsSection from "@/components/HugeSavings";
import Faqs from "@/components/Faqs";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinancingSection from "@/components/FinancingSection";
import SupportTestimonials from "@/components/SupportTestimonials";
import CoverageCallSection from "@/components/CoverageCallSection";
import SmartSavingsSection from "@/components/SmartSavingsSection";
import { getBaseUrl } from "@/lib/getBaseUrl";
import { url } from "inspector";

export async function generateMetadata() {
  const baseUrl = getBaseUrl();

  return {
    title: "RV Extended Warranty - OutdoorWarranty.com",
    description: "Extended protection plans for RVs and outdoor vehicles.",
    alternates: {
      canonical: `${baseUrl}/`,
    },
  }
}

export default function HomePage() {
  return (
    <>
      {/* Fixed Header Section */}
      <div className="w-full relative">

        {/* Background Wrapper */}
        <div className="w-full absolute top-0 left-0 z-50 flex flex-col md:flex-col-reverse bg-center bg-cover"
          // style={{ backgroundImage: "url('/assets/rv-with-awning-pulled-up.png')" }}
        >
          {/* Header FIRST on mobile, SECOND on desktop */}
          <Header />

          {/* Top Bar SECOND on mobile, FIRST on desktop */}
          <TopBar />
        </div>

        {/* Hero Section */}
        <section className="relative min-h-screen overflow-hidden bg-white">
          <Hero />
        </section>
      </div>


      {/* Other Sections (each with its own background) */}
      <section className="bg-white">
        <TrustElements />
      </section>

      <section className="bg-white">
        <OurStory />
      </section>

      <section className="bg-white">
        <HowItWorks />
      </section>

      <section className="bg-white">
        {/* Warranty Plans Section */}
        <WarrantyPlans />
      </section>

      <section className="bg-white">
        <WarrantyHero />
      </section>

      <section className="bg-white">
        <WarrantySavingsSection />
      </section>

      <section className="bg-white">
        <SmartSavingsSection />
      </section>

      <section className="bg-white">
        <SupportTestimonials />
      </section>

      <section className="bg-white">
        <FinancingSection />
      </section>

      <section className="bg-white">
        <TestimonialsSection />
      </section>

      <section className="bg-white">
        <Faqs />
      </section>

      <section className="bg-white">
        <HugeSavingsSection />
      </section>

      <section className="bg-white">
        <GoodCompanySection />
      </section>

      <section className="bg-white">
        <CoverageCallSection />
      </section>

      <section className="bg-white">
        <Footer />
      </section>
    </>
  );
}
