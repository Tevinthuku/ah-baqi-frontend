import React from 'react';
import { Row, Col, Statistic } from 'antd';
import { IconText } from './ArticleFooter';
import AuthorHeadData from './singlearticle/AuthorArticleData';
import './landingPage/Singlearticle.scss';

const Article = ({ editClick, article, history, deleteAction, liking, beenLiked, likes }) => (
  <div data-test="single-article">
    <Row>
      <Col span={18} offset={3}>
        <Row>
          <Col span={24} className="general-article-cols">
            <AuthorHeadData
              articleData={article}
              onDelete={deleteAction}
              history={history}
              editClick={editClick}
            />
          </Col>
          <Col span={24} className="general-article-cols">
            <p className="article-title">
              {article.title}
            </p>
          </Col>
          <Col span={24} className="general-article-cols">
            <div className="article-description">
              {article.description}
            </div>
          </Col>
          {article.image ? (
            <Col span={24} className="general-article-cols article-image">
              <img src={article.image} alt={article.slug} />
            </Col>
          ) : null}

          <Col span={24} className="general-article-cols">
            <div className="article-body" dangerouslySetInnerHTML={{ __html: article.body }} />
          </Col>
          <Col span={24} className="tag-cont">
            {article.tagList && article.tagList.map(tag => (
              <span key={tag} className="tag-disp">
                {tag}
              </span>
            ))}
          </Col>
          <Col span={24} className="general-article-cols">
            <Row className="article-footer">
              <Col className="article-liking" span={4}>
                <Statistic
                  className="statistic-size"
                  value={likes}
                  prefix={<IconText
                    type="heart"
                    onClick={() => liking(article.slug)}
                    slug={article.slug}
                    beenLiked={beenLiked}
                  />} /></Col>
              <Col className="article-liking" push={16} span={4}>
                Rating
              </Col>
            </Row>
          </Col>
          <Col span={24} className="general-article-cols">
            <Row>
              <Col className="parent-comment">
                <Col>Parent Comment</Col>
                <Row>
                  <Col span={20} push={4}>Child Comment</Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
);

export default Article;
