import React from 'react';
import {
  List, Avatar, Icon, Popconfirm,
} from 'antd';

import EditProfile from '../../containers/profile/EditProfile';
import './profile.scss';

const UserProfile = (props) => {
  const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );

  const profileRenderLogic = ({ myProfile, userArticles, articleActions, history }) => { // eslint-disable-line
    const handleClick = (slug) => {
      const urlTo = `/articles/${slug}`;
      articleActions('get-one', slug);
      history.push(urlTo);
    };
    return (
      <div>
        <div className="profile-header-component">
          <div className="profile-name-holder">
            <div className="profile-header-info">
              <div className="profile-header-info-header">
                <div className="profile-header-info-username">
                  <strong>
                    {myProfile.profile.first_name ? myProfile.profile.first_name : 'John'} {/*eslint-disable-line */}
                    {' '}
                    {myProfile.profile.last_name ? myProfile.profile.last_name : 'Doe'} {/*eslint-disable-line */}
                  </strong>
                  <br />
                  <span>{myProfile.profile.username}</span>
                </div>
                <div className="profile-header-info-edit"><EditProfile {...props} /></div>
              </div>
              <div className="profile-header-info-bio">{myProfile.profile.bio}</div>
              <br />
              <div className="profile-header-info-followers">
                {' '}
7 followers
                {' '}
                {' '}
                {' '}
1 Following
              </div>
            </div>
          </div>
          <div className="profile-pic-holder">
            <img
              src={`${myProfile.profile.image}`}
              onError={(e) => {
                e.target.src = 'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/user-512.png';
              }}
              alt="profile Pic"
            />
          </div>
        </div>
        <div className="profile-content-component">
          <h2>Your posts</h2>
          <br />
          <List
            itemLayout="vertical"
            size="large"
            dataSource={userArticles}
            renderItem={item => (
              <List.Item
                key={item.title}
                actions={[
                  <IconText type="heart" text={item.likes} />,
                  <IconText type="message" text={item.comments.length} />,
                  <span onClick={() => articleActions('edit', item.slug)}>
                    <Icon type="edit" />
                    {' '}
                     edit
                  </span>,
                  <Popconfirm
                    title="Are you sure you want to delete this article?"
                    onConfirm={() => articleActions('delete', item.slug, history)}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Icon type="delete" />
                    {' '}
                     delete
                  </Popconfirm>,
                ]}
                extra={(
                  <img
                    width={270}
                    height={170}
                    alt="article"
                    src={item.image}
                    // src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                  />
)}
              >
                <List.Item.Meta
                  avatar={<Avatar src={myProfile.profile.image} />}
                  title={<a onClick={() => handleClick(item.slug)}>{item.title}</a>}
                  description={item.description}
                />
                {item.content}
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  };
  const renderProfile = () => (
    props.myProfile ? profileRenderLogic(props) : null
  );
  return (
    <div data-test="user-profile-overview">
      {renderProfile()}
    </div>
  );
};

export default UserProfile;
