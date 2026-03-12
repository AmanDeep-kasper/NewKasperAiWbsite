import React from 'react';
import { Link } from 'react-router-dom';
import "./Solutionpopup.css"
import solutionpopup2 from "../assets/images2/solution-popup-2.svg"
import solutionpopup1 from "../assets/images2/solution-popup-1.svg"
const Solutionspopup = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  const industries = [
    "Travel & Tourism", "Healthcare", "Real Estate", 
    "Entertainment", "Social Media", "E-commerce",
    "Education", "Banking", "Sports", "IT & ITES"
  ];

  const products = [
    { id: 'ims', title: 'IMS', sub: 'Inventory Management System', desc: "Real-time inventory tracking for smarter operations. Control stock, orders, and warehouses with ease.",link:'/solutions/ims' },
       { id: 'lms', title: 'LMS', sub: 'Lead Management System', desc: 'Capture and manage leads from multiple sources in one place. Track follow-ups, pipelines, and conversions in real time..', soon: false,link:'/solutions/lms' },
    { id: 'sms', title: 'SMS', sub: 'School Management System', desc: 'Manage admissions, attendance, fees, and academics centrally. Give parents and staff real-time access to student updates.', soon: true,link:'/solutions/sms' },
    { id: 'hms', title: 'HMS', sub: 'Hotel Management System', desc: 'Handle reservations, front desk, billing, and housekeeping smoothly. Get real-time visibility into room status and hotel operations.', soon: true,link:'/solutions/hms' },
    { id: 'chatapp', title: 'ChatApp', sub: 'Team Communication Platform', desc: 'Real-time chat, voice, and video for seamless team collaboration. Stay connected with secure messaging and instant communication.', soon: true,link:'/solutions/chatapp' },
    { id: 'hrms', title: 'HRMS', sub: 'Human Resources Management ', desc: 'Manage employees, attendance, payroll, and leaves digitally. Streamline HR operations with automated workflows.',link:'/solutions/hrms' }
  ];

  return (
    <div className="fixed-overlay">
    
      <div className="modal-backdrop " onClick={onClose}></div>

      <div className="modal-content-box animate-in fade-in zoom-in duration-300 ">
        
       
        <div className="section-container">
         
          <div className="content-grid">
            
          
            <div className="lg:col-span-4 space-y-6 md:space-y-9">
              <div className="space-y-4 text-center lg:text-left">
                <h2 className="text-[22px] md:text-[24px] font-bold font-sora text-[#00063D]">Products</h2>
                <div className="overflow-hidden">
                  <p className="font-bold text-[14px] font-sora text-[#00063D] whitespace-normal md:whitespace-nowrap">
                    MUN-C ERP – Built by Kasper Infotech
                  </p>
                  <p className="text-slate-500 text-[12px] mt-1">
                    An integrated suite of business solutions for modern organizations.
                  </p>
                </div>
              </div>

           
              <div className="image-group-container">
               
                <img 
                  src={solutionpopup2} 
                  alt="Decorative Background"
                  className="img-decorative"
                />

               
                <img 
                  src={solutionpopup1} 
                  alt="MUN-C ERP Brochure"
                  className="img-brochure"
                />
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 lg:gap-y-12">
              {products.map((item) => (
                <Link 
                  key={item.id} 
                  to={item.link || "#"} 
                  onClick={onClose}
                  className="group cursor-pointer border-b border-slate-50 pb-4 md:border-none md:pb-0 block no-underline"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-sora font-bold text-[16px] text-[#00063D] flex items-center flex-wrap">
                        {item.title} 
                        {item.soon && (
                          <span className="bg-[#FFC2F9] text-[9px] px-[5px] py-[5px] ml-5 font-black uppercase rounded">Soon</span>
                        )}
                      </h3>
                      <span className="block font-medium font-sora text-[15px] md:text-[16px] text-[#00063D] mt-1">
                        {item.sub}
                      </span>
                    </div>
                    <svg className="w-4 h-4 mt-1 text-slate-300 group-hover:translate-x-1 group-hover:text-indigo-600 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-slate-500 text-[12px] font-sora mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <hr className="border-slate-100 my-6 md:my-10" />

       
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            <div className="lg:col-span-4 text-center lg:text-left">
              <h2 className="text-[20px] font-bold font-sora text-[#00063D]">Industries We serve</h2>
              <p className="text-slate-500 text-[12px] mt-2">
                We keep our technology stack up to date.
              </p>
            </div>
            
          
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 md:gap-y-3 gap-x-2">
              {industries.map((industry) => (
                <div key={industry} className="text-[14px] md:text-[16px] font-sora font-medium text-[#00063D] hover:text-indigo-600 cursor-pointer flex items-center justify-center lg:justify-start gap-2 transition-colors">
                  <span className="w-1.5 h-1.5  shrink-0"></span>
                  {industry}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Solutionspopup;