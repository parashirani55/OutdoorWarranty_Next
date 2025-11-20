import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import { getBaseUrl } from "@/lib/getBaseUrl";

import TermsContent from "./components/TermsContent";
import SaveBigRvWarrantyForm from "../SaveBigRvWarrantyForm";

export async function generateMetadata(){
    const baseUrl = getBaseUrl();

    return{
        title: "Terms and Conditions - OutdoorWarranty.com",
        description:"Terms governing use of Outdoor Warranty’s website and services.",
        alternates: {
            canonical: `${baseUrl}/terms/`
        }
    }
}


export default function TermsPage() {
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

            <section className="bg-white">
                <TermsContent/>
            </section>

            <section className="bg-white">
                <SaveBigRvWarrantyForm/>
            </section>

            {/* FOOTER */}
            <section className="bg-white">
                <Footer />
            </section>
        </>
    )
}