import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const JobFinder = () => {
  const domains = {
    frontend: ['JavaScript', 'ReactJS', 'NodeJS', 'Angular', 'HTML', 'CSS'],
    backend: ['Python', 'Java', 'SQL', 'NoSQL', 'DBMS'],
    fullstack: ['React', 'Angular'],
    dataScience: ['Artificial Intelligence', 'Machine learning', 'BigData', 'IoT'],
    networkSecurity: ['Linux', 'Operating Systems', 'Cyber Security']
  };

  const [selectedDomain, setSelectedDomain] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [jobs, setJobs] = useState([]);

  const handleDomainClick = (domain) => {
    setSelectedDomain(domain);
    setSelectedSkill(null);
  };

  const handleSkillClick = async (skill) => {
    // Find the selected skill's domain
    const selectedDomainKey = Object.keys(domains).find(domain =>
      domains[domain].includes(skill)
    );

    if (selectedDomainKey) {
      setSelectedDomain(selectedDomainKey);
      setSelectedSkill(skill);

      try {
        // Fetch jobs based on selected skill and domain
        const response = await axios.get('https://api.adzuna.com/v1/api/jobs/us/search/1', {
          params: {
            app_id: 'b144340e', // Your Adzuna API app ID
            app_key: '16ba81153967ced03750f1c1b5ade9e0', // Your Adzuna API app key
            what: skill, // Search query (skill)
            where: 'New York', // Location (optional)
          },
          headers: {
            'Content-Type': 'application/json', // Set the content type header
          }
        });
        console.log(response.data); // Log API response for debugging
        setJobs(response.data.results); // Assuming API response has a 'results' field containing job listings
      } catch (error) {
        console.error('Error fetching jobs:', error);
        // Handle error as needed (e.g., show error message)
      }
    }
  };

  const skills = selectedDomain ? domains[selectedDomain] : [];

  return (
    <div>
      <h2>Job Finder</h2>
      <div>
        <h3>Select Domain:</h3>
        <div>
          {Object.keys(domains).map((domain) => (
            <button key={domain} onClick={() => handleDomainClick(domain)} style={{ margin: '5px' }}>
              {domain}
            </button>
          ))}
        </div>
      </div>
      {selectedDomain && (
        <div>
          <h3>Select Skill:</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {skills.map((skill, index) => (
              <button key={index} onClick={() => handleSkillClick(skill)} style={{ margin: '5px' }}>
                {skill}
              </button>
            ))}
          </div>
        </div>
      )}
      {selectedSkill && (
        <div>
          <h3>Job Listings for {selectedSkill}</h3>
          <ul>
            {jobs.map(job => (
              <li key={job.id}>
                <a href={job.redirect_url} target="_blank" rel="noopener noreferrer">
                  {job.title} - {job.company && job.company.display_name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <Link to="/student-employee">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default JobFinder;