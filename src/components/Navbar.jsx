import React,{useState} from 'react'
import { Link } from 'react-router-dom' 
import Solutionspopup from '../Soutionpopup/Solutionspopup.jsx';
import "./Navbar.css";
import logo from "../assets/images2/logo.jpg.png"
import Servicespopup from '@/Servicespopup/Servicespopup.jsx';
import navtag from "../assets/images2/navtag.svg"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Popup Visibility
  const [activeTab, setActiveTab] = useState(""); // Track if "Solutions" or "Services" was clicked

 
  const handleOpenPopup = (type) => {
    setActiveTab(type);
    setIsPopupOpen(true);
    setIsOpen(false); 
  };

  return (
    <>
    <nav className="main-nav flex items-center justify-between px-8 py-4 shadow-xs sticky top-0 z-50">
      <div className="flex items-center shrink-0">
        <Link to="/">
          <img 
            src={logo}
            alt="Kasper Logo" 
            className="h-8 md:h-10  lg:h-20 w-auto object-contain transition-all duration-300 nav-logo"
          />
        </Link>
      </div>

     
     <ul className={`menu-div ${isOpen ? 'flex' : 'hidden'} md:flex items-center`}>

  <li>
    <Link to="/" className="menu transition font-sora">Home</Link>
  </li>

 
<li 
            className="group relative cursor-pointer transition"
            onMouseEnter={() => handleOpenPopup("solutions")}
          >
            <div className="menu flex items-center justify-center">
              <span className="transition font-sora">Solutions</span>
              <svg className="w-4 h-4 ml-1 shrink-0 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </li>

  
  <li 
            className="group relative cursor-pointer transition"
            onMouseEnter={() => handleOpenPopup("services")}
          >
            <div className="menu flex items-center justify-center">
              <span className="transition font-sora">Services</span>
              <svg className="w-4 h-4 ml-1 shrink-0 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </li>

  
  <li>
    <Link to="/About" className="menu transition">About Us</Link>
  </li>


  <li>
    <Link to="/insightsblogs" className="menu transition">Insights</Link>
  </li>


<li className="mobile-menu-buttons">
  <div className="relative inline-block">
    <img 
      src={navtag} 
      alt="try" 
      className="absolute -top-3 -left-4 h-8 w-auto z-10"
    />
    <button className="btn-munc w-28 h-10">MUN-C</button>
  </div>
  <button className="btn-demo w-28 h-10">Get A Demo</button>
</li>

</ul>

      <div className="flex items-center space-x-2 md:space-x-4">
        {/* Buttons (Keep existing structure) */}
      <div className="hidden md:flex items-center space-x-4">
  <div className="relative inline-block">
    <img 
      src={navtag} 
      alt="try" 
      className="absolute -top-3 -left-4 h-8 w-auto z-10"
    />
    <button className="btn-munc">MUN-C</button>
  </div>
  <button className="btn-demo">Get A Demo</button>
</div>

        {/* 4. Hamburger Icon Button (Visible only on mobile) */}
        <button 
          className="md:hidden p-2 text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>
    </nav>
   {isPopupOpen && activeTab === "solutions" && (
  <Solutionspopup 
    isOpen={true} 
    onClose={() => setIsPopupOpen(false)} 
  />
)}

{isPopupOpen && activeTab === "services" && (
  <Servicespopup  
    isOpen={true} 
    onClose={() => setIsPopupOpen(false)} 
  />
)}
      </>
  )
}

export default Navbar