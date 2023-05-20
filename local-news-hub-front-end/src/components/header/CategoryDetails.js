import {useContext} from 'react';
import {NewsContext} from '../../contexts/NewsContext';
import HorizontalCard from '../singlePage/main/VerticalCard';
// import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CategoryDetails = () => {
  const { categoryId } = useParams();
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


  return (
    <div >
      <h1>{categoryNews[0]['category_name']}</h1>
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


