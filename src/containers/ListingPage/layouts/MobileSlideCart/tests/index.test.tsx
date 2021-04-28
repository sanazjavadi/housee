import * as React from 'react';

import { render } from '@testing-library/react';

import { MobileSlideCart } from '..';

describe('<MobileSlideCart />', () => {
  it('Should render correctly', () => {
    const { container } = render(<MobileSlideCart />);

    expect(container);
  });
});
