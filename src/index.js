import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import PostsService from './services/posts-service';
import { PostsServiceProvider } from "./components/posts-service-context/posts-service-context";

import store from './store';


const postsService = new PostsService();


ReactDOM.render(
    <Provider store={store}>
      <ErrorBoundry>
        <PostsServiceProvider value={postsService}>
          <Router>
            <App />
          </Router>
        </PostsServiceProvider>
      </ErrorBoundry>
    </Provider>
    , document.getElementById('root'));
