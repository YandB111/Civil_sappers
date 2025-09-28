import React from "react";
import "./Navbar.css";

const Navbar = () => {
return ( <nav className="navbar">
{/* Left Side Logo */} <div className="navbar-left"> <div className="logo">UC</div> <span className="company-name">Civil Sappers</span> </div>


  {/* Center Options */}
  <div className="navbar-center">
    <span className="menu-item">Service</span>
    <span className="menu-item">Customer</span>
  </div>

  {/* Right Side */}
  <div className="navbar-right">
    <div className="location">
      <span className="icon">📍</span>
      Chandigarh, India
    </div>
    <input
      type="text"
      placeholder="Search for ‘AC service’"
      className="search-box"
    />
    <div className="icon">📝</div>
    <div className="cart">🛒</div>
    <div className="icon">👤</div>
  </div>
</nav>

);
};

export default Navbar;
