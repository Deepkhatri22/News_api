import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Replace 'YOUR_API_KEY' with your actual NewsAPI key
        const apiKey = 'c71640e51c494ed1b99962b8cdf928e4';
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
        );
        setNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
      finally {
        console.log(setNews);
      }
    };

    fetchNews();
  }, []); // Empty dependency array ensures that useEffect runs only once (on mount)

  return (
    <div className="App bg-dark">
      <h1 className="text-center text-white pt-4 pb-4">Latest News</h1>
      <div className="container border pt-4 pb-4">
        <div className="row">
          {news.map((article, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card border-primary border-2  rounded-1">
                <img
                  src={article.urlToImage}
                  className="card-img-top"
                  alt={article.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.description} </p>
                  <p>Published on: {article.publishedAt}</p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-danger"
                  >
                    Read More...
                  </a>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;