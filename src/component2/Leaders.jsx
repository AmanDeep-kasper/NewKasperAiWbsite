import React from 'react'
import Banner0 from "../assets/images2/Banner0.svg";
import leader1 from "../assets/images2/leader1.svg";

import leader2 from "../assets/images2/leader2.svg";
import leader3 from "../assets/images2/leader3.svg";
import leader4 from "../assets/images2/leader4.svg";
const Leaders = () => {
  return (
 
    <div className="bg-[rgba(244,244,244,1)] py-10 px-5 mt-20">
        <p className="font-sora font-normal text-[20px] leading-[1.35] tracking-normal text-center text-[rgba(0, 6, 61, 1)]">
  Meet Our Leaders
</p>
  
  <div className="flex justify-center gap-24 mb-15 mt-10">
    <div className="flex flex-col items-center">
      <img src={Banner0} alt="Name 1" className="w-[240px] h-[321px] object-cover" />
      <p className="mt-2 font-sora font-normal text-[20px] leading-[1.35] tracking-normal text-center text-[rgba(0, 6, 61, 1)]">Kishor Kumar</p>
        <p className="mt-2 font-sora font-normal text-[12px] leading-[1.35] tracking-normal text-center text-gray-500">Founder & Director</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={leader1} alt="Name 2" className="w-[240px] h-[321px] object-cover" />
      <p className="mt-2 font-sora font-normal text-[20px] leading-[1.35] tracking-normal text-center text-[rgba(0, 6, 61, 1)]">Lakshmi Mittal</p>
      <p className="mt-2 font-sora font-normal text-[12px] leading-[1.35] tracking-normal text-center text-gray-500">Founder & Director</p>
    </div>
  </div>

  <div className="flex justify-center gap-34">
    <div className="flex flex-col items-center">
      <img src={leader2} alt="Name 3" className="w-[240px] h-[321px] object-cover " />
      <p className="mt-2 font-sora font-normal text-[20px] leading-[1.35] tracking-normal text-center text-[rgba(0, 6, 61, 1)]">Gulam Zeelani</p>
        <p className="mt-2 font-sora font-normal text-[12px] leading-[1.35] tracking-normal text-center text-gray-500">Manager</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={leader3} alt="Name 4" className="w-[240px] h-[321px] h-[200px] object-cover" />
      <p className="mt-2 font-sora font-normal text-[20px] leading-[1.35] tracking-normal text-center text-[rgba(0, 6, 61, 1)]">Aman Kumar</p>
        <p className="mt-2 font-sora font-normal text-[12px] leading-[1.35] tracking-normal text-center text-gray-500">Product Manager</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={leader4} alt="Name 5" className="w-[240px] h-[321px]  object-cover " />
      <p className="mt-2 font-sora font-normal text-[20px] leading-[1.35] tracking-normal text-center text-[rgba(0, 6, 61, 1)]">Shashi Kumar Jha</p>
        <p className="mt-2 font-sora font-normal text-[12px] leading-[1.35] tracking-normal text-center text-gray-500">Manager</p>
    </div>
  </div>
</div>
  )
}

export default Leaders