import React from 'react';
import { Row, Col } from 'antd';

import AuthorHeadData from './singlearticle/AuthorArticleData';
import './landingPage/Singlearticle.scss';

const SingleArticle = (props) => {
    console.log()
    const { article } = props;
    return (
        <div>
            <Row>
                <Col span={18} offset={3}>
                    <Row>
                        <Col span={24} className="general-article-cols">
                            <AuthorHeadData />
                        </Col>
                        <Col span={24} className="general-article-cols">
                            <p className="article-title">
                                {article.title}
                            </p>
                        </Col>
                        <Col span={24} className="general-article-cols">
                            <div className="article-description">
                                {article.escription}
                            </div>
                        </Col>
                        {article.image ?
                            <Col span={24} className="general-article-cols" className="article-image">
                                <img src={article.image} alt="Article Image" />
                            </Col>
                            : null
                        }

                        <Col span={24} className="general-article-cols">
                            <div className="article-body" dangerouslySetInnerHTML={{ __html: article.body }}>
                            </div>
                        </Col>
                        <Col span={24} className="general-article-cols">
                            <Row>
                                <Col className="article-liking" span={4}>Liking</Col>
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
}

export default SingleArticle;
