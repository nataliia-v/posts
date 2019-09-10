import React, { Fragment } from 'react';

function PostItem ({ post }) {
  const { title, body } = post;
  return (
      <Fragment>
        <span>{title}</span>
        <span>{body}</span>
        <button>change post</button>
        <button>add comment</button>
        <button>delete post</button>
      </Fragment>
  );
}

export default PostItem;