import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import RvRoadsideAssistanceHero from "./components/RvRoadsideAssistanceHero";
import RvRoadsideAssistanceForm from "./components/RvRoadsideAssistanceForm";
import RvRoadsideAssistanceContent from "./components/RvRoadsideAssistanceContent";
import { getBaseUrl } from "@/lib/getBaseUrl";
import { title } from "process";

export async function generateMetadata(){
    const baseUrl = getBaseUrl();

    return{
        title: "rv-roadside-assistance | Outdoor Warranty",
        alternates:{
            canonical: `${baseUrl}/rv-roadside-assistance`,
        },
    };
}


export default function RvRoadsideAssistancePage() {
    return (
        <>
            <div className="w-full relative">
                <div className="w-full flex flex-col md:flex-col-reverse">
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
                <RvRoadsideAssistanceForm/>
            </section>

            {/* FOOTER */}
            <section className="bg-white">
                <Footer />
            </section>
        </>
    )
}