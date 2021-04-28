import * as React from 'react';

import { render } from '@testing-library/react';

import { MoreFilters } from '..';

describe('<MoreFilters />', () => {
  it('Should render correctly', () => {
    const { container } = render(<MoreFilters />);

    expect(container);
  });
});
