import React from 'react';

import { render } from '@testing-library/react';

import { MobileMenu } from '..';

describe('<MainHeader />', () => {
  it('Should render correctly', () => {
    const { container } = render(<MobileMenu  />);

    expect(container);
  });
});
