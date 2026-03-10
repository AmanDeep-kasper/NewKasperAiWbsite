import React from 'react'
import "./Design.css"
const Design = ({service}) => {
  return (
<>

    <div className={`service-card group ${service.cardType}`}>
            
            <div className="content-wrapper">
              <span className="category font-semibold mb-2">{service.category}</span>
              <h3 className="title text-xl font-bold mb-4">{service.title}</h3>
              <p className="description text-sm mb-6 leading-relaxed">
                {service.desc}
              </p>
              <button className="button">
                Contact Now
              </button>
            </div>

            <div className="image-container">
              
              
          
<div className='main-second-div'>
   {/* <div className="main-second-arrow">
    <img src={service.img[1]} alt="" />

  </div>
  <div className='main-second-img'>
    <img src={service.img[0]} alt="" />

  </div>
  <div className='main-second-sketch'>
    <img src={service.img[2]} alt="" />
  </div> */}
 

<div className="messages-second-div">
 <div clasName="arrow-wrapper">
   <div className="main-coloured-arrow">
      <img src={service.messages[0]} alt=""/>
   </div>
</div> 
 
<div className="main-coloured-img">
  <img src={service.messages[1]} alt="" />
</div>
<div className="main-coloured-design">
  <img src={service.messages[2]} alt="" />
</div>
<div className="messages-coloured-sketch">
  <img src={service.messages[3]} alt="" />
</div>

</div>




</div>

              
          
            </div>

          </div></>
  )
}

export default Design