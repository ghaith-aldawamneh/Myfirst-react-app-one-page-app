import React, { useState, useEffect } from 'react';
import img11 from '../../../assets/img/img-1.png';
import img12 from '../../../assets/img/img-2.png';
import img13 from '../../../assets/img/img-3.png';

import Link from '../Link/Link';

const Nav = () => {
  const [navClass, setNavClass] = useState('');
  const [toggeledNav, settoggeledNav] = useState(false);

  const toggleNav = () => {
    settoggeledNav(!toggeledNav);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let navClass = '';
      if (window.scrollY >= 200) {
        navClass = 'scrolled';
      }
      setNavClass(navClass);
    });
  }, []);
  return (
    

      <div className='navbar-nav12'>
        <div className='navbar-brand'>
          <img class="navbar-logo-img" src={img11} alt="logo"/>
        </div>
        
        <div className='navbar-brand' href='!#'>
          <img class="navbar-logo-img" src={img12} alt="logo"/>
        </div>
        <div className='navbar-brand' href='!#'>
          <img class="navbar-logo-img" src={img13} alt="logo"/>
        </div>




      </div>

  );
};

export default Nav;
