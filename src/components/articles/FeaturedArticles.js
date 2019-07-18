import React from 'react';
import { Row } from 'antd';

import SingleFeaturedArticle from './featured/SingleFeaturedArticle';

import './Featuredarticles.scss';

const FeaturedArticle = (props) => {
    const { } = props;
    return (
        <div>
            <Row>
                <h3 className="featured-title">
                    <span>Featured Articles</span>
                </h3>
                <div className="shadow"></div>
                <div className="featured-wrapper">
                    <SingleFeaturedArticle />
                    <SingleFeaturedArticle />
                    <SingleFeaturedArticle />
                    <SingleFeaturedArticle />
                    <SingleFeaturedArticle />
                    <SingleFeaturedArticle />
                    <SingleFeaturedArticle />
                    <SingleFeaturedArticle />
                    <SingleFeaturedArticle />
                    <SingleFeaturedArticle />
                    <SingleFeaturedArticle />
                    <SingleFeaturedArticle />
                </div>
            </Row>
        </div>
    );
}

export default FeaturedArticle;