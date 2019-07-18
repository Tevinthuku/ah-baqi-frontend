import React from 'react';

import { Row } from 'antd';
import './Landingarticles.scss';
import LeftLandindArticle from './landingPage/LeftLandindArticle';
import MiddleLandingArticles from './landingPage/MiddleLandingArticles';

const LandingArticles = (props) => {
    console.log(props);
    const { leftArticle, middleArticles, handleClick } = props;

    return (
        <Row>
            <LeftLandindArticle article={leftArticle}
                clicked={handleClick}
            />
            <MiddleLandingArticles articles={middleArticles}
                clicked={handleClick}
            />
        </Row>
    );
}

export default LandingArticles;

