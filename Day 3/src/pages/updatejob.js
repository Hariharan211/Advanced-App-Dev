import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Footer from './footer';
import '../assets/css/postjob.css';
import { useNavigate } from 'react-router-dom';

const Updatejob = () => {
    const jobid = localStorage.getItem("jobId");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
  });

  const fetchJobById = async (jobid) => {
    try {
      if (!jobid) {
        console.error('jobid is undefined');
        return;
      }

      const response = await axios.get(`http://localhost:8080/api/v1/auth/jobs/getid/${jobid}`);
      const jobData = response.data;
      setFormData({
        title: jobData.title,
        description: jobData.description,
        location: jobData.location,
      });
    } catch (error) {
      console.error('Error fetching job details: ', error);
    }
  };

  useEffect(() => {
        const jobid = localStorage.getItem("jobId");

    fetchJobById(jobid);
  }, [jobid]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/v1/auth/jobs/update/${jobid}`, formData);
      setFormData({
        title: '',
        description: '',
        location: '',
      });
      alert('Job updated successfully');
      navigate('/dashboard');
    } catch (error) {
      console.error('Error posting job: ', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className='over'>
        <Sidebar />
        <h2>Update a Job</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>
          <div>
            <label>Description:</label>
            <input
              type="text"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>
          <div>
            <label>Location:</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Updatejob;
