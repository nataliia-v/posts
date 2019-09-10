import React, { Component } from 'react';
import { connect } from "react-redux";
import { savePost } from '../../state/posts/thunks';
import { getIsSavingPost} from "../../state/posts/selectors";

class AddPost extends Component {

  state = {
    title: "tt",
    body: "tt",
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

  render() {

    return (
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title</label>
            <input required onChange={this.onChangeTitle} type="text" placeholder="Title"/>
          </div>

          <div>
            <label>Text</label>
            <input required onChange={this.onChangeBody} type="text" placeholder="Enter the text here"/>
          </div>

          <button>Add a post</button>

        </form>
    );
  }
}

const mapStateToProps = state => ({
  isSaving: getIsSavingPost(state)
});

export default connect(mapStateToProps)(AddPost);