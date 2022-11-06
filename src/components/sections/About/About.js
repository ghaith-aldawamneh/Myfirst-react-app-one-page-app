import React from 'react';

import Section from '../../../HOC/Section';
import aboutImage from '../../../assets/img/about.jpeg';

const about = () => {
  return (
    <Section id='about'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>Our </span>Company
          </h3>
          <h6 className='section-title2'>
          We Take care of your car with the distinctive services of I CARE  that give you the highest level of protection
          </h6>
          <h6 className='section-title2'>
          نحن نهتم بسيارتك بخدمات المميزة التي تمنحك أعلى مستوى من الحماية
          </h6>

        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-md-12 col-lg-6 mb-3'>
              <div className='aboutImage'>
                <img src={aboutImage} alt='about company' />
              </div>
            </div>
            <div className='col-md-12 col-lg-6'>
              <h3 className='about-title1'>Vehicle  Heat Rejection (العازل الحرارى للسيارات)</h3>
              
              <div className='about-description'>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default about;
