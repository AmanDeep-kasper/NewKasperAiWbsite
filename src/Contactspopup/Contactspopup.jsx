import React from "react";
import "./Contact.css";
// FaTimes ko yahan import karna zaruri hai
import { FaUser, FaEnvelope, FaTimes } from "react-icons/fa"; 

import flag from "../assets/images/flag.svg";
import img from "../assets/images/img.svg";

const ContactsPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      {/* Container jo card ki tarah dikhega */}
      <div className="contact-popup-container" onClick={(e) => e.stopPropagation()}>
        
      
        <section className="contact">
          <div className="contact-left">
            <h2>Get in Touch.</h2>
            <p>
              Your business matters to us. Contact our team anytime for support,
              demos, or partnerships.
            </p>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Full Name<span>*</span></label>
                <div className="input-with-icon">
                  <FaUser className="input-icon" />
                  <input type="text" placeholder="Enter Full Name" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email Id<span>*</span></label>
                  <div className="input-with-icon">
                    <FaEnvelope className="input-icon" />
                    <input type="email" placeholder="Enter Email Id" required />
                  </div>
                </div>

                <div className="form-group">
                  <label>Phone No.<span>*</span></label>
                  <div className="phone-input">
                    <img src={flag} className="flag" alt="flag" />
                    <span className="code">+91</span>
                    <span className="divider">|</span>
                    <input type="text" placeholder="Enter Phone No." required />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>Product</label>
                <div className="select-wrapper">
                  <select>
                    <option>Select Product</option>
                    <option>Product 1</option>
                    <option>Product 2</option>
                    <option>Product 3</option>
                  </select>
                </div>
              </div>

              <div className="form-group full">
                <label>Message</label>
                <textarea placeholder="How we can help you?"></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>

          <div className="contact-right">
            <img src={img} alt="contact" />
          </div>
        </section>
      </div> {/* Container ends here */}
    </div> /* Overlay ends here */
  );
};

export default ContactsPopup;