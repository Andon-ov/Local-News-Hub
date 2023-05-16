import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import Card from '../singlePage/main/VerticalCard';

import { useContext } from 'react';
import { NewsContext } from '../../contexts/NewsContext';
import './Search.css';


const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [result, setResult] = useState([]);
    const { news } = useContext(NewsContext);

    const handleSearch = (event) => {
        event.preventDefault();
        if (searchTerm.length > 0) {
            setResult(news.filter(x => x.title.toLowerCase().includes(searchTerm.toLowerCase())));
        }
    };

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    console.log(result);
    return (
        <div className='search'>
            <h1 className='search__title'>Search</h1>

            <Form onSubmit={handleSearch} className='search__form'>
                <FormControl
                    type="text"
                    placeholder="Enter search term"
                    value={searchTerm}
                    onChange={handleInputChange}
                    className='search__input'
                />
                <Button variant="primary" type="submit">
                    Search
                </Button>
            </Form>

            <div className='search__result'>
             
                {searchTerm.length === 0
                    ? <p className='search__for'>Enter search term</p>
                    : result.length === 0
                        ? <p className='search__notFound'>Result not fount</p>
                        : result.map(x => <Card key={x._id} news={x} />)}
            </div>

        </div>
    );
};

export default SearchPage;
