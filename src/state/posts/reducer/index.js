
const initialState = {
  data: [],
  loading: true,
  isSaving: false,
  error: null,
};

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case 'START_POSTS_FETCHING':
      return {
        ...state,
        data: [],
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
        data: [action.payload, ...state.data]
      };

    case 'REMOVE_POST':
      return {
        ...state,
        // posts
      };

    default:
      return state

  }
};

// const updateList = (state, postId) => {
//   const post = state.posts.find((post) => post.id === postId);
//   const itemIndex = state.posts.findIndex(({id}) => id === postId);
//   const item = state.posts[itemIndex];
//
//   const newItem = updateItem(post, item);
//
//   return {
//     ...state,
//     posts: updateItems(state.posts, newItem, itemIndex)
//   }
// }

export default reducer;