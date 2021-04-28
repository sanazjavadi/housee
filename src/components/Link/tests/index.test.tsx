import React from 'react';

import { render } from '@testing-library/react';

import { Link } from '..';

describe('<Link />', () => {
  it('Should render correctly', () => {
    const { container } = render(<Link href="/" />);

    expect(container);
  });
});
