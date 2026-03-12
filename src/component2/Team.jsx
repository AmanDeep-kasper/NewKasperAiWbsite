import React from 'react'
import Team1 from "../assets/images2/Team-1.svg";
import Team2 from "../assets/images2/Team-2.svg";
import Team3 from "../assets/images2/Team-3.svg";
import Team4 from "../assets/images2/Team-4.png";
import leader1 from "../assets/images2/leader1.svg";
import"./AboutText.css"
const Team= () => {
  return (
    <div className="team-section ">
        <p className="team-title">
  Meet Our Team
</p>

  <div className="flex-container-team">
    <div className="flex-team-column">
   <img src={Team1} alt="Name 1" className="profile-img-leader" />
         <p className="profile-name-leader">Ilma Sheikh</p>
           <p className="profile-role-leader">Digital Marketing</p>
    </div>
    <div className="flex-team-column">
      <img src={Team2} alt="Name 1" className="profile-img-leader" />
         <p className="profile-name-leader">Monu Jangra</p>
           <p className="profile-role-leader">Cyber Security Engineer</p>
    </div>
    <div className="flex-team-column">
      <img src={Team3} alt="Name 1" className="profile-img-leader" />
         <p className="profile-name-leader">Alok Ranjan Oraon</p>
           <p className="profile-role-leader">Product Enginner</p>
    </div>
     <div className="flex-team-column">
      <img src={Team4} alt="Name 1" className="profile-img-leader" />
         <p className="profile-name-leader">Sachin Sahoo</p>
           <p className="profile-role-leader">QA Tester</p>
    </div>
   <div className="flex-team-column">
      <img src={Team4} alt="Name 1" className="profile-img-leader" />
         <p className="profile-name-leader">Sachin Sahoo</p>
           <p className="profile-role-leader">QA Tester</p>
    </div>
  </div>

  {/* Bottom Row: 3 Images */}
  <div className="flex-container-team2">
    <div className="item-column-team2">
          <img src={Team4} alt="Name 1" className="profile-img-leader" />
         <p className="profile-name-leader">Sachin Sahoo</p>
           <p className="profile-role-leader">QA Tester</p>
    </div>
    <div className="flex flex-col items-center">
            <img src={Team4} alt="Name 1" className="profile-img-leader" />
         <p className="profile-name-leader">Sachin Sahoo</p>
           <p className="profile-role-leader">QA Tester</p>
    </div>
    <div className="flex flex-col items-center">
          <img src={Team4} alt="Name 1" className="profile-img-leader" />
         <p className="profile-name-leader">Sachin Sahoo</p>
           <p className="profile-role-leader">QA Tester</p>
    </div>
     <div className="flex flex-col items-center">
         <img src={leader1} alt="Name 1" className="profile-img-leader" />
         <p className="profile-name-leader">Lakshmi MIttal</p>
           <p className="profile-role-leader">Director</p>
    </div>
  </div>
</div>
  )
}

export default Team;