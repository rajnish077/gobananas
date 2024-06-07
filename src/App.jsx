import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<div>About-Us</div>} />
        <Route path="/contact" element={<div>Contact-Us</div>} />
      </Routes>
    </Router>
  );
}

export default App;
