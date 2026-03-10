import React from 'react'
import "./MovingCards.css"
const MovingCards = () => {
  return (
    <div className="card-maindiv">

<div className="cards-wrapper">

  <div className="card-row scroll-left">
    <img src="./card1.svg" />
    <img src="./card2.svg" />
    <img src="./card3.svg" />
    <img src="./card4.svg" />
    <img src="./card5.svg" />

    {/* duplicate */}
    <img src="./card1.svg" />
    <img src="./card2.svg" />
    <img src="./card3.svg" />
    <img src="./card4.svg" />
    <img src="./card5.svg" />
  </div>

  <div className="card-row scroll-right">
    <img src="./card1.svg" />
    <img src="./card2.svg" />
    <img src="./card3.svg" />
    <img src="./card4.svg" />
    <img src="./card5.svg" />

    {/* duplicate */}
    <img src="./card1.svg" />
    <img src="./card2.svg" />
    <img src="./card3.svg" />
    <img src="./card4.svg" />
    <img src="./card5.svg" />

   
  </div>
 <div className="center-text">
     <p>100+ Successful Projects Completed</p> 
    </div>
  <div className="card-row scroll-left">
    <img src="./card1.svg" />
    <img src="./card2.svg" />
    <img src="./card3.svg" />
    <img src="./card4.svg" />
    <img src="./card5.svg" />

    {/* duplicate */}
    <img src="./card1.svg" />
    <img src="./card2.svg" />
    <img src="./card3.svg" />
    <img src="./card4.svg" />
    <img src="./card5.svg" />
  </div>

</div>

</div>
 
  )
}

export default MovingCards