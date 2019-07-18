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
        this.props.articleActions('create', '', this.props.history, data);
      } else {
        this.props.articleActions('edit', slug, this.props.history, data);
      }
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

    render() {
      return (
        <div>
          {localStorage.isLoggedIn
            ? (
              <NewArticleForm
                image={this.state.image}
                handleChange={this.handleChange}
                thisProp={this}
                handleSubmit={this.handleSubmit}
                create={this.props.create}
                title={this.state.title}
                article={this.props.articleData}
                description={this.state.description}
                body={this.state.body}
                tagList={this.state.tagList}
                imageUrlArt={this.state.image}
              />
            )
            : window.location.href = '/'}
        </div>
      );
    }
}

const mapStateToProps = state => ({
  articleData: state.article.articleData,
});

export default connect(mapStateToProps, { articleActions })(CreateNewArticle);
