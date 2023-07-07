import './Details.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as newsService from '../../../services/newsService';
import { formatDate } from '../../../services/dateService';
import NewsCarousel from './detailsNewsCarousel/DetailsNewsCarousel';
import Comment from './comments/Comment';
import CommentForm from './comments/CommentForm';


function Details() {
  const [news, setNews] = useState(null);
  const { newsId } = useParams();

  useEffect(() => {
    // Fetch the news item with the specified ID
    // Replace this with your actual data fetching logic

    // Fetch the news item from the newsService using the newsId
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

  const hideToolbar = (editor) => {
    // Hide the toolbar of the CKEditor
    const toolbarElement = editor.ui.view.toolbar.element;
    toolbarElement.style.display = 'none';
  };

  const images = news.images;
  const comments = news.comments;

  return (
    <div className='details'>
      <NewsCarousel images={images} />
      <div className='details__info'>
        <p className='details__author'>Author: {news.author}</p>
        <p className='details__date'>{formatDate(news.published_at)}</p>
        <p className='details__category'>Municipality: {news.category_name}</p>
        <p className='details__views'>Views: {news.views_count}</p>
        <p className='details__comments'>Comments ({news.comments_count})</p>
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

        <CommentForm news={newsId} />

      </div>
    </div>
  );
}

export default Details;
