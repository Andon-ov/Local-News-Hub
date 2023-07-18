import MediastackAPIArticle from './MediastackAPIArticle';

import React, { useEffect, useState } from 'react';
import { fetchNewsData } from '../../../services/mediastackApiService'; // Import the fetchNewsData function

const MediastackAPIComponent = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const articles = await fetchNewsData(); // Fetch news data using the fetchNewsData function
        setNewsData(articles.data);
      } catch (error) {
        throw new Error(error.message);

      }
    };
    fetchData();

    // Fetch news data every 24 hours
    const interval = setInterval(fetchData, 24 * 60 * 60 * 1000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='tabs__cards'>
      {newsData.map((article, index) => (
        <MediastackAPIArticle key={index} article={article} />
      ))}
    </div>
  );
};

export default MediastackAPIComponent;


