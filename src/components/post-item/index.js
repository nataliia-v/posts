import React, { Fragment } from 'react';
import './post-item.css'

function PostItem ({ post }) {
  const { title, body } = post;
  return (
      <Fragment>
        <span className='title-item'>{title}</span>
        <p className='body-item'>{body}</p>
        <div className='bts-flex'>
          <button className='btn change-item'>edit a post</button>
          <button className='btn add-comment'>add a comment</button>
          <button className='btn delete-item'>delete a post</button>
        </div>

      </Fragment>
  );
}

export default PostItem;