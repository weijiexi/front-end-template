import { createRoot } from "react-dom/client";

const container = document.getElementById("reactapp");
const root = createRoot(container)
root.render(
    <App />
    );

function App() {
    return <h1> I am App func / component </h1>;
}