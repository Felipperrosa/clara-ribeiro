import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";

function Home() {
    return (
        <div className="flex min-h-screen flex-col bg-black">
            <Navbar />

            <main className="flex-1">
                <Hero />
            </main>

            <Footer />
        </div>
    );
}

export default Home;