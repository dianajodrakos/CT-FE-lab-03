export const fetchArticles = async (query) => {
  // eslint-disable-next-line max-len
  const res = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.API_KEY}`);

  const json = await res.json();
  return json.articles.map((article) => ({
    author: article.author,
    title: article.title,
    description: article.description,
    url: article.url,
    image: article.urlToImage
  }));
};
