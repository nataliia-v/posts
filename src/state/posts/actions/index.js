/*
* Fetch posts
* */
export const startPostsFetching = () => ({
  type: 'START_POSTS_FETCHING',
});

export const stopPostsFetching = () => ({
  type: 'STOP_POSTS_FETCHING',
});

export const fetchPostsSuccess = newPosts => ({
  type: 'FETCH_POSTS_SUCCESS',
  payload: newPosts
});

export const fetchPostsFailed = error => ({
  type: 'FETCH_POSTS_FAILED',
  payload: error
});

/*
 * ---------------
 * Save post
 * ---------------
 * */
export const startPostSaving = () => ({
  type: "START_POST_SAVING"
});
export const stopPostSaving = () => ({
  type: "STOP_POST_SAVING"
});
export const savePostSuccess = post => ({
  type: "SAVE_POST_SUCCESS",
  payload: post
});
export const savePostFailed = error => ({
  type: "SAVE_POST_FAILED",
  payload: error
});
export const updatePostSuccess = post => ({
  type: 'UPDATE_POST_SUCCESS',
  payload: post,
});

/*
 * ---------------
 * Delete post
 * ---------------
 * */
export const startPostDel = () => ({
  type: "START_POST_DEL"
});
export const stopPostDel = () => ({
  type: "STOP_POST_DEL"
});
export const delPostSuccess = postId => ({
  type: "DEL_POST_SUCCESS",
  payload: postId
});
export const delPostFailed = error => ({
  type: "DEL_POST_FAILED",
  payload: error
});

/*
* ---------------
* Open 1 itemPost and comments
* ---------------
* */

export const startPostFetching = () => ({
  type: 'START_POST_FETCHING',
});

export const stopPostFetching = () => ({
  type: 'STOP_POST_FETCHING',
});

export const fetchPostSuccess = postItem => ({
  type: 'FETCH_POST_SUCCESS',
  payload: [postItem]
});

export const fetchPostFailed = error => ({
  type: 'FETCH_POST_FAILED',
  payload: error
});

/*
   * ---------------
   * Save comment
   * ---------------
   * */

export const startCommentSaving = () => ({
  type: 'START_COMMENT_SAVING'
});
export const stopCommentSaving = () => ({
  type: 'STOP_COMMENT_SAVING'
});
export const saveCommentSuccess = comment => ({
  type: 'SAVE_COMMENT_SUCCESS',
  payload: comment
});
export const saveCommentFailed = () => ({
  type: 'SAVE_COMMENT_FAILED'
});
