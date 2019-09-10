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
export const stopPostSaving= () => ({
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
