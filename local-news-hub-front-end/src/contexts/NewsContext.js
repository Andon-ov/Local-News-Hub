import {createContext, useEffect, useState} from 'react';

import * as newsService from '../services/newsService';

export const NewsContext = createContext([]);

export const NewsProvider = ({children}) => {
    const [news, setNews] = useState([]);

    useEffect(() => {

        newsService.getAll()
            .then((news) => {
                setNews(news.reverse());
            })
            .catch((error) => console.log(error));
    }, []);

    return (<NewsContext.Provider value={{news}}>
            {children}
        </NewsContext.Provider>);
};
