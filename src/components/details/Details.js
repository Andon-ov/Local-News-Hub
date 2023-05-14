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


        <div className='details__info'>
            <p className='details__author'>Author: {news.author}</p>
            <p className='details__date'>{formatDate(news.publishedAt)}</p>
            <p className='details__category'>Municipality:{news.category}</p>
            <p className='details__views'>Views: 8972</p>
            <p className='details__comments'>Comments (4)</p>
        </div>
        <div className='details__img'>
            <h1 className='details__title'>{news.title}</h1>
            <Image src={news.urlToImage} alt={news.title} fluid />

        </div>
        <p className='details__description' >{news.description}</p>
        <p>{news.content}</p>
        <a href={news.url} rel="noreferrer" target="_blank">Read more</a>


    </div>);
}

export default Details;
