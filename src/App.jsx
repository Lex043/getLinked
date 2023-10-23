import Home from "./pages/Home";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <main className="min-h-screen bg-[#150e28] text-white overflow-hidden">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
    );
};

export default App;
