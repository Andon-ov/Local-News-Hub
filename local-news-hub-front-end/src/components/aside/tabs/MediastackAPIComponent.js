// import React, { useEffect, useState } from 'react';
// import { fetchNewsData } from '../../../services/mediastackApiService'; // Import the fetchNewsData function

// import NewsArticle from './NewsArticle';

// const NewsComponent = () => {
//   const [newsData, setNewsData] = useState([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         let cachedData = localStorage.getItem('newsData.data'); // Get cached data from localStorage
// //         if (cachedData) {
// //           setNewsData(JSON.parse(cachedData)); // Set cached data in state
// //         } else {
// //           const articles = await fetchNewsData(); // Use fetchNewsData function to fetch data
// //           console.log(articles);
// //           setNewsData(articles);
// //           localStorage.setItem('newsData.data', JSON.stringify(articles)); // Save new data to localStorage
// //         }
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };
//     const articles = fetchNewsData()
//     console.log(articles);
//     // fetchData();

//     // Clear cache every day at midnight
//     const clearCache = () => {
//       localStorage.removeItem('newsData.data');
//     };

//     const now = new Date();
//     const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
//     const timeout = nextMidnight.getTime() - now.getTime();

//     const interval = setTimeout(clearCache, timeout);

//     // Clear the timer and cache when the component unmounts
//     return () => {
//       clearTimeout(interval);
//       clearCache();
//     };
//   }, []);

//   return (
//     <div>
//       {newsData.data.map((article, index) => (
//         <NewsArticle key={index} article={article} />
//       ))}
//     </div>
//   );
// };

// export default NewsComponent;
// export default OtherNews;


import MediastackAPIArticle from './MediastackAPIArticle';

import React, { useEffect, useState } from 'react';
import { fetchNewsData } from '../../../services/mediastackApiService'; // Import the fetchNewsData function

const MediastackAPIComponent = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const articles = await fetchNewsData(); // Fetch news data using the fetchNewsData function
        console.log(articles);
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
    <div>
      {newsData.map((article, index) => (
        <MediastackAPIArticle key={index} article={article} />
      ))}
    </div>
  );
};

export default MediastackAPIComponent;


