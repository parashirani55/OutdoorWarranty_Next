import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import AboutContent from "./components/AboutContent";
import AboutForm from "./components/AboutForm";
import { Metadata } from "next";
import { getBaseUrl } from "@/lib/getBaseUrl";


export async function generateMetadata() {
  const baseUrl = getBaseUrl();

  return {
    title: "About Us | Outdoor Warranty",
    alternates: {
      canonical: `${baseUrl}/about`,
    },
  };
}

export default function AboutPage() {
  return (
    <>
      {/* Fixed Header Section */}
      <div className="w-full relative">
        <div className="w-full absolute top-0 lef-0 z-50 flex flex-col md:flex-col-reverse">
          <Header/>
          <TopBar/>
        </div>
      </div>

      <section className="bg-white pt-[10rem]">
        <AboutContent />
      </section>

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