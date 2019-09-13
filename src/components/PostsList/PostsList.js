import React, { useEffect } from 'react';
import PostItem from '../PostItem/PostItem';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getAllPosts, getPostsError, getPostsIsLoading } from "../../state/posts/selectors";

import './PostsList.css';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import { delPost, fetchPosts, saveComment, updatePostThunk } from "../../state/posts/thunks";

const PostsList = ({ posts, onDelete, onUpdate, onCreateComment }) => {

  console.log(posts);
  return (
    <ul>
      {
        posts.map((post) => {
          return (
            <li className='post-item' key={post.id}>
              <PostItem post={post} onDelete={onDelete} onUpdate={onUpdate} onCreateComment={onCreateComment}/>
            </li>
          )
        })
      }
    </ul>
  );
};

function PostsListContainer(props) {
  const {posts, loading, error, dispatch, history} = props;

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const deletePost = (id) => {
    dispatch(
      delPost(id)
    );
  };

  const updatePost = data => {
    dispatch(updatePostThunk(data));
  };

  const createComment = (postId, body) => {
    dispatch(
        saveComment(postId, body)
    )
  };

  if (loading) {
    return <Spinner/>;
  }
  if (error) {
    return <ErrorIndicator/>
  }

  return <PostsList posts={ posts } onDelete={deletePost} onUpdate={updatePost} onCreateComment={createComment}/>

}

const mapStateToProps = state => ({
  posts: getAllPosts(state),
  loading: getPostsIsLoading(state),
  error: getPostsError(state),
});

export default withRouter(connect(mapStateToProps)(PostsListContainer));
