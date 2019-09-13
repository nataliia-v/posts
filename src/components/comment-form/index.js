import React, { Component } from "react";
// import styles from "src/components/CommentForm/CommentForm.module.scss";
import { connect } from "react-redux";
import { func } from "prop-types";

import { saveComment } from "../../state/posts/thunks";
import { getIsSavingPost } from "../../state/posts/selectors";

class CommentForm extends Component {

  static propTypes = {
    dispatch: func.isRequired
  };

  state = {
    body: ""
  };

  onChangeBody = e => {
    this.setState({
      body: e.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { dispatch } = this.props;
    const { body } = this.state;

    dispatch(
        saveComment({
          body
        })
    );

    this.setState({
      body: ""
    });
  };


  render() {

    const { isSaving } = this.props;

    return (
        <div>
          {isSaving}
          <form onSubmit={this.handleSubmit}>
          <textarea
              onChange={this.onChangeBody}
              rows="4"
              placeholder="Comment"
              required
          />
            <button type="submit">Add Comment</button>
          </form>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  isSaving: getIsSavingPost(state)
});


export default connect(mapStateToProps) (CommentForm);