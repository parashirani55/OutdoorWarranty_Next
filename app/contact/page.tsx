import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import ContactSection from "./components/ContactSection";
import { Metadata } from "next";
import { getBaseUrl } from "@/lib/getBaseUrl";

export async function generateMetadata() {
  const baseUrl = getBaseUrl();

  return {
    title: "outdoorwarranty.com/contact",
    description: "Get in touch with Outdoor Warranty for RV protection plans, customer support, and personalized warranty quotes.",
    alternates: {
      canonical: `${baseUrl}/contact`,
    },
  };
}

export default function ContactPage() {
    return (
        <>
            {/* Fixed Header Section */}
            <div className="w-full relative">
                <div className="w-full z-50 flex flex-col md:flex-col-reverse
                bg-center bg-cover before:absolute before:inset-0 before:bg-black/30 before:z-0"
                style={{backgroundImage : "url('/assets/rv-with-awning-pulled-up.png')"}}>
                    <Header />
                    <TopBar />
                </div>
            </div>

            <section className="bg-white">
                <ContactSection />
            </section>

            {/* FOOTER */}
            <section className="bg-white">
                <Footer />
            </section>
        </>
    )
}