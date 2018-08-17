import React from "react";
import PostListItem from "./PostListItem";

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <PostListItem key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
};

export default PostList;
