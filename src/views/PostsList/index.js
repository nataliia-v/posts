import React from 'react';
import AddPost from "../../components/add-post";
import PostsList from "../../components/PostsList/PostsList";

function PostsLists() {
  return (
      <div>
        <AddPost />
        <PostsList />
      </div>
  );
}

export default PostsLists;