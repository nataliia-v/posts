import PostsLists from '../views/PostsList';
import PostPage from '../components/pages/PostPage';
import { mapRoutes } from "../utils/helpers";

export default mapRoutes({
  postsList: {
    component: PostsLists,
    path: "/posts",
    exact: true
  },
  postPage: {
    component: PostPage,
    path: "/posts/:postId",
    exact: true
  }
});