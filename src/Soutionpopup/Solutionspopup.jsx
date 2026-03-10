import React from 'react';

const Solutionspopup = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  const industries = [
    "Travel & Tourism", "Healthcare", "Real Estate", 
    "Entertainment", "Social Media", "E-commerce",
    "Education", "Banking", "Sports", "IT & ITES"
  ];

  const products = [
    { id: 'ims', title: 'IMS', sub: 'Inventory Management System', desc: "Real-time inventory tracking for smarter operations. Control stock, orders, and warehouses with ease.",link:'/solutions/ims' },
       { id: 'lms', title: 'LMS', sub: 'Lead Management System', desc: 'Capture and manage leads from multiple sources in one place. Track follow-ups, pipelines, and conversions in real time..', soon: false },
    { id: 'sms', title: 'SMS', sub: 'School Management System', desc: 'Manage admissions, attendance, fees, and academics centrally. Give parents and staff real-time access to student updates.', soon: true },
    { id: 'hms', title: 'HMS', sub: 'Hotel Management System', desc: 'Handle reservations, front desk, billing, and housekeeping smoothly. Get real-time visibility into room status and hotel operations.', soon: true },
    { id: 'chatapp', title: 'ChatApp', sub: 'Team Communication Platform', desc: 'Real-time chat, voice, and video for seamless team collaboration. Stay connected with secure messaging and instant communication.', soon: true },
    { id: 'hrms', title: 'HRMS', sub: 'Human Resources Management ', desc: 'Manage employees, attendance, payroll, and leaves digitally. Streamline HR operations with automated workflows.' }
  ];

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40  transition-opacity" onClick={onClose}></div>

      {/* Main Container - Added max-h-screen and responsive width */}
      <div className="relative bg-white w-full max-w-7xl max-h-[85vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-300 mt-[-25px]">
        
       
        <div className="p-6 md:p-12 lg:p-16">
          
          {/* PRODUCTS SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 mb-10">
            
            {/* LEFT SIDE: Title + Brochure Image */}
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

              {/* THE IMAGE COMPONENT - Made responsive */}
              <div className="relative flex justify-center lg:justify-start h-[200px] md:h-[250px] lg:pt-20 group/image">
                {/* Background Image (popup-2) */}
                <img 
                  src="./solution-popup-2.svg" 
                  alt="Decorative Background"
                  className="absolute top-0 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 z-0 w-full max-w-[200px] md:max-w-[260px] opacity-30 transition-transform duration-700 transform rotate-[2deg] group-hover/image:rotate-[-5deg]"
                />

                {/* Main Image (popup-1) */}
                <img 
                  src="./solution-popup-1.svg" 
                  alt="MUN-C ERP Brochure"
                  className="absolute z-10 w-full max-w-[120px] md:max-w-[150px] shadow-2xl rounded-sm transition-all duration-500 mt-10 lg:-mt-24 ml-0 lg:ml-12 transform -rotate-3 group-hover/image:scale-110 group-hover/image:rotate-0"
                />
              </div>
            </div>

            {/* RIGHT SIDE: Product Grid - 1 col on mobile, 2 on md+ */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 lg:gap-y-12">
              {products.map((item) => (
                <div key={item.id} className="group cursor-pointer border-b border-slate-50 pb-4 md:border-none md:pb-0">
                
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-sora font-bold text-[16px] text-[#00063D] flex items-center flex-wrap">
                        {item.title} 
                        {item.soon && (
                          <span className="bg-[#FFC2F9] text-[9px] px-1.5 py-0.5 ml-2 font-black uppercase rounded">Soon</span>
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
                </div>
              ))}
            </div>
          </div>

          <hr className="border-slate-100 my-6 md:my-10" />

          {/* INDUSTRIES SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            <div className="lg:col-span-4 text-center lg:text-left">
              <h2 className="text-[20px] font-bold font-sora text-[#00063D]">Industries We serve</h2>
              <p className="text-slate-500 text-[12px] mt-2">
                We keep our technology stack up to date.
              </p>
            </div>
            
            {/* Industry list: 1 col mobile, 2 col sm, 3 col md+ */}
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