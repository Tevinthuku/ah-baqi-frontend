import React from 'react';

import { Col, Row } from 'antd';
import SingleMidLandingArticle from './SingleMiddleLandingArticle';

const MiddleLandingArticle = (props) => {
    const { articles, clicked } = props;

    return (
        <Col span={9} className="landing-article-container">
            <Row>
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
}

export default MiddleLandingArticle;