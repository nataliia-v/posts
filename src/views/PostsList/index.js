import React from 'react';
import AddPost from "../../components/add-post";
import PostsList from "../../components/PostsList/PostsList";
import styles from './postsList.module.scss'

function PostsLists() {
  return (
      <div className={ styles.postsList }>
        <AddPost/>
        <PostsList/>
      </div>
  );
}

export default PostsLists;