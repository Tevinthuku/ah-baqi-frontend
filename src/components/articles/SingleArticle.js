import React, { Component } from 'react';
import { Skeleton } from 'antd';
import { instance } from '../../utils/axios';

class SingleArticle extends Component {
  state = {
    articles: null,
  }

  async componentDidMount() {
    const response = await instance.get('/articles/dummy-6_nousername/');
    console.log(response.data);
    this.setState({
      articles: response.data,
    });
  }

  renderArt = () => {
    const art = this.state.articles;
    console.log(art);
    return (
      art ? (
        <div key={art.id}>
          <h1>{art.title}</h1>
          <p>{art.body}</p>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      ) : (
        <Skeleton active />
      )
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

export default SingleArticle;
