import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import RvTireWheelProtectionHero from "./components/RvTireWheelProtectionHero";
import RvTireWheelProtectionContent from "./components/RvTireWheelProtectionContent";
import RvTireWheelProtectionForm from "./components/RvTireWheelProtectionForm";
import { getBaseUrl } from "@/lib/getBaseUrl";

export async function generateMetadata(){
    const baseUrl = getBaseUrl();

    return{
        title: "rv-tire-wheel-protection | Outdoor Warranty",
        alternates: {
            canonical: `${baseUrl}/rv-tire-wheel-protection`
        }
    }
}

export default function RvTireWheelProtection() {
    return (
        <>
            <div className="w-full relative">
                <div className="w-full flex flex-col md:flex-col-reverse">
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
                <RvTireWheelProtectionForm/>
            </section>

            {/* FOOTER */}
            <section className="bg-white">
                <Footer />
            </section>
        </>
    )
}