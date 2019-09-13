import postsService from "../../../services/posts-service";

import {
  startPostsFetching,
  stopPostsFetching,
  fetchPostsSuccess,
  fetchPostsFailed,
  startPostSaving,
  stopPostSaving,
  savePostSuccess,
  savePostFailed,
  startPostDel,
  stopPostDel,
  delPostSuccess,
  delPostFailed,
  startPostFetching,
  stopPostFetching,
  fetchPostSuccess,
  fetchPostFailed,
  startCommentSaving,
  saveCommentSuccess,
  saveCommentFailed,
  stopCommentSaving, updatePostSuccess
} from '../actions';

export const fetchPosts = () => {

  return async dispatch => {
    dispatch(startPostsFetching());

    try {
      const data = await postsService.getAllPostsWithComments();

      dispatch(fetchPostsSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(fetchPostsFailed(error));
    } finally {
      dispatch(stopPostsFetching());
    }
  };

};

export const fetchPostWithComments = (postId) => {

  return async dispatch => {
    dispatch(startPostFetching());

    try {
      const data = await postsService.getPostAndComment(postId);

      dispatch(fetchPostSuccess(data));
    } catch (error) {
      dispatch(fetchPostFailed(error));
    } finally {
      dispatch(stopPostFetching());
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

export const updatePostThunk = ({ id, title, body }) => {

  return async dispatch => {
    dispatch(startPostSaving());

    try {
      const data = await postsService.updatePost(id, title, body);

      console.log('updated post', data);
      dispatch(updatePostSuccess(data));
    } catch (error) {
      dispatch(savePostFailed(error));
    } finally {
      dispatch(stopPostSaving());
    }
  }

};

export const delPost = id => {

  return async dispatch => {
    dispatch(startPostDel());

    try {
      await postsService.delPost(id);
      dispatch(delPostSuccess(id));
    } catch (error) {
      dispatch(delPostFailed(error));
    } finally {
      dispatch(stopPostDel());
    }
  };
};

export const saveComment = (postId, body) => {

  console.log('postId', postId);


  return async dispatch => {
    dispatch(startCommentSaving());

    try {
      const result = await postsService.createComment(postId, body);

      dispatch(saveCommentSuccess(result));
    } catch (e) {
      dispatch(saveCommentFailed());
    } finally {
      dispatch(stopCommentSaving());
    }
  };
};
