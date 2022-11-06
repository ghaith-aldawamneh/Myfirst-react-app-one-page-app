import React from 'react';
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Carousel} from "react-bootstrap";
import blogImage1 from '../../../assets/past/1.jpeg';
import blogImage2 from '../../../assets/past/2.jpeg';
import blogImage3 from '../../../assets/past/3.jpeg';
import blogImage4 from '../../../assets/past/4.jpeg';
import blogImage5 from '../../../assets/past/5.jpeg';
import blogImage6 from '../../../assets/past/6.jpeg';
import blogImage7 from '../../../assets/past/7.jpeg';
import blogImage8 from '../../../assets/past/8.jpeg';
import blogImage9 from '../../../assets/past/9.jpeg';
import blogImage10 from '../../../assets/past/10.jpeg';



const MyComponent = () => {
    return (
        <div>
        <div className='container my-3'>
            <Carousel fade>
                <Carousel.Item>
                    <img
                     src={blogImage1}
                     className={'d-block w-100'}
                     alt={'image'}
                    />
                                      <Carousel.Caption>
                      <h3>Our projects</h3>

                  </Carousel.Caption>

                </Carousel.Item>

                <Carousel.Item>
                    <img
                    src={blogImage2}
                    alt={'image'}
                    className={'d-block w-100'}
                    />
                                                          <Carousel.Caption>
                      <h3>Our projects</h3>

                  </Carousel.Caption>
                </Carousel.Item>
                

                <Carousel.Item>
                    <img
                        src={blogImage3}
                        alt={'image'}
                        className={'d-block w-100'}
                    />
                                                          <Carousel.Caption>
                      <h3>Our projects</h3>

                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        src={blogImage4}
                        alt={'image'}
                        className={'d-block w-100'}
                    />
                                                          <Carousel.Caption>
                      <h3>Our projects</h3>

                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={blogImage5}
                        alt={'image'}
                        className={'d-block w-100'}
                    />
                                                          <Carousel.Caption>
                      <h3>Our projects</h3>

                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={blogImage6}
                        alt={'image'}
                        className={'d-block w-100'}
                    />
                                                          <Carousel.Caption>
                      <h3>Our projects</h3>

                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={blogImage7}
                        alt={'image'}
                        className={'d-block w-100'}
                    />
                                                          <Carousel.Caption>
                      <h3>Our projects</h3>

                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={blogImage8}
                        alt={'image'}
                        className={'d-block w-100'}
                    />
                                                          <Carousel.Caption>
                      <h3>Our projects</h3>

                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={blogImage9}
                        alt={'image'}
                        className={'d-block w-100'}
                    />
                                                          <Carousel.Caption>
                      <h3>Our projects</h3>

                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={blogImage10}
                        alt={'image'}
                        className={'d-block w-100'}
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