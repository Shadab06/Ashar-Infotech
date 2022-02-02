import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./componenets/Nav";
import Home from "./componenets/Home"
import About from "./componenets/About"
import Services from "./componenets/Services"
import Contact from "./componenets/Contact"
import Footer from "./componenets/Footer";

const App = () => {
    return (
        <>
            <Router>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </Router>
        </>
    )
}

export default App;
