import './CommentForm.css';
import { useContext, useState } from 'react';

import { AuthContext } from '../../../../contexts/AuthContext';
const url = 'http://localhost:8000/news/';


const CommentForm = (news) => {
  const { user } = useContext(AuthContext);
  const [content, setContent] = useState('');
  const [name, setName] = useState('');

  let userEmail = user ? user.username : null;

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(url + 'comments/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: content,
          name: name,
          news: news.news,
          email: userEmail
        }),
      });

      if (response.ok) {
        // Comment created successfully
        console.log('Comment submitted successfully');
        // Reset the form fields after successful submission
        setContent('');
        setName('');
        window.location.reload();
        // TODO I will change that after I find better way to do
      } else {
        // Handle the error response
        const errorData = await response.json();
        console.error('Error submitting comment:', errorData);
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
    }

  };


  return (

    <div id="form-main">

      <form className="form" id="comment--form" onSubmit={handleFormSubmit}>
        <div className='text'>
          {/* <label htmlFor="content">Comment:</label> */}
          <textarea

            id="content"
            placeholder='Write your comment here ...'
            value={content}
            onChange={(event) => setContent(event.target.value)}
            required
          />
        </div>

        <div className='name'>
          {/* <label htmlFor="name">Name:</label> */}
          <input
            placeholder='Name'
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>

        <button className='submit' type="submit">Send</button>

      </form>

    </div>

  );
};

export default CommentForm;
