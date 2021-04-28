import * as React from 'react';

import { render } from '@testing-library/react';

import { DetailList } from '..';

describe('<DetailList />', () => {
  it('Should render correctly', () => {
    const { container } = render(<DetailList />);

    expect(container);
  });
});
