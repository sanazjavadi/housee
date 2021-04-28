import React from 'react';

import { render } from '@testing-library/react';

import { MainFooter } from '..';

describe('<MainFooter />', () => {
  it('Should render correctly', () => {
    const { container } = render(<MainFooter />);

    expect(container);
  });
});
