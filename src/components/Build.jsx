import React from 'react'
import"./Build.css"
const Build = ({service}) => {
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
              <img src={service.bgImg} className="rounded-md bg-decor-img" alt="decoration" />
              
          {service.img? (
    <div className="multi-image-wrapper">
      {service.img.map((src, i) => (
        <img 
          key={i} 
          src={src} 
          className={`main-service-img multi-img-${i + 1}`} 
          alt="main-content" 
        />
      ))}
    </div>
  ) : (
    <img src={service.img} alt={service.title} className="main-service-img" />
  )}

              {/* Only render message-group if the service has messages */}
              {service.messages.length > 0 && (
                <div className="message-group">
                  {service.messages.map((msg, i) => (
                    <img 
                      key={i} 
                      src={msg} 
                      className={`message-img message${i + 1}`} 
                      alt={`msg${i + 1}`} 
                    />
                  ))}
                </div>
              )}
          
            </div>

          </div>
   </>
  )
}

export default Build