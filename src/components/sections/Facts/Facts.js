import React from 'react';

import Section from '../../../HOC/Section';
import bgImage from '../../../assets/img/facts_bg.jpeg';
import img12 from '../../../assets/img/img-2.png';
const Facts = () => {
  return (
    <Section id='facts'>
      <div
        className='facts-container facts-text2'
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className=' intro container text-center text-white p-4  facts-text2 position-relative'>

              <div className='facts-text3'><h1 className=' m-1  facts-text3' >For more than 10 Years ,  We Take care of your car with the distinctive services of</h1></div>
              <div className='facts-text3'> <img src={img12} className='card-img-top-logo2 rounded-4' alt='Blog 2' /></div>
              <div className='facts-text3'> that give you the highest level of protection</div>
    
              
        
              </div>
          
        
      </div>
    </Section>
  );
};

export default Facts;
