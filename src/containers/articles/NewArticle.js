import React, { Component } from 'react';
import NewArticleForm from '../../components/articles/NewArticleForm';
import { connect } from 'react-redux';
import articleActions from '../../actions/articleActions';

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
        console.log(data)
        this.props.articleActions('create', '', this.props.history, data)
    }

    render() {
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
