import React, { useContext, useState, useEffect } from "react";
import { Form, FormControl } from "react-bootstrap";
import Card from "../../main/main/VerticalCard";
import { NewsContext } from "../../../contexts/NewsContext";
import "./Search.css";
import { debounce } from "lodash";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState([]);
  const { news } = useContext(NewsContext);

  // Update the search results whenever searchTerm or news changes
  useEffect(() => {
    const filteredNews = news.filter((x) =>
      x.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResult(filteredNews);
  }, [searchTerm, news]);

  // Debounced search function to delay execution on input changes
  const handleSearch = debounce((event) => {
    event.preventDefault();
    if (searchTerm.length > 0) {
      setResult(
        news.filter((x) =>
          x.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setResult([]);
    }
  }, 300);

  // Handle input change and update searchTerm
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search">
      {/* eng */}
      {/* <h4 className="search__title">Search</h4> */}
      {/* bg */}
      <h4 className="search__title">Търси само в заглавия</h4>

      {/* Search form */}
      <Form onSubmit={handleSearch} className="search__form">
        <FormControl
          type="text"
          // eng
          // placeholder="Enter search term"

          // bg
          placeholder="Въведете дума за търсене"
          value={searchTerm}
          onChange={handleInputChange}
          className="search__input"
        />
        {/* Maybe i don`t need this button */}
        {/* <Button variant="primary" type="submit">Search</Button> */}
      </Form>

      <div className="search__result">
        {/* Render appropriate message based on search results */}
        {/* {searchTerm.length === 0 && (
                    <p className="search__for">Enter search term</p>
                )} */}
        {searchTerm.length > 0 && result.length === 0 && (
          // eng
          // <p className="search__notFound">Result not found</p>

          // bg
          <p className="search__notFound">Резултатът не е намерен</p>
        )}
        {searchTerm.length > 0 &&
          result.map((x) => <Card key={x._id} news={x} />)}
      </div>
    </div>
  );
};

export default SearchPage;
