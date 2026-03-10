

import React from 'react'
import "./Services.css"
import Build from './Build';
import Design from './Design';
import Grow from './Grow';
const Services = () => {
  const services = [
    {index:"1",
      category: "Build",
      title: "Software & SaaS Development",
      desc: "Build scalable web, mobile, and custom software solutions.",
      img: ["./Pie.svg"], 
      bgImg: "./Web.svg",
      // Adding unique messages for this card
      messages: ["Message1.png", "Message2.png", "Message3.png"],
      cardType: "type-build" 
    },
    {index:"2",
      category: "Design",
      title: "UI/UX Design",
      desc: "Design experiences that boost engagement and conversions.",
      img: ["./second.svg","./Dot Arrow.svg","./sketch.svg"],
      bgImg: "./design-bg.png",
      // Maybe this card only has 2 messages or different ones
      messages: ["./coloured-arrow.svg","./colouredsecond.svg","./coloured-design.svg","./coloured-sketch.svg"],
      cardType: "type-design"
    },
    {index:"3",
      category: "Grow",
      title: "Growth & Digital Marketing",
      desc: "Data-driven marketing strategies focused on measurable business growth.",
      img: ["./Group2.svg","./Group.svg","./groupback.png"],
      bgImg: "",
      // Different functionality: No messages, just background decor
      messages: ["./linkedin.png","./instagram.png","./facebook.png","./youtube.png"], 
      cardType: "type-grow"
    },
  ];

  return (
    <section className="py-20 bg-white text-center relative overflow-visible">
      <h2 className="text-3xl font-bold text-[#002D2D] mb-40 services-we-offer">Services We Offer</h2>
      
      <div className="services-line lg:block hidden"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        
         <Build service={services[0]} />

        {/* Card 2: Design */}
        <Design service={services[1]} />

        {/* Card 3: Grow */}
        <Grow service={services[2]} />
      </div>
        
      
      
    </section>
  )
}

export default Services

