import React, { Component } from 'react';
import { connect } from "react-redux";
import { savePost } from '../../state/posts/thunks';
import { getIsSavingPost} from "../../state/posts/selectors";


import styles from './addPost.module.scss'
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

class AddPost extends Component {

  state = {
    title: "tt",
    body: "tt",
    showPostCreation: false,
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

    const { dispatch } = this.props;
    const { title, body } = this.state;

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

  onViewComments = () => {
    this.setState(prevState => ({
      showPostCreation: !prevState.showPostCreation
    }))
  };

  render() {

    const { showPostCreation } = this.state;

    return (
        <div>

          <Button onClick={ this.onViewComments } variant="outlined">
            {showPostCreation ? 'Close' : 'Add my post'}
          </Button>

          { showPostCreation &&
          <form className={styles.formAddPost} noValidate autoComplete="off" onSubmit={this.handleSubmit}>

            <TextField
                id="outlined-name"
                label="Title"
                required
                onChange={this.onChangeTitle}
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="standard-textarea"
                label="Enter the text here"
                placeholder="Placeholder"
                multiline
                onChange={this.onChangeBody}
                margin="normal"
            />
            <button>Add a post</button>
          </form>
          }

        </div>

    );
  }
}

const mapStateToProps = state => ({
  isSaving: getIsSavingPost(state)
});

export default connect(mapStateToProps)(AddPost);