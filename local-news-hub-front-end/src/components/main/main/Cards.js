import Card from './VerticalCard';
import './Cards.css';
import { useContext } from 'react';
import { NewsContext } from '../../../contexts/NewsContext';
import { useNewsLoader } from '../../../hooks/useNewsLoader';

function Cards() {
    const { news } = useContext(NewsContext);
    const productsPerLoad = 8;
    const { loadCount, handleLoadMoreClick, displayedNews } = useNewsLoader(8, productsPerLoad, news);


    return (<>
        <section className="cards">
            {displayedNews.map((item) => (
                <Card key={item.id} news={item} />
            ))}

        </section>

        {/* "Load More" button */}
        <div className='products__button'>
            {displayedNews.length < news.length && (
                <button className='loadMoreBtn' onClick={handleLoadMoreClick}>
                    Load More
                </button>
            )}
        </div>
    </>
    );
}

export default Cards;
