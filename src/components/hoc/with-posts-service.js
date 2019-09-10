import React from 'react';
import { PostsServiceConsumer } from "../posts-service-context/posts-service-context";

const withPostsService = () => (Wrapped) => {

  return (props) => {
    return (
        <PostsServiceConsumer>
          {
            (postsService) => {
              return (<Wrapped {...props} postsService={postsService}/>)
            }
          }
        </PostsServiceConsumer>
    )
  }
};

export default withPostsService;

