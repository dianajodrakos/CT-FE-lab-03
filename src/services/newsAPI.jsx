export const fetchArticles = async (query) => {
  // eslint-disable-next-line max-len
  const res = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.REACT_APP_API_KEY}`);

  const json = await res.json();
  return json.articles.map((article) => ({
    author: article.author ? article.author : '',
    title: article.title ? article.title : '',
    description: article.description ? article.description : '',
    url: article.url ? article.url : '',
    image: article.urlToImage 
      ? article.urlToImage 
      : 'https://via.placeholder.com/300x200.png?text=No+Image',
    published: article.publishedAt ? article.publishedAt : ''
  }));
};
