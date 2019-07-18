import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Skeleton } from 'antd';
import articleActions from '../../actions/articleActions';

import SingleArticle from '../../components/articles/SingleArticle';

class SingleArticleContainer extends Component {
  componentWillMount() {
    if (!this.props.articleData.id) {
      console.log(this.props.history.location);
      const slug = this.props.history.location.pathname.split('/')[2];
      this.props.articleActions('get-one', slug);
      console.log(slug);
    }
  }

  render() {
    const { articleData, articleActions, history } = this.props;  // eslint-disable-line

    let singleArticleData = <Skeleton active />;
    if (articleData.id) {
      singleArticleData = <SingleArticle article={articleData} articleActions={articleActions} history={history} />;
    }

    return (
      <div>
        {singleArticleData}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articleData: state.article.articleData,
});

export default connect(mapStateToProps, { articleActions })(SingleArticleContainer);
