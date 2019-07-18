import React from 'react';
import { Comment } from 'antd';
import { connect } from 'react-redux';

import { Editor } from './helpers/helpers';
import {
  addComment,
  deleteComment,
  likeComment,
  dislikeComment,
} from '../../actions/comments';
import { getItems, commentItems } from './commentNest/CommentItems';
import './comments.scss';


export class UnconnectedCoomentContainer extends React.Component {
  state = {
    value: '',
  };

  handleSubmit = () => {
    const { value } = this.state;
    const commentValue = {
      comment: {
        body: value,
      },
    };
    const { slug, addComment } = this.props;
    addComment(slug, commentValue);
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };


  addContent = () => {
    const {
      comments,
      slug,
      props,
      deleteComment,
      likeComment,
      dislikeComment,
    } = this.props;

    getItems(
      comments,
      slug,
      deleteComment,
      likeComment,
      dislikeComment,
    );
    const { value } = this.state;

    return (
      <div>
        <p className="comment-message hide">
          <strong>
            Login to post comment
          </strong>
        </p>
        <Editor
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          value={value}
        />
        {commentItems}
      </div>
    );
  }

  render() {
    return (
      <div data-test="comments-container">
        <Comment
          content={this.addContent()}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  prop: state,
});

export default connect(mapStateToProps, {
  addComment,
  deleteComment,
  likeComment,
  dislikeComment,
})(UnconnectedCoomentContainer);
