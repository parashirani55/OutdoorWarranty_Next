import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import TrailerAndFifthWheelHero from "./components/TrailerAndFifthWheelHero";
import TrailerAndFifthWheelContent from "./components/TrailerAndFifthWheelContent";
import { getBaseUrl } from "@/lib/getBaseUrl";
import SaveBigRvWarrantyForm from "../SaveBigRvWarrantyForm";

export async function generateMetadata(){
    const baseUrl = getBaseUrl();

    return{
        title: "outerdoorWarranty.com/trailer-and-5th-wheel-extended-warranties",
        description:"Affordable extended warranty coverage for travel trailers and fifth wheels. Protect major systems, appliances, suspension, slide-outs, and more with nationwide service.",
        alternates:{
            canonical: `${baseUrl}/trailer-and-5th-wheel-extended-warranties`,
        },
    }
}

export default function TrailerFifthwheelPage() {
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
                <TrailerAndFifthWheelHero/>
            </section>

            <section className="bg-white">
                <TrailerAndFifthWheelContent/>
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