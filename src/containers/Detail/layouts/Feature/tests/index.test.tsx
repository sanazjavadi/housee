import * as React from 'react';

import { render } from '@testing-library/react';

import { Feature } from '..';

describe('<Feature />', () => {
  it('Should render correctly', () => {
    const { container } = render(<Feature />);

    expect(container);
  });
});
