import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Footer from './footer';
import '../assets/css/postjob.css'
import { useNavigate } from 'react-router-dom';

const PostJobForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/v1/auth/jobs/post', formData);
      setFormData({
        title: '',
        description: '',
        location: '',
      });
      alert('Job posted successfully');
      navigate("/dashboard");

    } catch (error) {
      console.error('Error posting job: ', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className='over'>
        <Sidebar />
        <h2>Post a Job</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name of the Company</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </div>
          <div>
            <label>Job Description:</label>
            <input
              type="text"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>
          <div>
            <label>Location:</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default PostJobForm;