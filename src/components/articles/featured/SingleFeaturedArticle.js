import React from 'react';

import { Row, Col, Icon } from 'antd';

const SingleFeaturedArticle = (props) => {
    const { } = props;

    return (
        <Row className="featured-article-container">
            <Col span={15} offset={3}>
                <Row>
                    <Col span={24} className="featured-article-title">
                        <h3>Pence, Brown Men, and the Racist Protection of White Women</h3>
                    </Col>
                    <Col span={24} className="featured-article-desc">
                        A newfound appreciation for toking up on the job
                    </Col>
                    <Row>
                        <Col span={24}
                            className="mid-article-author"
                        >Mona Eltahawy in ZORA</Col>
                        <Row className="mid-article-read-date">
                            <Col span={24}>
                                <span>Jul 17 . 8 min read </span>
                                <span className="rating-icons-pos">
                                    <Icon type="star" theme="filled" style={{ color: 'black', fontSize: "12px" }} />
                                    <Icon type="star" theme="filled" style={{ color: 'black', fontSize: "12px" }} />
                                    <Icon type="star" theme="filled" style={{ color: 'black', fontSize: "12px" }} /></span>
                            </Col>
                        </Row>
                    </Row>
                </Row>
            </Col>
            <Col span={6} className="featured-artical-img-cont">
                <img src="https://res.cloudinary.com/zonecc/image/upload/v1563334380/dummy%20ah/hack-creativity_gzyqqp.jpg" alt="Article Image" className="featured-image-article"
                />
            </Col>
        </Row>
    );
}

export default SingleFeaturedArticle;