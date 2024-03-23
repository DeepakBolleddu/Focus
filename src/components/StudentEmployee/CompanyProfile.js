// Import React, useState, and useEffect
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CompanyProfile = () => {
  const [companyName, setCompanyName] = useState('');
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const fetchCompanyReviews = async () => {
    try {
      const response = await axios.get('https://api.yelp.com/v3/businesses/matches', {
        params: {
          name: companyName,
          city: 'Sydney', // Add your desired location here
        },
        headers: {
          Authorization: 'Bearer ${FaBjvU2MEe6WD4ZkGDNoHN2C3vtAwJvdiTv6eianpGFxczn-1rkLvVqd7IzWB7c--EHcxbQUTzjhocDg1_ay34jPr0GUQ2wEcZOnh_US77oNPYOOzWlyveT4TJv1ZXYx}', // Access API key variable
        },
      });

      const matchedBusiness = response.data.businesses[0];
      if (matchedBusiness) {
        const reviewsResponse = await axios.get('https://api.yelp.com/v3/businesses/${matchedBusiness.id}/reviews', {
          headers: {
            Authorization: 'Bearer ${FaBjvU2MEe6WD4ZkGDNoHN2C3vtAwJvdiTv6eianpGFxczn-1rkLvVqd7IzWB7c--EHcxbQUTzjhocDg1_ay34jPr0GUQ2wEcZOnh_US77oNPYOOzWlyveT4TJv1ZXYx}', // Access API key variable
          },
        });

        setReviews(reviewsResponse.data.reviews);
        setError(null);
      } else {
        setError('No matching business found.');
        setReviews([]);
      }
    } catch (error) {
      console.error('Error fetching company reviews:', error);
      setError('Error fetching company reviews. Please try again later.');
      setReviews([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (companyName.trim() !== '') {
      fetchCompanyReviews();
    }
  };

  return (
    <div>
      <h2>Company Profile</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="companyName">Enter Company Name:</label>
        <input
          type="text"
          id="companyName"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {error && <p>{error}</p>}
      {reviews.length > 0 && (
        <div>
          <h3>Reviews for {companyName}</h3>
          <ul>
            {reviews.map((review, index) => (
              <li key={index}>
                <p>Rating: {review.rating}</p>
                <p>{review.text}</p>
                {/* Add more review details as needed */}
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

export default CompanyProfile;