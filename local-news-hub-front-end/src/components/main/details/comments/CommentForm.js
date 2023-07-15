import { useContext, useState } from 'react';

import { AuthContext } from '../../../../contexts/AuthContext';

import './CommentForm.css';

const url = 'http://localhost:8000/news/';

const CommentForm = (props) => {
  const { user } = useContext(AuthContext);
  const [content, setContent] = useState('');
  const [name, setName] = useState('');

  // Get the news ID from the props and convert it to a string
  let newsId = props.news?.id.toString();

  // Create a new Date object to represent the publication date and time of the comment
  let date = new Date();

  // Get the user's email from the user object if available, otherwise set it to null
  let userEmail = user ? user.username : null;

  // Define the handleFormSubmit function to handle the form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send a POST request to the API endpoint
      const response = await fetch(url + 'comments/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: content,
          name: name,
          news: newsId,
          email: userEmail
        }),
      });

      if (response.ok) {
        // Reset the comment fields
        setContent('');
        setName('');

        // Check if the onCommentCreated prop is a function
        if (typeof props.onCommentCreated === 'function') { 

          // Call the onCommentCreated function and pass the new comment data
          props.onCommentCreated({ content, name, publication_date_and_time: date }); 
        }
      } else {
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
          <textarea
            id="content"
            placeholder='Write your comment here ...'
            value={content}
            onChange={(event) => setContent(event.target.value)}
            required
          />
        </div>
        <div className='name'>
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
