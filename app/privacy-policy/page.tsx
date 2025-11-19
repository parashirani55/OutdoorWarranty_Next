import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import PrivacyPolicyForm from "./components/PrivacyPolicyForm";
import PrivacyPolicyContent from "./components/PrivacyPolicyContent";
import { getBaseUrl } from "@/lib/getBaseUrl";

export async function generateMetadata(){
    const baseUrl = getBaseUrl();

    return{
        title: "outdoorWarranty.com/privacy-policy/",
        // description:"Protect your RV from costly tire and wheel damage caused by road hazards. Includes repair, replacement, rim coverage, mounting, balancing, and 24/7 roadside assistance.",
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
                <PrivacyPolicyForm/>
            </section>

            {/* FOOTER */}
            <section className="bg-white">
                <Footer />
            </section>
        </>
    )
}