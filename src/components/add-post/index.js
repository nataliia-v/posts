import React, { Component } from 'react';
import { connect } from "react-redux";
import { savePost } from '../../state/posts/thunks';
import { getIsSavingPost } from "../../state/posts/selectors";

import styles from './addPost.module.scss'
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Modal from '@material-ui/core/Modal';

class AddPost extends Component {

  state = {
    title: "tt",
    body: "tt",
    showPostCreation: false,
    isOpen: false,
  };

  onChangeTitle = e => {
    this.setState({
      title: e.target.value
    });
  };

  onChangeBody = e => {
    this.setState({
      body: e.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const {dispatch} = this.props;
    const {title, body} = this.state;

    dispatch(
        savePost({
          title,
          body
        })
    );

    this.setState({
      title: "",
      body: ""
    });
  };

  render() {

    const {isOpen} = this.state;

    const handleOpen = () => {
      this.setState({
        isOpen: true
      });
    };

    const handleClose = () => {
      this.setState({
        isOpen: false
      });
    };

    return (
        <div>
          <div className={styles.btnAddPost}>
            <Button  onClick={ handleOpen } variant="outlined">
              Add my post
            </Button>
            <Modal className={ styles.modal }
                   aria-labelledby="simple-modal-title"
                   aria-describedby="simple-modal-description"
                   open={ isOpen }
                   onClose={ handleClose }
            >
              <div>
                <form className={ styles.formAddPost } noValidate autoComplete="off" onSubmit={ this.handleSubmit }>

                  <TextField
                      id="outlined-name"
                      label="Title"
                      required
                      onChange={ this.onChangeTitle }
                      margin="normal"
                      variant="outlined"
                  />
                  <TextField
                      id="standard-textarea"
                      label="Enter the text here"
                      placeholder="Placeholder"
                      multiline
                      onChange={ this.onChangeBody }
                      margin="normal"
                  />
                  <button className={ styles.btn }>add a post</button>
                </form>
              </div>
            </Modal>
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  isSaving: getIsSavingPost(state)
});

export default connect(mapStateToProps)(AddPost);