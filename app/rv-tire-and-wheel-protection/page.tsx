import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import RvTireWheelProtectionHero from "./components/RvTireWheelProtectionHero";
import RvTireWheelProtectionContent from "./components/RvTireWheelProtectionContent";
import { getBaseUrl } from "@/lib/getBaseUrl";
import SaveBigRvWarrantyForm from "../SaveBigRvWarrantyForm";

export async function generateMetadata(){
    const baseUrl = getBaseUrl();

    return{
        title: "outdoorWarranty.com/rv-tire-and-wheel-protection",
        description:"Protect your RV from costly tire and wheel damage caused by road hazards. Includes repair, replacement, rim coverage, mounting, balancing, and 24/7 roadside assistance.",
        alternates: {
            canonical: `${baseUrl}/rv-tire-and-wheel-protection`
        }
    }
}

export default function RvTireWheelProtection() {
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
                <RvTireWheelProtectionHero/>
            </section>

            <section className="bg-white">
                <RvTireWheelProtectionContent/>
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