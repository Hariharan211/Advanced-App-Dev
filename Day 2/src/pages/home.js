import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Navbar from './navbar';
import JobFairInfo from './jobfairinfo';

import Footer from './footer';
import '../assets/css/home.css';
import Sidebar from './sidebar';

 function Home() {
    const nav= useNavigate()
       const routelogin=()=>{
        nav('/Login')}
        
  return (
    <div>
    <Navbar/>
    <div className='over'>
    <Sidebar/>
    <div className="home-container">
    
      <section className="hero">
        <h1>Welcome to Virtual Job Expo</h1>
        <p>Your Gateway to Exciting Career Opportunities</p>
      </section>
      
      <section className="features">
        <div className="feature">
          <i className="fas fa-search"></i>
          <h2>Explore Jobs</h2>
          <p>Browse and search for job vacancies from top companies.</p>
        </div>
        <div className="feature">
          <i className="fas fa-user-tie"></i>
          <h2>Connect with Employers</h2>
          <p>Interact with potential employers and showcase your skills.</p>
        </div>
        <div className="feature">
          <i className="fas fa-bullhorn"></i>
          <h2>Stay Informed</h2>
          <p>Receive updates on the latest job openings and career trends.</p>
        </div>
      </section>
      {/* Additional Content */}
      <section className="additional-content">
        <h2>Why Choose Virtual Job Expo?</h2>
        <p>
          Virtual Job Expo is your one-stop destination for launching your career. Here are some reasons why you should choose us:
        </p>
        <ul>
          <li>Extensive Job Listings: We provide a wide range of job listings from various industries.</li>
          <li>Interactive Platform: Connect and communicate with employers through our interactive platform.</li>
          <li>Stay Updated: Stay up-to-date with the latest job openings and industry trends.</li>
          <li>Effortless Job Search: Our user-friendly interface makes job searching a breeze.</li>
        </ul>
      </section>
     
    </div>

   
   
   
    </div>
   <Footer/>
   </div>
  )
}
export default Home;
