import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import RvRoadsideAssistanceHero from "./components/RvRoadsideAssistanceHero";
import RvRoadsideAssistanceForm from "./components/RvRoadsideAssistanceForm";

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
                <RvRoadsideAssistanceForm/>
            </section>

            {/* FOOTER */}
            <section className="bg-white">
                <Footer />
            </section>
        </>
    )
}