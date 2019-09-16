import React from 'react';
import { connect } from 'react-redux';
import { getPostsIsLoading, getPostById, } from "../../state/posts/selectors";
import { delPost, updatePostThunk, saveComment } from '../../state/posts/thunks'
import PostItem from "../PostItem/PostItem";
import Spinner from "../spinner";

import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

function PostPage({
                    history,
                    post,
                    isLoadingPost,
                    dispatch,
                  }) {

  const deletePost = id => {
    dispatch(
        delPost(id)
    );

    history.push('/posts');
  };

  const updatePost = (data) => {
    dispatch(
        updatePostThunk(data)
    )
  };

  const createComment = (id, body) => {
    dispatch(
        saveComment(id, body)
    )
  };

  const useStyles = makeStyles(() => ({

    card: {
      maxWidth: 700,
      marginBottom: 10,
      margin: 'auto',
    },

  }));

  const classes = useStyles();

  if (isLoadingPost) {
    return <Spinner/>
  }

  if (!isLoadingPost && !post) return <div>Not Found - 404</div>;
  const postUrl = `/posts`;

  return (
      <div>
        <Link to={ postUrl }>
          <Button variant="outlined">
            back
          </Button>
        </Link>

        <Card className={ classes.card } key={ post.id }>
          <PostItem post={ post } onDelete={ deletePost } onUpdate={ updatePost } onCreateComment={ createComment }/>
        </Card>
      </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  post: getPostById(state, ownProps.match.params.postId),
  isLoadingPost: getPostsIsLoading(state),
});

export default connect(mapStateToProps)(PostPage);