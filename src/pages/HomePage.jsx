import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

/*import { HOTEL_NAME } from "../config/constants";*/

const HomePage = () => {
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate("/login", { replace: true });
  };

  /* ================= SHOOTING STARS ================= */
  const ShootingStars = () => {
    return (
      <div className="stars-container">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="shooting-star"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2.5 + Math.random() * 3.5}s`,
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      {/* Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&display=swap"
        rel="stylesheet"
      />

      <div className="home-container">
        {/* 🔥 Top Left Logo + HEMS */}
        <div className="top-left-brand">
          <img
            src="/images/hems-logo.jpeg"
            alt="HEMS Logo"
            className="top-left-logo"
          />

          {/* ✅ moved HEMS here */}
          <div className="hems-text">
            <span className="hems-letter">H</span>
            <span className="hems-letter">E</span>
            <span className="hems-letter">M</span>
            <span className="hems-letter">S</span>
          </div>
        </div>

        {/* Background Animation */}
        <ShootingStars />

        {/* Main Content */}
        <div className="home-card">
          <div className="welcome-text">
            <h1>Welcome to HEMS</h1>
            <p>
              Professional Hotel &amp; Event Management System
              <br />
              Streamline operations, bookings, events &amp; guest experience
            </p>
          </div>

          <button
            className="proceed-button"
            onClick={handleProceed}
            type="button"
          >
            Proceed &gt;&gt;
          </button>
        </div>

        {/* Footer */}
        <footer className="home-footer">
          <div>
            Produced &amp; Licensed by School of Accounting Package © 2026
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
