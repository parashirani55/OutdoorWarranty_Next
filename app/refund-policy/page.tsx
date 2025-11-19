import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import { getBaseUrl } from "@/lib/getBaseUrl";
import RefundPolicyContent from "./components/RefundPolicyContent";
import RefundPolicyForm from "./components/RefundPolicyForm";

export async function generateMetadata(){
    const baseUrl = getBaseUrl();

    return{
        title: "Refund Policy - OutdoorWarranty.com",
        description:"Details on Outdoor Warranty’s refund process and eligibility.",
        alternates: {
            canonical: `${baseUrl}/refund-policy/`
        }
    }
}


export default function RefundPolicyPage() {
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
                <RefundPolicyContent/>
            </section>

            <section className="bg-white">
                <RefundPolicyForm/>
            </section>

            {/* FOOTER */}
            <section className="bg-white">
                <Footer />
            </section>
        </>
    )
}