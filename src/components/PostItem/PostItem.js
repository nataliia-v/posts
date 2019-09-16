import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { getIsSavingPost } from "../../state/posts/selectors";
import Comment from "../comment";

import styles from './PostItem.module.scss';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    fontSize: 10,
  },
}));

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
    onCreateComment(post.id, commentBody);
  };

  const classes = useStyles();
  return (
      <div>
        <CardActionArea>
          <CardContent>
            { isEditMode
                ?
                (
                    <div>
                      <div>
                        <input className={ styles.titleItem } type="text" value={ postTitle }
                               onChange={ onChangeTitle }/>
                      </div>
                      <p>
                        <textarea className={ styles.bodyItem } value={ postBody } onChange={ onChangeBody }/>
                      </p>
                    </div>
                )
                : (
                    <Link className={ styles.link } to={ postUrl }>
                      <div>
                        <Typography gutterBottom variant="h5" component="h2">
                          { post.title }
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          { post.body }
                        </Typography>
                      </div>

                    </Link>
                )
            }
          </CardContent>
        </CardActionArea>
        <CardActions className={ styles.flexBts }>
          <div>
            { isEditMode && <Button onClick={ onUpdatePost } variant="outlined">
              save post
            </Button> }
            <Button onClick={ onViewComments } variant="outlined">
              View comments
            </Button>
            <IconButton onClick={ onDeletePost } className={ classes.button } aria-label="delete">
              <DeleteIcon/>
            </IconButton>
            <IconButton onClick={ onEditPost } className={ classes.button } aria-label="delete">
              <EditIcon/>
            </IconButton>
          </div>
          <div>
            { isViewComments &&
            <div>
              <form className={ styles.form } onSubmit={ createComment }>
                <input className={ styles.inputFormComment } onChange={ onChangeBodyComment } type="text"/>
                <button className={ styles.btn }>add a comment</button>
              </form>
              <ul className={ styles.commentsList }>
                {
                  post.comments.map((comment) => {
                    return (
                        <li key={ comment.id }><Comment comment={ comment }/></li>
                    )
                  })
                }
              </ul>
            </div>
            }
          </div>
        </CardActions>
      </div>
  );
}

const mapStateToProps = state => ({
  isSaving: getIsSavingPost(state),
});

export default connect(mapStateToProps)(PostItem);