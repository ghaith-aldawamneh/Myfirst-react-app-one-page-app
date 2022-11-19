import React from 'react';
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../../scss/partials/_img_scroll.scss'

import {Carousel} from "react-bootstrap";
import blogImage1 from '../../../assets/past/1.jpg';
import blogImage2 from '../../../assets/past/2.jpg';
import blogImage3 from '../../../assets/past/3.jpg';
import blogImage4 from '../../../assets/past/4.jpg';
import blogImage5 from '../../../assets/past/5.jpg';
import blogImage6 from '../../../assets/past/6.jpg';



const MyComponent = () => {
    return (
        <div  className=' ' >
        <div className='img_scroll_div container my-3'>
            <Carousel fade>
                <Carousel.Item>
                    <img
                     src={blogImage1}
                     className={'img_scroll'}
                     alt={'image'}
                    />
                                      <Carousel.Caption>
                      <h3>Our projects</h3>

                  </Carousel.Caption>

                </Carousel.Item>
                <Carousel.Item>   <img src={blogImage2}  alt={'image'}   className={'img_scroll'}  />  
                <Carousel.Caption> <h3>Our projects</h3></Carousel.Caption>
                </Carousel.Item>
                



                <Carousel.Item>
                    <img
                        src={blogImage3}
                        alt={'image'}
                        className={'img_scroll'}
                    />
                                                          <Carousel.Caption>
                      <h3>Our projects</h3>

                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        src={blogImage4}
                        alt={'image'}
                        className={'img_scroll'}
                    />
                                                          <Carousel.Caption>
                      <h3>Our projects</h3>

                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={blogImage5}
                        alt={'image'}
                        className={'img_scroll'}
                    />
                                                          <Carousel.Caption>
                      <h3>Our projects</h3>

                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={blogImage6}
                        alt={'image'}
                        className={'img_scroll'}
                    />
                                                          <Carousel.Caption>
                      <h3>Our projects</h3>

                  </Carousel.Caption>
                </Carousel.Item>
                



            </Carousel>
        </div>
        </div>
    );
};

export default MyComponent;