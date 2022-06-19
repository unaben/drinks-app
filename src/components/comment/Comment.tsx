import React from "react";
import "./comment.styles.css"
import { ICreator } from "../interfaces";
type CommentProps = {
  exhibition: ICreator;
};
const Comment = ({ exhibition }: CommentProps) => {
  return (
    <div>
      {exhibition.comments &&
        exhibition.comments.map((comment, index) => {
          return (
            <div className="two-column-grid">
              <div className="card-container">
                <div className="wrapper">
                  <img src={comment.user.avatarUrl} alt="user-img" />
                  <div className="text-wrapper">
                    <h2 key={index}>{comment.user.name}</h2>
                    <h2> Comment: {comment.message}</h2>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default Comment;
