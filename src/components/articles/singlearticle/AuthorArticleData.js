import React from 'react';
import { Row, Col, Button } from 'antd';

const AuthorHeadData = (props) => {
    return (
        <div>
            <Row>
                <Col span={3}>
                    <img className="author-image" src="https://res.cloudinary.com/zonecc/image/upload/v1563334380/dummy%20ah/hack-creativity_gzyqqp.jpg" />
                </Col>
                <Col span={8}>
                    <Row className="name-and-reads">
                        <Col className="name-and-follow">
                            <span className="author-name">John Doe</span>
                            <button className="follow-button">Follow</button>
                        </Col>
                        <Col className="created-and-read"> Jul 15 · 9 min read </Col>
                    </Row>
                </Col>
                <Col span={6} offset={5}>
                    <Button>Update</Button> <Button>Delete</Button>
                </Col>
            </Row>
        </div>
    );
};

export default AuthorHeadData;