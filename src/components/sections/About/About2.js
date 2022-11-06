import React from 'react';

import Section from '../../../HOC/Section';
import aboutImage from '../../../assets/img/about2.jpeg';

const about = () => {
  return (
    <Section id='about'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>


        </div>
        <div className='section-content'>
          <div className='row'>

            <div className='col-md-12 col-lg-6'>
              <h3 className='about-title1'>Heat Rejection and Safety for buildings (العازل الحراري للمباني)</h3>
              <div className='about-description'>

                
              </div>
            </div>
            <div className='col-md-12 col-lg-6 mb-3'>
              <div className='aboutImage'>
                <img src={aboutImage} alt='about company' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default about;
