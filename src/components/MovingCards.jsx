import React from 'react'
import "./MovingCards.css"
import card1 from"../assets/images2/card1.svg";
import card2 from"../assets/images2/card2.svg";
import card3 from"../assets/images2/card3.svg";
import card4 from"../assets/images2/card4.svg";
import card5 from"../assets/images2/card5.svg";

const MovingCards = () => {
  return (
    <div className="card-maindiv">


      <div className="center-text">
        <p>100+ Successful Projects Completed</p>
      </div>

      <div className="cards-wrapper">

        <div className="card-row scroll-left">
          <img src={card1} />
          <img src={card2} />
          <img src={card3} />
          <img src={card4} />
          <img src={card5} />
    
          <img src={card1} />
          <img src={card2} />
          <img src={card3} />
          <img src={card4} />
          <img src={card5} />
        </div>

        <div className="card-row scroll-right">
          <img src={card1} />
          <img src={card2} />
          <img src={card3} />
          <img src={card4} />
          <img src={card5} />
       
          <img src={card1} />
          <img src={card2} />
          <img src={card3} />
          <img src={card4} />
          <img src={card5} />
        </div>

        <div className="card-row scroll-left">
          <img src={card1} />
          <img src={card2} />
          <img src={card3} />
          <img src={card4} />
          <img src={card5} />
          <img src={card1} />
          <img src={card2} />
          <img src={card3} />
          <img src={card4} />
          <img src={card5} />
        </div>

      </div>

    </div>
  )
}

export default MovingCards