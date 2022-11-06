import React, { Fragment } from 'react';

import Home from './Home/Home';
import About from './About/About';

import About2 from './About/About2';
import About3 from './About/About3';
import About4 from './About/About4';
import About5 from './About/About5';
import About6 from './About/About6';
import Service from './Service/Service';
import Facts from './Facts/Facts';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import MapMarker from './MapMarker/MapMarker';

const sections = () => {
  return (
    <Fragment>
      <Home />
      <About />
      <About6 />
      <About5 />
      <About2 />
      <About3 />
    

      
      <Facts />
      <Blog />
      
      
      
    
    </Fragment>
  );
};

export default sections;
