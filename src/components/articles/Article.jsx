import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ author, title, description, url, image }) => (

  <div>
    <a href={url} rel="noreferrer" target="_blank">
      <h2>{title}</h2>
    </a>
    <figure>
      <img src={image} alt={title} height="200px"/>
    </figure>
    <h3>{author}</h3>
    <p>{description}</p>
  </div>

);

Article.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Article;
