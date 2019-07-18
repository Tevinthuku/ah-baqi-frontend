import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Skeleton } from 'antd';
import articleActions from '../../actions/articleActions';

import SingleArticle from '../../components/articles/SingleArticle';

class SingleArticleContainer extends Component {
  componentWillMount() {
    if (!this.props.articleData.id) {
      const slug = this.props.history.location.pathname.split('/')[2];
      this.props.articleActions('get-one', slug);
    }
  }

  handleEditClick = (event) => {
    console.log(event.target);
    const { slug } = this.props.articleData;
    this.props.articleActions('get-one', slug);
    this.props.history.push('/articles/update');
  }

  render() {
    const { articleData, articleActions, history } = this.props;  // eslint-disable-line

    let singleArticleData = <Skeleton active />;
    if (articleData.id) {
      singleArticleData = <SingleArticle editClick={this.handleEditClick} article={articleData} articleActions={articleActions} history={history} />;
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
