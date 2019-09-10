import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import './post-item.css';
import { postRemovedFromList } from "../../state/posts/actions";

function PostItem ({ post, onDelete }) {
  const { title, body, id } = post;
  return (
      <Fragment>
        <a href='#' className='title-item'>{title}</a>
        <p className='body-item'>{body}</p>
        <div className='bts-flex'>
          <button className='btn change-item'>edit a post</button>
          <button className='btn add-comment'>add a comment</button>
          <button onClick={()=> onDelete(id)} className='btn delete-item'>delete a post</button>
        </div>

      </Fragment>
  );
}

// const mapStateToProps = ({ items }) => {
//   return {
//     items
//   }
// };

// const mapDispatchToProps = {
//     onDelete: postRemovedFromList,
//   ///дальше добавить для других кнопок
// };

export default connect()(PostItem);