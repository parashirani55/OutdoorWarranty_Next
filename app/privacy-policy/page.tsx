import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import PrivacyPolicyContent from "./components/PrivacyPolicyContent";
import { getBaseUrl } from "@/lib/getBaseUrl";
import SaveBigRvWarrantyForm from "../SaveBigRvWarrantyForm";

export async function generateMetadata(){
    const baseUrl = getBaseUrl();

    return{
        title: "Privacy Policy - OutdoorWarranty.com",
        description:"Learn how Outdoor Warranty collects, uses, and protects your personal information.",
        alternates: {
            canonical: `${baseUrl}/privacy-policy/`
        }
    }
}


export default function PrivacyPolicyPage() {
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
                <PrivacyPolicyContent/>
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