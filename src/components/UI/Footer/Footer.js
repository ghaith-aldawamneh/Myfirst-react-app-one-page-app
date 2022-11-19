import React from 'react';

import Link from '../Link/Link';

const footer = () => {
  return (
    <footer className='footer'>
      <div className='container text-light pt-5'>
        <div className='row'>
          <div className='col-sm-6 col-md-6 col-lg-4 mb-5'>
            <div className='footer-title'>
              <h6>Working hours</h6>
            </div>
            <div className='footer-content'>
              <p>
                <h6 className='text-muted'>
                Saturday to Thursday 
                </h6>
                <h6 className='text-muted'>
                8  - 11.30 AM 
                </h6>
                <h6 className='text-muted'>
                4   - 8.30  PM 
                </h6>
              </p>
            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-2 mb-5'>
            <div className='footer-title'>
              <h6>Quick Links</h6>
            </div>
            <div className='footer-content'>
              <ul className='list-group quick-links'>
                <li>
                  <Link target='home' offset={-120}>
                    Home
                  </Link>
                </li>



              </ul>
            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-3 mb-5'>
            <div className='footer-title'>
              <h6>Latest News</h6>
            </div>
            <div className='footer-content'>
              <p>
                        <a className='text-muted' href="https://www.3m.com/" >
                        Products From 3M
                        </a>


              </p>

            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-3 mb-5'>
            <div className='footer-title'>
              <h6>Contact Us</h6>
            </div>
            <div className='footer-content'>
              <p className='text-muted'>
                <small>Address : Khobar Dammam Highway -  Opposite  Porsche - South Rakkah, - KHOBAR</small>
              </p>
              <p className='text-muted'>
                <small>Phone : 013 8470066</small>
              </p>
              <p className='text-muted'>
                <small>E-mail : info@icare-sa.me</small>
              </p>
              <div className='social-media mt-4'>
                <a href='https://www.facebook.com/FarrukhMaalik' className='text-light'>
                  <i className='fab fa-facebook-f mr-4' />
                </a>
                <a href='!#' className='text-light'>
                  <i className='fab fa-twitter mr-4' />
                </a>
                <a href='https://www.instagram.com/farrukhmalik46' className='text-light'>
                  <i className='fab fa-instagram mr-4' />
                </a>
                <a href='https://github.com/farrukh-malik' className='text-light'>
                  <i className='fab fa-github' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-footer pt-3 pb-3 text-center'>
        <small>© All Right Reserved. Design By www.Rexla.net/ceo</small>
      </div>
    </footer>
  );
};

export default footer;
