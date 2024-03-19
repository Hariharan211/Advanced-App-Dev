// Interviews.js
import React from 'react';
import '../assets/css/interview.css';
import Navbar from './navbar';
import Footer from './footer';
import Sidebar from './sidebar';


function InterviewPage() {
  return (
    <div>
    <Navbar/>
    <div className='over'>
    <Sidebar/>
    <div className="interview-page">
    <h1>Interview Preparation</h1>
    <p>
    Welcome to our Interview Preparation page! Here, you can find valuable tips and resources to help you succeed in your job interviews.
    Whether you're preparing for technical interviews or behavioral interviews, we've got you covered.
    </p>
    <h2>Interview Tips</h2>
        <ul>
          <li>Research the company and the role you're applying for.</li>
          <li>Practice answering common interview questions.</li>
          <li>Prepare questions to ask the interviewer.</li>
          <li>Dress professionally and arrive on time.</li>
        </ul>
        <h2>Technical Interview Resources</h2>
        <p>
        For technical interviews, it's essential to practice coding problems and algorithms. Here are some resources to help you:
        </p>
        <ul>
        <li>
        <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer">LeetCode</a>: Practice coding problems.
        </li>
        <li>
        <a href="https://www.hackerrank.com/domains/tutorials/10-days-of-javascript" target="_blank" rel="noopener noreferrer">HackerRank JavaScript Tutorials</a>: Brush up on JavaScript fundamentals.
        </li>
        {/* Add more technical interview resources here */}
        </ul>
        <h2>Behavioral Interview Resources</h2>
        <p>
        Behavioral interviews focus on your past experiences and how you handle specific situations. Here are some resources to help you prepare:
        </p>
        <ul>
        <li>Practice behavioral interview questions with a friend or in front of a mirror.</li>
        <li>
        <a href="https://www.themuse.com/advice/how-to-answer-the-31-most-common-interview-questions" target="_blank" rel="noopener noreferrer">The Muse - Common Interview Questions</a>: Sample behavioral questions and tips on how to answer them.
        </li>
        {/* Add more behavioral interview resources here */}
        </ul>
        </div>
        </div>
        <Footer/>
    </div>
  );
}

export default InterviewPage;
