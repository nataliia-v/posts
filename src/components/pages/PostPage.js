import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPostsIsLoading, getPostById, } from "../../state/posts/selectors";
import { delPost, updatePostThunk, fetchPostWithComments, saveComment } from '../../state/posts/thunks'
import PostItem from "../PostItem/PostItem";
import Spinner from "../spinner";

function PostPage({
  match: { params: { postId } },
  history,
  post,
  isLoadingPost,
  dispatch,
}) {
  useEffect(() => {
    dispatch(fetchPostWithComments(postId))
  }, [postId]);

  const deletePost = id => {
    dispatch(
      delPost(id)
    );

    history.push('/posts');
  };

  const updatePost = (data) => {
    dispatch(
      updatePostThunk(data)
    )
  };

  const createComment = (id, body) => {
    dispatch(
        saveComment(id, body)
    )
  };

  if (isLoadingPost) {
    return <Spinner/>
  }

  if (!isLoadingPost && !post) return <div>Not Found - 404</div>;

  return (
    <PostItem post={post} onDelete={deletePost} onUpdate={updatePost} onCreateComment={createComment}/>
  );
}

const mapStateToProps = (state, ownProps) => ({
  post: getPostById(state, ownProps.match.params.postId),
  isLoadingPost: getPostsIsLoading(state),
});

export default connect(mapStateToProps)(PostPage);