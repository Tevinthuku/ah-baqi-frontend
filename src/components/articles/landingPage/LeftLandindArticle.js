import React from 'react';
import { Col, Row, Icon } from 'antd';

const LeftLandingArticle = ({ article, clicked }) => {
  const newArticleDefImage = 'https://res.cloudinary.com/zonecc/image/upload/v1563436267/dummy%20ah/digitization-2076994_1280_q126vd.png';
  const date = new Date(article.createdAt);
  return (
    <Col
      sm={20}
      md={12}
      className="landing-article-container article-hover"
      onClick={() => clicked(article.slug)}
      data-test="left-landing-article"
    >
      <Col span={24} className="landing-article-image-container">
        <img
          src={article.image ? article.image : newArticleDefImage}
          className="landing-article-image"
          alt="article-default"
        />
      </Col>
      <Col span={24}>
        <Row>
          <Col span={24}>
            <h1 className="left-art-title">{article.title}</h1>
          </Col>
          <Col span={24} className="left-art-desc">
            {article.description.substr(0, 100)}
          </Col>
          <Col span={24}>
            <Row>
              <Col>David H. Freedman in Elemental</Col>
              <Row>
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
                  </span>
                  <span>
                    <Icon type="star" theme="filled" style={{ color: 'black', fontSize: '12px' }} />
                    <Icon type="star" theme="filled" style={{ color: 'black', fontSize: '12px' }} />
                    <Icon type="star" theme="filled" style={{ color: 'black', fontSize: '12px' }} />
                  </span>
                </Col>
              </Row>
            </Row>
          </Col>
        </Row>
      </Col>
    </Col>
  );
};

export default LeftLandingArticle;
