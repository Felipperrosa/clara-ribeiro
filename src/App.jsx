import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Trabalhos from "./pages/Trabalhos/Trabalhos";
import Sobre from "./pages/Sobre/Sobre";
import Contato from "./pages/Contato/Contato";

function App() {
    return (
        <div className="flex min-h-screen flex-col bg-[#010307]">
            <Navbar />

            <main className="flex-1 min-h-0">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/trabalhos" element={<Trabalhos />} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/contato" element={<Contato />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}

export default App;