import React, { useEffect, useState, } from 'react';
import { Link } from 'react-router-dom';



const CategoryNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    // Fetch categories on component mount
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    fetch('http://localhost:8000/news/categories/')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.log(error));
  };



  return (

      <ul className='navBar'>
        {categories.map(category => (
          <li key={category.id}>
            <Link className='nav-link' to={`/category/${category.id}`}>{category.title}</Link>
          </li>
        ))}

      </ul>


  );
};


export default CategoryNav;
