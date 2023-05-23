import {formatDate} from '../../../../services/dateService';

function Comment({comment}) {
    return (
        <div className="Comments">
            <p>{comment.content}</p>
            <p>{formatDate(comment.publication_date_and_time)}</p>
            <p>{comment.name}</p>
            <p>{comment.email}</p>
        </div>


    );
}

export default Comment;









