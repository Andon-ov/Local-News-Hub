import './Details.css';

import { Image } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import * as newsService from '../../services/newsService';
import { formatDate } from '../../services/dateService';

function Details() {

    const [news, setNews] = useState({});
    let { newsId } = useParams();

    useEffect(() => {
        newsService
            .getOne(newsId)
            .then((res) => {
                setNews(res);
            })
            .catch((error) => console.log(error));
    }, [newsId]);


    return (<div className='details'>

        <h1 className='details__title'>{news.title}</h1>
        <p className='details__description' >{news.description}</p>
        <div className='details__publish'>
        <p>Published by: {news.author}</p>
        <p>Published on: {formatDate(news.publishedAt)}</p>
        </div>
       
        <Image src={news.urlToImage} alt={news.title} fluid />
        <p>{news.content}</p>
        <a href={news.url} rel="noreferrer" target="_blank">Read more</a>

    </div>);
}

export default Details;
