import React from 'react';

import { Row, Col, Icon } from 'antd';

const SingleFeaturedArticle = (props) => {
  const { article, clicked } = props;
  const defaultImg = 'http://res.cloudinary.com/kwangonya/image/upload/v1563446441/ah-django/default_dlfzzg.jpg';

  return (
    <Row
      data-test="single-featured-article"
      className="featured-article-container"
      onClick={() => clicked(article.slug)}
    >
      <Col span={15} offset={3}>
        <Row>
          <Col span={24} className="featured-article-title">
            <h3>
              {article.title}
            </h3>
          </Col>
          <Col span={24} className="featured-article-desc">
            {article.description.substr(1, 120)}
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
                <span>Jul 17 . 8 min read </span>
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
      <Col span={6} className="featured-artical-img-cont">
        <img
          src={article.image ? article.image : defaultImg}
          alt="Article Image"
          className="featured-image-article"
        />
      </Col>
    </Row>
  );
};

export default SingleFeaturedArticle;
