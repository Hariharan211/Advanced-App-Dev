import React from 'react';

function JobVacancyItem({ job }) {
  return (
    <div className="job-vacancy-item">
      <h2>{job.title}</h2>
      <p className="company">{job.company}</p>
      <p className="location">{job.location}</p>
      <p className="type">{job.type}</p>
      <p className="description">{job.description}</p>
    </div>
  );
}

export default JobVacancyItem;
