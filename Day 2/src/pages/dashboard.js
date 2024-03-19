import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/dashboard.css'
import { Link, useNavigate } from 'react-router-dom';
import Footer from './footer';
import Navbar from './navbar';
import Sidebar from './sidebar';

const JobList = () => {

  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/auth/jobs/delete/${id}`);
      alert('Job deleted successfully');
      fetchJobs();
    } catch (error) {
      console.error('Error deleting job: ', error);
    }
  };
  const handleupdate = async (id) => {
    localStorage.setItem("jobId",id);
    navigate("/updatejob")
    
  };
  const fetchJobs = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/auth/jobs/get');
      setJobs(response.data);
    } catch (error) {
      console.error('Error fetching jobs: ', error);
    }
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
      <Navbar />
      <div className='over'>
        <Sidebar />

        <div className="job-list">
          <h2>Job List</h2>
          <Link to="/postjob">
            <button> post Job </button>
          </Link>
          {jobs.map((job) => (
            <div className="job-item" key={job.id}>
              <h3 className="job-title">Name of the Company:{job.title}</h3>
              <p className="job-description">Description: {job.description}</p>
              <p className="job-location">Location: {job.location}</p>
              <button onClick={() => handleupdate(job.id)}> Update Job </button>
              <br /><br />
              <button onClick={() => handleDelete(job.id)}>Delete Job</button>
              <hr />
            </div>
          ))}
        </div>


      </div>
      <Footer />
    </>
  );
};

export default JobList;