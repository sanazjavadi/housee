import * as React from 'react';

import { render } from '@testing-library/react';

import { NearbyHomesList } from '..';

describe('<NearbyHomesList />', () => {
  it('Should render correctly', () => {
    const { container } = render(<NearbyHomesList />);

    expect(container);
  });
});
