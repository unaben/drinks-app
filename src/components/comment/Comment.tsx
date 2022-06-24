import React from "react";
import { ICreator } from "../../interface/interfaces";
type CommentProps = {
  exhibition: ICreator;
};
const Comment = ({ exhibition }: CommentProps) => {
  return (
    <div className="row mb-3">
      {exhibition.comments &&
        exhibition.comments.map((comment, index) => {
          return (
            <>
              <div className="col-sm-6 col-md-4 mb-3">
                <div className="card shadow">
                  <img
                    src={comment.user.avatarUrl}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body text-center">
                    <div className="mb-3"></div>
                    <h2 key={index}>{comment.user.name}</h2>
                    <h2>Comment: {comment.message} </h2>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
};
export default Comment;
