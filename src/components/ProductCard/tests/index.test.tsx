import * as React from 'react';

import { render } from '@testing-library/react';

import { ProductCard } from '..';

describe('<ProductCard />', () => {
  it('Should render correctly', () => {
    const { container } = render(<ProductCard cardDetails={[]} />);

    expect(container);
  });
});
