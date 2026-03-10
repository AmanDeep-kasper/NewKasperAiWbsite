import React from 'react'
import "./ValuedClient.css"
const ValuedClients = () => {
  return (
    <div className="valued-clients">
  <p>Our Valued Clients</p>

  <div className="clients-slider">

  {/* Left fixed logo */}
  <img className="fixed-logo left" src="./client0.svg" alt="" />

  {/* Scroll area */}
  <div className="scroll-wrapper">
    <div className="clients-track">
      <img src="./client1.svg" alt="" />
      <img src="./client2.svg" alt="" />
      <img src="./client3.svg" alt="" />
      <img src="./client4.svg" alt="" />
      <img src="./client5.svg" alt="" />
      <img src="./client6.svg" alt="" />
      <img src="./client7.svg" alt="" />

      {/* duplicate for seamless scroll */}
      <img src="./client1.svg" alt="" />
      <img src="./client2.svg" alt="" />
      <img src="./client3.svg" alt="" />
      <img src="./client4.svg" alt="" />
      <img src="./client5.svg" alt="" />
      <img src="./client6.svg" alt="" />
      <img src="./client7.svg" alt="" />
    </div>
  </div>

  <img className="fixed-logo right" src="./client0.svg" alt="" />

</div>
</div>

  )
}

export default ValuedClients