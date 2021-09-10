
import dotenv from 'dotenv';
dotenv.config();
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ArticlesContainer from './ArticlesContainer.jsx';

describe('ArticlesContainer', () => {
  it('should display a list of news articles', async () => {
    render(<ArticlesContainer />);

    screen.getByText('Reading Makes You Smarter');

    const ul = await screen.findByRole(
      'list', 
      { name: 'articles' }, 
      { timeout: 2000 }
    );
    expect(ul).not.toBeEmptyDOMElement();

    const input = await screen.findByLabelText('Search Articles:');
    userEvent.type(input, 'Tesla');

    const submitButton = await screen.findByRole(
      'button', 
      { name: 'query-articles' }
    );
    userEvent.click(submitButton);

    return waitFor(() => {
      const articles = screen.findAllByText('Tesla', { exact: false });
      expect(articles).toMatchSnapshot();
    }, { timeout: 2000 });
  });
});
