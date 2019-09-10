import React from 'react';
import PostsList from "../posts-list/posts-list";
import AddPost from "../add-post";

function Posts() {
  return (
      <>
        <AddPost/>
        <PostsList/>
      </>
  );
}

export default Posts;