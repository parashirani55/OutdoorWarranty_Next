import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import RvRoadsideAssistanceHero from "./components/RvRoadsideAssistanceHero";

import RvRoadsideAssistanceContent from "./components/RvRoadsideAssistanceContent";
import { getBaseUrl } from "@/lib/getBaseUrl";
import SaveBigRvWarrantyForm from "../SaveBigRvWarrantyForm";

export async function generateMetadata(){
    const baseUrl = getBaseUrl();

    return{
        title: "outdoorWarranty.com/rv-roadside-assistance",
        description:"24/7 RV roadside assistance coverage including towing, flat tire service, battery jump-start, emergency fuel delivery, and lockout support across the U.S. and Canada.",
        alternates:{
            canonical: `${baseUrl}/rv-roadside-assistance`,
        },
    };
}


export default function RvRoadsideAssistancePage() {
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
                <RvRoadsideAssistanceHero/>
            </section>

            <section className="bg-white">
                <RvRoadsideAssistanceContent/>
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