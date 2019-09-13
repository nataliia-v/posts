import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { getIsSavingPost } from "../../state/posts/selectors";

import './PostItem.css';
import { fetchPostWithComments, saveComment } from "../../state/posts/thunks";
import Comment from "../comment";

function PostItem(props) {
  const {post, onDelete, onUpdate, onCreateComment} = props;
  const postUrl = `/posts/${ post.id }`;

  const [isEditMode, setIsEditMode] = useState(false);
  const [isViewComments, setIsViewComments] = useState(false);
  const [postTitle, setPostTitle] = useState(post.title);
  const [postBody, setPostBody] = useState(post.body);
  const [commentBody, setCommentBody] = useState("");

  const onChangeTitle = e => {
    const value = e.target.value;
    setPostTitle(value);
  };

  const onChangeBody = e => {
    const value = e.target.value;
    setPostBody(value);
  };

  const onDeletePost = () => {
    onDelete(post.id)
  };

  const onViewComments = () => {
    setIsViewComments(prevIsViewComments => !prevIsViewComments)
  };

  const onEditPost = () => {
    setIsEditMode(true);
  };

  const onUpdatePost = () => {
    setIsEditMode(false);

    const data = {id: post.id, title: postTitle, body: postBody};

    onUpdate(data);
  };
 const onChangeBodyComment = (e) => {
   const value = e.target.value;
   setCommentBody(value);

  };


 const createComment = (event) => {
   event.preventDefault();
   console.log(event);

   console.log(commentBody);


   onCreateComment(post.id, commentBody);
   console.log(post.comments);

  };

  return (
      <div>
        { isEditMode
            ?
            (
                <div>
                  <div className='title-item'>
                    <input type="text" value={ postTitle } onChange={ onChangeTitle }/>
                  </div>
                  <p className='body-item'>
                    <input type="text" value={ postBody } onChange={ onChangeBody }/>
                  </p>
                </div>
            )
            : (
                <Link to={ postUrl }>
                      <div className='title-item'>{ post.title }</div>
                      <p className='body-item'>{ post.body }</p>
                </Link>
            )
        }
        <div className='header-post-flex'>

          <div  className='header-post-flex'>
            <div>

              { isEditMode && <button onClick={ onUpdatePost } className='btn'>save post</button>
              ///нужно добавить display none форме
              }
              <button onClick={onViewComments} className='btn add-comment'>View comments</button>

              {  isViewComments &&
                  <div>
                    <form onSubmit={createComment}>
                      <input onChange={onChangeBodyComment} type="text"/>
                      <button className='btn add-comment'>add a comment</button>
                    </form>

                    <ul>
                      {
                        post.comments.map((comment) => {
                          return (
                              <li key={comment.id}><Comment comment={comment}/></li>
                          )
                        })
                      }
                    </ul>
                  </div>
              }
            </div>
            <div className='bts-flex'>
            </div>
          </div>
          <div>
            <img onClick={ onDeletePost } src="https://image.flaticon.com/icons/png/512/61/61848.png" width="20" alt=''/>
            <img onClick={ onEditPost } src="https://image.flaticon.com/icons/svg/61/61456.svg" width="20" alt=''/>
          </div>
        </div>
      </div>
  );
}

const mapStateToProps = state => ({
  isSaving: getIsSavingPost(state),
});

export default connect(mapStateToProps)(PostItem);