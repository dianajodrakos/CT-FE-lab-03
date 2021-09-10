import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ query, onSubmit, onChange }) => (
  <form onSubmit={onSubmit}>
    <label htmlFor="search-news">Search Articles:
      <input type="text" id="search-news" value={query} onChange={onChange} />
    </label>
    <button aria-label="query-articles">Search</button>
  </form>
);

Controls.propTypes = {
  query: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Controls;
