import React, { useEffect, useState, } from 'react';
import { Link } from 'react-router-dom';



const CategoryNav = () => {
  const [categories, setCategories] = useState([]);
  console.log(categories);
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
    <div>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <Link to={`/category/${category.id}`}>{category.title}</Link>
          </li>
        ))}

      </ul>

    </div>
  );
};


export default CategoryNav;
