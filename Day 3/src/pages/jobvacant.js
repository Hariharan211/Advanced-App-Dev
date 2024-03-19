import React, { useState } from 'react';
import '../assets/css/jobvacant.css'; 
import JobVacancyItem from './jobvacantitem';
import Navbar from './navbar';
import Sidebar from './sidebar';

const jobVacanciesData = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Industry Name: Genpact',
    location: 'India,Mumbai',
    type: 'Full-Time',
    description: 'Focuses on developing software products and software solutions. a companys networks and systems by monitoring them for potential security threats ',
  },
  {
    id: 2,
    title: 'Cybersecurity',
    company: 'Industry Name: Intuit',
    location: 'India,Bengalore',
    type: 'Full-Time',
    description: 'Cybersecurity focuses on protecting IT networks, computer systems and programs from digital attacks, such as viruses and hackers. a companys networks and systems by monitoring them for potential security threats ',
  },
  {
    id: 3,
    title: 'IT consulting',
    company: 'Industry Name: Cisco Systems',
    location: 'India,Bengalore',
    type: 'Full-Time',
    description: 'ork on contracts for clients, usually companies, to provide IT services. Sometimes, the services focus on a single aspect, like designing and implementing a new system,',
  },
  {
    id: 4,
    title: ' Data services',
    company: 'Tata Consultancy Services',
    location: 'India,Bengalore',
    type: 'Full-Time',
    description: ' Data services can help collect, transfer and analyze data or use it to create a central database. a companys networks and systems by monitoring them for potential security threats ',
  },
  {
    id: 5,
    title: '  IT security specialist',
    company: 'CTS',
    location: 'India,Mumbai',
    type: 'Full-Time',
    description: 'IT security specialists protect a companys networks and systems by monitoring them for potential security threats. a companys networks and systems by monitoring them for potential security threats ',
  },
  // Add more job vacancy data objects here
];

function JobVacancyPage() {
  const [filter, setFilter] = useState(''); // Add filters as needed (e.g., location, type)

  const filteredJobVacancies = jobVacanciesData.filter((job) =>
    job.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <Navbar/>{/* Include the Navbar component */}
      <div className='over'>
      <Sidebar/>
      <div className="job-vacancy-page">
      <h1>Job Vacancies</h1>
      <div className="filters">
      <input
      type="text"
      placeholder="Filter by job title..."
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      />
      </div>
      <div className="job-vacancies-list">
      {filteredJobVacancies.map((job) => (
        <JobVacancyItem key={job.id} job={job} />
        ))}
        </div>
        </div>
        </div>
        </div>
        );
      }
      
      export default JobVacancyPage;
