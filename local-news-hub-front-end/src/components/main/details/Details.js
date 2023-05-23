import './Details.css';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import React, {useEffect, useState} from 'react';

import {useParams} from 'react-router-dom';
import * as newsService from '../../../services/newsService';
import {formatDate} from '../../../services/dateService';
import NewsCarousel from './detailsNewsCarousel/DetailsNewsCarousel';
import Comment from './comments/Comment';

function Details() {
    // const { newsId } = useParams();
    // const [news, setNews] = useState(null);

    // useEffect(() => {
    //   // Fetch the news item with the specified ID
    //   // Replace this with your actual data fetching logic
    //   const fetchNewsItem = async () => {
    //     const response = await fetch(`http://localhost:8000/news/${newsId}/`);
    //     const data = await response.json();
    //     setNews(data);
    //     console.log(data);
    //   };

    //   fetchNewsItem();
    // }, [newsId]);

    // if (!news) {
    //   return <div>Loading...</div>;
    // }


    const [news, setNews] = useState();

    let {newsId} = useParams();

    useEffect(() => {
        newsService
            .getOne(newsId)
            .then((res) => {
                setNews(res);

            })
            .catch((error) => console.log(error));
    }, [newsId]);

    if (!news) {
        return <div>Loading...</div>;
    }


    let images = news.images;
    let comments = news.comments;

    const hideToolbar = editor => {
        const toolbarElement = editor.ui.view.toolbar.element;
        toolbarElement.style.display = 'none';
    };

    return (
        <div className='details'>

            <NewsCarousel images={images}/>
            <div className='details__info'>
                <p className='details__author'>Author: {news.author}</p>
                <p className='details__date'>{formatDate(news.published_at)}</p>
                <p className='details__category'>Municipality: {news.category_name}</p>
                <p className='details__views'>Views: {news.views_count}</p>
                <p className='details__comments'>Comments ({news.comments_count})</p>
            </div>
            <p className='details__description'>{news.description}</p>
            <hr/>

            <h1 className='details__title'>{news.title}</h1>
            <div className='details__content'>

                <CKEditor
                    editor={ClassicEditor}
                    data={news.content}
                    onReady={hideToolbar}
                    disabled
                />


            </div>

            {comments.length > 0
                ? comments.map(x => <Comment comment={x} key={x.publication_date_and_time}/>)

                : ''}


            {/* <Image src={news.urlToImage} alt={news.title} fluid />
        <div className='details__info'>
            <p className='details__author'>Author: {news.author}</p>
            <p className='details__date'>{formatDate(news.publishedAt)}</p>
            <p className='details__category'>Municipality:{news.category}</p>
            <p className='details__views'>Views: 8972</p>
            <p className='details__comments'>Comments (4)</p>
        </div>
        <p className='details__description' >{news.description}</p>
        <hr/>

        <div className='details__content'>
            <h1 className='details__title'>{news.title}</h1>
            <p>{news.content}</p>
            <a href={news.url} rel="noreferrer" target="_blank">Read more</a>

        </div> */}
        </div>);
}

export default Details;