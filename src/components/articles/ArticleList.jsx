import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ArticleList = ({ articles }) => (

  <ul aria-label="articles">

    {articles.map(({ author, title, description, url, image }) => (
      <li key={`${author}-${title}`}>
        <Article 
          author={author}
          title={title}
          description={description}
          url={url}
          image={image}
        />
      </li>
    ))}

  </ul>

);

ArticleList.propTypes = {
  articles : PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })).isRequired
};

export default ArticleList;
