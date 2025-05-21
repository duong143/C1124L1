import React from 'react';
import CommentForm from './CommentForm';

function CommentSection({ comments, onAddComment }) {
    return (
        <div>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                ))}
            </ul>
            <CommentForm onSubmitComment={onAddComment} />
        </div>
    );
}

export default CommentSection;
