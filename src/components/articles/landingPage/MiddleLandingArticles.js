import React from 'react';

import { Col, Row } from 'antd';
import SingleMidLandingArticle from './SingleMiddleLandingArticle';

const MiddleLandingArticle = (props) => {
    const { } = props;

    return (
        <Col span={9} className="landing-article-container">
            <Row>
                <SingleMidLandingArticle />
                <SingleMidLandingArticle />
                <SingleMidLandingArticle />
            </Row>
        </Col>
    );
}

export default MiddleLandingArticle;