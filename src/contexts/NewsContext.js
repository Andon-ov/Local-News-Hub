import {createContext, useEffect, useState} from 'react';

export const NewsContext = createContext([]);

export const NewsProvider = ({children}) => {
    const [news, setNews] = useState([]);

    useEffect(() => {

        fetch('http://localhost:3030/data/news')

            .then((res) => res.json())

            .then((news) => {
                setNews(news);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <NewsContext.Provider value={{news}}>
            {children}
        </NewsContext.Provider>
    );
};
