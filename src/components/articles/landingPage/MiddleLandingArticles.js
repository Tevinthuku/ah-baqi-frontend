import React from 'react';

import { Col, Row } from 'antd';
import SingleMidLandingArticle from './SingleMiddleLandingArticle';

const MiddleLandingArticle = ({ articles, clicked }) => (
  <Col sm={20} md={9} className="landing-article-container">
    <Row data-test="mid-landing-article">
      {articles.map(article => (
        <SingleMidLandingArticle
          key={article.slug}
          article={article}
          clicked={clicked}
        />
      ))}
    </Row>
  </Col>
);

export default MiddleLandingArticle;
