import React from 'react'
import  "./Grow.css"

const Grow = ({service}) => {
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

            <div className="image-container3">
              
              
           
            
             <div className="image-container-grow">
  

  

  {/* 3. Main Image Div (Image 1) */}
  <div className="front-main-div">
    <img 
      src={service.img[0]} 
      className="grow-img-front" 
      alt="main-front" 
    />
    <div className='messages-main-div'>
      <div><img src={service.messages[0]} alt="" /></div>
       <div><img src={service.messages[1]} alt="" /></div>
        <div><img src={service.messages[2]} alt="" /></div>
         <div><img src={service.messages[3]} alt="" /></div>
    </div>
  </div>
  <div className="main-layers-div">
    <img 
      src={service.img[1]} 
      className="grow-img-main layer-left" 
      alt="main-layer-1" 
    />
    <img 
      src={service.img[2]} 
      className="grow-img-main layer-right" 
      alt="main-layer-2" 
    />
  </div>
</div>
              
          
            </div>

          </div></>
  )
}

export default Grow