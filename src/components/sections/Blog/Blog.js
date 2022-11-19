import React from 'react';

import Section from '../../../HOC/Section';

import blogImage1 from '../../../assets/img/blog1.jpeg';
import blogImage2 from '../../../assets/img/blog2.jpeg';
import blogImage3 from '../../../assets/img/blog3.jpeg';
import blogImage4 from '../../../assets/img/blog4.jpeg';
import blogImage5 from '../../../assets/img/blog5.jpeg';
import blogImage6 from '../../../assets/img/blog6.jpeg';

const Blog = () => {
  return (
    <Section id='blog'>
      <div className='container h-100  w-100 pt-2 pb-5 '>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>Our </span>Services
          </h3>

        </div> 
        <div className='justify-content-center align-items-center 
        '>
        <div className='container p-3'>
          <div className='d-flex flex-wrap   row position-relative'>


            <div className='col-12 col-lg-4 col-sm-12 mb-3 rounded-4 p-2 card_opicity'>
            <div className='card2 p-2 rounded-4 bg-white'>
          
        
                <img src={blogImage1} className='card-img-top rounded-4' alt='Blog 1' />
                <div className='card-body m-4  text-center '>
              
                  <h5 className='card-title'>Vehicle Heat Rejection</h5>


          
              </div>
            </div>
            </div>
            <div className='col-12 col-lg-4 col-sm-12 mb-3 rounded-4 p-2 card_opicity '>
            <div className='card2 p-2 rounded-4 bg-white'>
                <img src={blogImage2} className='card-img-top rounded-4' alt='Blog 2' />
                <div className='card-body m-4 text-center'>
        
                  <h5 className='card-title'>Vehicle front protection</h5>
                

 
            
              </div>
              </div>
            </div>
            <div className='col-12 col-lg-4 col-sm-12 mb-3 rounded-4 p-2  card_opicity '>
            <div className='card2 p-2 rounded-4 bg-white'>
                <img src={blogImage5} className='card-img-top rounded-4' alt='Blog 2' />
                <div className='card-body m-4 text-center '>
    
                  <h5 className='card-title '>Nano Ceramic & polishing</h5>
   
 
              
              </div>
            </div>
            </div>
            <div className='col-12 col-lg-4 col-sm-12 mb-3 rounded-4 p-2  card_opicity '>
            <div className='card2 p-2 rounded-4 bg-white'>
                <img src={blogImage4} className='card-img-top rounded-4' alt='Blog 2' />
                <div className='card-body m-4 text-center'>
           
                  <h5 className='card-title'>Safety Film For buildings</h5>

 
               
              </div>
              </div>
            </div>
            <div className='col-12 col-lg-4 col-sm-12 mb-3 rounded-4 p-2 card_opicity  '>
            <div className='card2 p-2 rounded-4 bg-white '>
                <img src={blogImage3} className='card-img-top rounded-4' alt='Blog 2' />
                <div className='card-body m-4 text-center'>

                  <h5 className='card-title'>Heat Rejection for buildings</h5>
                  

 
                </div>
                </div>
             
            </div>

            <div className='col-12 col-lg-4 col-sm-12 mb-3 rounded-4 p-2  card_opicity '>
            <div className='card2 p-2 rounded-4 bg-white'>
                <img src={blogImage6} className=' card-img-top rounded-4' alt='Blog 3' />
                <div className='card-body m-4 text-center'>
         
                  <h5 className='card-title'>Upholstery & Flooring</h5>


            
              </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </Section>
  );
};

export default Blog;
