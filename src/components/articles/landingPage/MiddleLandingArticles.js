import React from 'react';

import { Col, Row } from 'antd';
import SingleMidLandingArticle from './SingleMiddleLandingArticle';

const MiddleLandingArticle = ({ articles, clicked }) => (
  <Col span={9} className="landing-article-container">
    <Row data-test="mid-landing-article">
      <SingleMidLandingArticle
        article={articles[0]}
        clicked={clicked}
      />
      <SingleMidLandingArticle
        article={articles[1]}
        clicked={clicked}
      />
      <SingleMidLandingArticle
        article={articles[2]}
        clicked={clicked}
      />
    </Row>
  </Col>
);

export default MiddleLandingArticle;
