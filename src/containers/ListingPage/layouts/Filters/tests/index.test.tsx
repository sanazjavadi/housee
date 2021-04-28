import * as React from 'react';

import { render } from '@testing-library/react';

import { Filters } from '..';

describe('<Filters />', () => {
  it('Should render correctly', () => {
    const { container } = render(<Filters />);

    expect(container);
  });
});
