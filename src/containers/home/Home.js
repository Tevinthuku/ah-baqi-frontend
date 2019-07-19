import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Row, Col, Skeleton } from 'antd';
import articleActions from '../../actions/articleActions';


import LandingArticles from '../../components/articles/LandingArticles';
import FeaturedArticles from '../../components/articles/FeaturedArticles';

class Home extends Component {
  componentDidMount() {
    this.props.articleActions('get-all');
  }

  handleClick = (slug) => {
    this.props.articleData.id = 0;
    const urlTo = `/articles/${slug}`;
    this.props.articleActions('get-one', slug);
    this.props.history.push(urlTo);
  }

  render() {
    const { articles } = this.props;

    let displayHomeData = <Skeleton active data-test="skeleton-loader" />;
    if (articles.length > 0) {
      displayHomeData = (
        <div>
          <LandingArticles
            middleArticles={articles.slice(1, 4)}
            leftArticle={articles[0]}
            handleClick={this.handleClick}
            data-test="landing-articles"
          />
          <div className="shadow" />
          <Row>
            <Col span={15}>
              <FeaturedArticles
                handleClick={this.handleClick}
                articles={articles.slice(4)}
                data-test="featured-articles"
              />
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
