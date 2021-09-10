import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ author, title, description, url, image }) => (
  <a href={url} rel="noreferrer" target="_blank">
    <figure>
      <img src={image} alt={title} />
    </figure>
    <h2>{title}</h2>
    <h3>{author}</h3>
    <p>{description}</p>
  </a>
);

Article.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Article;
