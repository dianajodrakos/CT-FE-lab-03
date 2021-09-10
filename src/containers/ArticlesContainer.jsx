import React, { Component } from 'react'
import ArticleList from '../components/articles/ArticleList';

export default class NewsContainer extends Component {
  state = {
    loading: true,
    articles: []
  }

  render() {
    const { loading, articles } = this.state;
    return (
      loading 
        ? <p>Loading...</p>
        : <ArticleList articles={articles} />
    );
  }
}
