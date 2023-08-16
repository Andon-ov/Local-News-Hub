import Card from './VerticalCard';
import './Cards.css';

import { useContext, useState } from 'react';
import { NewsContext } from '../../../contexts/NewsContext';


function Cards() {
    const { news } = useContext(NewsContext);

    // State to keep track of the number of products displayed in the grid
    const [loadCount, setLoadCount] = useState(8);

    // Number of products to load per "Load More" click
    const productsPerLoad = 8;

    // Function to handle "Load More" button click
    const handleLoadMoreClick = () => {
        setLoadCount((prevLoadCount) => prevLoadCount + productsPerLoad);
    };

    // Displayed news to show in the grid, based on loadCount
    const displayedNews = news.slice(0, loadCount);

    return (
        <section className="cards">
            {displayedNews.map((item) => (
                <Card key={item.id} news={item} />
            ))}

            {/* "Load More" button */}
            <div className='products__button'>
                {displayedNews.length < news.length && (
                    <button className='loadMoreBtn' onClick={handleLoadMoreClick}>
                        Load More
                    </button>
                )}
            </div>
        </section>
    );
}

export default Cards;
