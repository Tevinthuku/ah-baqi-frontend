import React from 'react';
import { Comment } from 'antd';
import { connect } from 'react-redux';

import { Editor } from '../helpers/helpers';
import { getNestedItems, commentItems } from './SecondaryCommentItems';
import {
  addNestedComment,
  deleteNestedCommentItem,
} from '../../../actions/comments';
import '../comments.scss';


export class UnconnectedSecondaryComment extends React.Component {
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
    const {
      slug,
      id,
      addNestedComment,
    } = this.props;
    addNestedComment(slug, commentValue, id);
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  addContent = () => {
    const {
      replies,
      slug,
      id,
      deleteNestedCommentItem,
    } = this.props;
    getNestedItems(
      replies,
      slug,
      id,
      deleteNestedCommentItem,
    );
    const { value } = this.state;
    return (
      <div>
        <p className="nested-comment-message hide">
          <strong>
            Login to post comment
          </strong>
        </p>
        {commentItems}
        <Editor
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          value={value}
        />
      </div>
    );
  }

  render() {
    return (
      <div data-test="comments-items-container">
        <Comment
          data-test="nest-comment-container"
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
  addNestedComment,
  deleteNestedCommentItem,
})(UnconnectedSecondaryComment);
