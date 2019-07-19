import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewArticleForm from '../../components/articles/NewArticleForm';
import articleActions from '../../actions/articleActions';

class CreateNewArticle extends Component {
    state = {
      title: '',
      description: '',
      body: '',
      tagList: [],
      image: '',
    }

    componentDidMount() {
      const { create, articleData } = this.props;
      if (!create) {
        this.setState({
          title: articleData.title,
          description: articleData.description,
          body: articleData.body,
          tagList: articleData.tagList,
          image: articleData.image,
        });
      }
    }

    handleChange = (event, element = 'title') => {
      switch (element) {
        case 'editor':
          this.setState({
            body: event.editor.getData(),
          });
          break;
        case 'tags':
          this.setState({
            tagList: event,
          });
          break;
        case 'image':
          this.setState({
            image: event,
          });
          break;

        case 'description':
          this.setState({
            description: event.target.value,
          });
          break;
        default:
          this.setState({
            title: event.target.value,
          });
          break;
      }
    }

    handleSubmit = (event, create, slug = '') => {
      event.preventDefault();
      const { articleActions, history } = this.props; //  eslint-disable-line
      const {
        title, description, body, tagList, image,
      } = { ...this.state };
      let data = {};
      if (image) {
        data = {
          title, description, body, tagList, image,
        };
      } else {
        data = {
          title, description, body, tagList,
        };
      }

      if (create) {
        articleActions('create', '', history, data);
      } else {
        articleActions('edit', slug, history, data);
      }
    }

    render() {
      let displayForm = '';
      const {
        image, description, body, tagList, title,
      } = this.state;
      const { create, articleData } = this.props;
      if (localStorage.isLoggedIn) {
        displayForm = (
          <NewArticleForm
            image={image}
            handleChange={this.handleChange}
            thisProp={this}
            handleSubmit={this.handleSubmit}
            create={create}
            title={title}
            article={articleData}
            description={description}
            body={body}
            tagList={tagList}
          />
        );
      } else {
        window.location.href = '/';
      }


      return (
        <div>
          {displayForm}
        </div>
      );
    }
}

const mapStateToProps = state => ({
  articleData: state.article.articleData,
});

export default connect(mapStateToProps, { articleActions })(CreateNewArticle);
