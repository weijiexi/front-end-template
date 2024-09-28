import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";

import { Home } from "./components/pages/Home/Home";

const container = document.getElementById("reactapp_js");
const root = createRoot(container)
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    );

function App() {
    return (
        <Routes>

            <Route path="/" element={<Home  />} />
        </Routes>
);
}