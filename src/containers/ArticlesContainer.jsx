import React, { Component } from 'react';
import ArticleList from '../components/articles/ArticleList';
import { fetchArticles } from '../services/newsAPI';

export default class NewsContainer extends Component {
  state = {
    loading: true,
    articles: []
  }

  async componentDidMount() {
    const articles = await fetchArticles();
    this.setState({
      articles,
      loading: false
    });
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
