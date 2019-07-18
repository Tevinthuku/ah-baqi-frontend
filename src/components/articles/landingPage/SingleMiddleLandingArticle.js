import React from 'react';

import { Col, Row, Icon } from 'antd';

const SingleMidLandingArticle = (props) => {
  const { article, clicked } = props;
  const defImage = 'https://res.cloudinary.com/zonecc/image/upload/v1563436762/dummy%20ah/try-new_peb1rk.jpg';

  return (
    <Col span={24} className="mid-landing-article article-hover" onClick={() => clicked(article.slug)}>
      <Row>
        <Col span={7} className="landing-article-image-mid-cont">
          <img
            src={article.image ? article.image : defImage}
            alt="Article Image"
            className="landing-article-image-mid"
          />
        </Col>
        <Col span={17}>
          <Row className="mid-article-data">
            <Col span={24}>
              <h4 className="mid-art-title">{article.title}</h4>
            </Col>
            <Row>
              <Col
                span={24}
                className="mid-article-author"
              >
Mona Eltahawy in ZORA
              </Col>
              <Row className="mid-article-read-date">
                <Col span={24}>
                  <span>
Jul 17 .
                    {article.reading_time}
                    {' '}
read
                    {' '}
                  </span>
                  <span className="rating-icons-pos">
                    <Icon type="star" theme="filled" style={{ color: 'black', fontSize: '12px' }} />
                    <Icon type="star" theme="filled" style={{ color: 'black', fontSize: '12px' }} />
                    <Icon type="star" theme="filled" style={{ color: 'black', fontSize: '12px' }} />
                  </span>
                </Col>
              </Row>
            </Row>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default SingleMidLandingArticle;
