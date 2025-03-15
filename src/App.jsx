import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout"; // Import Layout
import Loader from "./components/Loader";
import QuantumMechanics from "./pages/blogs/QuantumMechanics";
import MarsColonization from "./pages/blogs/MarsColonization";
import BlackHoles from "./pages/blogs/BlackHoles";
import Filter from "./components/Filter";
import BlogPage from "./pages/BlogPage";
import Allblogs from "./components/Allblogs";

function App() {
  return (
    <Router>
      <Loader />
      <Routes>
        {/* All pages will have Navbar now */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="blogs" element={<Allblogs />} />
          <Route path="filter" element={<Filter />} />
          <Route path="blogs/:pageLink" element={<BlogPage />} />
          <Route path="blogs/quantum-mechanics" element={<QuantumMechanics />} />
          <Route path="blogs/mars-colonization" element={<MarsColonization />} />
          <Route path="blogs/black-holes" element={<BlackHoles />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
