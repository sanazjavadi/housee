import * as React from "react";

import { render } from '@testing-library/react';

import  { Navbar }  from '..';

describe('<Navbar />', () => {
  it('Should render correctly', () => {
    const { container } = render(<Navbar  />);

    expect(container);
  });
});
