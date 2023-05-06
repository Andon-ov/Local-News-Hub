import React, { useEffect, useState } from 'react';

const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3030/data/news')
      .then((res) => res.json())
      .then((news) => setNews(news))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsProvider.Provider value={news}>
      {children}
    </NewsProvider.Provider>
  );
};
