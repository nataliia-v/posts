import React from 'react';
import PostsList from "../PostsList/PostsList";
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