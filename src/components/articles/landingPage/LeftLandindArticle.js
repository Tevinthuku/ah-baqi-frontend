import React from 'react';

import { Col, Row, Icon } from 'antd';

const LeftLandingArticle = (props) => {
    const { article, clicked } = props;
    const newArticleDefImage = "http://res.cloudinary.com/kwangonya/image/upload/v1563432618/ah-django/new-content-left_wjsd16.jpg";

    return (
        <Col span={12}
            className="landing-article-container"
            onClick={() => clicked(article.slug)}
        >
            {article.image ? <Col span={24} className="landing-article-image-container">
                <img src={article.image} className="landing-article-image"
                />
            </Col> : <img src={newArticleDefImage} className="landing-article-image"
                />}
            <Col span={24}>
                <Row>
                    <Col span={24}>
                        <h1>{article.title}</h1>
                    </Col>
                    <Col span={24}>
                        {article.description}
                    </Col>
                    <Col span={24}>
                        <Row>
                            <Col>David H. Freedman in Elemental</Col>
                            <Row>
                                <Col span={24}>
                                    <span>Jul 17 . 8 min read </span>
                                    <span>
                                        <Icon type="star" theme="filled" style={{ color: 'black', fontSize: "12px" }} />
                                        <Icon type="star" theme="filled" style={{ color: 'black', fontSize: "12px" }} />
                                        <Icon type="star" theme="filled" style={{ color: 'black', fontSize: "12px" }} /></span>
                                </Col>
                            </Row>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Col>
    );
}

export default LeftLandingArticle;