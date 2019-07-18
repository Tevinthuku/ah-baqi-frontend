import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";

import { Redirect } from 'react-router-dom';

import articleActions from '../../actions/articleActions';

import { Row, Col, Skeleton } from 'antd';

import LandingArticles from '../../components/articles/LandingArticles';
import FeaturedArticles from '../../components/articles/FeaturedArticles';

class Home extends Component {
  componentDidMount() {
    this.props.articleActions('get-all');
  }

  handleClick = (slug) => {
    const urlTo = '/articles/' + slug;
    this.props.articleActions('get-one', slug = slug);
    this.props.history.push(urlTo);
  }

  render() {
    const { articles, nextPage, previousPage, articleCount } = this.props;

    let displayHomeData = <Skeleton active />;
    if (articles.length > 0) {
      console.log(articles, nextPage, previousPage, articleCount)
      displayHomeData = (
        <div>
          <LandingArticles
            rightArticle={articles[0]}
            middleArticles={articles.slice(1, 3)}
            leftArticle={articles[4]}
            handleClick={this.handleClick}
          />
          <div className="shadow"></div>
          <Row>
            <Col span={15}>
              <FeaturedArticles />
            </Col>
            <Col span={8} push={1}>
              Popular articles
          </Col>
          </Row>
        </div>
      );
    }
    return (
      < div className="container-body" >
        {displayHomeData}
      </div >

    );
  }
}

const mapStateToProps = state => ({
  articles: state.article.articles,
  nextPage: state.article.nextPage,
  previousPage: state.article.articles,
  articleCount: state.article.articleCount,
});

export default connect(mapStateToProps, { articleActions })(Home);
