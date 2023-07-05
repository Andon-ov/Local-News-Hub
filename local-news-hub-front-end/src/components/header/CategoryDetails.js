import {useContext} from 'react';
import {NewsContext} from '../../contexts/NewsContext';
import HorizontalCard from '../main/main/VerticalCard';
// import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

const CategoryDetails = () => {
    const {categoryId} = useParams();
    // ToDO
    // const [categoryData, setCategoryData] = useState(null);

    // useEffect(() => {
    //   const fetchCategoryData = () => {
    //     fetch('http://localhost:8000/news/categories/categoryId')
    //           .then(response => response.json())
    //           .then(data => setCategoryData(data))
    //           .catch(error => console.log(error));
    //   };

    //   fetchCategoryData();
    // }, [categoryName]);

    const {news} = useContext(NewsContext);
    const categoryNews = news.filter(x => x.category_id === categoryId);

    function categoryName() {
        if (categoryNews.length > 0) {
            return categoryNews[0]['category_name'];
        } else {
            return 'Unknown';
        }

    };


    return (
        <div className='sectionTitle'>
            {/*
      {categoryNews !== ''
      ?(<h1>{categoryNews[0]['category_name']}</h1>)
      : <h1>Unknow</h1>} */}
            <h2>{categoryName(categoryNews)}</h2>

            <div className='cards'>
                {categoryNews ? (
                    categoryNews.map(x => <HorizontalCard news={x} key={x.id}/>)
                ) : (
                    <p>Loading category details...</p>
                )}
            </div>
        </div>
    );
};

export default CategoryDetails;


