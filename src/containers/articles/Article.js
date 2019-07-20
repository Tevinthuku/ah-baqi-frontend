import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Skeleton } from 'antd';
import { getAnArticle, deleteArticle } from '../../actions/articleActions';

import Article from '../../components/articles/Article';

class ArticlePage extends Component {
  componentDidMount() {
    const { articleData, getAnArticle, history } = this.props; // eslint-disable-line
    if (!articleData.id) {
      const slug = history.location.pathname.split('/')[2];
      getAnArticle(slug);
    }
  }

  handleEditClick = () => {
    const { articleData, getAnArticle, history } = this.props; // eslint-disable-line
    getAnArticle(articleData.slug);
    history.push('/articles/update');
  }

  render() {
    const { articleData, deleteArticle, history } = this.props;  // eslint-disable-line

    return (
      <div data-test="article page test">
        {articleData.id ? (
          <Article
            editClick={this.handleEditClick}
            article={articleData}
            deleteAction={deleteArticle}
            history={history}
          />
        ) : <Skeleton active />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articleData: state.article.articleData,
});

export default connect(mapStateToProps, { getAnArticle, deleteArticle })(ArticlePage);
