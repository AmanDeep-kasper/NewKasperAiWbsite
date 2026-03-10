import React from 'react'
import Team1 from "../assets/images2/Team-1.svg";
import Team2 from "../assets/images2/Team-2.svg";
import Team3 from "../assets/images2/Team-3.svg";
import Team4 from "../assets/images2/Team-4.png";
import leader1 from "../assets/images2/leader1.svg";
const Team= () => {
  return (
    <div className="bg-[rgba(255, 255, 255, 1)] py-10 px-5 mt-20 w-[1920px] h-[849px] ">
        <p className="font-sora font-normal text-[20px] leading-[1.35] tracking-normal text-center text-[rgba(0, 6, 61, 1)]">
  Meet Our Team
</p>

  <div className="flex justify-center gap-12 mb-15 mt-10">
    <div className="flex flex-col items-center">
      <img src={Team1} alt="Name 1" className="w-[200px] h-[252px] object-cover" />
      <p className="mt-2 font-sora font-normal text-[20px] leading-[1.35] tracking-normal text-center text-[rgba(0, 6, 61, 1)]">Ilma Sheikh</p>
        <p className="mt-2 font-sora font-normal text-[12px] leading-[1.35] tracking-normal text-center text-gray-500">Digital Marketing </p>
    </div>
    <div className="flex flex-col items-center">
      <img src={Team2}  alt="Name 2" className="w-[200px] h-[252px] object-cover" />
      <p className="mt-2 font-sora font-normal text-[20px] leading-[1.35] tracking-normal text-center text-[rgba(0, 6, 61, 1)]">Monu Jangra</p>
      <p className="mt-2 font-sora font-normal text-[12px] leading-[1.35] tracking-normal text-center text-gray-500">Cyber Security Engineer</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={Team3}  alt="Name 2" className="w-[200px] h-[252px] object-cover" />
      <p className="mt-2 font-sora font-normal text-[20px] leading-[1.35] tracking-normal text-center text-[rgba(0, 6, 61, 1)]">Alok Ranjan Oraon</p>
      <p className="mt-2 font-sora font-normal text-[12px] leading-[1.35] tracking-normal text-center text-gray-500">Product Designer</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={Team4}  alt="Name 2" className="w-[200px] h-[252px] object-cover" />
      <p className="mt-2 font-sora font-normal text-[20px] leading-[1.35] tracking-normal text-center text-[rgba(0, 6, 61, 1)]">Sachin tichkulle</p>
      <p className="mt-2 font-sora font-normal text-[12px] leading-[1.35] tracking-normal text-center text-gray-500">QA Tester</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={Team4}  alt="Name 2" className="w-[200px] h-[252px] object-cover" />
      <p className="mt-2 font-sora font-normal text-[20px] leading-[1.35] tracking-normal text-center text-[rgba(0, 6, 61, 1)]">Sachin Sahoo</p>
      <p className="mt-2 font-sora font-normal text-[12px] leading-[1.35] tracking-normal text-center text-gray-500">QA Tester</p>
    </div>
  </div>

  {/* Bottom Row: 3 Images */}
  <div className="flex justify-center gap-12">
    <div className="flex flex-col items-center">
      <img src={Team4}  alt="Name 3" className="w-[200px] h-[252px] object-cover " />
      <p className="mt-2 font-sora font-normal text-[20px] leading-[1.35] tracking-normal text-center text-[rgba(0, 6, 61, 1)]">Sachin Sahoo</p>
        <p className="mt-2 font-sora font-normal text-[12px] leading-[1.35] tracking-normal text-center text-gray-500">QA Tester</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={Team4}  alt="Name 4" className="w-[200px] h-[252px] h-[200px] object-cover" />
      <p className="mt-2 font-sora font-normal text-[20px] leading-[1.35] tracking-normal text-center text-[rgba(0, 6, 61, 1)]">Sachin Sahoo</p>
        <p className="mt-2 font-sora font-normal text-[12px] leading-[1.35] tracking-normal text-center text-gray-500">QA Testerr</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={Team4}  alt="Name 5" className="w-[200px] h-[252px]  object-cover " />
      <p className="mt-2 font-sora font-normal text-[20px] leading-[1.35] tracking-normal text-center text-[rgba(0, 6, 61, 1)]">Sachin Sahoo</p>
        <p className="mt-2 font-sora font-normal text-[12px] leading-[1.35] tracking-normal text-center text-gray-500">QA Tester</p>
    </div>
     <div className="flex flex-col items-center">
      <img src={leader1} alt="Name 5" className="w-[200px] h-[252px]  object-cover " />
      <p className="mt-2 font-sora font-normal text-[20px] leading-[1.35] tracking-normal text-center text-[rgba(0, 6, 61, 1)]">Lakshmi Mittal</p>
        <p className="mt-2 font-sora font-normal text-[12px] leading-[1.35] tracking-normal text-center text-gray-500">Director</p>
    </div>
  </div>
</div>
  )
}

export default Team;