import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleList from './ArticleList';

describe('ArticleList', () => {
  it('displays a list of articles', async () => {
    const fakeArticles = [
      {
        author: 'author 1',
        title: 'title 1',
        description: 'article description 1',
        url: 'http://www.google.com',
        image: 'https://via.placeholder.com/300x200.png?text=Test+Image',
        published: 'timestamp'
      },
      {
        author: 'author 2',
        title: 'title 1',
        description: 'article description 1',
        url: 'http://www.google.com',
        image: 'https://via.placeholder.com/300x200.png?text=Test+Image',
        published: 'timestamp'
      }];

    render(<ArticleList articles={fakeArticles} />);

    const ul = await screen.findByRole('list', { name: 'articles' });
    expect(ul).toMatchSnapshot;
  });
});
