import React from 'react';
import { List, Avatar, Icon } from 'antd';
import EditProfile from '../../containers/profile/EditProfile';
import './profile.scss';

const UserProfile = (props) => {
  const propItems = props;
  const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );

  const profileRenderLogic = ({ profile }) => { // eslint-disable-line
    return (
      <div>
        <div className="profile-header-component">
          <div className="profile-name-holder">
            <div className="profile-header-info">
              <div className="profile-header-info-header">
                <div className="profile-header-info-username">
                  <strong>
                    {profile.first_name ? profile.first_name : 'John'} {/*eslint-disable-line */}
&nbsp;
                    {profile.last_name ? profile.last_name : 'Doe'} {/*eslint-disable-line */}
                  </strong>
                  <br />
                  <span>{profile.username}</span>
                </div>
                <div className="profile-header-info-edit"><EditProfile {...propItems} /></div>
              </div>
              <div className="profile-header-info-bio">{profile.bio}</div>
              <br />
              <div className="profile-header-info-followers"> 7 followers &nbsp;&nbsp;&nbsp;  1 Following</div>
            </div>
          </div>
          <div className="profile-pic-holder">
            <img
              src={`${profile.image}`}
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
            dataSource={propItems.userArticles}
            renderItem={item => (
              <List.Item
                key={item.title}
                actions={[
                  <IconText type="star-o" text={item.rating} />,
                  <IconText type="like-o" text={item.likes} />,
                  <IconText type="message" text={item.comments.length} />,
                  <IconText type="edit" text="edit" />,
                  <IconText type="delete" text="delete" />,
                ]}
                extra={(
                  <img
                    width={270}
                    alt="article"
                    // src={item.image}
                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                  />
)}
              >
                <List.Item.Meta
                  avatar={<Avatar src={profile.image} />}
                  title={<a href={item.href}>{item.title}</a>}
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
    props.myProfile ? profileRenderLogic(props.myProfile) : null
  );
  return (
    <div data-test="user-profile-overview">
      {renderProfile()}
    </div>
  );
};

export default UserProfile;
