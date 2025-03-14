import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AdminPage from "./pages/AdminPage";
import BlogPage from "./pages/BlogPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/blog/:id" element={<BlogPage />} />
      </Routes>
    </Router>
  );
}

export default App;