import { formatDate } from '../../../../services/dateService';
import './Comment.css';

function Comment({ comment }) {
    return (
        <div className="comment">
            <p className='comment__content'>{comment.content}</p>
            <p className='comment__date' >Date: {formatDate(comment.publication_date_and_time)}</p>
            <div className='comment__info'>
                <p className='comment__author-name'>Name: {comment.name}</p>
                {/* <p className='comment__author-email'>Email: {comment.email}</p> */}
                
            </div>
        </div>


    );
}

export default Comment;

