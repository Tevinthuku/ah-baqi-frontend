import React from 'react';
import { Row } from 'antd';

import SingleFeaturedArticle from './featured/SingleFeaturedArticle';

import './Featuredarticles.scss';

const FeaturedArticle = (props) => {
  const { articles, handleClick } = props;

  let articleData = '';
  if (articles) {
    articleData = articles.map(article => (
      <SingleFeaturedArticle
        data-test="single-featured-article"
        clicked={handleClick}
        key={article.slug}
        article={article}
      />
    ));
  }

  return (
    <div data-test="featured-article">
      <Row>
        <h3 className="featured-title">
          <span>Featured Articles</span>
        </h3>
        <div className="featured-wrapper">
          {articleData}
        </div>
      </Row>
    </div>
  );
};

export default FeaturedArticle;
