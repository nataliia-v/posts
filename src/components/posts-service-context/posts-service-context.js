import React from 'react';

const {
  Provider: PostsServiceProvider,
  Consumer: PostsServiceConsumer
} = React.createContext();

export {
  PostsServiceProvider,
  PostsServiceConsumer
}
