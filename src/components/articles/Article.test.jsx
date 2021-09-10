import React from 'react';
import { render, screen } from '@testing-library/react';
import Article from './Article';

describe('Article', () => {
  it('displays an article', () => {
    render(
      <Article 
        author="author"
        title="title"
        description="article description"
        url="http://www.google.com"
        image="https://via.placeholder.com/300x200.png?text=Test+Image"
        published="timestamp"
      />
    );

    const article = screen.getByText('article description');
    expect(article).toMatchSnapshot();
  });
});
