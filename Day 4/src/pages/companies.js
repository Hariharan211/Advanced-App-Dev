import React from 'react';
import '../assets/css/companies.css'; // Import your CSS file
import CompanyCard from './companycard'; // Create a CompanyCard component for displaying each company
import Navbar from './navbar';
import Footer from './footer';
import Sidebar from './sidebar';


const companiesData = [
  {
    id: 1,
    name: 'WIPRO',
    description: 'Wipro is an Indian multinational corporation that provides information technology, consultant and business process services. It is one of the leading Big Tech companies',
    logoUrl: 'company-a-logo.png',
    website: 'https://www.wipro.com/',
  },
  {
    id: 2,
    name: 'TCS',
    description: 'TATA Consultancy Services Limited is an Indian multinational information technology services and consulting company with its headquarters in Mumbai, Maharashtra. It is a part of the Tata Group and operates in 150 locations across 46 countries.',
    logoUrl: 'company-a-logo.png',
    website: 'https://www.tcs.com/',
  },
  {
    id: 3,
    name: 'ACCENTURE',
    description: 'Accenture plc is an Irish-American professional services company based in Dublin, specializing in information technology services and consulting. A Fortune Global 500 company.',
    logoUrl: 'company-a-logo.png',
    website: 'https://www.accenture.com/nl-en',
  },
  {
    id: 4,
    name: 'COGNIZANT',
    description: 'Cognizant is an American multinational information technology services and consulting company. It is headquartered in Teaneck, New Jersey, U.S. Cognizant is part of the NASDAQ-100 and trades under CTSH. ',
    logoUrl: 'company-a-logo.png',
    website: 'https://www.cognizant.com/nl/en',
  },
  {
    id: 5,
    name: 'CTS',
    description: 'CTS GROUP stands for top quality in personal logistics services. Full-service logistics service provider with a personal touch.',
    logoUrl: 'company-a-logo.png',
    website: 'https://www.ctsgroup.nl/en/',
  },
  {
    id: 6,
    name: 'INFOSYS',
    description: 'Infosys Limited is an Indian multinational information technology company that provides business consulting, information technology and outsourcing services. ',
    logoUrl: 'company-a-logo.png',
    website: 'https://www.infosys.com/',
  },
  {
    id: 7,
    name: 'BOSCH',
    description: 'German multinational engineering and technology company headquartered in Gerlingen, Germany. The company was founded by Robert Bosch ',
    logoUrl: 'company-a-logo.png',
    website: 'https://www.bosch.com/',
  },
  {
    id: 8,
    name: 'HCL',
    description: 'It is an Indian multinational information technology services and consulting company headquartered in Noida. The founder of HCLTech is Shiv Nadar. ',
    logoUrl: 'company-a-logo.png',
    website: 'https://www.hcltech.com/',
  },
  {
    id: 9,
    name: 'BHEL',
    description: 'Bharat Heavy Electricals Limited is an Indian central public sector undertaking and the largest government-owned power generation equipment manufacturer.',
    logoUrl: 'company-a-logo.png',
    website: 'https://bhel.com/',
  },
  // Add more company data objects here
];

function CompaniesPage() {
  return (
    <div>
     <Navbar/>
     <div className='over'>
     <Sidebar/>
     <div className="companies-page">
        <h1>Explore Companies</h1>
        <div className="companies-list">
          {companiesData.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
        
        </div>
        </div>
      <Footer/>
    </div>
  );
}

export default CompaniesPage;
