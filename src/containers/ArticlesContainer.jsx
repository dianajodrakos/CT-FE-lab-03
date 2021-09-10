import React, { Component } from 'react';
import { fetchArticles } from '../services/newsAPI';
import ArticleList from '../components/articles/ArticleList';
import Controls from '../components/articles/Controls';
import Header from '../components/header/Header';

export default class NewsContainer extends Component {
  state = {
    loading: true,
    articles: [],
    query: ''
  }

  async componentDidMount() {
    const articles = await fetchArticles();
    this.setState({
      articles,
      loading: false,
    });
  }

  handleInputChange = (event) => {
    this.setState({ query: event.target.value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true });

    const articles = await fetchArticles(this.state.query);
    this.setState({ articles, loading: false });
  }

  render() {
    console.log(this.state);
    const { articles, loading, query } = this.state;
    return (
      <>
        <Header />

        { loading 
          ? <p>Loading...</p>
          : <main>
            <Controls 
              query={query} 
              onChange={this.handleInputChange} 
              onSubmit={this.handleSubmit}
            />
            <ArticleList articles={articles} /> 
          </main>
        }
            
      </>
    );
  }
}
