import Card from './VerticalCard';
import './Cards.css';
import { useContext } from 'react';
import { NewsContext } from '../../../contexts/NewsContext';
import { useNewsLoader } from '../../../hooks/useNewsLoader';

function Cards() {
    const { news } = useContext(NewsContext);
    const initialLoadCount = 10;
    const productsPerLoad = 10;
    const { handleLoadMoreClick, displayedNews } = useNewsLoader(initialLoadCount, productsPerLoad, news);


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
                    {/* eng */}
                    {/* Load More */}

                    {/* bg */}
                    Зареди още новини
                </button>
            )}
        </div>
    </>
    );
}

export default Cards;
