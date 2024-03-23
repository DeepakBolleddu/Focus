import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ResumeBuilder from './components/StudentEmployee/ResumeBuilder';
import JobsFinder from './components/StudentEmployee/JobsFinder';
import CompanyProfile from './components/StudentEmployee/CompanyProfile';
import EmployerDashboard from './components/Employer/EmployerDashboard';
import StudentEmployee from './components/StudentEmployee/StudentEmployee'
import './App.css';
import TechnologyNews from './components/StudentEmployee/TechnologyNews';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <div className="sidebar">
          <ul>
            <li><Link to="/student-employee">Student-Employee</Link></li>
            <li><Link to="/employer">Employer</Link></li>
          </ul>
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/student-employee" element={<StudentEmployee />} />
            <Route path="/student-employee/resume-builder" element={<ResumeBuilder />} />
            <Route path="/student-employee/jobs-finder" element={<JobsFinder />} />
            <Route path="/student-employee/company-profile" element={<CompanyProfile />} />
            <Route path="/student-employee/technology-news" element={<TechnologyNews />} />

            <Route path="/employer" element={<EmployerDashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;