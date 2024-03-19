import React from 'react';
import '../assets/css/companycard.css'; // Import your CSS for the CompanyCard component

function CompanyCard({ company }) {
  return (
    <div className="company-card">
      <h2>{company.name}</h2>
      <p>{company.description}</p>
      <a href={company.website} target="_blank" rel="noopener noreferrer">
        Visit Website
      </a>
    </div>
  );
}

export default CompanyCard;
