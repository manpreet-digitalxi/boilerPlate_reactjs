import React from "react";

const PostListItem = ({ title, body }) => {
  return (
    <div className="container">
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  );
};

export default PostListItem;
