import { useState } from 'react';

export const useNewsLoader = (initialLoadCount, productsPerLoad, allNews) => {
    const [loadCount, setLoadCount] = useState(initialLoadCount);

    const handleLoadMoreClick = () => {
        setLoadCount((prevLoadCount) => prevLoadCount + productsPerLoad);
    };

    const displayedNews = allNews.slice(0, loadCount);

    return {
        loadCount,
        handleLoadMoreClick,
        displayedNews,
    };
};
