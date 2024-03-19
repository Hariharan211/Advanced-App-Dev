import React from 'react';
import '../assets/css/footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Connect with us on social media:</span>
        </div>
        <div>
          <a href="https://www.facebook.com/" className="me-4 text-reset">
            <FacebookIcon />
          </a>
          <a href="https://twitter.com/" className="me-4 text-reset">
            <TwitterIcon />
          </a>
          <a href="https://www.instagram.com/" className="me-4 text-reset">
            <InstagramIcon />
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-6 col-lg-6 col-xl-6 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Virtual Job Expo
              </h6>
              <p>
                Welcome to the Virtual Job Expo project! We are dedicated to connecting job seekers and employers in an online environment.
              
              </p>
              </div>
              
              <div className="col-md-6 col-lg-6 col-xl-6 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Contact
              </h6>
              <p><i className="fas fa-envelope me-3"></i> virtualjobexpo@gmail.com</p>
              <p><i className="fas fa-phone me-3"></i> +91 8667674392</p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        &copy; {new Date().getFullYear()} Virtual Job Expo
      </div>
    </footer>
  );
}

export default Footer;
