import { useMutation } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import { DELETE_COMMENT } from "../../utils/mutations";

const CommentList = ({ comments, articleId }) => {
  const [deleteComment, { error }] = useMutation(DELETE_COMMENT);

  const handleDeleteComment = async (commentId) => {
    await deleteComment({
      variables: { commentId, articleId },
    });
  };

  return (
    <div className="">
      <div className="">
        <strong>Comments:</strong>
      </div>

      <div className="">
        {comments &&
          comments.map((comment) => (
            <p className="" key={comment._id}>
              {comment.commentText} <br />
              {"by "} {comment.username}
              &nbsp;on {comment.createdAt}
              <span className="d-flex justify-content-center">
                <button
                  className="pageLinks"
                  onClick={() => {
                    handleDeleteComment(comment._id);
                  }}
                >
                  Delete
                </button>
                &nbsp;&nbsp;&nbsp;
                <button className="pageLinks">
                  <Link
                    className="pageLinks"
                    to={`/profile/${comment.username}`}
                  >
                    {comment.username}
                  </Link>
                </button>
              </span>
            </p>
          ))}
      </div>
    </div>
  );
};

export default CommentList;
