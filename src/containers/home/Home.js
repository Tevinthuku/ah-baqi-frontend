import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Row, Col, Skeleton } from 'antd';
import articleActions from '../../actions/articleActions';


import LandingArticles from '../../components/articles/LandingArticles';
import FeaturedArticles from '../../components/articles/FeaturedArticles';

class Home extends Component {
  componentDidMount() {
    const {articleActions} = this.props; // eslint-disable-line
    articleActions('get-all');
  }

  handleClick = (slug) => {
    const { articleActions, articleData, history } = this.props; // eslint-disable-line
    articleData.id = 0;
    const urlTo = `/articles/${slug}`;
    articleActions('get-one', slug);
    history.push(urlTo);
  }

  render() {
    const { articles } = this.props;

    let displayHomeData = <Skeleton active />;
    if (articles.length > 0) {
      displayHomeData = (
        <div>
          <LandingArticles
            middleArticles={articles.slice(1, 4)}
            leftArticle={articles[0]}
            handleClick={this.handleClick}
          />
          <div className="shadow" />
          <Row>
            <Col span={15}>
              <FeaturedArticles handleClick={this.handleClick} articles={articles.slice(4)} />
            </Col>
            <Col span={8} push={1}>
              Popular articles
            </Col>
          </Row>
        </div>
      );
    }
    return (
      <div className="container-body">
        {displayHomeData}
      </div>

    );
  }
}

const mapStateToProps = state => ({
  articles: state.article.articles,
  articleData: state.article.articleData,
  nextPage: state.article.nextPage,
  previousPage: state.article.articles,
  articleCount: state.article.articleCount,
});

export default connect(mapStateToProps, { articleActions })(Home);
