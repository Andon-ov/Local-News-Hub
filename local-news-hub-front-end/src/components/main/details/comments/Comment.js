import { formatDate } from "../../../../services/dateService";
import "./Comment.css";

function Comment({ comment }) {
  return (
    <div className="comment">
      <div className="comment__info">
        {/* Display author's name */}
        <p className="comment__author-name">{comment.name}</p>
        {/* <p className='comment__author-email'>Email: {comment.email}</p> */}
      </div>
      {/* Display comment content */}
      <p className="comment__content">{comment.content}</p>
      {/* eng */}
      {/* <p className='comment__date' >Date: {formatDate(comment.publication_date_and_time)}</p> */}
      {/* bg */}

      {/* Display the formatted publication date and time */}
      <p className="comment__date">
        {formatDate(comment.publication_date_and_time)}
      </p>
    </div>
  );
}

export default Comment;
