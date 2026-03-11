import React from 'react'
import  "./IndustriesServe.css"
import industry1 from "../assets/images2/industry1.jpg";
import industry2 from "../assets/images2/industry2.jpg";
import industry3 from "../assets/images2/industry3.jpg";
import industry4 from "../assets/images2/industry4.jpg";
import industry5 from "../assets/images2/industry5.jpg";
import industry6 from "../assets/images2/industry6.jpg";
import industry7 from "../assets/images2/industry7.jpg";
import industry8 from "../assets/images2/industry8.jpg";
import industry9 from "../assets/images2/industry9.jpg";
import industry10 from "../assets/images2/industry10.jpg";
import industry11 from "../assets/images2/industry11.jpg";
const IndustriesServe = () => {
  return (
<div className='Industries-main-div'>
  <p>Industries we serve</p>

  <div className="industry-imagediv">

    <div className="industry-card">
      <img src={industry1} alt="" />
      <p>Travel and Tourism</p>
    </div>

    <div className="industry-card">
      <img src={industry2} alt="" />
      <p>Healthcare & Fitness</p>
    </div>

    <div className="industry-card">
      <img src={industry3} alt="" />
      <p>Real Estate</p>
    </div>

    <div className="industry-card">
      <img src={industry4} alt="" />
      <p>Media & Entertainment</p>
    </div>

    <div className="industry-card">
      <img src={industry5} alt="" />
      <p>Social Media & Networking</p>
    </div>
    <div className="industry-card">
      <img src={industry6} alt="" />
      <p>E-commerce</p>
    </div>
    <div className="industry-card">
      <img src={industry7} alt="" />
      <p>Education & E-learning</p>
    </div>
    <div className="industry-card">
      <img src={industry8} alt="" />
      <p>Banking & Finance</p>
    </div>
    <div className="industry-card">
      <img src={industry9} alt="" />
      <p>Sports & Wellness</p>
    </div>
     <div className="industry-card">
      <img src={industry10} alt="" />
      <p>IT & ITES</p>
    </div>
     <div className="industry-card">
      <img src={industry11} alt="" />
      <p>Business Services</p>
    </div>


  </div>
</div>
  )
}

export default IndustriesServe