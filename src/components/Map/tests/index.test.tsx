import * as React from 'react';

import { render } from '@testing-library/react';

import Map from '..';

describe('<Map />', () => {
  it('Should render correctly', () => {
    const { container } = render(<Map />);

    expect(container);
  });
});
