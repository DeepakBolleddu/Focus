import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const EmployerDashboard = () => {
  return (
    <div>
      <h1>Employer Dashboard</h1>
      <p>This is the Employer Dashboard page.</p>
      <Link to='https://david8deepu.retool.com/apps/0aee19b0-e3a0-11ee-b2ff-6f907c3ea7d3/Focus-Company%20dashboard' target="_blank">
        Go to Dashboard (opens in new tab)
      </Link>
      {/* You can add content specific to the Employer dashboard */}
    </div>
  );
};

export default EmployerDashboard;