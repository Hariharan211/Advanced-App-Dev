import React from 'react';
import '../assets/css/aboutus.css';
import Navbar from './navbar';
import { Email, Phone, Room } from '@mui/icons-material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Sidebar from './sidebar';

function AboutUsPage() {
  return (
    <div>
      <Navbar />
      <div className='over'>
      <Sidebar/>
      <div className="about-us-page">
      <h1>About Us</h1>
        <div className="project-details">
          <h2>Virtual Job Expo</h2>
          <p>
            Welcome to the Virtual Job Expo, your gateway to endless career opportunities and talent acquisition. Our platform has been meticulously designed to empower job seekers and employers by making the job search and hiring process convenient, efficient, and fruitful.
          </p>
          <p>
            At Virtual Job Expo, we are driven by the belief that everyone deserves a fulfilling and rewarding career. We are committed to bridging the gap between job seekers and employers, providing a space where dreams are realized and businesses thrive.
          </p>
        </div>
        <div className="our-team">
          <h2>Meet Our Team</h2>
          <p>
            Our dedicated team of professionals is passionate about creating a seamless and enjoyable experience for you. We are here to listen, innovate, and deliver the best solutions. Meet the people who make Virtual Job Expo possible.
          </p>
          <p>HARIHARAN</p>
          <p>MOHANKUMAR</p>
          <p>ANILVIKASH</p>
         
          </div>
          <div className="contact-info">
          <h2>Contact Information</h2>
          <p>
          <Email /> Email: virtualjobexpo@gmail.com
          </p>
          <p>
          <Phone /> Phone: +91 8667687392
          </p>
          <p>
          <Room /> Address: Coimbatore, Tamil Nadu, India
          </p>
          </div>
          <div className="social-media">
          <h2>Follow Us on Social Media</h2>
          <ul className="social-icons">
          <li>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FacebookIcon />
              </a>
            </li>
            <li>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <TwitterIcon />
            </a>
            </li>
            <li>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
            </a>
            </li>
            </ul>
            </div>
            </div>
            </div>
    </div>
  );
}

export default AboutUsPage;
