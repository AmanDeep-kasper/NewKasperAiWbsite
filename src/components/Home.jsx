import React from 'react'

import { BrowserRouter } from 'react-router-dom';

import { useRef } from 'react';
import BackgroundBeamsWithCollisionDemo from './background-beams-with-collision-demo.jsx';
import Services from './Services.jsx';
import ValuedClients from './ValuedClients.jsx';
import MovingCards from './MovingCards.jsx';
import Wavestru from './Wavestru.jsx';
import IndustriesServe from './IndustriesServe.jsx';
import Blogs from './Blogs.jsx';
import Reviews from './Reviews.jsx';

const Home = () => {
  
  return (
    <>

<BackgroundBeamsWithCollisionDemo/>
<Services/>
<ValuedClients/>
<MovingCards/>
<Wavestru/>
<IndustriesServe/>
<Blogs/>
<Reviews/>

  
      </>
  )
}

export default Home;
 