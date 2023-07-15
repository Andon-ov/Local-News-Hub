import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import * as newsService from '../../../services/newsService';
import { formatDate } from '../../../services/dateService';

import NewsCarousel from './detailsNewsCarousel/DetailsNewsCarousel';
import Comment from './comments/Comment';
import CommentForm from './comments/CommentForm';
import VideoPlayer from './VideoPlayer';

import './Details.css';

function Details() {
  const [news, setNews] = useState(null);
  const [error, setError] = useState(null);
  const { newsId } = useParams();

  useEffect(() => {
    // Fetch the news item from the newsService using the newsId
    newsService
      .getOne(newsId)
      .then((res) => {
        // Set the news in the state
        setNews(res);
      })
      // Handle error when fetching the news
      .catch((error) => {
        setError('Failed to fetch news. Please try again later.');
        console.error('Error fetching news:', error);
      });
    // Watch for changes in newsId
  }, [newsId]);

  // Show "Failed to fetch news. Please try again later." message if there have error
  if (error) {
    return <div>{error}</div>;
  }

  // Show "Loading..." message if there is no news
  if (!news) {
    return <div>Loading...</div>;
  }
  const hideToolbar = (editor) => {
    // Function to hide the CKEditor toolbar
    const toolbarElement = editor.ui.view.toolbar.element;
    toolbarElement.style.display = 'none';
  };

   // Assign the images and comments from the news
  const { images, comments } = news;


  let handleCommentCreated = (newComment) => {
    console.log(newComment);
    // Add the new comment to the news state
    setNews((prevNews) => ({
      ...prevNews,
      comments: [newComment, ...prevNews.comments],
    }));
  };
  console.log(news.videos);
  return (
    <div className='details'>

      {news.videos[0] ? (
        // Show VideoPlayer component if there is a video
        <VideoPlayer url={news.videos} /> 
      ) : (
        // Show NewsCarousel component if there are images
        <NewsCarousel images={images} /> 
      )}

      <div className='details__info'>
        <p className='details__author'>Author: {news.author}</p>
        <p className='details__date'>{formatDate(news.published_at)}</p>
        <p className='details__category'>Municipality: {news.category_name}</p>
        <p className='details__views'>Views: {news.views_count}</p>
        <p className='details__comments'>Comments ({comments.length})</p>
      </div>
      <p className='details__description'>{news.description}</p>
      <hr />

      <h1 className='details__title'>{news.title}</h1>
      <div className='details__content'>
        <CKEditor
          editor={ClassicEditor}
          data={news.content}
          onReady={hideToolbar}
          disabled
        />
      </div>

      <div className='details__comments-section'>
        <h2 className='details__comments-heading'>Comments</h2>
        {comments.length > 0 ? (
          comments.map((x) => (
            <Comment comment={x} key={x.publication_date_and_time} />
          ))
        ) : (
          <p className='details__no-comments'>No comments available.</p>
        )}
      </div>

      <div className='details__comment-form'>
        <CommentForm news={news} onCommentCreated={handleCommentCreated} />
      </div>
    </div>
  );
}

export default Details;
