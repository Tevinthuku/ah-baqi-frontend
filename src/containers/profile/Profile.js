import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserProfile from '../../components/profile/UserProfile';
import './profile.scss';
import { deleteArticle, getAnArticle } from '../../actions/articleActions';
import { getUserProfile, getUserArticles } from '../../actions/profileActions';

export class UnconnectedProfile extends Component {
  componentDidMount() {
    const username = localStorage.getItem('username');
    const userId = localStorage.getItem('user_id');
    const { getUserProfile, getUserArticles } = this.props; // eslint-disable-line
    getUserProfile(username);
    getUserArticles(userId);
  }

  render() {
    const { profile, userArticles, deleteArticle, history } = this.props;  // eslint-disable-line
    return (
      <div className="profile-container">
        <div className="profile-container-wrapper">
          <UserProfile
            myProfile={profile}
            userArticles={userArticles}
            deleteArticle={deleteArticle}
            getAnArticle={getAnArticle}
            history={history}
            onEditClick={this.handleEditClick}
          />
        </div>
      </div>

    );
  }
}
const mapStateToProps = ({ userProfile }) => ({
  profile: userProfile.profiles,
  userArticles: userProfile.userArticles,
});

export default connect(mapStateToProps, {
  getUserProfile, getUserArticles, deleteArticle, getAnArticle,
})(UnconnectedProfile);
