import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Skeleton } from 'antd';
import { getAnArticle, deleteArticle, toggleLike } from '../../actions/articleActions';

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

  toggleLikeHandler = (slug) => {
    this.props.toggleLike(slug, this.props.history, '')
  }

  render() {
    const { articleData, deleteArticle, history, beenLiked, likes } = this.props;  // eslint-disable-line

    return (
      <div data-test="article page test">
        {articleData.id ? (
          <Article
            editClick={this.handleEditClick}
            article={articleData}
            deleteAction={deleteArticle}
            history={history}
            beenLiked={beenLiked}
            likes={likes}
            liking={this.toggleLikeHandler}
          />
        ) : <Skeleton active />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articleData: state.article.articleData,
  beenLiked: state.article.beenLiked,
  likes: state.article.likes,
});

export default connect(mapStateToProps, { getAnArticle, deleteArticle, toggleLike })(ArticlePage);
