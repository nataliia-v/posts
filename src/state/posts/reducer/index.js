const initialState = {
  data: [],
  loading: true,
  isSaving: false,
  isDel: false,
  error: null,
};

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case 'START_POSTS_FETCHING':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'STOP_POSTS_FETCHING':
      return {
        ...state,
        loading: false,
      };
    case 'FETCH_POSTS_SUCCESS':
      return {
        ...state,
        data: action.payload,
      };
    case 'FETCH_POSTS_FAILED':
      return {
        ...state,
        error: action.payload
      };
      /*
     * Save post
     * */
    case 'START_POST_SAVING':
      return {
        ...state,
        isSaving: true
      };
    case 'STOP_POST_SAVING':
      return {
        ...state,
        isSaving: false
      };
    case 'SAVE_POST_SUCCESS':
      return {
        ...state,
        data: [...state.data, action.payload ]
      };
    case 'UPDATE_POST_SUCCESS':
      return {
        ...state,
        data: state.data.map(post => post.id === action.payload.id ? ({
          ...post,
          ...action.payload
        }) : post)

      };

      /*
 * ---------------
 * Delete post
 * ---------------
 * */
    case "START_POST_DEL":
      return {
        ...state,
        isDel: true
      };
    case "STOP_POST_DEL":
      return {
        ...state,
        isDel: false
      };
    case "DEL_POST_SUCCESS":
      // const idx = state.data.findIndex((post) => post.id);
      // state.data.splice(idx, 1);
      return {
        ...state,
        data: state.data.filter(post => post.id !== action.payload)
      };

      /*
 * ---------------
 * itemPost and comments
 * ---------------
 * */

    case 'START_POST_FETCHING':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'STOP_POST_FETCHING':
      return {
        ...state,
        loading: false,
      };
    case 'FETCH_POST_SUCCESS':
      return {
        ...state,
        data: action.payload
      };
    case 'FETCH_POST_FAILED':
      return {
        ...state,
        error: action.payload
      };

      /*
     * Save comment
     * */

    case 'START_COMMENT_SAVING':
      return {
        ...state,
        isSaving: true
      };
    case 'STOP_COMMENT_SAVING':
      return {
        ...state,
        isSaving: false
      };
    case 'SAVE_COMMENT_SUCCESS':
      return {
        ...state,
        data: state.data.map((post) => {
          if (Number(post.id) === Number(action.payload.postId)) {
            return {
              ...post,
              comments: [
                ...post.comments,
                action.payload
              ],
            }
          } else {
            return post;
          }
        })
      };

    default:
      return state
  }
};

export default reducer;