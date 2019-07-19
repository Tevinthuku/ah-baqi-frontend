import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Skeleton } from 'antd';
import articleActions from '../../actions/articleActions';
import SingleArticle from '../../components/articles/SingleArticle';

class SingleArticleContainer extends Component {
    componentWillMount() {
        if (!this.props.articleData.id) {
            const slug = this.props.history.location.pathname.split('/')[2];
            this.props.articleActions('get-one', slug);
        }
    }
    toggleLikeHandler = (slug) => {
        console.log(this.props.history)
        this.props.articleActions('like', slug, this.props.history, '')
    }
    render() {
        const { articleData, articleActions, history } = this.props;

        let singleArticleData = <Skeleton active />;
        if (articleData.id) {
            singleArticleData = <SingleArticle
                article={articleData}
                articleActions={articleActions}
                history={history}
                beenLiked={articleData}
                liking={this.toggleLikeHandler} />;
        }

        return (
            <div>
                {singleArticleData}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    articleData: state.article.articleData,
    beenLiked: state.article.beenLiked
})

export default connect(mapStateToProps, { articleActions })(SingleArticleContainer);
