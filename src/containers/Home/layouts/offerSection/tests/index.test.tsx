import React from 'react';

import { render } from '@testing-library/react';

import  MainHeader  from '..';

describe('<MainHeader />', () => {
  it('Should render correctly', () => {
    const { container } = render(<MainHeader />);

    expect(container);
  });
});
