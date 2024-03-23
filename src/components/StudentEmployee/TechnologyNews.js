import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TechnologyNews = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            category: 'technology',
            language: 'en',
            apiKey: '29e02e8bb29040cca0284a4cea640a1d', // Get your API key from News API website
          }
        });
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching technology news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h2>Technology News</h2>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
      <Link to="/student-employee">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default TechnologyNews;
