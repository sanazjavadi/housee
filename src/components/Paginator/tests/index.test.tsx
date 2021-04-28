import * as React from 'react';

import { render } from '@testing-library/react';

import { Paginator } from '..';

describe('<Paginator />', () => {
  it('Should render correctly', () => {
    const { container } = render(<Paginator />);

    expect(container);
  });
});
