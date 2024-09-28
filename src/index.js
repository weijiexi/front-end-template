import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";

import { HomePage } from "./components/pages/Home";
import { LoginPage } from './components/pages/Login';

const container = document.getElementById("reactapp_js");
const root = createRoot(container)
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    );

function App() {
    return (
        <div>            
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<HomePage  />} />
            </Routes>
        </div>
);
}