import React from 'react';
import { Row } from 'antd';

import SingleFeaturedArticle from './featured/SingleFeaturedArticle';

import './Featuredarticles.scss';

const FeaturedArticle = (props) => {
  const { articles, handleClick } = props;

  console.log(articles);
  let articleData = '';
  if (articles) {
    articleData = articles.map((article) => {
      console.log(article);
      return <SingleFeaturedArticle clicked={handleClick} key={article.slug} article={article} />;
    });
  }

  return (
    <div>
      <Row>
        <h3 className="featured-title">
          <span>Featured Articles</span>
        </h3>
        <div className="shadow" />
        <div className="featured-wrapper">
          {articleData}
        </div>
      </Row>
    </div>
  );
};

export default FeaturedArticle;
