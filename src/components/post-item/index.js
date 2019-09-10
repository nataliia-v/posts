import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import './post-item.css';
import { getIsSavingPost } from "../../state/posts/selectors";
import { delPost } from "../../state/posts/thunks";
import { Link } from "react-router-dom";

class PostItem extends Component  {

  onDelete (id) {
    // event.preventDefault();
    const { dispatch } = this.props;
    // const { post } = this.props;
    // console.log(event.target.value);
    dispatch(
        delPost(id)
    );
    console.log(id);

  }


  render () {
    const { post } = this.props;
    const postUrl = `/posts/${post.id}`;

  const { title, body, id } = post;
  return (
      <Link to={postUrl}>
        <div className='title-item'>{title}</div>
        <p className='body-item'>{body}</p>
        <div className='bts-flex'>
          <button className='btn change-item'>edit a post</button>
          <button className='btn add-comment'>add a comment</button>
          <button onClick={()=> this.onDelete(id)} className='btn delete-item'>delete a post</button>
        </div>

      </Link>
  );
}

}

// const mapDispatchToProps = {
//     onDelete: postRemovedFromList,
//   ///дальше добавить для других кнопок
// };

const mapStateToProps = state => ({
  isSaving: getIsSavingPost(state),
});

export default connect(mapStateToProps)(PostItem);