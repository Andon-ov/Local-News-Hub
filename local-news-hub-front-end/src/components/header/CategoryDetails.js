import { useContext } from 'react';
import { NewsContext } from '../../contexts/NewsContext';
import HorizontalCard from '../main/main/VerticalCard';
import { useParams } from 'react-router-dom';
import { useNewsLoader } from '../../hooks/useNewsLoader';

const CategoryDetails = () => {
    const { categoryId } = useParams();
    const { news } = useContext(NewsContext);
    const categoryNews = news.filter(x => x.category_id === categoryId);
    const productsPerLoad = 8;
    const { loadCount, handleLoadMoreClick, displayedNews } = useNewsLoader(8, productsPerLoad, categoryNews);

    function categoryName() {
        if (categoryNews.length > 0) {
            return categoryNews[0]['category_name'];
        } else {
            return 'Unknown';
        }
    }

    return (<>
        <div className='sectionTitle'>
            <h2>{categoryName(categoryNews)}</h2>

            <div className='cards'>
                {categoryNews ? (
                    displayedNews.map(x => <HorizontalCard news={x} key={x.id} />)
                ) : (
                    <p>Loading category details...</p>
                )}
            </div>
            <div className='products__button'>
                {displayedNews.length < categoryNews.length && (
                    <button className='loadMoreBtn' onClick={handleLoadMoreClick}>
                        Load More
                    </button>
                )}
            </div>
        </div>
    </>
    );
};

export default CategoryDetails;

//     // ToDO
//     // const [categoryData, setCategoryData] = useState(null);

//     // useEffect(() => {
//     //   const fetchCategoryData = () => {
//     //     fetch('http://localhost:8000/news/categories/categoryId')
//     //           .then(response => response.json())
//     //           .then(data => setCategoryData(data))
//     //           .catch(error => console.log(error));
//     //   };

//     //   fetchCategoryData();
//     // }, [categoryName]);