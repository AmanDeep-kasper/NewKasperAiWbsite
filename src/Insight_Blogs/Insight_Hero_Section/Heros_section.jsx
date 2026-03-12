import React from "react";
import "./HeroSections.css";
import Insught_blog_images from "../../assets/images/Insught_blog_images.svg"; // change path if needed

const Heros_section = () => {
  return (
    <section className="Heros_section">

      <div className="hero-top">

        <h1 className="hero-heading">Insight & Blogs</h1>

        <p className="hero-paragraph">
          Latest updates, strategies, and insights from the world of tech and
          digital marketing.
        </p>

        <div className="hero-buttons">
          <button>All Blogs</button>
          <button>Accounts</button>
          <button>User Management</button>
          <button>Payroll</button>
          <button>Room Management</button>
          <button>Payments</button>
          <button>Inventory</button>
          <button>Lead</button>
          <button>SAAS</button>
        </div>

      </div>

      <div className="featured-blog">

        <div className="featured-image">
          <img src={Insught_blog_images} alt="blog" />
        </div>

        <div className="featured-card">

          <span className="blog-tag">SAAS</span>

          <h2 className="featured-title">
            Don’t Start a SaaS Company Before Reading This
          </h2>

          <p className="featured-text">
            Starting a SaaS company is exciting, but it comes with real
            challenges. This article shares practical lessons and common
            mistakes.
          </p>

          <p className="blog-date">
            Feb 9, 2025 / <span>Aditi Singh</span>
          </p>

        </div>

      </div>

    </section>
  );
};

export default Heros_section;