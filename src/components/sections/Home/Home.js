import React from 'react';

import Section from '../../../HOC/Section';
import bgImage from '../../../assets/img/home_bg.jpeg';
import Link from '../../UI/Link/Link';

const home = () => {
  return (
    <Section id='home'>
      <div>
        <div  className='home-content p-5' style={{backgroundImage: `url(${bgImage})`}}>

        </div>
      </div>
    </Section>
  );
};

export default home;
