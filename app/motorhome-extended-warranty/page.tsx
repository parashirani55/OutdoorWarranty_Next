import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import MotorhomeWarranty from "./components/MotorhomeWarranty";
import MotorhomeWarrantyContent from "./components/MotorhomeWarrantyContent";
import MotorhomeWarrantyForm from "./components/MotorhomeWarrantyForm";
import { getBaseUrl } from "@/lib/getBaseUrl";

export async function generateMetadata() {
  const baseUrl = getBaseUrl();

  return {
    title: "motorhome-extended-warranty | Outdoor Warranty",
    alternates: {
      canonical: `${baseUrl}/motorhome-extended-warranty`,
    },
  };
}

export default function MotorhomePage() {
    return (
        <>
            <div className="w-full relative">
                <div className="w-full flex flex-col md:flex-col-reverse">
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
                <MotorhomeWarrantyForm />
            </section>

            {/* FOOTER */}
            <section className="bg-white">
                <Footer />
            </section>
        </>
    );
}
