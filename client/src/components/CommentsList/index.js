import { useMutation } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
import { DELETE_COMMENT } from '../../utils/mutations';

const CommentList = ({ comments, articleId }) => {
    const [deleteComment, {error}] = useMutation(DELETE_COMMENT);

    const handleDeleteComment = async (commentId)=>{

        await deleteComment({
            variables:{commentId, articleId}
        })
      }
    
  return (
<div className=" mb-3">
  <div className="">
    <span className="text-light">Comments</span>
  </div>
  <div className="">
    {comments &&
      comments.map(comment => (
        <p className="pill mb-3" key={comment._id}>
          {comment.commentText} {'by '}
          <Link to={`/profile/${comment.username}`} style={{ fontWeight: 700 }}>
            {comment.username} on {comment.createdAt}
          </Link>
          <button
              className="btn col-12 col-md-3"
              onClick={() => {
                handleDeleteComment(comment._id);
              }}
            >
              Delete
            </button>
        </p>
        
      ))}
  </div>
</div>
  );
};

export default CommentList;