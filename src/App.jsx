import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import QuantumMechanics from "./pages/blogs/QuantumMechanics";
import MarsColonization from "./pages/blogs/MarsColonization";
import BlackHoles from "./pages/blogs/BlackHoles";
import Filter from "./components/Filter";
import BlogPage from "./pages/BlogPage";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/blogs/:pageLink" element={<BlogPage />} />
        <Route path="/blogs/quantum-mechanics" element={<QuantumMechanics />} />
        <Route path="/blogs/mars-colonization" element={<MarsColonization />} />
        <Route path="/blogs/black-holes" element={<BlackHoles />} />

      </Routes>
    </Router>
  );
}

export default App;