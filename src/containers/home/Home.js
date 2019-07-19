import React, { Component } from 'react';
import { Rate } from 'antd';
import { connect } from 'react-redux';
import { ratingActions } from '../../actions/rateArticles';
import { instance } from '../../utils/axios';


class Home extends Component {
  state = {
    articles: null,
  }

  componentWillMount() {
    instance.get('/articles/what-is-love-baby-dont-heard-me_Willies/')
      .then((response) => {
        this.setState({
          articles: response.data,
        });
      });
  }

  handleRating = (rating) => {
    const { ratingActions } = this.props;
    this.setState({ rating });
    const { articles } = this.state;
    ratingActions(articles.slug, rating);
    localStorage.setItem('rating', rating);
  }


  renderArt = () => {
    const art = this.state.articles;
    const token = localStorage.getItem('token');
    return (
      art
        ? (
          <div>
            {' '}
            <span style={{ textAlign: 'right' }}>
              <Rate value={art.rating} />
              Average (
              {art.rating}
              )
            </span>
            <h1>{art.title}</h1>
            <p>{art.body}</p>
            {token ? (
              <Rate onChange={this.handleRating} defaultValue={localStorage.getItem('rating')} />
            ) : (
              <Rate onChange={this.handleRating} value={0} />
            )}
          </div>
        ) : <div>Nothing</div>
    );
  }

  render() {
    return (
      <div>
        <hr />
        Welcome to the home page
        {this.renderArt()}

      </div>
    );
  }
}

export default connect(null, { ratingActions })(Home);
