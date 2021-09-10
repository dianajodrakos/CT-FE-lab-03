import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ArticlesContainer from './ArticlesContainer';

describe('ArticlesContainer', () => {
  it('should display a list of news articles', async () => {
    render(<ArticlesContainer />);

    screen.getByText('Reading Makes You Smarter');

    const ul = await screen
      .findAllByRole('list', { name: 'articles' });
    expect(ul).notToBoEmptyDOMElement();

    const input = await screen
      .findByLabelText('Search Articles:');
    userEvent.type(input, 'Tesla');

    const submitButton = await screen
      .findByRole('button', { name: 'query-articles'
      });
    userEvent.click(submitButton);

    return waitFor(() => {
      const articles = screen
        .getAllByText('Tesla', { exact: false });
      expect(articles).toHaveLength(25);
    });
  });
});
