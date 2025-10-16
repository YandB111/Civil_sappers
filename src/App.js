import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ServicesPage from "./components/Service/ServicesPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Welcome to Civil Sappers</h1>} />
        <Route path="/Customer" element={<ServicesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
