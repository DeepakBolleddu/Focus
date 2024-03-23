import React from 'react';
import ResumeBuilder from './ResumeBuilder'; // Import your components
import JobsFinder from './JobsFinder';
import CompanyProfile from './CompanyProfile';
import TechnologyNews from './TechnologyNews'

const StudentEmployee = () => {
  return (
    <div className="app-container">
      <div className="sidebar">
        {/* Sidebar content */}
        <ul>
          <li><a href="/student-employee/resume-builder">Resume Builder</a></li>
          <li><a href="/student-employee/jobs-finder">Jobs Finder</a></li>
          <li><a href="/student-employee/company-profile">Company Profile</a></li>
          <li><a href="/student-employee/technology-news">Technology News</a></li>
          {/* <li><a href="#schedule-management">Schedule Management</a></li>
          <li><a href="#job-preparation">Job Preparation</a></li>
          <li><a href="#mock-interview">Mock Interview</a></li>
          
          <li><a href="#my-activity">My Activity</a></li> */}
        </ul>
      </div>
      <div className="main-content">
        {/* Main content sections
        <section id="resume-builder">
          <ResumeBuilder />
        </section>
        <section id="jobs-finder">
          <JobsFinder />
        </section>
        <section id="company-profile">
          <CompanyProfile />
        </section>
        <section id="technology-news">
          <TechnologyNews />
        </section> */}
        {/* <section id="schedule-management">
          <ScheduleManagement />
        </section>
        <section id="job-preparation">
          <JobPreparation />
        </section>
        <section id="mock-interview">
          <MockInterview />
        
        <section id="my-activity">
          <MyActivity />
        </section> */}
      </div>
    </div>
  );
};

export default StudentEmployee;