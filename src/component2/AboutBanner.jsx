import React from 'react'
import "./AboutBanner.css"
const AboutBanner = () => {
  return (
<div classNameName="About-Banner-maindiv">

   <div className='About-us-img w-full min-h-screen flex flex-col items-center pt-[185px] pb-15 '>
        <p className="about-text text-center font relative t-[165px] flex flex-col l-[553px] w-[815px] h-[10px]
            font-sora font-semibold text-[48px] leading-[1.2] 
            tracking-normal opacity-100 text-[rgba(0, 6, 61, 1)]">Engineering Digital Growth.
Empowering Modern Businesses.</p>
<div className="relative w-[1150px] h-[500px] mx-auto mt-90">
  
  <div className="absolute -top-[16px] -right-[16px] w-[calc(100%+32px)] h-[calc(100%+32px)] z-0">
    <img src="./orange.png" alt="" className="w-full h-full object-cover" />
  </div>

  <div className="relative w-[1150] h-[500px] z-10 bg-white shadow-md overflow-hidden flex items-center px-16">
    
    <img src="./white.png" alt="" className="absolute inset-0 w-full h-full object-cover -z-10" />

    <div className="flex w-full items-center justify-between">
      
      <div className="w-[59%] flex flex-col gap-4">
        <div class="flex items-start gap-2"> <span className="text-[rgba(0, 6, 61, 1)] text-[128px]  font-md leading-none w-[57px] h-[154px] mt-[-27px] font-sora">“</span>
        <p className="font-sora font-normal text-[30px] text-[rgba(0, 6, 61, 1)] w-[627px] h-[152px] t-[45px] l-[29px] leading-tight text-center">
          We don’t just build software — we build technology that helps businesses move faster and think bigger.
        </p></div>
       
        
        <div className="mt-8 w-[600px] h-[65px] t-[600px] l-[-23.33px] text-right">
          <h4 className="font-sora font-semibold text-[32px] text-[rgba(0, 6, 61, 1)]">Kishor Kumar</h4>
          <p className="text-gray-500 text-[20px] font-sora">Director, Kasper Infotech</p>
        </div>
      </div>

    <div className="relative w-[500px] h-[1000px] flex justify-center items-center mx-auto">
  
  <img 
    src="./banner1.svg" 
    alt="Kishor Kumar" 
    className="absolute z-10 h-[700px] w-auto object-contain drop-shadow-2xl"
  /> 

  <img 
    src="./banner-2.png" 
    alt="Background Accent" 
    className="relative z-0 w-[454px] h-[495px] object-contain left-[5px] top-[0px] " 
  />
  
</div>
    </div>
  </div>
</div>
  
</div> 

    </div>
  )
}

export default AboutBanner