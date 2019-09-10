import postsService from "../../../services/posts-service";

import {
  startPostsFetching,
  stopPostsFetching,
  fetchPostsSuccess,
  fetchPostsFailed,
  startPostSaving,
  stopPostSaving,
  savePostSuccess,
  savePostFailed
} from '../actions';

export const fetchPosts = () => {

  return async dispatch => {
    dispatch(startPostsFetching());

    try {
      const data = await postsService.getAllPosts();

      dispatch(fetchPostsSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(fetchPostsFailed(error));
    } finally {
      dispatch(stopPostsFetching());
    }
  };

};

export const savePost = post => {

  return async dispatch => {
    dispatch(startPostSaving());

    try {
      const data = await postsService.createPost(post.title, post.body);
      dispatch(savePostSuccess(data));
    } catch (error) {
      dispatch(savePostFailed(error));
    } finally {
      dispatch(stopPostSaving());
    }
  };
};