import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import Card from '../components/singlePage/main/VerticalCard';

import { useContext } from 'react';
import { NewsContext } from '../contexts/NewsContext';

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [result, setResult] = useState([]);
    const { news } = useContext(NewsContext);

    const handleSearch = (event) => {
        event.preventDefault();
        setResult(news.filter(x => x.title.toLowerCase().includes(searchTerm.toLowerCase())));
    };

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };


    return (
        <div className="container">
            <h1>Search Page</h1>

            <Form onSubmit={handleSearch}>
                <FormControl
                    type="text"
                    placeholder="Enter search term"
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <Button variant="primary" type="submit">
                    Search
                </Button>
            </Form>

            {result.length > 0
                ? result.map(x => <Card key={x._id} news={x} />)
                : 'Result not fount'}
        </div>
    );
};

export default SearchPage;
