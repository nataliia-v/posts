import React, { Component } from 'react';
import PostItem from '../post-item';
import { connect } from 'react-redux';
import { fetchPosts } from "../../state/posts/thunks";
import { getAllPosts, getPostsIsLoading, getPostsError } from "../../state/posts/selectors";

import './posts-list.css';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const PostsList = ({ posts }) => {
  return (
      <ul>
        {
          posts.map((post) => {
            return (
                <li className='post-item' key={post.id}><PostItem post={post}/></li>
            )
          })
        }
      </ul>
  );
};

class PostsListContainer extends Component {

  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts, loading, error } = this.props;
    if (loading) {
      return <Spinner/>;
    }
    if (error) {
      return <ErrorIndicator/>
    }

    return <PostsList posts={posts}/>

  }
}

const mapStateToProps = state => ({
  posts: getAllPosts(state),
  loading: getPostsIsLoading(state),
  error: getPostsError(state),
});

export default connect(mapStateToProps)(PostsListContainer);
