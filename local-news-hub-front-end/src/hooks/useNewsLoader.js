import { useState } from "react";

/**
 * Custom hook for managing news loading and pagination.
 *
 * @param {number} initialLoadCount - The initial number of articles to load.
 * @param {number} productsPerLoad - The number of articles to load at each load more click.
 * @param {Array} allNews - The array containing all the news articles.
 * @returns {object} - An object containing loadCount, handleLoadMoreClick, and displayedNews.
 */
export const useNewsLoader = (initialLoadCount, productsPerLoad, allNews) => {
  // State to track the number of loaded articles
  const [loadCount, setLoadCount] = useState(initialLoadCount);

  // Function to handle loading more articles
  const handleLoadMoreClick = () => {
    setLoadCount((prevLoadCount) => prevLoadCount + productsPerLoad);
  };

  // Get the currently displayed news based on loadCount
  const displayedNews = allNews.slice(0, loadCount);

  return {
    loadCount,
    handleLoadMoreClick,
    displayedNews,
  };
};
