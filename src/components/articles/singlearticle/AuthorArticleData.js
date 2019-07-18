import React from 'react';
import {
  Row, Col, Button, Popconfirm,
} from 'antd';

const AuthorHeadData = ({ articleActions, articleData, history }) => (
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
          <Col className="created-and-read">
            {' '}
            Jul 15 ·
            {' '}
            {articleData.reading_time}
            {' '}
            read
            {' '}

          </Col>
        </Row>
      </Col>
      <Col span={6} offset={5}>
        <Button onClick={() => history.push('/articles/update/')}>Edit</Button>
        {' '}
        <Popconfirm
          title="Are you sure you want to delete this article?"
          onConfirm={() => articleActions('delete', articleData.slug, history)}
          okText="Yes"
          cancelText="No"
        >
          <Button type="danger" ghost>Delete</Button>
        </Popconfirm>
      </Col>
    </Row>
  </div>
);

export default AuthorHeadData;
