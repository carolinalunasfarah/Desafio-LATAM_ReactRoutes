import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";

import HomePage from "./views/HomePage";
import ContactForm from "./views/ContactForm";

import "./App.css";

function App() {
    return (
        <>
            <main>
                <NavigationBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contact" element={<ContactForm />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
