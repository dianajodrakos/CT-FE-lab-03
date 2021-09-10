import React from 'react';
import { render, screen } from '@testing-library/react';
import AriclesContainer from './ArticlesContainer';

describe('AriclesContainer', () => {
  it('should display a list of news articles', async () => {
    render(<AriclesContainer />);

    screen.getByText('Loading...');

    const ul = await screen.findAllByRole('list', { name: 'articles' });
    expect(ul).notToBoEmptyDOMElement();
  });
});
