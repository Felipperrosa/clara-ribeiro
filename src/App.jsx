import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Trabalhos from "./pages/Trabalhos/Trabalhos";
import Sobre from "./pages/Sobre/Sobre";
import Contato from "./pages/Contato/Contato";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trabalhos" element={<Trabalhos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
        </Routes>
    );
}

export default App;