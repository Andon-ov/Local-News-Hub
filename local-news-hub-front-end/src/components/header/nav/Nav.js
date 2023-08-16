import "./Nav.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Navigation = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    // Fetch categories on component mount
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    fetch("http://localhost:8000/news/categories/")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  };
  const categoriesWithNews = categories.filter(
    (category) => category.news_count > 0
  );

  return (
    <nav className="nav">
      <ul className="navBar">
        <li className="home">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
        </li>
        {categoriesWithNews.length > 0 ? (
          categoriesWithNews.map((category) => (
            <li key={category.id}>
              <Link className="nav-link" to={`/category/${category.id}`}>
                {category.title}
              </Link>
            </li>
          ))
        ) : (
          <p>There are no news categories yet</p>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
