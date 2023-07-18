// export default OtherNews;
import NewsAPIArticle from './NewsAPIArticle';

import React, { useEffect, useState } from 'react';
import { fetchNewsData } from '../../../services/newsApiService';

const NewsAPIComponent = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch news data using the fetchNewsData function
        const articles = await fetchNewsData();
        setNewsData(articles);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    // Fetch news data every 30 minutes
    const interval = setInterval(fetchData, 30 * 60 * 1000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='tabs__cards'>
      {newsData.map((article, index) => (
        <NewsAPIArticle key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsAPIComponent;


