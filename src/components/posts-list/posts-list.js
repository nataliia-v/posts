import React, { Component } from 'react';
import PostItem from '../post-item';
import { connect } from 'react-redux';
import { postsLoaded } from "../../actions";

import { withPostsService } from '../hoc';

class PostsList extends Component {

  componentDidMount() {
    const { postsService } = this.props;
    const postsData = () => {
      postsService.getAllPosts().then((data) => this.props.postsLoaded(data));
    };

    postsData();

    // const data = postsService.getAllPosts().then((data) => console.log(data));
    // console.log(data);

    // this.props.postsLoaded(DDD());

  }

  render() {
    const { posts } = this.props;
    return (
        <ul>
          {
            posts.map((post) => {
              return (
                  <li key={post.id}><PostItem post={post}/></li>
              )
            })
          }
        </ul>
    );
  }
}

const mapStateToProps = ({ posts }) => {
  return { posts };
};

const mapDispatchToProps = {
  postsLoaded
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
