import React, { Component } from 'react';
import PostItem from '../post-item';
import { connect } from 'react-redux';
import { postsLoaded, postsRequested, postsError } from "../../actions";

import { withPostsService } from '../hoc';

import './posts-list.css';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

class PostsList extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { posts, loading, error } = this.props;
    if (loading) {
      return <Spinner/>;
    }

    if (error) {
      return <ErrorIndicator/>
    }

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
  }
}

const mapStateToProps = ({ posts, loading, error }) => {
  return { posts, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // postsLoaded,
  // postsRequested,
  // postsError
  const { postsService } = ownProps;

  return {
    fetchPosts: () => {
      dispatch(postsRequested());
      postsService.getAllPosts()
          .then((data) => dispatch(postsLoaded(data)))
          .catch((err) => postsError(err));
    }
  }

};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     postsLoaded: (newPosts) => {
//       dispatch(postsLoaded(newPosts));
//     }
//
//   };
// };

export default withPostsService()(connect(mapStateToProps, mapDispatchToProps)(PostsList));
