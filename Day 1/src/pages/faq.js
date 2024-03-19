import React from 'react';
import '../assets/css/faq.css'; // Import your CSS file
import Navbar from './navbar'; // Import your Navbar component
import Footer from './footer';
import Sidebar from './sidebar';

function FAQ() {
  return (
    <div>
      <Navbar />
      <div className='over'>
      <Sidebar/>
      <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-item">
          <h2>What is Virtual Job Expo?</h2>
          <p>Virtual Job Expo is an online platform that connects job seekers with employers, providing a convenient way to explore job opportunities and interact with potential employers.</p>
        </div>
        <div className="faq-item">
          <h2>How do I create an account?</h2>
          <p>Creating an account is easy. Click on the "Sign Up" button on the homepage, fill in your details, and you'll have your Virtual Job Expo account ready in no time.</p>
        </div>
        <div className="faq-item">
          <h2>How can I search for jobs?</h2>
          <p>Once you're logged in, you can use the search bar on the homepage to search for jobs based on keywords, location, or industry. You can also browse through featured companies and their job listings.</p>
        </div>
        <div className="faq-item">
          <h2>Is Virtual Job Expo free to use?</h2>
          <p>Yes, Virtual Job Expo is completely free for job seekers. You can create an account, search for jobs, and interact with employers at no cost.</p>
        </div>
        <div className="faq-item">
          <h2>How can I contact support?</h2>
          <p>If you have any questions or need assistance, you can reach out to our support team through the "Contact Us" page. We're here to help!</p>
        </div>
        </div>
        </div>
        <Footer/>
    </div>
  );
}

export default FAQ;
