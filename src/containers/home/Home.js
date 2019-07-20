import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Skeleton } from 'antd';

import { getAllArticles, getAnArticle } from '../../actions/articleActions';
import LandingArticles from '../../components/articles/LandingArticles';
import FeaturedArticles from '../../components/articles/FeaturedArticles';

class Home extends Component {
  handleClick = (slug) => {
    const { getAnArticle, articleData, history } = this.props; // eslint-disable-line
    articleData.id = 0;
    const urlTo = `/articles/${slug}`;
    getAnArticle(slug);
    history.push(urlTo);
  }

  render() {
    const { articles, getAllArticles } = this.props; // eslint-disable-line
    getAllArticles();

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

export default connect(mapStateToProps, { getAllArticles, getAnArticle })(Home);
