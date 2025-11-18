import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import TrailerAndFifthWheelHero from "./components/TrailerAndFifthWheelHero";
import TrailerAndFifthWheelForm from "./components/TrailerAndFifthWheelForm";
import TrailerAndFifthWheelContent from "./components/TrailerAndFifthWheelContent";

export default function TrailerFifthwheelPage() {
    return (
        <>
            <div className="w-full relative">
                <div className="w-full flex flex-col md:flex-col-reverse">
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
                <TrailerAndFifthWheelForm/>
            </section>

            {/* FOOTER */}
            <section className="bg-white">
                <Footer />
            </section>
        </>
    )
}