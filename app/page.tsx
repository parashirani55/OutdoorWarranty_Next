import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustElements from "@/components/TrustElements";
import OurStory from "@/components/OurStory";
import HowItWorks from "@/components/HowItWorks";
import WarrantyPlans from "@/components/WarrantyPlans";
import WarrantyHero from "@/components/WarrantyHero";
import WarrantySavingsSection from "@/components/WarrantySavingsSection";


export default function HomePage() {
  return (
    <>
      {/* Fixed Header Section */}
      <div className="relative">
        <div className="absolute top-0 left-0 w-full z-50">
          <TopBar />
          <div className="mb-4 md:mb-6 lg:mb-8">
            <Header />
          </div>
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
    </>
  );
}
