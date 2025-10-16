import "../Model/model.css";
import {
  FaWrench,
  FaFire,
  FaHammer,
  FaLaptop,
  FaRegWindowMaximize,
  FaBuilding,
  FaCubes,
  FaUserCog,
} from "react-icons/fa";

// Subtypes mapping
const subtypes = {
  Plumber: [
    { name: "Plumbing Repair", icon: <FaWrench /> },
    { name: "Leak Fix", icon: <FaFire /> },
    { name: "Installations", icon: <FaHammer /> },
  ],
  Electrician: [
    { name: "Electrical Fitting", icon: <FaHammer /> },
        { name: "Fan", icon: <FaUserCog /> },
    { name: "Electrical Repair", icon: <FaWrench /> },
  ],
  Carpenter: [
    { name: "Modular Kitchen Fitting", icon: <FaHammer /> },
    { name: "Wardrobe", icon: <FaCubes /> },
    { name: "Doors/Windows", icon: <FaRegWindowMaximize /> },
    { name: "Wooden Furniture", icon: <FaBuilding /> },
  ],
  Painter: [{ name: "Interior/Exterior Painting", icon: <FaFire /> },
    { name: "Water Proofing", icon: <FaFire /> }
  ],
  "Home Appliances": [
    { name: "AC/Heater", icon: <FaLaptop /> },
    { name: "Kitchen Appliances", icon: <FaCubes /> },
  ],
  Glazier: [{ name: "Glass Work", icon: <FaRegWindowMaximize /> }],
  "Civil Works": [
    { name: "Remodeling/Repair", icon: <FaBuilding /> },
    { name: "Brick Work", icon: <FaCubes /> },
    { name: "Mason", icon: <FaHammer /> },
    { name: "Labour", icon: <FaUserCog /> },
  ],
};

function Modal({ onClose, selectedCategory }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
        <h2>{selectedCategory} Subtypes</h2>
        <div className="service-grid">
          {subtypes[selectedCategory] ? (
            subtypes[selectedCategory].map((sub, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{sub.icon}</div>
                <p>{sub.name}</p>
              </div>
            ))
          ) : (
            <p>No subtypes available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
