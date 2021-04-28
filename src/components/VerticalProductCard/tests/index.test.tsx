import * as React from 'react';

import { render } from '@testing-library/react';

import { VerticalProductCard } from '..';

describe('<VerticalProductCard />', () => {
  it('Should render correctly', () => {
    const { container } = render(<VerticalProductCard />);

    expect(container);
  });
});
