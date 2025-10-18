import React, { useState } from "react";
import "./LoginPage.css";

const LoginPage = () => {
  const [role, setRole] = useState("customer");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [adhar, setAdhar] = useState("");
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [loadingLocation, setLoadingLocation] = useState(false);

  // 🌍 Get readable location (city, district, etc.)
  const handleGetLocation = () => {
    if (navigator.geolocation) {
      setLoadingLocation(true);
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const { latitude, longitude } = pos.coords;
          try {
            const res = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
            );
            const data = await res.json();
            const name =
              data.address.city ||
              data.address.town ||
              data.address.village ||
              data.address.county ||
              "Unknown location";
            const district = data.address.state_district || data.address.state || "";
            setLocation(`${name}, ${district}`);
          } catch (err) {
            alert("Failed to fetch location details.");
          } finally {
            setLoadingLocation(false);
          }
        },
        () => {
          alert("Location access denied.");
          setLoadingLocation(false);
        }
      );
    } else {
      alert("Geolocation not supported by this browser.");
    }
  };

  // 📸 Capture photo using webcam or upload
  const handleCapturePhoto = (e) => {
    const file = e.target.files[0];
    setPhoto(URL.createObjectURL(file));
  };

  const handleSendOtp = () => {
    if (!mobile) return alert("Enter mobile number first");
    setShowOtp(true);
  };

  const handleSubmit = () => {
    if (role === "customer") {
      alert(`Customer logged in with Mobile: ${mobile}`);
    } else {
      alert(`Service Provider Registered:
      Mobile: ${mobile}
      Aadhar: ${adhar}
      Location: ${location}`);
    }
  };

  return (
    <div className="login-container">
      <h2>Login / Register</h2>

      {/* Role Selection */}
      <div className="role-select">
        <label>
          <input
            type="radio"
            name="role"
            value="customer"
            checked={role === "customer"}
            onChange={() => setRole("customer")}
          />
          Customer
        </label>
        <label>
          <input
            type="radio"
            name="role"
            value="provider"
            checked={role === "provider"}
            onChange={() => setRole("provider")}
          />
          Service Provider
        </label>
      </div>

      {/* Common: Mobile Number */}
      <input
        type="tel"
        placeholder="Enter Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />

      {/* OTP for customer */}
      {role === "customer" && !showOtp && (
        <button className="btn" onClick={handleSendOtp}>
          Send OTP
        </button>
      )}
      {role === "customer" && showOtp && (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button className="btn" onClick={handleSubmit}>
            Verify OTP
          </button>
        </>
      )}

      {/* Service Provider fields */}
      {role === "provider" && (
        <>
          <input
            type="text"
            placeholder="Enter Aadhar Card Number"
            value={adhar}
            onChange={(e) => setAdhar(e.target.value)}
          />

          {/* 📸 Upload Photo */}
          <label className="upload-label">
            Upload / Take Photo:
            <input
              type="file"
              accept="image/*"
              capture="user"
              onChange={handleCapturePhoto}
            />
          </label>
          {photo && <img src={photo} alt="Preview" className="preview" />}

          {/* 📍 Location */}
          <div className="location-section">
            <button className="btn" onClick={handleGetLocation} disabled={loadingLocation}>
              {loadingLocation ? "Fetching Location..." : "Allow Location Access"}
            </button>
            {location && <p className="location-text">📍 {location}</p>}
            <input
              type="text"
              placeholder="Or manually enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <button className="btn" onClick={handleSubmit}>
            Register as Service Provider
          </button>
        </>
      )}
    </div>
  );
};

export default LoginPage;
