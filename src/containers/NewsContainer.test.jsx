import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsContainer from './NewsContainer';

describe('NewsContainer', () => {
  it('should display a list of news articles', async () => {
    render(<NewsContainer />);

    screen.getByText('Loading...');

    const ul = await screen.findAllByRole('list', { name: 'articles' });
    expect(ul).notToBoEmptyDOMElement();
  });
});
