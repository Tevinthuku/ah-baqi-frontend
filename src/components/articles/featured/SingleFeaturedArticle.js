import React from 'react';

import { Row, Col, Icon } from 'antd';

const SingleFeaturedArticle = (props) => {
  const { article, clicked } = props;
  const defaultImg = 'https://res.cloudinary.com/zonecc/image/upload/v1563479322/dummy%20ah/image-not-av_otvgko.png';
  const date = new Date(article.createdAt);

  return (
    <Row
      className="featured-article-container article-hover"
      onClick={() => clicked(article.slug)}
      data-test="single-featured-article"
    >
      <Col span={15} offset={3}>
        <Row>
          <Col span={24} className="featured-article-title">
            <h3>
              {article.title}
            </h3>
          </Col>
          <Col span={24} className="featured-article-desc">
            {article.description.substr(0, 100)}
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
                  {date.toLocaleString('default', { month: 'long' })}
                  {' '}
                  {date.getDay()}
                  {' '}
                  .
                  {' '}
                  {article.reading_time}
                  {' '}
                  read
                  {' '}
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
      <Col span={6} className="featured-artical-img-cont">
        <img
          src={article.image ? article.image : defaultImg}
          alt="Article Featured"
          className="featured-image-article"
        />
      </Col>
    </Row>
  );
};

export default SingleFeaturedArticle;
