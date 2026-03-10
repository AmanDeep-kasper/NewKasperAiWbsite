import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import "./background-beams-with-collision-demo.css"
export default function BackgroundBeamsWithCollisionDemo() {
  const openGoogleReviews = () => {
  window.open(
    "https://maps.app.goo.gl/Fctod6ZHUeGgWGyp6",
    "_blank"
  );
};
  return (
    <BackgroundBeamsWithCollision>
  
{/* Parent Container to hold both Text and Image side-by-side */}
{/* Parent: flex-row with items-start to keep text at top */}
<div className="flex flex-row items-start justify-between w-full max-w-[1922px] mx-auto  px-8 lg:px-50 pt-2 overflow-visible">
  
  {/* LEFT SIDE: Text Content */}
  {/* Changed w-full to w-fit so it only takes the space it needs for the single line */}
  <div className="Badge-container flex flex-col items-start text-left w-fit z-5 mt-30">
    
    {/* Badge Section */}
    <div className="badge-wrapper flex items-center bg-white shadow-sm border border-gray-100 rounded-sm w-fit overflow-hidden mb-2">
      <span className="bg-[#7DFFA0] text-black px-4 py-2 font-bold text-sm ml-1 my-1 badge-yrs">
        9+ Years
      </span>
      <span className="ml-2 py-1 text-gray-700 text-sm font-medium flex items-center gap-1">
        of expertise in delivering digital solutions
        <img src="./k.png" alt="crown" className="mr-1 h-9 w-9 object-contain" />
      </span>
    </div>

    {/* Heading - whitespace-nowrap keeps it in one line */}
    <h1 className="Badge-title text-5xl font-bold text-[#002D2D] leading-tight mb-4 whitespace-nowrap">
      Crafting Powerful Digital Experiences
    </h1>

    {/* Subtext */}
    <p className="Badge-subtitle text-slate-700 mb-10 text-lg max-w-4xl justify-start">
      Modern web & software designing, development, and digital marketing for growing businesses.
    </p>

    {/* Actions */}
    <div className="Badge-actions flex flex-wrap items-center gap-4">
      <button className="btn-outline border-2 border-[#002D2D] text-[#002D2D]  font-semibold hover:bg-[#002D2D] hover:text-white transition Badge-Buttons">
        Our Products
      </button>
      <button className="btn-primary bg-[#FF5733] text-white  font-semibold px-2 hover:bg-[#E64A19] transition Badge-Buttons">
        Contact Us
      </button>
      
      <div className="google-reviews flex items-center gap-2 px-4 py-3 border border-green-100 bg-white Badge-buttons">
        <img src="./star.png" alt="G" className="w-5 h-5" />
        <span className="font-bold text-gray-800">4.3</span>
        <span onClick={openGoogleReviews}
 className="text-blue-600 cursor-pointer text-sm ">(23 Google reviews)</span>
         <img src="./google.png" alt="G" className="w-5 h-5" />
      </div>
    </div>
  </div>

  {/* RIGHT SIDE: Diamond Shape Image */}
  {/* We keep this relative to handle the absolute positioning of the large diamond */}
  <div className="relative flex-1 ml-20 lg:ml-30 mt-5">
    <div className="w-[1200px] h-[600px]">
        <img 
            src="./Badgeimg.jpg" 
            alt="Dashboard" 
           
            className="w-full h-auto drop-shadow-2xl object-cover diamond-half-clip z-0 rounded-3xl" 
        />
    </div>
</div>
</div>
    
    </BackgroundBeamsWithCollision>
  );
}
