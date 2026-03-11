import React,{useState} from 'react'
import { Link } from 'react-router-dom' 
import Solutionspopup from '../Soutionpopup/Solutionspopup.jsx';
import "./Navbar.css";
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
            src="./logo.jpg.png" 
            alt="Kasper Logo" 
            className="h-8 md:h-10 lg:h-12 w-auto object-contain transition-all duration-300"
          />
        </Link>
      </div>

     
     <ul className={`menu-div ${isOpen ? 'flex' : 'hidden'} md:flex items-center`}>

  <li>
    <Link to="/" className="menu transition font-sora">Home</Link>
  </li>

 
<li 
            className="group relative cursor-pointer transition"
            onClick={() => handleOpenPopup("solutions")}
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
            onClick={() => handleOpenPopup("solutions")}
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
    <Link to="#" className="menu transition">Insights</Link>
  </li>
</ul>

      <div className="flex items-center space-x-2 md:space-x-4">
        {/* Buttons (Keep existing structure) */}
        <div className="md:flex items-center space-x-4">
          <button className="btn-munc">MUN-C</button>
          <button className=" btn-demo">Get A Demo</button>
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
    <Solutionspopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
        type={activeTab}
      />
      </>
  )
}

export default Navbar