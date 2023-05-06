import { createContext, useState } from 'react';

export const NewsContext = createContext([]);

export const NewsProvider = ({ children }) => {
  const [news] = useState([]);


  return (
    <NewsContext.Provider value={{ news }}>{children}</NewsContext.Provider>
  );
};

// useEffect(() => {
//     return fetch('http://localhost:3030/data/news')
//       .then((res) => res.json())
//       .then((news) => {
//         setNews(news);
//       })
//       .catch((error) => console.log(error));
//   }, []);
