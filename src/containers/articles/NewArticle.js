import React, { Component } from 'react';
import NewArticleForm from '../../components/articles/NewArticleForm';
import { connect } from 'react-redux';
import articleActions from '../../actions/articleActions';
import { Redirect } from 'react-router-dom';

class CreateNewArticle extends Component {

    state = {
        title: '',
        description: '',
        body: '',
        tagList: [],
        image: ''
    }

    handleChange = (event, element = 'title') => {
        switch (element) {
            case 'editor':
                this.setState({
                    body: event.editor.getData()
                })
                break;
            case 'tags':
                this.setState({
                    tagList: event
                })
                break;
            case 'image':
                this.setState({
                    image: event
                })
                break;

            case 'description':
                this.setState({
                    description: event.target.value
                })
                break;
            default:
                this.setState({
                    title: event.target.value
                })
                break;
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { title, description, body, tagList, image } = { ...this.state }
        let data = {};
        if (image) {
            data = { title, description, body, tagList, image }
        } else {
            data = { title, description, body, tagList }
        }
        this.props.articleActions('create', data = data)
    }

    render() {
        console.log(isLoggedin)
        const { isLoggedin } = this.props;
        return (
            <div>
                {localStorage.isLoggedIn ?
                    <NewArticleForm
                        image={this.state.image}
                        handleChange={this.handleChange}
                        articleActions handleSubmit={this.handleSubmit}
                    />
                    : window.location.href = "/"}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoggedin: state.login.isLoggedin
})

export default connect(mapStateToProps, { articleActions })(CreateNewArticle);