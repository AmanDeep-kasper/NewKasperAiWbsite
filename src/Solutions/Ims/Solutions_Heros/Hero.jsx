import React from "react";
import "./Hero.css";
import dashboard from "../../../assets/images/Dashboard.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-inner">

        {/* Tags */}
        <div className="hero-tags">
          <span>Manage Inventory</span>
          <span>Control Stock</span>
          <span>Boost Efficiency</span>
        </div>

        {/* Title */}
        <h1 className="hero-title">
          Smart Inventory Management System
        </h1>

        {/* Description */}
        <p className="hero-desc">
          Modern businesses need speed, accuracy, and control. MUN-C Smart
          Inventory Management System centralizes inventory, sales, suppliers,
          and invoicing into one powerful platform. Track stock in real time,
          automate operations, manage warehouses, and streamline billing from
          a single dashboard.
        </p>

        <div className="hero-actions">

  <button
    className="btn-outline"
    onClick={() => {
      const section = document.getElementById("demo");
      const yOffset = -80; // adjust if you have navbar
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }}
  >
    <span className="btn-content">Try Demo</span>
  </button>

 <button
  className="btn-primary"
  onClick={() => {
    const section = document.getElementById("contact-section");
    const yOffset = -80;
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }}
>
  <span className="btn-content">Contact Us</span>
</button>

</div>
        {/* Floating Dashboard */}
        <div className="hero-dashboard">
          <img src={dashboard} alt="Inventory Dashboard" />
        </div>

      </div>
    </section>
  );
};

export default Hero;