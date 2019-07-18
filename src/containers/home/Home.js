import React, { Component } from 'react';
import { instance } from '../../utils/axios';
import Comments from '../comments/Comments';

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

  renderArt = () => {
    const art = this.state.articles;
    return (
      art
        ? (
          <div>
I
            <h1>{art.title}</h1>
            <p>{art.body}</p>
            <Comments
              comments={art.comments}
              slug={art.slug}
            />
          </div>
        ) : null
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

export default Home;
