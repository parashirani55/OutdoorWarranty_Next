import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import MotorhomeWarranty from "./components/MotorhomeWarranty";
import MotorhomeWarrantyContent from "./components/MotorhomeWarrantyContent";
import { getBaseUrl } from "@/lib/getBaseUrl";
import SaveBigRvWarrantyForm from "../SaveBigRvWarrantyForm";

export async function generateMetadata() {
  const baseUrl = getBaseUrl();

  return {
    title: "outdoorWarranty.com/motorhome-extended-warranties",
    description:
    "Get comprehensive and affordable motorhome extended warranty protection. Cover major systems, appliances, and repairs across the U.S. and Canada.",
    alternates: {
      canonical: `${baseUrl}/motorhome-extended-warranties`,
    },
  };
}

export default function MotorhomePage() {
    return (
        <>
            <div className="w-full relative z-50">
                <div className="w-full flex flex-col md:flex-col-reverse
                bg-center bg-cover before:absolute before:inset-0 before:bg-black/30 before:z-0"
                style={{backgroundImage : "url('/assets/rv-with-awning-pulled-up.png')"}}>
                    <Header />
                    <TopBar />
                </div>
            </div>

            <section className="bg-white">
                <MotorhomeWarranty />
            </section>

            <section className="bg-white">
                <MotorhomeWarrantyContent />
            </section>

            <section className="bg-white">
                <SaveBigRvWarrantyForm/>
            </section>

            {/* FOOTER */}
            <section className="bg-white">
                <Footer />
            </section>
        </>
    );
}
