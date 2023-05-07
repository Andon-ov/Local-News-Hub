import {Col, Container, Image, Row} from 'react-bootstrap';
import React, {useEffect, useState} from 'react';

import {useParams} from 'react-router-dom';
import * as newsService from '../services/newsService';

function Details() {

    const [news, setNews] = useState({});
    let {newsId} = useParams();

    useEffect(() => {
        newsService
            .getOne(newsId)
            .then((res) => {
                setNews(res);
            })
            .catch((error) => console.log(error));
    }, [newsId]);


    return (<Container>
        <Row>
            <Col>
                <h1>{news.title}</h1>
                <p>{news.description}</p>
                <p>Published by: {news.author}</p>
                <p>Published on: {news.publishedAt}</p>
                <p>Type: {news.type}</p>
                <Image src={news.urlToImage} alt={news.title} fluid/>
                <p>{news.content}</p>
                <a href={news.url} rel="noreferrer" target="_blank">Read more</a>
            </Col>
        </Row>
    </Container>);
}

export default Details;
