import React, { useState } from "react";
import Modal from "../Model/Modal";
import "../Model/model.css";

import {
  FaWrench,
  FaBolt,
  FaHammer,
  FaPaintRoller,
  FaTv,
  FaRegWindowMaximize,
  FaBuilding,
} from "react-icons/fa";


const categories = [
  { name: "Plumber", icon: <FaWrench /> },
  { name: "Electrician", icon: <FaBolt /> },
  { name: "Carpenter", icon: <FaHammer /> },
  { name: "Painter", icon: <FaPaintRoller /> },
  { name: "Home Appliances", icon: <FaTv /> },
  { name: "Glazier", icon: <FaRegWindowMaximize /> },
  { name: "Civil Works", icon: <FaBuilding /> },
];

function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  return (
    <div className="app">
      <div className="service-section container">
        <h2 className="section-heading">What are you looking for?</h2>
        <div className="service-grid">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="service-card light-mode"
              onClick={() => handleCategoryClick(cat.name)}
            >
              <div className="service-icon">{cat.icon}</div>
              <p>{cat.name}</p>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          selectedCategory={selectedCategory}
        />
      )}
    </div>
  );
}

export default ServicesPage;
