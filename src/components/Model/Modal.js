import React from "react";
import "../Model/model.css";
import { 
  FaWrench, FaFire, FaHammer, FaLaptop, FaToilet, FaCoffee, 
  FaRegWindowMaximize, FaBuilding, FaCubes, FaUserCog 
} from "react-icons/fa";

// Subtypes mapping
const subtypes = {
  "Plumber": [
    { name: "Pipe Repair", icon: <FaWrench /> },
    { name: "Leak Fix", icon: <FaFire /> },
    { name: "Installations", icon: <FaHammer /> },
  ],
  "Home Appliances": [
    { name: "Laptop", icon: <FaLaptop /> },
    { name: "Toilet", icon: <FaToilet /> },
    { name: "Coffee Maker", icon: <FaCoffee /> },
  ],
  "Glazier": [
    { name: "Window Repair", icon: <FaRegWindowMaximize /> },
  ],
  "Civil Works": [
    { name: "Construction", icon: <FaBuilding /> },
  ],
  "Mason": [
    { name: "Brick Work", icon: <FaCubes /> },
  ],
  "Labour": [
    { name: "Helper", icon: <FaUserCog /> },
  ],
  // Add more subtypes as needed
};

function Modal({ onClose, selectedCategory }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>✕</button>
        <h2>{selectedCategory} Subtypes</h2>
        <div className="service-grid">
          {subtypes[selectedCategory]?.map((sub, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{sub.icon}</div>
              <p>{sub.name}</p>
            </div>
          )) || <p>No subtypes available</p>}
        </div>
      </div>
    </div>
  );
}

export default Modal;
