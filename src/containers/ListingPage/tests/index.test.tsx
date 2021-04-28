import React from 'react';

import { render } from '@testing-library/react';

import ListingPage from '..';

describe('<ListingPage />', () => {
  it('Should render correctly', () => {
    const { container } = render(<ListingPage />);
    expect(container);
  });
});
